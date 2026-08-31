import chickenRice from "@/assets/dish-chicken-rice.jpg";
import nasiLemak from "@/assets/dish-nasi-lemak.jpg";
import laksa from "@/assets/dish-laksa.jpg";
import roti from "@/assets/dish-roti.jpg";
import charKueyTeow from "@/assets/dish-char-kuey-teow.jpg";

export const dishes = [
  {
    name: "Hainanese Chicken Rice",
    price: 15.98,
    note: "Poached chicken, fragrant rice, ginger-scallion",
    img: chickenRice,
    alt: "PLACEHOLDER — Hainanese chicken rice",
  },
  {
    name: "Nasi Lemak Beef Rendang",
    price: 11.5,
    note: "Coconut rice, slow-cooked rendang, sambal",
    img: nasiLemak,
    alt: "PLACEHOLDER — nasi lemak with beef rendang",
  },
  {
    name: "Curry Laksa",
    price: 11.5,
    note: "Coconut curry broth, noodles, tofu puffs, prawns",
    img: laksa,
    alt: "PLACEHOLDER — curry laksa bowl",
  },
  {
    name: "Roti Canai (2pc)",
    price: 9.98,
    note: "Flaky, hand-stretched, with dhal curry",
    img: roti,
    alt: "PLACEHOLDER — roti canai with curry",
  },
  {
    name: "Char Kuey Teow",
    price: 14.0,
    note: "Chef Tim's signature — wok hei, prawns, chives",
    img: charKueyTeow,
    alt: "PLACEHOLDER — char kuey teow",
    rotating: true,
  },
];

export function Dishes() {
  return (
    <section id="dishes" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-4xl leading-tight font-semibold lg:text-6xl">
            Signature dishes
          </h2>
          <a
            href="#pickup"
            className="gold-underline pb-1 text-[0.95rem] text-foreground transition-colors hover:text-gold"
          >
            View full menu
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-5 lg:gap-x-6">
          {dishes.map((d) => (
            <article key={d.name} className="group">
              <div className="relative overflow-hidden bg-ink">
                <img
                  src={d.img}
                  alt={d.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-4/5 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {d.rotating && (
                  <span className="absolute top-3 left-3 bg-gold px-2.5 py-1 text-[0.6875rem] tracking-[0.18em] text-accent-foreground uppercase">
                    This month
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg leading-snug font-semibold">{d.name}</h3>
                <span className="font-display text-lg text-gold">£{d.price.toFixed(2)}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{d.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
