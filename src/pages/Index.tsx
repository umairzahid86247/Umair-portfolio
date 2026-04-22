import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Umair Zahid. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Index;
