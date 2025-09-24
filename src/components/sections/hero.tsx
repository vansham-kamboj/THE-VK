import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ContactDialog } from '../contact-dialog';
import { AnimatedText } from '../animated-text';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero h-[calc(100vh-theme(height.14))] flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                <AnimatedText text="The Boy Who Never" el="span" />
                <AnimatedText text="Quit " el="span" />
                <span className="text-glow-primary"><AnimatedText text="Dreaming" el="span" /></span>
            </h1>
            
            <p className="mt-8 max-w-md text-lg text-secondary-foreground">
                <AnimatedText text="Founder, Leader, Speaker, Teacher, Designer, Developer (depending on the Wi-fI mood)." el="span" />
            </p>

            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="/nextpixels-cohort">
                  <Badge variant="secondary" className="py-2 px-4 text-sm hover:bg-primary/20 transition-colors cursor-pointer">
                      Join NextPixel Cohort <ArrowRight className="ml-2 h-4 w-4" />
                  </Badge>
              </Link>
              <Link href="/resources">
                   <Badge variant="secondary" className="py-2 px-4 text-sm hover:bg-primary/20 transition-colors cursor-pointer">
                      See Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Badge>
              </Link>
            </div>
{/* 
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/20 transition-all duration-300">
                <Link href="#story">Start The Story →</Link>
              </Button>
              <ContactDialog>
                <Button size="lg" className="bg-primary hover:bg-primary/80 transition-all duration-300">
                  Work With Me
                </Button>
              </ContactDialog>
            </div> */}
             <div className="mt-8 font-comic text-soft-violet rotate-2 text-lg">
                <span className="text-glow-violet"><AnimatedText text="“Yes, I made this site instead of Just Thinking.”" el="span" /></span>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative animate-float w-[350px] h-[450px] xl:w-[450px] xl:h-[600px]">
                <Image
                  src="/images/main-img-vk.png"
                  alt="Cartoon illustration of an astronaut in a futuristic suit, holding a laptop."
                  fill
                  className="object-contain drop-shadow-[0_10px_30px_hsl(var(--primary)/0.3)]"
                  data-ai-hint="man standing"
                  priority
                />
               <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
