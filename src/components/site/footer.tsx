export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} SA Marketing · Sardar Abdul Ahad. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-6 text-sm text-subtle">
          <a href="#home" className="hover:text-primary">
            Home
          </a>
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#audit" className="hover:text-primary">
            Shopify Audit
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
