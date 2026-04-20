import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

/* ─────────────────────────── Navbar ─────────────────────────── */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Coda"
            width={32}
            height={24}
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
            href="#services"
            className="hover:text-charcoal transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-charcoal transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-charcoal font-medium border-b border-amber pb-0.5 hover:border-charcoal transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────── Hero ──────────────────────────── */

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Text — asymmetric, takes 7 cols */}
          <div className="lg:col-span-7 pt-24 lg:pt-0">
            <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-6">
              Digital Marketing &amp; Web Design
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] tracking-tight">
              Websites that
              <br />
              <em className="text-amber not-italic">move</em> your
              <br />
              business forward.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-charcoal-light leading-relaxed max-w-xl">
              Handcrafted, SEO-optimized websites for local businesses — built
              fast, supported forever.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-amber transition-colors duration-500"
              >
                Start a Project
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
              <a
                href="#services"
                className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors duration-300 underline underline-offset-4 decoration-amber/40 hover:decoration-charcoal"
              >
                What We Do
              </a>
            </div>
          </div>

          {/* Logo — asymmetric, takes 5 cols, offset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Coda"
                width={340}
                height={252}
                className="w-52 md:w-64 lg:w-[280px] h-auto relative z-10 mx-auto"
                priority
              />
              <span className="relative z-10 mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.25em] text-charcoal text-center block">
                CODA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-light/50">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal-light/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ─────────────────────────── Services ──────────────────────── */

const services = [
  {
    number: "01",
    title: "Web Design &\nDevelopment",
    description:
      "Clean, modern websites built from scratch. No templates, no bloat — just purposeful design that serves your customers.",
  },
  {
    number: "02",
    title: "Local SEO\nOptimization",
    description:
      "Every site ships optimized for local search. We make sure the people near you can find you when they need you.",
  },
  {
    number: "03",
    title: "Ongoing Retainer\nSupport",
    description:
      "Your business changes — your website should too. We're always a message away for updates, tweaks, and new pages.",
  },
  {
    number: "04",
    title: "Fast\nTurnaround",
    description:
      "We don't drag projects out. You get a professional site launched quickly so you can start reaching customers sooner.",
  },
];

function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight mb-20">
            Everything your business needs
            <br />
            to thrive online.
          </h2>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-dark">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-cream p-8 lg:p-10 group hover:bg-white transition-colors duration-500"
              >
                <span className="text-xs tracking-[0.2em] text-amber font-medium">
                  {service.number}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mt-4 mb-5 whitespace-pre-line leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Process ───────────────────────── */

const steps = [
  {
    title: "Discover",
    description:
      "We start with a conversation — your goals, your customers, your story. No jargon, no pressure.",
  },
  {
    title: "Design",
    description:
      "We craft a site that reflects your business. You see it, you give feedback, we refine until it's right.",
  },
  {
    title: "Launch",
    description:
      "Your site goes live — fast, optimized, and ready to work for you from day one.",
  },
  {
    title: "Support",
    description:
      "We stay on retainer. Your site evolves with your business, always current, always performing.",
  },
];

function Process() {
  return (
    <section className="py-32 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
                Our Process
              </p>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
                Simple by design.
                <br />
                <span className="text-white/40">Effective by nature.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-white/60 leading-relaxed">
                We&apos;ve stripped the process down to what actually matters. No
                endless meetings, no scope creep — just clear steps that respect
                your time and get results.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="font-serif text-7xl text-white/[0.06] absolute -top-6 -left-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="w-8 h-px bg-amber mb-6" />
                  <h3 className="text-lg font-medium tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── About ─────────────────────────── */

function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal className="reveal-left lg:col-span-5">
            <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
              About Coda
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight leading-tight">
              No overhead.
              <br />
              No runaround.
              <br />
              <span className="text-amber">Real results.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="reveal-right lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 text-charcoal-light leading-relaxed text-lg">
              <p>
                Big agencies charge big prices and move at their own pace. Coda
                is different — lean, responsive, and built around getting things
                done fast.
              </p>
              <p>
                No layers of bureaucracy, no waiting weeks for a small text
                change. We specialize in helping local businesses get a
                professional online presence without the overhead.
              </p>
              <p>
                Your website should be an asset, not a headache. That&apos;s the
                promise.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14 pt-14 border-t border-cream-dark">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal">
                  24hr
                </span>
                <p className="text-xs tracking-wide uppercase text-charcoal-light mt-2">
                  Average response time
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal">
                  100%
                </span>
                <p className="text-xs tracking-wide uppercase text-charcoal-light mt-2">
                  Client retention
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-charcoal">
                  2wk
                </span>
                <p className="text-xs tracking-wide uppercase text-charcoal-light mt-2">
                  Typical launch time
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Contact / CTA ─────────────────── */

function Contact() {
  return (
    <section id="contact" className="py-32 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-6">
              Let&apos;s Work Together
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              Ready to get your business{" "}
              <em className="text-amber not-italic">online?</em>
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">
              Reach out and let&apos;s talk about what you need. No pressure, no
              jargon — just a conversation about how we can help.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-8">
              <a
                href="mailto:codadigitalmarketing@gmail.com"
                className="group inline-flex items-center gap-3 bg-amber text-white px-10 py-4 rounded-sm text-sm font-medium tracking-wide uppercase hover:bg-amber-light transition-colors duration-500"
              >
                Send a Message
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

            <div className="mt-14 pt-14 border-t border-white/10 flex flex-col sm:flex-row gap-10">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-2">
                  Email
                </p>
                <a
                  href="mailto:codadigitalmarketing@gmail.com"
                  className="text-white/80 hover:text-amber transition-colors duration-300"
                >
                  codadigitalmarketing@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/30 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+18148821459"
                  className="text-white/80 hover:text-amber transition-colors duration-300"
                >
                  (814) 882-1459
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Blog Preview ─────────────────── */

import { posts } from "./blog/posts";

function BlogPreview() {
  const featured = posts.slice(0, 3);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-amber font-medium mb-4">
                From the Blog
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight">
                Insights for local
                <br />
                business owners.
              </h2>
            </div>
            <a
              href="/blog"
              className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors duration-300 underline underline-offset-4 decoration-amber/40 hover:decoration-charcoal"
            >
              View All Articles
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="border-t border-cream-dark pt-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-amber font-medium mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal leading-snug group-hover:text-amber transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm text-charcoal-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs tracking-wide text-charcoal-light/60">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ────────────────────────── */

function Footer() {
  return (
    <footer className="py-10 border-t border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Coda"
            width={24}
            height={18}
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
  );
}

/* ─────────────────────────── Page ──────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
