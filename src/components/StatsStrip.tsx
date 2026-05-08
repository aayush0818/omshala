import StatCounter from "./StatCounter";

const stats = [
  { value: 12, suffix: "+", label: "Years of practice" },
  { value: 1000, suffix: "+", label: "Participants held" },
  { value: 435, suffix: " Hz", label: "Healing frequency" },
  { value: 5, suffix: "+", label: "Countries reached" },
];

const StatsStrip = () => {
  return (
    <section className="py-20 md:py-28 border-y border-foreground/5 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-clay/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 max-w-5xl mx-auto">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;