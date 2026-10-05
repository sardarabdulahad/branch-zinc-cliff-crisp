import { Award, Clock } from "lucide-react";

const SKILLS = [
  "Digital Marketing Strategy",
  "SEO (Technical, On-Page, Off-Page)",
  "E-commerce SEO",
  "Keyword & Competitor Research",
  "AEO & GEO",
  "Meta Ads",
  "Google Ads",
  "Campaign Strategy & Optimization",
  "Audience & Creative Strategy",
  "Social Media Marketing",
  "Content Strategy",
  "Lead Generation",
  "Conversion & Funnel Strategy",
  "Shopify Optimization",
  "Profit Leak Auditing",
  "Landing Page Development",
  "Graphic Design",
  "Ad Creatives",
];

const TRAINING = [
  { title: "HubSpot Certification", note: "Digital marketing certification", done: true },
  { title: "Bano Qabil — Digital Marketing", note: "Structured digital marketing training", done: true },
  { title: "SEO Training", note: "Technical, on-page and e-commerce SEO", done: true },
  { title: "Graphic Design", note: "Currently completing", done: false },
  { title: "Web Development", note: "Upcoming / current training", done: false },
];

export function Skills() {
  return (
    <section id="skills" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Capabilities
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Skills & Learning
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Core competencies and ongoing professional development.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
              <span className="h-5 w-1 rounded-full bg-primary" />
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-card px-3.5 py-2 text-sm text-fg transition-colors duration-150 hover:border-primary/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
              <span className="h-5 w-1 rounded-full bg-primary" />
              Training & Certifications
            </h3>
            <ul className="flex flex-col gap-3">
              {TRAINING.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3.5 rounded-md border border-border bg-card px-4 py-3.5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                    {item.done ? <Award className="size-5" /> : <Clock className="size-5" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{item.title}</span>
                    <span className="text-xs text-subtle">{item.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
