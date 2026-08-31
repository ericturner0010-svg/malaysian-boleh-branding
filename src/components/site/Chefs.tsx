const chefs = [
  {
    name: "Chef Tim",
    role: "Head Chef",
    bio: "Thirty-plus years of culinary experience across cuisines, known above all for his Char Kuey Teow. Meticulous and heartfelt in equal measure, he brings his own Malaysian twist to every dish that leaves the kitchen.",
  },
  {
    name: "Chef Wai",
    role: "Chef de Partie",
    bio: "Newer to the team but deeply experienced, with Guangzhou as his favourite culinary destination. He brings vibrant flavour and true wok hei technique to every dish he touches.",
  },
];

export function Chefs() {
  return (
    <section id="chefs" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="max-w-2xl font-display text-4xl leading-tight font-semibold lg:text-6xl">
          The people at the wok
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {chefs.map((c) => (
            <article key={c.name} className="grid gap-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
              {/* Intentionally empty — real chef photography to be added */}
              <div
                aria-label={`Photograph of ${c.name} coming soon`}
                className="flex aspect-4/5 items-end border border-dashed border-border bg-muted/50 p-4"
              >
                <span className="text-[0.6875rem] tracking-[0.2em] text-muted-foreground/70 uppercase">
                  Photo to follow
                </span>
              </div>
              <div>
                <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">{c.role}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{c.name}</h3>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">{c.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
