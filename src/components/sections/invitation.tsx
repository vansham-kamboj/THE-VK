import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ContactDialog } from "../contact-dialog";
import { AnimatedText } from "../animated-text";

const Invitation = () => {
    return (
        <section id="invitation" className="relative overflow-hidden scroll-mt-14 bg-secondary">
            <div className="container">
                <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <AnimatedText 
                                    text="&quot;If you’re confused, stuck, or chasing 100 passions at once — I get it. I’ve been there.&quot;"
                                    className="font-body text-xl text-secondary-foreground italic"
                                />
                                <h2 className="mt-6 font-headline text-3xl md:text-4xl font-bold">
                                    <AnimatedText text="That’s why I guide students, dreamers, and creators — so your journey feels less lonely and more epic." />
                                </h2>
                                <p className="mt-8 font-comic text-3xl font-bold text-glow-primary">
                                    <AnimatedText text="Think of it as co-op mode for your life." el="p" />
                                </p>
                                <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                                        <a href="#" target="_blank">Join My Journey</a>
                                    </Button>
                                    <ContactDialog>
                                        <Button size="lg" variant="outline">
                                            Get Mentored by Me
                                        </Button>
                                    </ContactDialog>
                                </div>
                            </div>
                            <div className="flex justify-center mt-12 lg:mt-0">
                                <div className="relative w-full max-w-sm h-80 lg:h-96 lg:animate-float [animation-delay:-3s]">
                                    <Image
                                        src="/images/VK-withBoard.png"
                                        alt="Cartoon avatar holding a signboard."
                                        fill
                                        className="object-contain drop-shadow-[0_10px_30px_hsl(var(--accent)/0.3)]"
                                        data-ai-hint="person holding sign"
                                    />
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-card rounded-lg p-3 font-comic text-lg text-center shadow-lg border border-accent rotate-3 text-accent-foreground">
                                        Wanna join my squad?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Invitation;
