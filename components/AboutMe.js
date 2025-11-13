export default function AboutMe() {
  const focusAreas = [
    {
      title: "Systems Engineering",
      description:
        "As of right now, my current focus in schohol is Systems Engineering. I was inspired to enter this field after one of my classes forced me to build a Unix-Shell (partially not by will). After enjoying that thoroughly, I decided to continue that course load as I am currently taking a course on compilers.",
    },
    {
      title: "Collaborative Work",
      description:
        "Honestly, I truly believe that one of my strongest skills is communication. I love working with people, whether that is through club events or code. As I've gone on with my coursework, I understand that this skill is pretty rare in my field, so I'd like to give myself a bit of a pat on the back.",
    },
  ];

  const quickFacts = [
    { label: "Powerlifting", value: "I currently compete in the 83kg weightclass" },
    { label: "Bass Guitar", value: "Check out my band Twin XL (only on Purdue Campus)" },
    { label: "Thrifting", value: "I also run a depop page under the name JahShoeAh" },
    { label: "NBA", value: "As a life-long Pacer's fan, I love Haliburton"},
    { label: "General Awesomeness", value: "Need I say more?" },
  ];

  return (
    <section id="about" className="relative z-10 px-6 pb-24 text-slate-100 sm:pb-32">
      <div className="mx-auto flex w-full flex-col gap-10 rounded-3xl border border-terminal-border/70 bg-terminal-panel/60 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] sm:max-w-5xl sm:p-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terminal-accent">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">If you're curious</h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Yo, my name is Josh. I am a 20 year-old student studying Computer Science. I come from the small town in Indiana and am looking for an internship (partially to get out of the cornfields).
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-terminal-border/70 bg-terminal-base/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terminal-accent/80">
              Strengths
            </p>
            <div className="space-y-5">
              {focusAreas.map((item) => (
                <div key={item.title} className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-terminal-border/70 bg-terminal-base/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terminal-accent/80">
              Hobbies
            </p>
            <dl className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="border-b border-terminal-border/40 pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">{fact.label}</dt>
                  <dd className="text-base font-medium text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
