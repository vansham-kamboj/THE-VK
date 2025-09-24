import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { AnimatedText } from '../animated-text';

const DiscoveryPhase = () => {
    return (
        <section className="relative overflow-hidden bg-secondary">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                         <AnimatedText 
                            text="Between deadlines and chai breaks…"
                            className="font-body text-xl text-secondary-foreground"
                         />
                        <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold">
                            <AnimatedText text="I discovered designing, coding, leading, and teaching were all just forms of storytelling." />
                        </h2>
                        <p className="mt-8 text-2xl md:text-4xl font-bold font-headline">
                           <AnimatedText text="That’s when life stopped being random — and started feeling like a" el="span" />
                            <span className="text-glow-primary"> <AnimatedText text="story worth telling." el="span" /></span>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Card className="p-4 sm:p-6 neon-outline rounded-2xl w-full max-w-sm bg-card">
                            <CardContent className="p-0">
                                <Image
                                    src="/images/ConfidentVK.png"
                                    alt="Cartoon illustration of a person having a 'light bulb above head' moment."
                                    width={600}
                                    height={600}
                                    className="rounded-lg aspect-square object-cover"
                                    data-ai-hint="idea lightbulb"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoveryPhase;
