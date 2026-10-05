import { type FormEvent, type ReactNode, useState } from "react";
import { Mail, MessageCircle, Facebook, Linkedin } from "lucide-react";

const SERVICES = [
  "Shopify Profit Leak Audit",
  "SEO & Search Growth",
  "Meta & Google Ads",
  "Social Media & Content",
  "Shopify & E-commerce Growth",
  "Web Development & Landing Pages",
  "Growth Strategy & Lead Generation",
  "Other / Not sure",
];

const BUDGETS = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

type Fields = {
  name: string;
  email: string;
  business: string;
  service: string;
  budget: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  business: "",
  service: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = { ...fields, at: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("sa-inquiries") ?? "[]") as unknown[];
    localStorage.setItem("sa-inquiries", JSON.stringify([payload, ...existing].slice(0, 20)));
    setSent(true);
    setFields(EMPTY);
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
          Get In Touch
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Let’s Talk About Your Growth
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Tell me about your business and goals. I’ll respond with next steps or a strategy call
          invite.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Sardar Abdul Ahad</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Founder, SA Marketing
              <br />
              Digital Marketing & E-commerce Growth Strategist
            </p>
            <ul className="mt-8 flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <a
                  href="mailto:sardarabdulahad281@gmail.com"
                  className="text-fg transition-colors hover:text-primary"
                >
                  sardarabdulahad281@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-5 text-primary" />
                <a
                  href="https://wa.me/923364713763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg transition-colors hover:text-primary"
                >
                  +92 336 4713763
                </a>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.facebook.com/sardaradsagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-card text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sardar-abdul-ahad-a7499b406/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-card text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-10">
              <p className="font-display text-2xl font-semibold text-ink">Message received.</p>
              <p className="mt-3 leading-relaxed text-muted">
                Thanks for reaching out. I’ll review the details and get back to you at the email
                you provided. For a faster reply, message me on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 inline-flex h-11 w-fit items-center rounded-md border border-border-strong px-5 text-sm font-semibold text-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    required
                    value={fields.name}
                    onChange={(e) => setFields({ ...fields, name: e.target.value })}
                    placeholder="Your name"
                    className="field"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={fields.email}
                    onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    placeholder="you@company.com"
                    className="field"
                  />
                </Field>
              </div>
              <Field label="Business / Website" className="mt-4">
                <input
                  value={fields.business}
                  onChange={(e) => setFields({ ...fields, business: e.target.value })}
                  placeholder="Company name or website URL"
                  className="field"
                />
              </Field>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Service Required">
                  <select
                    value={fields.service}
                    onChange={(e) => setFields({ ...fields, service: e.target.value })}
                    className="field"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select
                    value={fields.budget}
                    onChange={(e) => setFields({ ...fields, budget: e.target.value })}
                    className="field"
                  >
                    <option value="">Select range</option>
                    {BUDGETS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Message" className="mt-4">
                <textarea
                  rows={5}
                  value={fields.message}
                  onChange={(e) => setFields({ ...fields, message: e.target.value })}
                  placeholder="Tell me about your goals, current challenges, or what you'd like to achieve..."
                  className="field min-h-28 resize-y"
                />
              </Field>
              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-fg transition-colors duration-150 hover:bg-primary-dark"
              >
                Let's Talk About Your Growth
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
