import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Coda Blog`,
    description: post.excerpt,
  };
}

function markdownToHtml(content: string): string {
  return content
    .trim()
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2 class="font-serif text-2xl md:text-3xl text-charcoal mt-14 mb-6 tracking-tight">${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3 class="font-serif text-xl text-charcoal mt-10 mb-4 tracking-tight">${trimmed.slice(4)}</h3>`;
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed
          .split("\n")
          .filter((l) => l.trim().startsWith("- "))
          .map((l) => {
            const text = l.trim().slice(2);
            const formatted = text.replace(
              /\*\*(.+?)\*\*/g,
              '<strong class="text-charcoal font-medium">$1</strong>'
            );
            return `<li class="pl-1">${formatted}</li>`;
          })
          .join("\n");
        return `<ul class="space-y-3 my-6 ml-4 list-disc list-outside text-charcoal-light leading-relaxed">${items}</ul>`;
      }
      const formatted = trimmed.replace(
        /\*\*(.+?)\*\*/g,
        '<strong class="text-charcoal font-medium">$1</strong>'
      );
      return `<p class="text-charcoal-light leading-relaxed my-5 text-lg">${formatted}</p>`;
    })
    .join("\n");
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const htmlContent = markdownToHtml(post.content);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Coda"
              width={32}
              height={23}
              className="h-auto transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-lg font-serif font-semibold tracking-widest text-charcoal uppercase">
              Coda
            </span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-charcoal-light">
            <a
              href="/blog"
              className="hover:text-charcoal transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="/#services"
              className="hover:text-charcoal transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="text-charcoal font-medium border-b border-amber pb-0.5 hover:border-charcoal transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-14">
            <a
              href="/blog"
              className="text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-amber transition-colors duration-300 mb-8 inline-block"
            >
              &larr; Back to Blog
            </a>
            <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
              {post.category}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-charcoal tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-sm text-charcoal-light/60 tracking-wide">
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <div className="w-16 h-px bg-amber mt-10" />
          </div>

          {/* Content */}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {/* CTA */}
          <div className="mt-20 pt-14 border-t border-cream-dark">
            <p className="font-serif text-2xl text-charcoal mb-4">
              Need a website for your business?
            </p>
            <p className="text-charcoal-light leading-relaxed mb-8">
              We build fast, SEO-optimized websites for local businesses.
              Let&apos;s talk about what you need.
            </p>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-amber transition-colors duration-500"
            >
              Get in Touch
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Coda"
              width={24}
              height={17}
              className="h-auto"
            />
            <span className="text-sm font-serif font-semibold tracking-widest text-charcoal uppercase">
              Coda
            </span>
          </div>
          <p className="text-xs tracking-wide text-charcoal-light">
            &copy; {new Date().getFullYear()} Coda
          </p>
        </div>
      </footer>
    </>
  );
}
