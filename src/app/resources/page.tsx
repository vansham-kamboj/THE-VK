import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AnimatedText } from "@/components/animated-text";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogListPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 py-12 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
                        <AnimatedText text="Cosmic Chronicles" />
                    </h1>
                    <AnimatedText 
                        text="A collection of thoughts, stories, and questionable life choices from my journey through the digital universe."
                        className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">
                                    <Link href={`/resources/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground pt-2">{post.date} · {post.readTime}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-secondary-foreground">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="link" className="p-0">
                                    <Link href={`/resources/${post.slug}`}>Read More →</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}
