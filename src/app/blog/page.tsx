import Image from "next/image";
import { posts } from "./posts";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Blog | Coda",
  description:
    "Practical insights on web design, SEO, and digital marketing for local business owners.",
};

export default function BlogIndex() {
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
              className="text-charcoal transition-colors duration-300"
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
              href="/#about"
              className="hover:text-charcoal transition-colors duration-300"
            >
              About
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
              Blog
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-charcoal tracking-tight">
              Insights &amp; resources
              <br />
              <span className="text-charcoal-light">
                for local businesses.
              </span>
            </h1>
          </div>

          <div className="space-y-0">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug}>
                <a href={`/blog/${post.slug}`} className="group block">
                  <div
                    className={`grid md:grid-cols-12 gap-6 md:gap-8 items-baseline py-10 border-t border-cream-dark ${i === posts.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="md:col-span-2">
                      <p className="text-xs tracking-[0.2em] uppercase text-amber font-medium">
                        {post.category}
                      </p>
                    </div>
                    <div className="md:col-span-5">
                      <h2 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-amber transition-colors duration-500 leading-snug">
                        {post.title}
                      </h2>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-sm text-charcoal-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="md:col-span-1 flex md:justify-end items-start">
                      <span className="text-xs text-charcoal-light/50 tracking-wide whitespace-nowrap">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
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
