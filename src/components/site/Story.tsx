import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import merdeka from "@/assets/story-merdeka.jpg";
import kl1993 from "@/assets/story-1993.jpg";
import unity from "@/assets/unity-table.jpg";
import feast from "@/assets/hero-feast.jpg";

const panels = [
  {
    marker: "1957",
    heading: "Merdeka.",
    sub: "The cry that made a nation.",
    body: 'On 31 August 1957, in a packed stadium in Kuala Lumpur, Tunku Abdul Rahman raised his fist and cried "Merdeka" — Independence. From that moment, the world watched the birth of a young nation made of Malays, Chinese and Indians. Many doubted such a diverse society could stay united — but history taught quickly that diversity is strength, not weakness.',
    img: merdeka,
    alt: "PLACEHOLDER — archival 1957 independence celebration, Kuala Lumpur",
    mono: true,
  },
  {
    marker: "1993",
    heading: "Malaysia Boleh!",
    sub: "Malaysia can do it.",
    body: 'Fast-forward thirty-six years: in 1993, Malaysia\'s fourth Prime Minister rallied the country with another rallying cry — "Malaysia Boleh! — Malaysia can do it!" — capturing the nation\'s determination to achieve Vision 2020. By then, Malaysia had already defied the cynics: it stayed united, emerged as one of Southeast Asia\'s Tiger economies, and shared tears and sweat, celebrations and struggles. Through everything, one simple joy bound the country together more than any political slogan: food.',
    img: kl1993,
    alt: "PLACEHOLDER — archival 1990s Kuala Lumpur skyline under construction",
    mono: true,
  },
  {
    marker: "The table",
    heading: "One simple joy bound us together.",
    sub: "Sambal, smiles, and a shared identity.",
    body: "Malaysian food tells the story of that unity. From different cultural traditions, people learned to celebrate each other's cuisines and invent dishes uniquely their own — from fragrant Nasi Lemak to wok-fried Char Kuey Teow to flaky Roti Canai dunked in rich curry. Tables became places where differences melted away — the best flavours of Asia turned into a shared identity, served with sambal and smiles. Over satay skewers and bowls of laksa, friendships blossomed and prejudice softened.",
    img: unity,
    alt: "PLACEHOLDER — Malay, Chinese and Indian friends eating together at one table",
  },
  {
    marker: "Today",
    heading: "A new chapter in Farringdon.",
    sub: "Malaysia truly Asia — and at this table, everyone is welcome.",
    body: "That spirit lives on. As Malaysia Boleh opens a new chapter in Farringdon, it brings the flavours that helped build a nation, and the story of togetherness they represent. The invitation: taste the heritage, share the pride, feel that same sense of community that kept Malaysia strong through decades of change.",
    img: feast,
    alt: "PLACEHOLDER — shared Malaysian feast at the Farringdon restaurant",
  },
];

export function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["index"]);
            setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="relative bg-ink text-ink-foreground">
      {/* Editorial masthead over the heritage photograph */}
      <div className="relative isolate">
        <img
          src={merdeka}
          alt="PLACEHOLDER — archival 1957 independence crowd, Kuala Lumpur"
          width={1600}
          height={1100}
          loading="lazy"
          className="h-[70svh] w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-end px-6 pb-14 lg:px-10 lg:pb-20">
          <p className="text-[0.75rem] tracking-[0.32em] text-gold uppercase">31 August 1957</p>
          <h2 className="mt-5 font-display text-[4rem] leading-[0.9] font-semibold sm:text-[6rem] lg:text-[9rem]">
            Merdeka.
          </h2>
          <p className="mt-5 max-w-xl font-display text-xl text-ink-foreground/80 italic lg:text-2xl">
            A nation of Malays, Chinese and Indians — and the food that held it together.
          </p>
        </div>
      </div>

      {/* Scroll-driven timeline */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative grid gap-12 py-20 lg:grid-cols-[10rem_1fr] lg:gap-16 lg:py-28">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <ol className="flex gap-6 lg:flex-col lg:gap-5">
              {panels.map((p, i) => (
                <li key={p.marker} className="flex items-center gap-3">
                  <span
                    className={cn(
                      "h-[1px] transition-all duration-500",
                      active === i ? "w-8 bg-gold" : "w-4 bg-ink-foreground/25",
                    )}
                  />
                  <span
                    className={cn(
                      "font-display text-sm transition-colors duration-500 lg:text-base",
                      active === i ? "text-gold" : "text-ink-foreground/40",
                    )}
                  >
                    {p.marker}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-24 lg:space-y-40">
            {panels.map((p, i) => (
              <div
                key={p.marker}
                data-index={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={cn(
                  "grid gap-8 transition-opacity duration-700 lg:grid-cols-12 lg:items-end",
                  active === i ? "opacity-100" : "opacity-55",
                )}
              >
                <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover",
                      p.mono && "grayscale",
                      i % 2 === 1 ? "aspect-3/2" : "aspect-4/3",
                    )}
                  />
                </div>
                <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-1")}>
                  <h3 className="font-display text-3xl leading-[1.05] font-semibold lg:text-[2.75rem]">
                    {p.heading}
                  </h3>
                  <p className="mt-3 font-display text-lg text-gold italic">{p.sub}</p>
                  <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-foreground/75">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
