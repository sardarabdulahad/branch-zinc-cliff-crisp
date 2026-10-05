import {
  Search,
  CircleDollarSign,
  Bell,
  ShoppingBag,
  LayoutPanelTop,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "SEO & Search Growth",
    body: "Technical SEO, on-page optimization, e-commerce SEO, local SEO, keyword & competitor research, content strategy, AEO and GEO to improve organic visibility and qualified traffic.",
    icon: Search,
  },
  {
    title: "Meta & Google Ads",
    body: "Campaign strategy, audience research, creative strategy, optimization and performance reporting for Meta (Facebook/Instagram) and Google Ads that focus on efficient customer acquisition.",
    icon: CircleDollarSign,
  },
  {
    title: "Social Media & Content",
    body: "Social media marketing and content strategy designed to build brand presence, engage the right audience and support lead generation and paid campaigns.",
    icon: Bell,
  },
  {
    title: "Shopify & E-commerce Growth",
    body: "Store optimization, product & collection improvements, Shopify SEO, conversion rate optimization and profit leak auditing to turn more visitors into customers.",
    icon: ShoppingBag,
  },
  {
    title: "Web Development & Landing Pages",
    body: "Landing page development, conversion-focused web experiences and graphic design for social and ad creatives that support your marketing goals.",
    icon: LayoutPanelTop,
  },
  {
    title: "Growth Strategy & Lead Generation",
    body: "Digital marketing strategy, conversion & funnel strategy, performance marketing and lead generation systems tailored to your business stage and goals.",
    icon: Activity,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          What I Do
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Services Built for Measurable Growth
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Clear service categories focused on visibility, acquisition and conversion — not just
          activity.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-card"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-primary-soft text-primary">
                <service.icon className="size-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
