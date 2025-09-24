import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AuthForm } from "@/components/auth-form";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 sm:py-24">
        <div className="container">
          <Card className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 sm:p-12">
              <AuthForm type="login" />
            </div>
            <div className="relative hidden md:block">
                <Image
                    src="/images/lightbulb-moment.png"
                    alt="Cartoon illustration of a person having a 'light bulb above head' moment."
                    fill
                    className="object-cover"
                    data-ai-hint="idea lightbulb"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
