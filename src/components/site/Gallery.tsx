import satay from "@/assets/gallery-satay.jpg";
import bar from "@/assets/gallery-bar.jpg";
import celebration from "@/assets/gallery-celebration.jpg";
import hands from "@/assets/gallery-hands.jpg";
import cendol from "@/assets/gallery-cendol.jpg";
import interior from "@/assets/hero-interior.jpg";
import unity from "@/assets/unity-table.jpg";
import laksa from "@/assets/dish-laksa.jpg";

const items = [
  { src: celebration, alt: "PLACEHOLDER — guests of every background celebrating at a long table", span: "sm:col-span-2" },
  { src: bar, alt: "PLACEHOLDER — brass and timber bar detail", span: "" },
  { src: satay, alt: "PLACEHOLDER — satay over charcoal", span: "" },
  { src: unity, alt: "PLACEHOLDER — friends sharing a Malaysian meal together", span: "sm:col-span-2" },
  { src: hands, alt: "PLACEHOLDER — hands tearing roti canai", span: "" },
  { src: interior, alt: "PLACEHOLDER — dining room at night", span: "sm:col-span-2" },
  { src: laksa, alt: "PLACEHOLDER — curry laksa close up", span: "" },
  { src: cendol, alt: "PLACEHOLDER — cendol dessert", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-display text-4xl leading-tight font-semibold lg:text-6xl">
            Around the room
          </h2>
          <p className="max-w-sm text-[0.95rem] text-ink-foreground/65">
            Farringdon nights, long tables, and everyone welcome at them.
          </p>
        </div>

        <div className="mt-14 columns-2 gap-4 lg:columns-3 lg:gap-5">
          {items.map((it) => (
            <figure key={it.alt} className="mb-4 break-inside-avoid lg:mb-5">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
