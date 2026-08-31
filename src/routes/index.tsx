import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/site/theme";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Dishes } from "@/components/site/Dishes";
import { Story } from "@/components/site/Story";
import { Chefs } from "@/components/site/Chefs";
import { Gallery } from "@/components/site/Gallery";
import { Reservations } from "@/components/site/Reservations";
import { Pickup } from "@/components/site/Pickup";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

const title = "Malaysia Boleh — Authentic Malaysian Restaurant in Farringdon";
const description =
  "Authentic Malaysian cuisine and hospitality in Farringdon, London. Nasi lemak, curry laksa, roti canai and Hainanese chicken rice. Book a table or order pickup.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Dishes />
        <Story />
        <Chefs />
        <Gallery />
        <Reservations />
        <Pickup />
        <Location />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
