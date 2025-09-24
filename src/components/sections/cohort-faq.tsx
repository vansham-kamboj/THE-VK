"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
    {
    question: "Is this cohort free or paid?",
    answer: "This cohort is paid — but not for profit. The fee exists to provide you with the best resources, guidance, and learning experience possible. Think of it as investing in yourself rather than spending on random stuff."
  },
  {
    question: "Why should I pay if there’s free content online?",
    answer: "When things are free, people rarely value them. By investing ₹799, you’re committing to yourself and your growth. Plus, you get structured learning, mentorship, projects, competitions, and real industry tools — all in one place."
  },
  {
    question: "How do competitions and leaderboard work?",
    answer: "There will be tasks, challenges, and mini-competitions. Students will earn points and climb the leaderboard. The top performer at the end of the cohort wins exciting prizes, but the real prize is your growth and projects."
  },
  {
    question: "How will this cohort help me in college or career?",
    answer: "While college gives you theory, this cohort focuses on skills that employers and clients actually value. You’ll learn to build, present, and deliver projects — setting you apart from the average college student."
  },
  {
    question: "I’m a complete beginner. Can I still join?",
    answer: "Yes. The cohort is built for beginners. We’ll start from scratch with UI/UX, HTML, CSS, JS, and React, and gradually move to advanced concepts. By the end, you’ll be confident in design, development, and communication."
  },
  {
    question: "How is this different from YouTube tutorials or online courses?",
    answer: "Unlike pre-recorded courses, this is live and structured. You’ll have daily guidance, doubt-clearing, real projects, accountability through tasks, and a community to grow with. It’s practical, not just theoretical."
  },
  {
    question: "What if I get stuck or feel self-doubt while learning?",
    answer: "That’s exactly why this cohort exists. You’ll get live support, mentoring, and peer encouragement. No one learns alone here — we grow together and make sure self-doubt doesn’t stop your progress."
  }
];

export default function CohortFaq() {
  return (
    <div className="py-12">
        <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold flex items-center justify-center gap-4"><HelpCircle className="w-7 h-7 text-primary"/>Frequently Asked Questions</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground">Quick answers to your most common questions. If you can't find what you're looking for, feel free to reach out!</p>
       </div>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 border border-border rounded-lg shadow-sm hover:border-primary/50 transition-colors">
            <AccordionTrigger className="p-4 font-headline text-base text-left hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-0">
                <p className="text-sm text-secondary-foreground font-comic">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
