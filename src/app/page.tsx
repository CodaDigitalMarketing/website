import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Coda" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight text-charcoal">
            CODA
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal-light">
          <a href="#services" className="hover:text-amber transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-amber transition-colors">
            How It Works
          </a>
          <a href="#about" className="hover:text-amber transition-colors">
            About
          </a>
          <a
            href="#contact"
            className="bg-amber text-white px-5 py-2 rounded-md hover:bg-amber-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-tight">
              Your business deserves a website that{" "}
              <span className="text-amber">works</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal-light leading-relaxed max-w-2xl">
              Coda builds fast, professional, SEO-optimized websites for local
              businesses. Get online quickly, get found by customers, and have a
              partner on retainer to keep things running smoothly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-amber text-white px-8 py-3.5 rounded-md text-lg font-medium hover:bg-amber-dark transition-colors"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal px-8 py-3.5 rounded-md text-lg font-medium hover:bg-charcoal hover:text-white transition-colors"
              >
                See What We Do
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Coda"
              width={280}
              height={280}
              className="w-48 h-48 md:w-72 md:h-72"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Website Design & Development",
    description:
      "Clean, modern websites built to showcase your business. No bloat, no filler — just what your customers need to find you and take action.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description:
      "Every site we build is optimized for local search from day one. We make sure your business shows up when nearby customers are looking.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Changes",
    description:
      "Need an update? A new page? Changed hours? We're on retainer and ready to make changes quickly — so your site always stays current.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
      </svg>
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "We don't drag projects out for months. Your site gets built quickly and launched efficiently so you can start reaching customers sooner.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            What We Offer
          </h2>
          <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
            Everything a local business needs to get online and stay there.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg border border-cream-dark hover:border-amber/40 transition-colors bg-cream/50"
            >
              <div className="text-amber mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We chat about your business, your goals, and what you need from your website. No jargon, no pressure.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We build your site — clean, fast, and optimized for search engines. You review it and we refine until it's right.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Your site goes live. We handle the technical details so you can focus on running your business.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Need changes? We're a message away. Your site stays up-to-date and working for you, always.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            How It Works
          </h2>
          <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
            Simple, straightforward, and designed to respect your time.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <span className="text-5xl font-bold text-amber/20">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-charcoal mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Coda?</h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Big agencies charge big prices and move at their own pace. Coda is
            different. You work directly with me — one person who understands
            your business and can make things happen fast. No layers of
            bureaucracy, no waiting weeks for a small text change.
          </p>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            I specialize in helping local businesses get a professional online
            presence without the overhead. Your website should be an asset, not a
            headache.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-amber">Fast</div>
              <p className="mt-2 text-sm text-white/60">
                Quick turnaround on builds and changes
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber">Personal</div>
              <p className="mt-2 text-sm text-white/60">
                Work directly with me, every time
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber">Reliable</div>
              <p className="mt-2 text-sm text-white/60">
                On retainer and always responsive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Let&apos;s Get Started
          </h2>
          <p className="mt-4 text-charcoal-light text-lg">
            Ready to get your business online? Reach out and let&apos;s talk
            about what you need.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href="mailto:hello@codawebsites.com"
              className="flex items-center justify-center gap-3 text-lg text-charcoal hover:text-amber transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              hello@codawebsites.com
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-3 text-lg text-charcoal hover:text-amber transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              (555) 123-4567
            </a>
          </div>
          <div className="mt-10">
            <a
              href="mailto:hello@codawebsites.com"
              className="inline-flex items-center justify-center bg-amber text-white px-10 py-4 rounded-md text-lg font-medium hover:bg-amber-dark transition-colors"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-cream-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Coda" width={24} height={24} />
          <span className="text-sm font-semibold text-charcoal">CODA</span>
        </div>
        <p className="text-sm text-charcoal-light">
          &copy; {new Date().getFullYear()} Coda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
