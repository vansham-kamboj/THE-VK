import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { AnimatedText } from '../animated-text';

const ConfusionPhase = () => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Card className="p-4 sm:p-6 neon-outline rounded-2xl w-full max-w-sm bg-card">
                <CardContent className="p-0">
                    <Image
                        src="/images/ConfusedVK.png"
                        alt="Cartoon illustration of a person looking confused with question marks, books, and a laptop."
                        width={600}
                        height={600}
                        className="rounded-lg aspect-square object-cover"
                        data-ai-hint="confused person"
                    />
                </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
              <AnimatedText text="Once upon a" el="span" /> <span className="text-glow-accent"><AnimatedText text="Wi-Fi lag..." el="span" /></span>
            </h2>
            <AnimatedText 
              text="...there was a boy with too many questions and not enough chai ☕."
              className="mt-6 text-xl text-secondary-foreground"
            />
            <p className="mt-8 text-2xl font-bold font-headline">
              <AnimatedText text="People said: ‘Pick one thing.’" el="span" />
              <br />
              <span className="text-glow-violet text-3xl"><AnimatedText text="I didn’t. I picked them all." el="span" /></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfusionPhase;
