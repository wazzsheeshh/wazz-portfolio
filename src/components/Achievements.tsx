import { Card } from "@/components/ui/card";
import { Cpu, Target, DollarSign } from "lucide-react";

const Achievements = () => {
  const techAchievements = [
    "CEO NVIDIA pada usia 21 tahun",
    "Mengakuisisi 60% saham Apple & Microsoft",
    "Menciptakan Wazz Neural Architecture (WNA) yang mengalahkan GPT-10",
    "Mendirikan WazzOS, sistem operasi berbasis AI generasi baru",
  ];

  const chessAchievements = [
    "Grandmaster pada usia 13 tahun",
    "Juara Dunia Catur dari Indonesia",
    "Rating FIDE 3200 — tertinggi sepanjang sejarah",
    "Triple Crown Champion (Classical, Rapid, Blitz)",
  ];

  const businessAchievements = [
    "Forbes 'Youngest Trillionaire'",
    "Membangun WazzVerse, metaverse blockchain generasi ke-4",
    "Menciptakan WAZZ Coin yang menyalip Bitcoin dalam 6 bulan",
    "Pemilik mayoritas saham di perusahaan Fortune 500",
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Super Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Redefining excellence across technology, chess, and business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technology */}
          <Card className="glass-card p-8 space-y-6 group animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:animate-glow-pulse">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Technology</h3>
            </div>
            <div className="space-y-4">
              {techAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-glow-pulse" />
                  <p className="text-foreground/80 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Chess */}
          <Card className="glass-card p-8 space-y-6 group animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:animate-glow-pulse">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Chess</h3>
            </div>
            <div className="space-y-4">
              {chessAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-glow-pulse" />
                  <p className="text-foreground/80 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Business */}
          <Card className="glass-card p-8 space-y-6 group animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:animate-glow-pulse">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Business</h3>
            </div>
            <div className="space-y-4">
              {businessAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-glow-pulse" />
                  <p className="text-foreground/80 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
