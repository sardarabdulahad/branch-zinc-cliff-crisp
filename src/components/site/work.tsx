type Tag = "client" | "personal" | "partner" | "experiment";

const CASES: {
  title: string;
  body: string;
  meta: string;
  tag: Tag;
  label: string;
}[] = [
  {
    title: "CaseKit",
    body: "Shopify order audit and support automation extension. Managed paid ads for three months, then joined the project as a partner working alongside the CTO on growth and product direction.",
    meta: "Role: Paid Ads → Partner  ·  Platform: Shopify",
    tag: "partner",
    label: "Partnership",
  },
  {
    title: "Shopify Store Audits",
    body: "Conducted full and focused reviews of multiple Shopify stores covering homepage, collections, product pages, checkout flow, tracking readiness and ad-landing alignment. Delivered prioritized lists of conversion and trust improvements.",
    meta: "Focus: Conversion · UX · Ad-readiness",
    tag: "client",
    label: "Client Work",
  },
  {
    title: "Ameer Fitness Lounge",
    body: "Digital marketing support and growth initiatives for a fitness brand. Work centered on visibility, content and local presence.",
    meta: "Focus: Local visibility & brand presence",
    tag: "personal",
    label: "Personal Project",
  },
  {
    title: "AI Content & YouTube Growth",
    body: "Personal experiment applying content strategy, SEO principles and audience growth tactics to YouTube and AI-assisted content workflows.",
    meta: "Focus: Content systems & organic growth",
    tag: "experiment",
    label: "Experiment",
  },
  {
    title: "VeriOrders",
    body: "Campaign strategy work focused on structure, targeting and creative direction for performance marketing.",
    meta: "Focus: Campaign architecture",
    tag: "client",
    label: "Campaign Strategy",
  },
  {
    title: "Documented Results",
    body: "This space is reserved for documented results from current and upcoming client engagements. Metrics and detailed case studies will be added as work is completed and permission is granted.",
    meta: "Transparent results only",
    tag: "personal",
    label: "Ongoing",
  },
];

const TAG_CLASS: Record<Tag, string> = {
  client: "bg-primary-soft text-primary",
  partner: "bg-primary-soft text-primary",
  personal: "bg-surface text-fg",
  experiment: "bg-surface text-muted",
};

export function Work() {
  return (
    <section id="work" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Selected Work
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Projects & Case Studies
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Real projects, experiments and client work. Results are shared only when documented.
          Personal projects and partnerships are clearly labeled.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-8 transition-colors duration-200 hover:border-primary/30"
            >
              <span
                className={`mb-4 inline-block rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${TAG_CLASS[item.tag]}`}
              >
                {item.label}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.body}</p>
              <p className="mt-4 text-xs text-subtle">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
