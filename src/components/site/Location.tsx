export function Location() {
  return (
    <section id="visit" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <h2 className="font-display text-4xl leading-tight font-semibold lg:text-6xl">
            Find us in Farringdon
          </h2>

          <div className="mt-10 space-y-9 text-[1.0625rem]">
            <div>
              <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Address</p>
              <p className="mt-3 leading-relaxed">
                Malaysia Boleh
                <br />
                42 Cowcross Street
                <br />
                Farringdon, London EC1M 6DB
              </p>
            </div>
            <div>
              <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Hours</p>
              <div className="mt-3 space-y-2 text-[0.95rem]">
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Mon – Thu</span>
                  <span>12:00 – 22:30</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Fri – Sat</span>
                  <span>12:00 – 23:30</span>
                </p>
                <p className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>12:00 – 21:30</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-[0.75rem] tracking-[0.28em] text-gold uppercase">Contact</p>
              <p className="mt-3 leading-relaxed">
                020 7000 1957
                <br />
                <a href="mailto:hello@malaysiaboleh.co.uk" className="gold-underline pb-0.5">
                  hello@malaysiaboleh.co.uk
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Two minutes from Farringdon station (Elizabeth line, Thameslink, Circle).
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[22rem] border border-border bg-muted/50 p-6">
          <div className="flex h-full flex-col justify-between">
            <span className="text-[0.6875rem] tracking-[0.2em] text-muted-foreground/80 uppercase">
              Map placeholder — embed Google Maps here
            </span>
            <p className="font-display text-2xl text-muted-foreground/70">
              Cowcross Street, EC1M
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
