import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-[36rem] rounded-full bg-primary/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" />
          Digital Marketing & E-commerce Growth
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl">
          Digital Marketing That Turns Traffic Into Growth.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I help businesses improve their visibility, acquire customers and grow revenue through
          SEO, paid advertising, social media, e-commerce optimization and conversion-focused
          digital strategies.
        </p>
        <p className="mt-4 text-sm font-medium text-primary">
          Shopify Profit Leak Auditor | Digital Marketing & E-commerce Growth Strategist
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-fg transition-all duration-200 hover:bg-primary-dark hover:-translate-y-0.5"
          >
            Book a Strategy Call
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-lg border border-border-strong px-6 text-sm font-semibold text-ink transition-colors duration-150 hover:border-muted"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
