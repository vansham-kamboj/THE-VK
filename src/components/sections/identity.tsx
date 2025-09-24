import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedText } from "../animated-text";

const Identity = () => {
  return (
    <section id="identity" className="relative scroll-mt-14 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{
            backgroundImage: `
                linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
        }}/>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background" />

      <div className="container relative z-10">
        <Card className="bg-card/80 backdrop-blur-lg">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3 p-8 lg:p-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                <AnimatedText text="I’m not just a title." />
              </h2>
              <AnimatedText 
                text="I’m a founder, leader, speaker, mentor, designer, and dreamer — still figuring things out, but now with cleaner Figma files."
                className="mt-6 text-xl text-secondary-foreground"
              />
              <p className="mt-8 font-headline text-4xl md:text-6xl font-bold text-glow-primary">
                <AnimatedText text="Still Dreaming." el="span" /> <br /> 
                <AnimatedText text="Still Building." el="span" />
              </p>
            </div>
            <div className="md:col-span-2 p-6 flex justify-center items-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src="/images/VK-withMic.png"
                    alt="Cartoon avatar holding a glowing microphone and a laptop."
                    fill
                    className="rounded-full object-cover border-4 border-accent shadow-2xl shadow-accent/20"
                    data-ai-hint="person microphone laptop"
                  />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Identity;
