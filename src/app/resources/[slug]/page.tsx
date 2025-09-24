import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { blogPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";

// Function to extract headings from HTML content
const getHeadings = (htmlString: string) => {
  if (typeof window === 'undefined') return []; // Should not run on server, but as a safeguard
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  const headings = Array.from(div.querySelectorAll('h2, h3'));
  return headings.map(heading => {
    const level = Number(heading.tagName.substring(1));
    const text = heading.textContent || '';
    const id = slugify(text);
    heading.id = id;
    return { level, text, id, html: heading.outerHTML };
  });
};

const PostTOC = ({ headings }: { headings: { level: number; text: string; id: string }[] }) => (
  <div className="sticky top-24">
    <h3 className="font-headline text-lg font-bold mb-4 text-glow-accent">Table of Contents</h3>
    <ul className="space-y-2 text-sm">
      {headings.map(({ id, text, level }) => (
        <li key={id} className={`${level === 3 ? 'ml-4' : ''}`}>
          <a href={`#${id}`} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
  const headings: { level: number, text: string, id: string }[] = [];
  const processedContent = post.content.replace(headingRegex, (match, level, text) => {
    const id = slugify(text);
    headings.push({ level: parseInt(level), text, id });
    return `<h${level} id="${id}" class="font-headline text-3xl font-bold mt-8 mb-4 scroll-mt-20">${text}</h${level}>`;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-12 sm:py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="hidden lg:block lg:col-span-1">
              <PostTOC headings={headings} />
            </aside>
            <article className="lg:col-span-3">
              <div
                className="prose prose-invert prose-lg max-w-none mx-auto text-secondary-foreground prose-h2:text-foreground prose-h3:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
