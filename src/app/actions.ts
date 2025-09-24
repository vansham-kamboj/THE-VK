'use server';

import { z } from 'zod';
import { notion } from '@/lib/notion';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { lucia } from '@/lib/auth';

const ContactSchema = z.object({
    name: z.string().min(2, { message: 'Please enter your name.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    message: z.string().min(10, { message: 'Please enter a message of at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: null,
        };
    }
    
    // In a real application, you would send an email here.
    console.log('New Contact Form Submission:');
    console.log(validatedFields.data);

    return { 
        errors: null,
        message: 'Thanks for reaching out! I\'ll get back to you soon.' 
    };
}

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export async function loginAction(prevState: any, formData: FormData) {
    const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid input.',
        };
    }

    const { email, password } = validatedFields.data;

    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_USERS_DATABASE_ID!,
            filter: {
                property: 'email',
                email: {
                    equals: email,
                },
            },
        });

        if (response.results.length === 0) {
            return { message: "No user found with this email." };
        }

        const user = response.results[0] as PageObjectResponse;
        const userPassword = (user.properties.password as any)?.rich_text[0]?.plain_text;
        
        if (userPassword !== password) {
             return { message: "Invalid password." };
        }
        
        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        
        return { message: "Logged in successfully!", success: true };

    } catch (error) {
        console.error('Notion API Error:', error);
        return { message: "Something went wrong during login." };
    }
}


const RegisterSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name.' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  contactNumber: z.string().optional(),
  linkedinUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});

export async function registerAction(prevState: any, formData: FormData) {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid input.',
        };
    }
    
    const { name, username, email, password, contactNumber, linkedinUrl } = validatedFields.data;

    try {
        // 1. Check if user already exists
        const existingUserResponse = await notion.databases.query({
            database_id: process.env.NOTION_USERS_DATABASE_ID!,
            filter: {
                or: [
                    {
                        property: 'email',
                        email: {
                            equals: email,
                        },
                    },
                    {
                        property: 'username',
                        rich_text: {
                            equals: username,
                        }
                    }
                ]
            },
        });

        if (existingUserResponse.results.length > 0) {
            const existingUser = existingUserResponse.results[0] as PageObjectResponse;
            const existingEmail = (existingUser.properties.email as any)?.email;
            const existingUsername = (existingUser.properties.username as any)?.rich_text[0]?.plain_text;
            if (existingEmail === email) {
                return { message: "A user with this email already exists." };
            }
            if (existingUsername === username) {
                return { message: "This username is already taken." };
            }
        }

        // 2. Create new user
        const newUser = await notion.pages.create({
            parent: { database_id: process.env.NOTION_USERS_DATABASE_ID! },
            properties: {
                'name': {
                    title: [ { text: { content: name } } ]
                },
                'username': {
                    rich_text: [ { text: { content: username } } ]
                },
                'email': {
                    email: email
                },
                'password': {
                    rich_text: [ { text: { content: password } } ] // Note: In production, hash this password!
                },
                // Only add optional properties if they have a value
                ...(contactNumber ? { 'contactNumber': { phone_number: contactNumber } } : {}),
                ...(linkedinUrl ? { 'linkedinUrl': { url: linkedinUrl } } : {}),
            },
        });

        const session = await lucia.createSession(newUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

        return { message: "Registration successful! You can now log in.", success: true };

    } catch (error) {
        console.error('Notion API Error:', error);
        return { message: "Something went wrong during registration." };
    }
}

export async function logoutAction() {
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect('/login');
}
