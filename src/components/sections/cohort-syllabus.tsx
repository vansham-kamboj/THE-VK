"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Paintbrush, Code, Rocket, Mic, Globe, Bot } from "lucide-react";

const syllabus = [
  {
    icon: <Paintbrush className="h-6 w-6 text-accent" />,
    title: "UI/UX Design",
    content: (
      <>
        <p className="mb-4 text-secondary-foreground">Welcome to the design dojo! Your first superpower is turning blank screens into something people actually want to look at.</p>
        <ul className="space-y-2 list-disc list-inside mb-4">
            <li>Figma basics: wireframes, frames, layouts</li>
            <li>Prototypes & micro-interactions</li>
            <li>Design systems: colors, typography, and consistency</li>
        </ul>
        <p className="font-bold">Fun Challenge: <span className="font-normal">Redesign your favorite app in 3 days</span></p>
        <p className="italic text-sm text-muted-foreground mt-2">Secret Tip: Think like a detective — why does this button even exist?</p>
      </>
    ),
  },
  {
    icon: <Code className="h-6 w-6 text-accent" />,
    title: "Frontend Development",
    content: (
      <>
        <p className="mb-4 text-secondary-foreground">Now you’re the code warrior! HTML, CSS, JS — your spells to make the digital world obey you.</p>
        <ul className="space-y-2 list-disc list-inside mb-4">
            <li>HTML/CSS basics & layout tricks</li>
            <li>JavaScript logic + interactivity</li>
            <li>React.js & Tailwind CSS → build modern apps</li>
        </ul>
        <p className="font-bold">Fun Challenge: <span className="font-normal">Clone a trending website in 1 week</span></p>
        <p className="italic text-sm text-muted-foreground mt-2">Secret Tip: Comments are like little notes for future-you — don’t skip them.</p>
      </>
    ),
  },
  {
    icon: <Rocket className="h-6 w-6 text-accent" />,
    title: "Real-World Projects",
    content: (
        <>
            <p className="mb-4 text-secondary-foreground">Your hero mission begins: small apps → full-fledged websites. Deploy & impress.</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
                <li>Mini apps → portfolio-ready projects</li>
                <li>Deploy to Vercel / Netlify</li>
            </ul>
            <p className="font-bold">Fun Challenge: <span className="font-normal">Launch your first live app</span></p>
            <p className="italic text-sm text-muted-foreground mt-2">Secret Tip: Every project is a boss fight. Finish it, level up.</p>
        </>
    ),
  },
  {
    icon: <Mic className="h-6 w-6 text-accent" />,
    title: "Soft Skills & Communication",
    content: (
        <>
            <p className="mb-4 text-secondary-foreground">Even a coder needs charisma. Speak, present, impress.</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
                <li>Stage presence & confident communication</li>
                <li>Freelancing mindset & professional skills</li>
            </ul>
            <p className="font-bold">Fun Challenge: <span className="font-normal">Pitch your project like a startup founder</span></p>
            <p className="italic text-sm text-muted-foreground mt-2">Secret Tip: Eye contact + smile = instant charisma boost.</p>
        </>
    ),
  },
  {
    icon: <Bot className="h-6 w-6 text-accent" />,
    title: "Industry Awareness & Tools",
    content: (
        <>
            <p className="mb-4 text-secondary-foreground">Tools make heroes faster. Trends keep them ahead.</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
                <li>Daily trend updates & real-world hacks</li>
                <li>Tools: Notion, Discord, Gemini, ChatGPT</li>
                <li>UI Libraries: ShadCN, Material UI, Tailwind, Bootstrap</li>
            </ul>
            <p className="font-bold">Fun Challenge: <span className="font-normal">Make a mini project using AI tools</span></p>
            <p className="italic text-sm text-muted-foreground mt-2">Secret Tip: Use AI wisely — it’s your sidekick, not the hero.</p>
        </>
    ),
  },
];

export default function CohortSyllabus() {
  return (
    <div>
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold flex items-center justify-center gap-4"><Rocket className="w-8 h-8 text-primary"/>The Skill Unlocks</h2>
            <p className="mt-4 max-w-2xl mx-auto text-secondary-foreground">Every hero gets powers. Here are yours. Click to unlock each one.</p>
       </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {syllabus.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg shadow-lg hover:border-primary transition-colors">
            <AccordionTrigger className="p-6 font-headline text-xl hover:no-underline">
              <div className="flex items-center gap-4">
                {item.icon}
                <span>{index + 1}. {item.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0">
                {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-12 bg-card p-6 rounded-lg neon-outline">
         <p className="font-comic text-xl text-glow-accent">Congrats, hero! You’ve seen the modules. Ready to join the squad?</p>
         <Button size="lg" className="mt-6">
            <Rocket className="mr-2" /> Join the Adventure
        </Button>
      </div>
    </div>
  );
}
