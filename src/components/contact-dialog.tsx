"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

export function ContactDialog({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
  
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">Let's Connect</DialogTitle>
                    <DialogDescription className="font-comic">
                        Have a project, a question, or just want to send virtual high-fives? Drop me a line.
                    </DialogDescription>
                </DialogHeader>
                <ContactForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    );
}
