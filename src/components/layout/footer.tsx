import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const socialLinks = [
    { name: 'Instagram', icon: <Instagram />, href: 'https://www.instagram.com/vansham__kamboj/' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/vansham-kamboj/' },
    { name: 'Twitter', icon: <Twitter />, href: 'https://x.com/vansham__kamboj' },
    { name: 'YouTube', icon: <Youtube />, href: 'https://www.youtube.com/@VanshamKamboj' },
];

const Footer = () => {
  return (
    <footer className="w-full mt-24">
      <div className="container flex flex-col items-center justify-center gap-6 py-10">
        <div className="flex gap-4">
            {socialLinks.map(social => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        {social.icon}
                    </a>
                </Button>
            ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center w-full">
            <Separator className="w-full md:w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent h-[1px]"/>
            <div className="flex flex-col items-center gap-4 px-8 md:gap-2 md:px-0">
              <p className="text-sm leading-loose text-muted-foreground">
                Made with chai, code, and questionable life choices.
                {' '}© VK — still dreaming.
              </p>
            </div>
            <Separator className="w-full md:w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent h-[1px]"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
