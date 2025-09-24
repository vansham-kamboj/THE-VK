import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import ConfusionPhase from '@/components/sections/confusion-phase';
import DiscoveryPhase from '@/components/sections/discovery-phase';
import Achievements from '@/components/sections/achievements';
import Identity from '@/components/sections/identity';
import Invitation from '@/components/sections/invitation';
import Footer from '@/components/layout/footer';
import { AnimatedText } from '@/components/animated-text';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="story" className="scroll-mt-14">
          <ConfusionPhase />
          <DiscoveryPhase />
        </div>
        <Achievements />
        <Identity />
        <Invitation />
      </main>
      <Footer />
    </div>
  );
}
