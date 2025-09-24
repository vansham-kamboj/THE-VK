import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Film, Zap, Star, Wrench, Target, Bot, GitBranch, Castle, Save, Code, Brush, Mic, ChevronsRight, Palette, Chrome, KanbanSquare, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import CohortSyllabus from "@/components/sections/cohort-syllabus";
import { AnimatedText } from "@/components/animated-text";
import CohortBenefits from "@/components/sections/cohort-benefits";
import { Badge } from "@/components/ui/badge";
import CohortFaq from "@/components/sections/cohort-faq";

const ComicBubble = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-card text-card-foreground p-3 rounded-xl rounded-bl-none shadow-lg border border-border animate-float ${className}`}>
        <p className="font-comic">{children}</p>
    </div>
);

const ToolCard = ({ icon, title, caption }: { icon: React.ReactNode, title: string, caption: string }) => (
    <div className="bg-card p-4 rounded-lg flex items-center gap-4 border border-border hover:border-accent transition-colors group">
        <div className="text-accent text-2xl group-hover:text-glow-accent">{icon}</div>
        <div>
            <h4 className="font-headline font-bold">{title}</h4>
            <p className="font-comic text-sm text-muted-foreground">{caption}</p>
        </div>
    </div>
);

const skillBadges = [
    { icon: <Code />, name: "Web Dev" },
    { icon: <Brush />, name: "UI/UX" },
    { icon: <Mic />, name: "Speaking Skills" },
    { icon: <ChevronsRight />, name: "Real World Updates" },
];

export default function NextPixelsCohortPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 text-center bg-gradient-hero overflow-hidden">
          <div className="container relative z-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-glow-primary">
              <AnimatedText text="NextPixel Cohort" el="span" />
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-bold text-glow-accent">
                <AnimatedText text="From “Hello World” → to “Hello Audience”" el="span" />
            </p>
            <AnimatedText 
              text="A 3-month origin story where confused beginners evolve into confident creators, designers, and leaders."
              className="mt-6 max-w-3xl mx-auto text-lg text-secondary-foreground"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
                {skillBadges.map(skill => (
                    <Badge key={skill.name} variant="secondary" className="text-sm py-1 px-3 flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
                    </Badge>
                ))}
            </div>
            <div className="mt-12">
              <Button size="lg" className="neon-outline border-2">
                <Rocket className="mr-2" /> Join the Squad
              </Button>
            </div>
          </div>
          <div className="absolute top-1/4 left-[5%] sm:left-[10%] z-20 hidden md:block">
             <ComicBubble className="rotate-[-8deg] [animation-delay:-1s]">Bruhh… what now?</ComicBubble>
          </div>
          <div className="absolute top-1/3 right-[5%] sm:right-[12%] z-20 hidden md:block">
             <ComicBubble className="rotate-[10deg] [animation-delay:-3s]">Where’s the magic?</ComicBubble>
          </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-40 opacity-10">
                <Image src="/images/ConfusedVK.png" alt="Confused kid at laptop" fill className="object-contain" />
             </div>
        </section>

        {/* Main Content Section */}
        <section className="relative pt-24 bg-secondary/50">
            {/* Chapter 1: The Confused Coder Arc - as a Card */}
            <div className="container -mt-40 relative z-10">
              <Card className="bg-card/80 backdrop-blur-lg p-6 sm:p-8 max-w-3xl mx-auto text-center neon-outline">
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-4"><Film className="w-8 h-8 text-primary"/>The Confused Coder Arc</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-lg text-secondary-foreground">You wrote your first line:</p>
                  <pre className="bg-card my-4 w-fit mx-auto rounded-lg p-4 font-mono text-base text-primary-foreground shadow-lg"><code>Hello World</code></pre>
                  <p className="text-lg text-secondary-foreground">…and stared at the screen like, “uhh… now what?”</p>
                  <p className="mt-4 text-lg font-bold">Most quit here. <span className="text-glow-accent text-xl sm:text-2xl font-headline">Not you. Not in this story.</span></p>
                </CardContent>
              </Card>
            </div>

            <div className="container max-w-4xl mx-auto space-y-24 mt-24">
                
                <CohortBenefits />
                <CohortSyllabus />

                {/* Chapter 4 */}
                 <div>
                     <div className="text-center mb-12">
                         <h2 className="font-headline text-4xl font-bold flex items-center justify-center gap-4"><Wrench className="w-8 h-8 text-primary"/>Weapons & Gadgets</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-secondary-foreground">No hero fights empty-handed. Here's your arsenal.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ToolCard icon={<Sparkles />} title="Figma" caption="design wand" />
                        <ToolCard icon={<Bot />} title="AI Sidekicks" caption="Gemini, ChatGPT, etc." />
                        <ToolCard icon={<Palette />} title="Coolors & Canva" caption="color & graphics" />
                        <ToolCard icon={<GitBranch />} title="Git & GitHub" caption="version control" />
                        <ToolCard icon={<Rocket />} title="Vercel & Netlify" caption="deployment" />
                        <ToolCard icon={<KanbanSquare />} title="Notion & Discord" caption="team HQ" />
                        <ToolCard icon={<Chrome />} title="Chrome DevTools" caption="debugger" />
                        <ToolCard icon={<Code />} title="Tailwind & Bootstrap" caption="CSS frameworks" />
                        <ToolCard icon={<Save />} title="UI Libraries" caption="ShadCN, MUI" />
                    </div>
                 </div>

                {/* Chapter 5 */}
                <div className="text-center">
                    <h2 className="font-headline text-4xl font-bold flex items-center justify-center gap-4"><Star className="w-8 h-8 text-primary"/>Transformation & Finale</h2>
                     <div className="mt-8 flex justify-center">
                         <Image src="/images/main-img-vk.png" alt="Hero pose" width={200} height={200} className="rounded-full border-4 border-primary shadow-2xl shadow-primary/40" />
                     </div>
                    <p className="mt-8 text-lg text-secondary-foreground">By the finale, you’re not the newbie googling “why my div not centered.” <br/> You’re standing tall, portfolio in hand, saying:</p>
                    <p className="mt-4 font-headline text-4xl md:text-5xl text-glow-primary">“Hello Audience.”</p>
                    <p className="mt-6 font-bold text-xl">This isn’t a course. It’s your origin story.</p>
                </div>

                {/* Investment Section */}
                <div className="py-12 text-center">
                    <h2 className="font-headline text-3xl font-bold flex items-center justify-center gap-4">
                        <DollarSign className="w-7 h-7 text-primary"/>Investment in Yourself
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        This cohort is paid — but not for profit. The fee exists to give you the best resources, the best guidance, and the best experience possible.
                    </p>
                    <p className="mt-6 text-secondary-foreground max-w-3xl mx-auto">
                        And here’s the truth: when things are free, people rarely value them. We want only serious learners who are ready to stay consistent and grow. That’s why this journey comes at just <span className="font-bold text-primary-foreground text-glow-primary">₹799</span> — less than what most people spend on a weekend outing.
                    </p>

                    <div className="mt-10 bg-card p-6 rounded-lg border border-border max-w-md mx-auto neon-outline">
                         <h4 className="font-headline text-xl font-bold flex items-center justify-center gap-3"><Users className="w-6 h-6 text-accent" />Limited Spots, Maximum Value</h4>
                         <p className="text-muted-foreground mt-2">
                             We’re keeping this cohort exclusive with only <span className="font-bold text-primary-foreground">50 seats</span>. Not because we want it to sound fancy, but because smaller groups mean better attention, tighter bonding, and stronger learning.
                         </p>
                         <p className="font-comic mt-3 text-glow-accent">So if you want to be part of this focused, high-energy batch, don’t wait too long.</p>
                    </div>
                </div>


                <CohortFaq />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
