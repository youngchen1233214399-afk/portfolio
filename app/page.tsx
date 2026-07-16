import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { KeyPrinciples } from "@/components/key-principles";
import { Manifesto } from "@/components/manifesto";
import { Navigation } from "@/components/navigation";
import { ProjectShowcase } from "@/components/project-showcase";
import { WhatIDo } from "@/components/what-i-do";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <About />
      <ProjectShowcase />
      <KeyPrinciples />
      <WhatIDo />
      <Footer />
    </main>
  );
}
