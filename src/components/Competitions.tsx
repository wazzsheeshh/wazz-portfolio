import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Competitions = () => {
  const competitions = [
    { name: "Google Code Jam", achievement: "World Finalist" },
    { name: "ICPC World Finals", achievement: "Gold Medal" },
    { name: "HackMIT", achievement: "Champion" },
    { name: "DEFCON Capture The Flag", achievement: "Top 10" },
    { name: "Facebook Hacker Cup", achievement: "Top 25" },
    { name: "Apple Swift Student Challenge", achievement: "Grand Winner" },
    { name: "Imagine Cup", achievement: "Global Champion" },
    { name: "NVIDIA AI Lab Grand Prix", achievement: "Winner" },
    { name: "ETH Zurich Robotics Challenge", achievement: "Champion" },
    { name: "DeepMind AlphaCode Arena", achievement: "Rank #1" },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">World Competitions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Dominating the global stage in programming and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <Card
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:animate-float">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-gradient transition-all">
                    {comp.name}
                  </h3>
                  <p className="text-primary font-medium">{comp.achievement}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Competitions;
