import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import heroInterior from "@/assets/hero-interior.jpg";
import heroNasiLemak from "@/assets/hero-nasi-lemak.jpg";
import heroWok from "@/assets/hero-wok.jpg";
import heroFeast from "@/assets/hero-feast.jpg";
import heroCelebration from "@/assets/gallery-celebration.jpg";

const slides = [
  { src: heroInterior, alt: "PLACEHOLDER — dining room interior, warm lantern light" },
  { src: heroNasiLemak, alt: "PLACEHOLDER — nasi lemak with beef rendang on banana leaf" },
  { src: heroWok, alt: "PLACEHOLDER — wok hei flame in the kitchen" },
  { src: heroFeast, alt: "PLACEHOLDER — shared table of Malaysian dishes from above" },
  { src: heroCelebration, alt: "PLACEHOLDER — guests celebrating together at a long table" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1920}
          height={1280}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-[2000ms] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pt-32 pb-20 lg:px-10 lg:pb-28">
        <p className="text-[0.75rem] tracking-[0.32em] text-gold uppercase">Est. Farringdon</p>
        <h1 className="mt-6 max-w-4xl font-display text-[3.25rem] leading-[0.95] font-semibold text-ink-foreground sm:text-7xl lg:text-[6.5rem]">
          Malaysia
          <br />
          Boleh
        </h1>
        <p className="mt-7 max-w-xl font-display text-xl text-ink-foreground/85 italic lg:text-2xl">
          Authentic Malaysian Cuisine and Hospitality
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-4">
          <a
            href="#reservations"
            className="bg-gold px-9 py-4 text-[0.95rem] font-medium text-accent-foreground transition-colors hover:bg-gold-soft"
          >
            Book Now
          </a>
          <a
            href="#pickup"
            className="border border-ink-foreground/35 px-9 py-4 text-[0.95rem] font-medium text-ink-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Order Pickup
          </a>
        </div>

        <div className="mt-14 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-[2px] w-10 transition-colors",
                i === index ? "bg-gold" : "bg-ink-foreground/30 hover:bg-ink-foreground/60",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
