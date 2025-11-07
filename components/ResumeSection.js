import { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";

export default function ResumeSection({ data }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const categories = [
    { label: "Systems Engineering", entries: data.systems },
    { label: "Software Engineering", entries: data.software },
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0].label);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeEntries = categories.find((category) => category.label === activeCategory)?.entries || [];

  return (
    <section
      id="resume"
      ref={sectionRef}
      className={`relative z-10 px-6 pb-24 pt-10 text-slate-100 transition duration-700 sm:pb-32 sm:pt-16 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terminal-accent">
              Resume Highlights
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Crafted across disciplines.</h2>
            <p className="text-base text-slate-400">
              Designed, documented, and delivered systems that stay online when everyone else is sleeping.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => {
              const isActive = category.label === activeCategory;
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    isActive
                      ? "border-terminal-accent bg-terminal-accent/20 text-terminal-accent"
                      : "border-terminal-border text-slate-400 hover:border-terminal-accent/60 hover:text-terminal-accent"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid auto-rows-[1fr] items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeEntries.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
