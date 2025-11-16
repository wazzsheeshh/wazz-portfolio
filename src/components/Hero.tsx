import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/wazz-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 animate-pulse opacity-50" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Image */}
        <div className="order-2 lg:order-1 animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <img
              src={heroImage}
              alt="WAZZ - Raja Fawaz"
              className="relative w-full h-auto rounded-3xl shadow-2xl glass-card"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="order-1 lg:order-2 space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-gradient">WAZZ</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground/90">
              Raja Fawaz
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              The Future-Tech Polymath & World-Class Innovator
            </p>
          </div>

          <div className="space-y-3 text-foreground/80 text-lg">
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              CEO NVIDIA pada usia 21 tahun
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              Pemilik 60% saham Apple & Microsoft
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              Grandmaster Catur termuda Indonesia & Juara Dunia
            </p>
            <p className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              Visioner AI, Blockchain, dan Quantum Engineering
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white glow">
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Download CV
            </Button>
<<<<<<< HEAD
            <a href="#contact">
              <Button size="lg" variant="outline" className="group glass-card border-primary/30 hover:border-primary text-foreground">
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
=======
            <Button size="lg" variant="outline" className="group glass-card border-primary/30 hover:border-primary text-foreground">
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
>>>>>>> 165ad672107b7d8bd75666545313d498959de9e6
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
