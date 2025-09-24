import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AnimatedText } from "@/components/animated-text";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const events = [
    { id: 1, title: "Community Meetup", date: "June 2024", image: "/images/placeholder-event.jpg", hint: "people talking" },
    { id: 2, title: "Tech Conference", date: "May 2024", image: "/images/placeholder-event.jpg", hint: "stage presentation" },
    { id: 3, title: "Design Workshop", date: "April 2024", image: "/images/placeholder-event.jpg", hint: "whiteboard brainstorming" },
    { id: 4, title: "CodeFest Hackathon", date: "March 2024", image: "/images/placeholder-event.jpg", hint: "students coding" },
    { id: 5, title: "Web Dev Bootcamp", date: "February 2024", image: "/images/placeholder-event.jpg", hint: "classroom learning" },
    { id: 6, title: "Fireside Chat with CEO", date: "January 2024", image: "/images/placeholder-event.jpg", hint: "panel discussion" },
]

export default function EventsGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
              <AnimatedText text="Events Gallery" />
            </h1>
            <AnimatedText
              text="Moments from the journey, captured in pixels."
              className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image 
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={event.hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-4 bg-card">
                      <h3 className="font-headline text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 font-comic text-lg text-muted-foreground">
            <p>More memories coming soon! You can upload your event images in the `/public/images` folder.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
