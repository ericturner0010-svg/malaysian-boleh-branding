import { useState } from "react";
import { cn } from "@/lib/utils";

const times = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function Reservations() {
  const [party, setParty] = useState(2);
  const [date, setDate] = useState(today());
  const [time, setTime] = useState("19:00");
  const [confirmed, setConfirmed] = useState(false);
  const [searching, setSearching] = useState(false);

  const find = () => {
    setSearching(true);
    setConfirmed(false);
    window.setTimeout(() => {
      setSearching(false);
      setConfirmed(true);
    }, 700);
  };

  return (
    <section id="reservations" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <h2 className="font-display text-4xl leading-tight font-semibold lg:text-6xl">
            Reserve a table
          </h2>
          <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
            Lunch and dinner, seven days a week. For parties of nine or more, or a full-room
            celebration, call us on 020 7000 1957 and we'll build the menu with you.
          </p>
          <dl className="mt-10 space-y-3 text-[0.95rem]">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Mon – Thu</dt>
              <dd>12:00 – 22:30</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Fri – Sat</dt>
              <dd>12:00 – 23:30</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Sunday</dt>
              <dd>12:00 – 21:30</dd>
            </div>
          </dl>
        </div>

        <div className="bg-background p-7 lg:p-10">
          <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Book a table</p>

          <div className="mt-8 space-y-8">
            <div>
              <label className="text-sm text-muted-foreground">Party size</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setParty(n)}
                    className={cn(
                      "size-11 border text-[0.95rem] transition-colors",
                      party === n
                        ? "border-gold bg-gold text-accent-foreground"
                        : "border-border text-foreground hover:border-gold",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="res-date" className="text-sm text-muted-foreground">
                  Date
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={date}
                  min={today()}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-3 h-12 w-full border border-input bg-transparent px-4 text-[0.95rem] outline-none focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="res-time" className="text-sm text-muted-foreground">
                  Time
                </label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-3 h-12 w-full appearance-none border border-input bg-transparent px-4 text-[0.95rem] outline-none focus:border-gold"
                >
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={find}
              className="w-full bg-gold py-4 text-[0.95rem] font-medium text-accent-foreground transition-colors hover:bg-gold-soft"
            >
              {searching ? "Finding a table…" : "Find a Table"}
            </button>

            {confirmed && (
              <div className="border-l-2 border-gold bg-muted/60 p-5 text-[0.95rem]">
                <p className="font-display text-lg">Table available</p>
                <p className="mt-1.5 text-muted-foreground">
                  {party} {party === 1 ? "guest" : "guests"} ·{" "}
                  {new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  · {time}
                </p>
                <p className="mt-3 text-muted-foreground">
                  We'll hold it for 10 minutes — demo booking, no confirmation sent.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
