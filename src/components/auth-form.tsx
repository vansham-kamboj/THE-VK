"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginAction, registerAction } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { AtSign, Contact, KeyRound, Link2, User, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name.' }),
  username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  contactNumber: z.string().optional(),
  linkedinUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});


const initialState: { message: string | null; errors: any | null; success?: boolean } = {
  message: null,
  errors: null,
  success: false,
};

type AuthFormType = "login" | "register";

export function AuthForm({ type }: { type: AuthFormType }) {
    const router = useRouter();
    const { toast } = useToast();
    const isLogin = type === 'login';
    const action = isLogin ? loginAction : registerAction;
    const schema = isLogin ? loginSchema : registerSchema;

    const [state, formAction] = useActionState(action, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: isLogin 
            ? { email: "", password: "" } 
            : { name: "", username: "", email: "", password: "", contactNumber: "", linkedinUrl: "" },
    });
    
    useEffect(() => {
        // Success case
        if (state?.success) {
            toast({
                title: isLogin ? "Login Successful!" : "Registration Successful!",
                description: state.message || (isLogin ? "Welcome back!" : "Your account has been created."),
            });
            form.reset();
            formRef.current?.reset();
            router.push('/'); // Redirect to homepage on success
        } 
        // Error case
        else if (state?.message) {
            toast({
                variant: 'destructive',
                title: isLogin ? "Login Failed" : "Registration Failed",
                description: state.message,
            });
        }
    }, [state, toast, form, isLogin, router]);

    const title = isLogin ? "Welcome Back" : "Join the Crew";
    const description = isLogin ? "Enter your credentials to access your account." : "Create an account to start your journey.";
    const buttonText = isLogin ? "Login" : "Create Account";
    const footerText = isLogin ? "Don't have an account?" : "Already have an account?";
    const footerLink = isLogin ? "/register" : "/login";
    const footerLinkText = isLogin ? "Sign up" : "Log in";

    return (
        <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="text-center p-0 mb-8">
                <CardTitle className="font-headline text-3xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <Form {...form}>
                    <form
                        ref={formRef}
                        action={formAction}
                        className="space-y-4"
                    >
                        {!isLogin && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <div className="relative flex items-center">
                                                    <User className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                                    <Input placeholder="Your Name" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <div className="relative flex items-center">
                                                    <UserCircle className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                                    <Input placeholder="your_username" {...field} className="pl-10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="relative flex items-center">
                                            <AtSign className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                            <Input type="email" placeholder="your@email.com" {...field} className="pl-10" />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative flex items-center">
                                            <KeyRound className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                            <Input type="password" placeholder="••••••••" {...field} className="pl-10"/>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         {!isLogin && (
                           <>
                             <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number (Optional)</FormLabel>
                                        <FormControl>
                                            <div className="relative flex items-center">
                                                <Contact className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                                <Input placeholder="+1 234 567 890" {...field} value={field.value ?? ''} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="linkedinUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LinkedIn URL (Optional)</FormLabel>
                                        <FormControl>
                                            <div className="relative flex items-center">
                                                <Link2 className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                                <Input placeholder="https://linkedin.com/in/your-profile" {...field} value={field.value ?? ''} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                           </>
                        )}
                        <SubmitButton className="w-full">{buttonText}</SubmitButton>
                         {state.errors && (
                            <div className="text-sm font-medium text-destructive">
                                {Object.values(state.errors).flat().join(' ')}
                            </div>
                        )}
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="justify-center text-sm pt-6 p-0">
                <p className="text-muted-foreground">
                    {footerText}{' '}
                    <Link href={footerLink} className="text-primary hover:underline">
                        {footerLinkText}
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
