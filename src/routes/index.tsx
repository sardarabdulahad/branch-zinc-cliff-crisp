import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/about";
import { Audit } from "@/components/site/audit";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Nav } from "@/components/site/nav";
import { Services } from "@/components/site/services";
import { Skills } from "@/components/site/skills";
import { Work } from "@/components/site/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Audit />
        <Services />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
