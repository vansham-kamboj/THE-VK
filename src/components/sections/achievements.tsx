import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mic, HelpCircle, Palette, Code2 } from "lucide-react";
import { AnimatedText } from "../animated-text";

const achievements = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Captain",
    description: "Led multiple tech communities, turning strangers into squads.",
    caption: "My other title is 'Chief Meme Officer'."
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Stage Warrior",
    description: "Dropped mics, not projects.",
    caption: "Available for weddings and bar mitzvahs."
  },
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: "Confusion Breaker",
    description: "Mentored juniors → made life less scary.",
    caption: "The answer is usually 'have you tried turning it off and on again?'"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Pixel Tamer",
    description: "Designs cleaner than my room.",
    caption: "My layers have names. I swear."
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Code Explorer",
    description: "Debugging both code and life.",
    caption: "It's not a bug, it's an undocumented feature."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-secondary scroll-mt-14">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                <AnimatedText text="Achievements Unlocked" />
            </h2>
            <AnimatedText text="My stats in the game of life." className="mt-4 text-lg text-muted-foreground" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <div key={index} className="group relative">
              <Card className="h-full bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="text-accent group-hover:text-glow-accent transition-all duration-300">
                    {ach.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{ach.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-secondary-foreground text-sm">
                  {ach.description}
                </CardContent>
              </Card>
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-primary/95 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground font-comic text-lg text-center -rotate-3">{ach.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
