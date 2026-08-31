# Malaysian Boleh Branding

Build a picture-centric restaurant website for Malaysia Boleh — an authentic Malaysian restaurant in Farringdon, London, part of the MASB Group. This is a brand with a genuinely powerful story (it ties its identity directly to Malaysia's national history and unity across ethnicities), so the design needs a distinctive visual identity built specifically for that story — not a generic template applied to "a restaurant."

DESIGN DIRECTION — avoid the generic AI-generated look, and avoid looking cheap

Do not default to: a cream/off-white background with a terracotta accent; a red accent (reads cheap for this brand); identical rounded cards with the same soft grey drop-shadow on every element; tracked-out ALL-CAPS eyebrow labels above headings; "01/02/03" numbering unless content is genuinely sequential; arrows (→) tacked onto buttons/links; fade-and-slide-up animation on every section as you scroll.

Instead:

- Palette: dominant near-true-black/charcoal, with ONE bold accent in a rich turmeric gold (not red) — used sparingly for CTAs and key highlights, not as a wash.

- Support BOTH a light theme and a dark theme, with a toggle in the navbar. Dark theme: near-black/charcoal base with the gold accent. Light theme: warm off-white/ivory base (not stark white) with the same gold accent, and text/imagery treatment adjusted for contrast rather than just inverting colours. Both themes should feel like the same premium brand, not two unrelated designs.

- Typography: one confident display typeface with real character for headings (something with Southeast Asian editorial warmth, not a generic geometric sans), paired with one quiet body sans-serif. Both must work cleanly in light and dark.

- Layout: give each section its own logic rather than a repeated card grid — the Story section should feel like an archive (asymmetric photo + text, heritage photo bleeding to the edge), the Dishes section can be tighter and denser since it's about appetite rather than history.

- Motion: one deliberate scroll-driven moment in the Story section (1957 → 1993 → today); everything else static, with hover states only on genuinely interactive elements.

- The booking widget and pickup order flow should look native to the site's design system in both themes, not like a plugin.

Overall feel: blend the moody, image-led elegance of Roka (rokarestaurant.com) with the warm, vibrant inviting energy of Banana Tree (bananatree.co.uk) — sophisticated but not cold, colourful but not cluttered, premium rather than cheap.

NAVBAR

Give the navbar real visual weight — it shouldn't read as an afterthought against the bold hero and story sections:

- Generous height/padding, a substantial logo/wordmark on the left

- Nav links sized and spaced to hold their own against the rest of the typography

- Light/dark theme toggle

- "Book Now" as a filled, high-contrast CTA in the gold accent — the clear visual anchor of the bar

- On scroll, transition to a solid/blurred background (matching the active theme) for legibility, without adding a drop-shadow or generic SaaS-style border

- Sticky at the top, but stays substantial even in its scrolled state — don't shrink it to a thin strip

HERO SECTION

- Rotating slideshow background instead of a single static image: auto-advance through 4-5 images (food and interior shots) on a slow interval (around 5-6 seconds), smooth crossfade transitions

- Wordmark, tagline, and CTAs stay fixed in place on top while only the background imagery cycles

IMAGERY — reflect what "Malaysia Boleh" actually means

Alongside food and interior photography, include imagery that reflects unity across Malaysia's Malay, Chinese and Indian communities — e.g. a shot of people of different ethnicities gathered together at a shared table, eating and celebrating together. This should appear naturally within the Story section (and optionally the Gallery) as a visual expression of the "one simple joy bound us together" theme, not as a token/stock-photo insert — treat it with the same warmth and specificity as the food photography.

CONTENT

Tagline: "Authentic Malaysian Cuisine and Hospitality"

Signature Dishes (name — price):

- Hainanese Chicken Rice — £15.98

- Nasi Lemak Beef Rendang — £11.50

- Curry Laksa — £11.50

- Roti Canai (2pc) — £9.98

- (one more rotating dish around £14)

Our Story (the emotional core — give it real space, break into 3-4 sequential scroll panels rather than one dense block. The headline for this section needs real presence — not a plain centered text title. Consider a large, editorial, multi-line treatment (e.g. "Merdeka." set boldly on its own line with a smaller supporting line beneath), or the headline overlaid directly on the heritage black-and-white photo with strong contrast):

On 31 August 1957, in a packed stadium in Kuala Lumpur, Tunku Abdul Rahman raised his fist and cried "Merdeka" — Independence. From that moment, the world watched the birth of a young nation made of Malays, Chinese and Indians. Many doubted such a diverse society could stay united — but history taught quickly that diversity is strength, not weakness.

Fast-forward thirty-six years: in 1993, Malaysia's fourth Prime Minister rallied the country with another rallying cry — "Malaysia Boleh! — Malaysia can do it!" — capturing the nation's determination to achieve Vision 2020. By then, Malaysia had already defied the cynics: it stayed united, emerged as one of Southeast Asia's Tiger economies, and shared tears and sweat, celebrations and struggles. Through everything, one simple joy bound the country together more than any political slogan: food.

Malaysian food tells the story of that unity. From different cultural traditions, people learned to celebrate each other's cuisines and invent dishes uniquely their own — from fragrant Nasi Lemak to wok-fried Char Kuey Teow to flaky Roti Canai dunked in rich curry. Tables became places where differences melted away — the best flavours of Asia turned into a shared identity, served with sambal and smiles. Over satay skewers and bowls of laksa, friendships blossomed and prejudice softened.

That spirit lives on. As Malaysia Boleh opens a new chapter in Farringdon, it brings the flavours that helped build a nation, and the story of togetherness they represent. The invitation: taste the heritage, share the pride, feel that same sense of community that kept Malaysia strong through decades of change. Malaysia truly Asia — and at this table, everyone is welcome.

Meet the Chefs:

- Head Chef Tim — 30+ years of culinary experience across cuisines, known for his Char Kuey Teow, meticulous and heartfelt, brings his own Malaysian twist to every dish.

- Chef de Partie Wai — newer to the team but deeply experienced, favourite culinary destination Guangzhou, brings vibrant flavour and wok hei technique to every dish.

- Leave both chef photo placeholders empty/blank (no stock photo) so real photos can be added later — a subtle placeholder fill or outline, not a broken-image icon.

STRUCTURE

1. Hero — rotating slideshow background, wordmark, tagline, "Book Now" primary CTA, "Order Pickup" secondary CTA

2. Signature Dishes — grid or horizontal scroll, photo/name/price, "View full menu" link

3. Our Story — the scroll-driven sequential narrative above, including the unity/ethnicities-gathering imagery

4. Meet the Chefs — bio cards for Tim and Wai with empty photo placeholders

5. Gallery — masonry grid of food, interior, and gathering/community shots (strongest visual anchor on the site)

6. Reservations — booking widget: party size, date, time, "Find a Table"

7. Order for Pickup — menu selection, pickup time, order summary — visually distinct from the booking flow

8. Location & Hours — Farringdon address, hours, map placeholder, contact

9. Footer — "Part of MASB Group" credit, social links, newsletter signup, hours recap

TECHNICAL

- Use placeholder images with clear descriptive labels for easy swapping later (except chef photos, which stay empty per above)

- Booking and pickup tools can be functional front-end mockups for this demo — no real backend needed, but should look and feel fully working

- Fully responsive, mobile experience as premium as desktop, in both light and dark themes

- Componentised: Hero, Dishes, Story, Chefs, Gallery, Reservations, Pickup, Location, Footer

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5e9f89c1-c589-4b40-9184-cd62911dae25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
