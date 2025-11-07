export default function Card({ title, timeline, description, linkLabel, linkUrl, tags = [], icon }) {
  const initials = icon || title.slice(0, 2).toUpperCase();

  return (
    <article className="flex h-[300px] flex-col gap-4 rounded-2xl border border-terminal-border/70 bg-terminal-panel/70 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition hover:border-terminal-accent/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-terminal-accent/60 bg-terminal-panel text-sm font-bold text-terminal-accent">
          {initials}
        </div>
        <div className="min-w-0 space-y-1">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-terminal-accent/80 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            {timeline}
          </p>
          <h4 className="text-lg font-semibold text-white leading-snug overflow-hidden text-ellipsis" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {title}
          </h4>
        </div>
      </div>
      <p
        className="flex-grow overflow-hidden text-sm leading-relaxed text-slate-300"
        style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" }}
      >
        {description}
      </p>
      <div className="mt-auto space-y-3">
        <div className="flex items-center gap-2 text-sm text-terminal-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M12.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-.707.293H6a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l8-8Z" />
            <path d="M5 10H3a1 1 0 0 0-1 1v6c0 1.105.672 2 1.5 2h12c.828 0 1.5-.895 1.5-2v-2h-2v2H4v-6h1v-2Z" />
          </svg>
          <a href={linkUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">
            {linkLabel}
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center rounded-full border border-terminal-border bg-terminal-base/60 px-3 py-1 text-xs text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
