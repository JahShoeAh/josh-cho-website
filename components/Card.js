export default function Card({
  title,
  timeline,
  description,
  linkLabel,
  linkUrl,
  tags = [],
  icon,
  repoLabel,
  repoUrl,
}) {
  const initials = icon || title.slice(0, 2).toUpperCase();

  return (
    <article className="flex h-[340px] flex-col gap-4 rounded-2xl border border-terminal-border/70 bg-terminal-panel/70 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition hover:border-terminal-accent/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)] sm:h-[320px]">
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
        <div className="flex flex-wrap items-center gap-3 text-sm text-terminal-accent">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M12.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-.707.293H6a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l8-8Z" />
              <path d="M5 10H3a1 1 0 0 0-1 1v6c0 1.105.672 2 1.5 2h12c.828 0 1.5-.895 1.5-2v-2h-2v2H4v-6h1v-2Z" />
            </svg>
            <a href={linkUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">
              {linkLabel}
            </a>
          </div>
          {repoUrl && (
            <div className="flex items-center gap-2 pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 0 0-2.533 15.586c.4.074.547-.174.547-.387 0-.19-.007-.693-.01-1.36-2.225.484-2.695-1.073-2.695-1.073-.364-.924-.89-1.171-.89-1.171-.727-.497.055-.487.055-.487.804.056 1.227.826 1.227.826.715 1.225 1.874.872 2.33.667.073-.52.28-.872.508-1.073-1.776-.202-3.644-.888-3.644-3.955 0-.874.312-1.588.823-2.149-.083-.203-.357-1.017.078-2.12 0 0 .67-.215 2.2.821A7.68 7.68 0 0 1 10 5.068a7.68 7.68 0 0 1 2.003.27c1.53-1.036 2.198-.821 2.198-.821.437 1.103.163 1.917.08 2.12.513.561.822 1.275.822 2.149 0 3.074-1.872 3.75-3.654 3.948.288.247.544.735.544 1.482 0 1.07-.01 1.934-.01 2.197 0 .215.146.464.55.386A8.001 8.001 0 0 0 10 2Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href={repoUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">
                {repoLabel || "GitHub"}
              </a>
            </div>
          )}
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
