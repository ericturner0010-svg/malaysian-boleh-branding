import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme";

const links = [
  { label: "Dishes", href: "#dishes" },
  { label: "Our Story", href: "#story" },
  { label: "Chefs", href: "#chefs" },
  { label: "Pickup", href: "#pickup" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10",
          "h-24 lg:h-28",
        )}
      >
        <a href="#top" className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-2xl leading-none font-semibold tracking-tight lg:text-[1.75rem]",
              scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            Malaysia Boleh
          </span>
          <span
            className={cn(
              "mt-1.5 text-[0.6875rem] tracking-[0.28em] uppercase",
              scrolled ? "text-muted-foreground" : "text-ink-foreground/70",
            )}
          >
            Farringdon · London
          </span>
        </a>

        <nav className="hidden items-center gap-9 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[0.95rem] transition-colors hover:text-gold",
                scrolled ? "text-foreground/85" : "text-ink-foreground/85",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className={cn(
              "grid size-11 place-items-center rounded-full border transition-colors",
              scrolled
                ? "border-border text-foreground hover:border-gold hover:text-gold"
                : "border-ink-foreground/25 text-ink-foreground hover:border-gold hover:text-gold",
            )}
          >
            {theme === "dark" ? <Sun className="size-[1.15rem]" /> : <Moon className="size-[1.15rem]" />}
          </button>

          <a
            href="#reservations"
            className="hidden bg-gold px-7 py-3.5 text-[0.95rem] font-medium text-accent-foreground transition-colors hover:bg-gold-soft sm:inline-flex"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={cn(
              "grid size-11 place-items-center xl:hidden",
              scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 pb-8 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-xl text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setOpen(false)}
              className="mt-6 bg-gold px-6 py-4 text-center font-medium text-accent-foreground"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
