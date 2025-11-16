import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Competitions from "@/components/Competitions";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Education />
      <Competitions />
      <Achievements />
      <Timeline />
      <Footer />
    </main>
  );
};

export default Index;
