import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Wheat, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import galleryCounter from "@/assets/gallery-counter.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — K-18 Café in Lucas, Kansas" },
      {
        name: "description",
        content:
          "Family-style café in Lucas, Kansas. Homemade meals, fresh pies, and the friendly small-town service folks have loved for years.",
      },
      { property: "og:title", content: "About K-18 Café" },
      {
        property: "og:description",
        content: "A family-style café known for homemade comfort food and friendly service.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Wheat,
    title: "Made From Scratch",
    desc: "Hand-breaded, slow-simmered, baked fresh — the way home cooks do it.",
  },
  {
    icon: Users,
    title: "Family-Style",
    desc: "Big booths, big portions, and room for the whole family at the table.",
  },
  {
    icon: Heart,
    title: "Friendly Service",
    desc: "We learn your name, remember your order, and pour the coffee strong.",
  },
  {
    icon: Coffee,
    title: "Open Daily",
    desc: "From breakfast to dinner — we're here until 10 PM, every day.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-warm py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
            A café that feels like home.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Tucked along KS-18 in Lucas, Kansas, K-18 Café is the kind of place where coffee gets
            refilled before you ask, and the pies come out warm.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <img
            src={galleryCounter}
            alt="K-18 Café counter with pies on display"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-3xl object-cover shadow-warm"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Cooked the way it should be.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We're a small-town American café with a simple promise: make every plate the way you'd
              make it for someone you love. That means hand-breading the steaks, simmering gravy
              until it's just right, and rolling out pie crust by hand each morning.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you're a regular who always orders the chicken fried steak or a traveler
              passing through on KS-18, you'll get the same warm welcome and the same honest,
              homemade food.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold text-foreground sm:text-5xl">
              What we stand for.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <img
              src={galleryCoffee}
              alt="Two cups of coffee in K-18 Café"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl object-cover shadow-warm"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Come on in.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether it's a Friday-night plate of chicken fried chicken or a quiet morning over
              coffee and pancakes, there's a booth waiting for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-warm transition-transform hover:scale-105"
              >
                See the Menu
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
