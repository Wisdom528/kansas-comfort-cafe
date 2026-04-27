import { createFileRoute } from "@tanstack/react-router";
import dishSteak from "@/assets/dish-steak.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPie from "@/assets/dish-pie.jpg";
import dishBreakfast from "@/assets/dish-breakfast.jpg";
import galleryApplePie from "@/assets/gallery-applepie.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — K-18 Café" },
      {
        name: "description",
        content:
          "Browse the K-18 Café menu: chicken fried steak, Friday-night chicken fried chicken, homemade pies, hearty breakfasts. $10–20 per person.",
      },
      { property: "og:title", content: "Menu — K-18 Café" },
      {
        property: "og:description",
        content: "Homemade plates, fresh pies, hearty breakfasts in Lucas, Kansas.",
      },
      { property: "og:image", content: dishSteak },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Breakfast",
    blurb: "Served all morning. Coffee's always hot.",
    img: dishBreakfast,
    items: [
      { name: "Buttermilk Pancakes", desc: "Stack of three with butter & syrup", price: "9" },
      { name: "Country Breakfast", desc: "Two eggs, bacon, hash browns, toast", price: "11" },
      { name: "Biscuits & Gravy", desc: "Flaky biscuits smothered in sausage gravy", price: "9" },
      { name: "Steak & Eggs", desc: "Sirloin, two eggs, hash browns", price: "16" },
    ],
  },
  {
    title: "House Favorites",
    blurb: "The plates we're known for across the county.",
    img: dishSteak,
    items: [
      {
        name: "Chicken Fried Steak",
        desc: "Hand-breaded, country gravy, mashed potatoes, green beans",
        price: "17",
      },
      {
        name: "Chicken Fried Chicken",
        desc: "Friday Night Special — crispy, golden, served with the fixings",
        price: "16",
        badge: "Friday Special",
      },
      {
        name: "Open-Faced Hot Beef",
        desc: "Slow-roasted beef, white bread, mashed potatoes, gravy",
        price: "15",
      },
      { name: "Patty Melt", desc: "Grilled rye, swiss, caramelized onions, fries", price: "13" },
    ],
  },
  {
    title: "Sandwiches & Burgers",
    blurb: "Hand-pattied burgers and classic sandwiches.",
    img: dishChicken,
    items: [
      { name: "Classic Cheeseburger", desc: "Lettuce, tomato, onion, pickle, fries", price: "12" },
      { name: "Bacon Cheeseburger", desc: "Crispy bacon, cheddar, fries", price: "13" },
      { name: "BLT", desc: "Thick-cut bacon, lettuce, tomato, mayo on toast", price: "10" },
      { name: "Grilled Chicken Sandwich", desc: "Lettuce, tomato, mayo, fries", price: "12" },
    ],
  },
  {
    title: "Homemade Pies",
    blurb: "Baked fresh in-house. Ask what's on the counter today.",
    img: dishPie,
    items: [
      { name: "Rhubarb Pie", desc: "Tart, sweet, lattice-topped", price: "6" },
      { name: "Apple Pie à la Mode", desc: "Warm slice with vanilla ice cream", price: "7" },
      { name: "Cherry Pie", desc: "Bright cherries in a flaky crust", price: "6" },
      { name: "Pecan Pie", desc: "Rich, buttery, classic", price: "7" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-warm py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Menu</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
            Made from scratch, every day.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Hearty plates, classic American comfort food, and pies that taste like home. Most plates
            run $10–20.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        {sections.map((section, idx) => (
          <section key={section.title}>
            <div
              className={`grid gap-10 md:grid-cols-5 md:items-center ${
                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-2">
                <img
                  src={section.img}
                  alt={section.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full rounded-3xl object-cover shadow-warm"
                />
              </div>
              <div className="md:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  {section.title}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {section.blurb}
                </h2>
                <ul className="mt-8 divide-y divide-border">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4 py-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="shrink-0 font-display text-lg font-semibold text-accent">
                        ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center">
          <img
            src={galleryApplePie}
            alt="Apple pie"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-24 w-24 rounded-full object-cover shadow-warm"
          />
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Hungry yet?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Stop by, or give us a ring and we'll have your order ready to go.
          </p>
          <a
            href="tel:+17855256262"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-warm transition-transform hover:scale-105"
          >
            Call for Takeaway · +1 785-525-6262
          </a>
        </div>
      </section>
    </>
  );
}
