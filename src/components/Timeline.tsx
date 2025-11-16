import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const milestones = [
    { year: 2009, title: "Born", description: "Lahirnya Wazz di Indonesia" },
    { year: 2021, title: "First AI", description: "Menciptakan AI pertama di usia 13 tahun" },
    { year: 2027, title: "ITB", description: "Masuk Institut Teknologi Bandung" },
    { year: 2029, title: "Stuttgart", description: "Melanjutkan master di University of Stuttgart" },
    { year: 2031, title: "MIT & CEO NVIDIA", description: "Masuk MIT dan menjadi CEO NVIDIA termuda" },
    { year: 2033, title: "World Champion", description: "Juara Dunia Catur" },
    { year: 2034, title: "Global Icon", description: "Menjadi ikon teknologi global" },
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const handleScroll = () => {
      const items = timeline.querySelectorAll(".timeline-item");
      
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const timelineCenter = timelineRect.left + timelineRect.width / 2;
        const distance = Math.abs(itemCenter - timelineCenter);
        const maxDistance = timelineRect.width / 2;
        const proximity = 1 - Math.min(distance / maxDistance, 1);
        
        if (proximity > 0.3) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering || !timeline) return;
      
      const rect = timeline.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const scrollPercentage = x / rect.width;
      const maxScroll = timeline.scrollWidth - timeline.clientWidth;
      
      timeline.scrollTo({
        left: scrollPercentage * maxScroll,
        behavior: "smooth"
      });
    };

    timeline.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      timeline.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A timeline of extraordinary milestones
          </p>
        </div>

        <div
          ref={timelineRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-move"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="timeline-item flex-shrink-0 w-80 glass-card p-8 snap-center opacity-50 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="text-6xl font-bold text-gradient">{milestone.year}</div>
                <h3 className="text-2xl font-semibold text-foreground">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 animate-fade-up">
          Move your cursor to navigate the timeline →
        </p>
      </div>

      <style>{`
        .timeline-item.active {
          opacity: 1;
          transform: scale(1.05);
        }
        .timeline-item.active .absolute {
          transform: scaleX(1);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
