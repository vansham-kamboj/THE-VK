"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/nav-items";
import { ContactDialog } from "../contact-dialog";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 pt-6">
             <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setOpen(false)}>
                <span className="font-bold sm:inline-block font-headline text-lg text-glow-accent">
                    VK
                </span>
            </Link>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
             <ContactDialog>
              <Button onClick={() => setOpen(false)}>
                Work With Me
              </Button>
            </ContactDialog>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
