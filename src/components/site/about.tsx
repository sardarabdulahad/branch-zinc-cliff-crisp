const HIGHLIGHTS = [
  { title: "Independent Founder", body: "Direct collaboration, clear accountability" },
  { title: "Shopify-Focused Edge", body: "Profit leak audits + e-commerce growth" },
  { title: "Full-Funnel Thinking", body: "SEO · Ads · Content · Conversion" },
  { title: "Outcome-Oriented", body: "Prioritized actions over vanity metrics" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="overflow-hidden rounded-xl border border-border bg-card text-center">
          <img
            src="/images/sardar-abdul-ahad.jpg"
            alt="Sardar Abdul Ahad, founder of SA Marketing"
            className="aspect-portrait w-full object-cover object-top"
          />
          <div className="px-6 py-6">
            <h3 className="font-display text-2xl font-semibold text-ink">Sardar Abdul Ahad</h3>
            <p className="mt-1 text-sm font-medium text-primary">
              Founder & Digital Marketing Strategist
            </p>
            <p className="mt-3 text-sm text-subtle">SA Marketing · Based in Pakistan</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">About</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Practical Strategy. Hands-On Execution.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              I’m Sardar Abdul Ahad, founder of SA Marketing. I work as an independent Digital
              Marketing & E-commerce Growth Strategist helping businesses improve visibility,
              acquire customers more efficiently, and convert traffic into revenue.
            </p>
            <p>
              My work spans SEO, paid advertising (Meta & Google), social media and content
              strategy, Shopify store optimization, landing pages and conversion-focused growth
              systems. A core differentiator is the Shopify Profit Leak Auditor approach —
              systematically identifying where stores quietly lose money across product pages,
              funnels, tracking and acquisition.
            </p>
            <p>
              I bring practical training and hands-on experience across these channels. I operate
              as a focused consultant and founder rather than a large agency, so you work directly
              with the person responsible for strategy and execution.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-md border border-border bg-card px-5 py-4">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-xs text-subtle">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
