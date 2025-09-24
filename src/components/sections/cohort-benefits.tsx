"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Rocket, Mic, UserSearch, GraduationCap, Users, TrendingUp, CheckCircle2, Bot, Globe } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const benefits = [
    {
        icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
        title: "Learning That Actually Works",
        points: [
            "Learn with structured, day-by-day sessions (no random chaos).",
            "Stay updated with daily fresh insights & trends.",
            "Grow at least 1% every single day with practical tasks.",
            "Live doubt-clearing sessions (because Google can’t solve everything).",
            "No more confusion about the right path — we’ve got it sorted.",
            "Not a boring “training course” → this is a cohort vibe where learning feels alive.",
        ]
    },
    {
        icon: <Rocket className="w-8 h-8 text-blue-400" />,
        title: "Career Growth & Industry Edge",
        points: [
            "Discover what really works in the real world, not just on paper.",
            "Stand out — don’t just be another “average college student.”",
            "Sharpen communication skills (the hidden career booster).",
            "Learn how to spot fake internships & scams before they spot you.",
            "Get industry exposure through sessions with CEOs, HRs & domain experts.",
            "And yes, you’ll get a certificate — not to decorate, but to showcase your real presence & work.",
        ]
    },
    {
        icon: <Users className="w-8 h-8 text-green-400" />,
        title: "Networking & Community",
        points: [
            "VK, a founder and mentor, will be mentoring you — direct guidance, real experience.",
            "Peer networking that actually lasts beyond the cohort.",
            "Competitions & leaderboards to push you to the next level.",
            "The real secret sauce: Learn together, grow together.",
            "Access to a supportive community instead of struggling alone.",
        ]
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
        title: "Your Transformation Journey",
        points: [
            "A journey from beginner → communicator → developer → leader.",
            "Learn to tell your story in a way that makes people listen.",
            "Build not just skills, but also confidence, problem-solving & leadership.",
        ]
    }
]

const BenefitCard = ({ icon, title, points }: { icon: React.ReactNode, title: string, points: string[] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
     <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
        }}
        className="relative"
    >
        <Card className="h-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group [transform-style:preserve-3d]">
            <div style={{ transform: "translateZ(50px)" }} className="[transform-style:preserve-3d]">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="flex-shrink-0">{icon}</div>
                    <CardTitle className="font-headline text-xl text-primary-foreground group-hover:text-glow-primary transition-all">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {points.map((point, i) =>(
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                                <span className="text-secondary-foreground font-comic">{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </div>
        </Card>
    </motion.div>
    )
}

const CohortBenefits = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">What Makes NextPixel Different?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 [perspective:1000px]">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
};

export default CohortBenefits;
