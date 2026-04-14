import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";
import FooterBar from "@/components/FooterBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Capabilities from "@/components/sections/Capabilities";
import Projects from "@/components/sections/Projects";
import Credentials from "@/components/sections/Credentials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline z-50 pointer-events-none" />

      {/* Navigation */}
      <Sidebar />
      <MobileHeader />
      <MobileNav />
      <FooterBar />

      {/* Main content — offset by sidebar on desktop */}
      <main className="lg:ml-64 pb-20 lg:pb-10 px-6 pt-20 lg:pt-10 max-w-5xl mx-auto lg:max-w-none lg:mr-8">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Capabilities />
        <Projects />
        <Credentials />
        <Contact />
      </main>

    </div>
  );
}
