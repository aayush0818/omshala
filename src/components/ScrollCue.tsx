const ScrollCue = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${className}`}
  >
    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">Scroll</span>
    <div className="relative h-10 w-px overflow-hidden bg-foreground/10">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-brand-purple to-transparent animate-scroll-cue" />
    </div>
  </div>
);

export default ScrollCue;
