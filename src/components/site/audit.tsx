import { Check } from "lucide-react";

const AREAS = [
  "Conversion friction points",
  "Product page performance",
  "Collection structure & UX",
  "SEO opportunities",
  "Landing page effectiveness",
  "Customer acquisition channels",
  "Meta Ads efficiency",
  "Google Ads structure",
  "Retention & post-purchase",
  "Checkout & funnel friction",
  "Tracking & analytics setup",
  "RTO / COD issues (where relevant)",
];

const DELIVERABLES = [
  "Store & funnel friction analysis",
  "SEO & page-level recommendations",
  "Ads & acquisition review",
  "Prioritized action roadmap",
];

export function Audit() {
  return (
    <section id="audit" className="bg-surface py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Signature Offer
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Where Is Your Shopify Store Losing Money?
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted">
            Most Shopify stores leave revenue on the table through conversion friction, weak
            product pages, tracking gaps, or under-optimized ads. I systematically review the
            areas that quietly drain profit so you can prioritize high-impact fixes.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {AREAS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-fg">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex h-12 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-dark"
          >
            Request a Shopify Store Audit
          </a>
        </div>

        <aside className="relative overflow-hidden rounded-xl border border-border bg-card p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
          <h3 className="font-display text-xl font-semibold text-ink">What You Receive</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A clear, prioritized breakdown of overlooked opportunities across your store, traffic
            sources and conversion path — focused on practical next steps rather than vanity
            metrics.
          </p>
          <ul className="mt-8 flex flex-col gap-3.5">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-fg">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
