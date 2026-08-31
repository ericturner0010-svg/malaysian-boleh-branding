import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { dishes } from "./Dishes";

const slots = ["12:15", "12:45", "13:15", "18:15", "18:45", "19:15", "19:45", "20:15"];

export function Pickup() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [slot, setSlot] = useState(slots[3]);
  const [placed, setPlaced] = useState(false);

  const lines = useMemo(
    () => dishes.filter((d) => (qty[d.name] ?? 0) > 0).map((d) => ({ ...d, n: qty[d.name] })),
    [qty],
  );
  const total = lines.reduce((sum, l) => sum + l.price * l.n, 0);

  const bump = (name: string, delta: number) =>
    setQty((q) => ({ ...q, [name]: Math.max(0, (q[name] ?? 0) + delta) }));

  return (
    <section id="pickup" className="bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Collection</p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-semibold lg:text-6xl">
            Order for pickup
          </h2>
          <p className="mt-5 text-[1.0625rem] text-ink-foreground/70">
            Cooked to order and boxed for the walk back. Ready in roughly 20 minutes from your chosen
            slot.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="divide-y divide-ink-foreground/12 border-y border-ink-foreground/12">
            {dishes.map((d) => (
              <div key={d.name} className="flex items-center gap-5 py-5">
                <img
                  src={d.img}
                  alt={d.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="size-20 shrink-0 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                  <p className="mt-1 truncate text-sm text-ink-foreground/60">{d.note}</p>
                </div>
                <span className="font-display text-lg text-gold">£{d.price.toFixed(2)}</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label={`Remove one ${d.name}`}
                    onClick={() => bump(d.name, -1)}
                    className="grid size-9 place-items-center border border-ink-foreground/25 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="w-8 text-center text-[0.95rem]">{qty[d.name] ?? 0}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${d.name}`}
                    onClick={() => bump(d.name, 1)}
                    className="grid size-9 place-items-center border border-ink-foreground/25 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit border border-ink-foreground/15 p-7 lg:sticky lg:top-36">
            <h3 className="font-display text-2xl font-semibold">Your order</h3>

            <div className="mt-6 space-y-3 text-[0.95rem]">
              {lines.length === 0 && (
                <p className="text-ink-foreground/55">Nothing added yet.</p>
              )}
              {lines.map((l) => (
                <div key={l.name} className="flex justify-between gap-4">
                  <span className="text-ink-foreground/80">
                    {l.n} × {l.name}
                  </span>
                  <span>£{(l.price * l.n).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between border-t border-ink-foreground/15 pt-5 font-display text-xl">
              <span>Total</span>
              <span className="text-gold">£{total.toFixed(2)}</span>
            </div>

            <div className="mt-8">
              <label className="text-sm text-ink-foreground/60">Pickup time</label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSlot(s)}
                    className={
                      "border py-2.5 text-sm transition-colors " +
                      (slot === s
                        ? "border-gold bg-gold text-accent-foreground"
                        : "border-ink-foreground/25 hover:border-gold")
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              disabled={lines.length === 0}
              onClick={() => setPlaced(true)}
              className="mt-8 w-full bg-gold py-4 text-[0.95rem] font-medium text-accent-foreground transition-colors hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-35"
            >
              Place pickup order
            </button>

            {placed && lines.length > 0 && (
              <p className="mt-5 border-l-2 border-gold pl-4 text-sm text-ink-foreground/75">
                Order noted for {slot} at 42 Cowcross Street — demo checkout, no payment taken.
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
