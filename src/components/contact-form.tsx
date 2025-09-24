"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SubmitButton } from "./submit-button";

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(10, 'Please say a little more than that!'),
});

const initialState = {
  message: null,
  errors: null,
};

export function ContactForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
    const { toast } = useToast();
    const [state, formAction] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", message: "" },
    });
    
    useEffect(() => {
        if (state.message) {
            toast({
                title: "Message Sent!",
                description: state.message,
            });
            form.reset();
            formRef.current?.reset();
            setOpen?.(false);
        }
        if (state.errors) {
            // The form fields will show their own errors.
            // This could be used for a general error toast.
        }
    }, [state, toast, form, setOpen]);

    return (
        <Form {...form}>
            <form
                ref={formRef}
                action={formAction}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage>{state.errors?.name}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage>{state.errors?.email}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Let's build something amazing together!" {...field} />
                            </FormControl>
                            <FormMessage>{state.errors?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <SubmitButton className="w-full">Send Message</SubmitButton>
            </form>
        </Form>
    );
}
