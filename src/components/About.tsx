import { Card } from "@/components/ui/card";

const About = () => {
  const influences = [
    { name: "Elon Musk", trait: "Visionary Innovation" },
    { name: "Jensen Huang", trait: "AI Leadership" },
    { name: "Bill Gates", trait: "Tech Philanthropy" },
    { name: "Steve Jobs", trait: "Design Excellence" },
    { name: "Satoshi Nakamoto", trait: "Blockchain Pioneer" },
    { name: "Mark Zuckerberg", trait: "Social Impact" },
    { name: "Jeff Bezos", trait: "Scale & Execution" },
    { name: "Magnus Carlsen", trait: "Chess Mastery" },
    { name: "Hikaru Nakamura", trait: "Speed Chess" },
    { name: "Bobby Fischer", trait: "Strategic Genius" },
    { name: "Mikhail Tal", trait: "Creative Attack" },
    { name: "Anatoly Karpov", trait: "Positional Play" },
    { name: "Satya Nadella", trait: "Cloud Innovation" },
    { name: "Vitalik Buterin", trait: "Ethereum Vision" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">The Fusion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining the greatest minds in technology, business, and chess into one visionary force.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {influences.map((influence, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
                  {influence.name}
                </h3>
                <p className="text-sm text-muted-foreground">{influence.trait}</p>
              </div>
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 md:p-12 rounded-3xl animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <p className="text-lg md:text-xl text-center text-foreground/80 leading-relaxed">
            A unique synthesis of entrepreneurial vision, technological mastery, strategic brilliance, 
            and creative innovation. WAZZ represents the convergence of humanity's greatest achievements 
            in computation, business, and intellectual competition—embodied in a single, extraordinary individual.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
