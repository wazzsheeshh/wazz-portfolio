import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const Education = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            World-class academic foundation in cutting-edge technologies
          </p>
        </div>

        <div className="space-y-12">
          {/* MIT */}
          <Card className="glass-card p-8 md:p-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center glass">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Massachusetts Institute of Technology (MIT)</h3>
                  <p className="text-xl text-primary mb-1">Ph.D. Computer Science — AI & Quantum Computing</p>
                  <p className="text-muted-foreground">2031 - 2034</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Research Fellow di MIT Computer Science and AI Laboratory (CSAIL)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Breakthrough Prize in Mathematics untuk kontribusi di quantum algorithms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Kolaborasi riset dengan Google Quantum AI dan IBM Research</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Published papers di Nature, Science, dan Physical Review Letters</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Lead MIT Quantum Computing Initiative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* University of Stuttgart */}
          <Card className="glass-card p-8 md:p-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center glass">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">University of Stuttgart</h3>
                  <p className="text-xl text-primary mb-1">M.Sc. Quantum Computing & Autonomous Systems</p>
                  <p className="text-muted-foreground">2029 - 2031</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Peneliti tamu di Max Planck Institute for Intelligent Systems</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Membangun prototype Neural Quantum Engine</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Pembicara di European AI Robotics Congress 2034</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Intern riset di Mercedes-Benz Autonomous Division</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Jurnal dikutip 10,000+ kali dalam 2 tahun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Institut Teknologi Bandung */}
          <Card className="glass-card p-8 md:p-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center glass">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Institut Teknologi Bandung (ITB)</h3>
                  <p className="text-xl text-primary mb-1">B.Eng. Informatics Engineering — STEI-K</p>
                  <p className="text-muted-foreground">2027 - 2029</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Ketua Lab Machine Learning & Autonomous Systems</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Founder komunitas ITB Future Coders</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Asisten dosen AI, Algoritma, dan Sistem Terdistribusi</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Startup kampus diakuisisi Gojek</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">Pembicara seminar AI tingkat ASEAN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
