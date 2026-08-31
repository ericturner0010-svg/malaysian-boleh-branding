import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [signed, setSigned] = useState(false);

  return (
    <footer className="bg-ink pt-20 pb-12 text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-semibold">Malaysia Boleh</p>
            <p className="mt-3 max-w-sm text-[0.95rem] text-ink-foreground/60">
              Authentic Malaysian Cuisine and Hospitality. 42 Cowcross Street, Farringdon, London
              EC1M 6DB.
            </p>
            <p className="mt-6 text-[0.75rem] tracking-[0.28em] text-gold uppercase">
              Part of MASB Group
            </p>
          </div>

          <div>
            <p className="text-[0.75rem] tracking-[0.28em] text-ink-foreground/50 uppercase">Hours</p>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-ink-foreground/75">
              <li>Mon – Thu · 12:00 – 22:30</li>
              <li>Fri – Sat · 12:00 – 23:30</li>
              <li>Sunday · 12:00 – 21:30</li>
            </ul>
            <ul className="mt-6 flex gap-5 text-[0.95rem]">
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <li key={s}>
                  <a href="#top" className="text-ink-foreground/75 transition-colors hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.75rem] tracking-[0.28em] text-ink-foreground/50 uppercase">
              Newsletter
            </p>
            <p className="mt-4 text-[0.95rem] text-ink-foreground/65">
              Seasonal specials and Merdeka celebrations.
            </p>
            <form
              className="mt-5 flex"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSigned(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="h-12 min-w-0 flex-1 border border-ink-foreground/25 bg-transparent px-4 text-[0.95rem] outline-none placeholder:text-ink-foreground/40 focus:border-gold"
              />
              <button
                type="submit"
                className="h-12 shrink-0 bg-gold px-5 text-[0.95rem] font-medium text-accent-foreground transition-colors hover:bg-gold-soft"
              >
                Join
              </button>
            </form>
            {signed && (
              <p className="mt-3 text-sm text-gold">Thank you — you're on the list.</p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-ink-foreground/12 pt-7 text-sm text-ink-foreground/50">
          <p>© {new Date().getFullYear()} Malaysia Boleh · MASB Group</p>
          <p>Malaysia truly Asia — and at this table, everyone is welcome.</p>
        </div>
      </div>
    </footer>
  );
}
