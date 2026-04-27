import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Utensils,
  ShoppingBag,
  XCircle,
  ArrowRight,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-cafe.jpg";
import dishSteak from "@/assets/dish-steak.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPie from "@/assets/dish-pie.jpg";
import dishBreakfast from "@/assets/dish-breakfast.jpg";
import galleryApplePie from "@/assets/gallery-applepie.jpg";
import galleryCounter from "@/assets/gallery-counter.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K-18 Café — Homemade Comfort Food in Lucas, Kansas" },
      {
        name: "description",
        content:
          "Family-style café in Lucas, KS serving chicken fried steak, homemade pies, and hearty breakfasts. Dine-in & takeaway. Open daily until 10 PM.",
      },
      { property: "og:title", content: "K-18 Café — Homemade Comfort Food" },
      {
        property: "og:description",
        content: "Homemade meals, fresh pies, friendly service in Lucas, Kansas.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    name: "Chicken Fried Steak",
    desc: "Hand-breaded, golden, smothered in our signature country gravy.",
    img: dishSteak,
  },
  {
    name: "Chicken Fried Chicken",
    desc: "Friday night special — crispy, tender, served with all the fixings.",
    img: dishChicken,
    badge: "Friday Special",
  },
  {
    name: "Homemade Pies",
    desc: "Rhubarb and apple à la mode — baked fresh, just like grandma made.",
    img: dishPie,
  },
  {
    name: "Hearty Breakfast",
    desc: "Pancakes, eggs, bacon — the morning starts right at K-18.",
    img: dishBreakfast,
  },
];

const reviews = [
  {
    quote: "Great food and great service for a decent price. We'll be back.",
    author: "Sarah M.",
  },
  {
    quote: "Very homemade — reminds you of grandma's cooking. The pie alone is worth the drive.",
    author: "Tom R.",
  },
  {
    quote: "Amazing place to eat. You absolutely have to try the pancakes!",
    author: "Jamie L.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Warm interior of K-18 Café with wooden booths and fresh pies"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 py-24 text-primary-foreground">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-current text-yellow-300" />
            4.6 stars · 418 reviews
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Homemade comfort,<br />served with a smile.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            A family-style café on KS-18 in Lucas, Kansas. Hand-breaded steaks, fresh pies, and the
            kind of breakfast that keeps folks coming back.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-warm transition-transform hover:scale-105"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=K-18+Cafe+Lucas+Kansas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Clock, label: "Open Daily", value: "Closes at 10 PM" },
            { icon: Phone, label: "Call us", value: "+1 785-525-6262", href: "tel:+17855256262" },
            { icon: MapPin, label: "Find us", value: "5495 KS-18, Lucas, KS" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 py-5 sm:px-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="font-medium text-foreground hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              A small-town café with a big heart.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              K-18 Café is a family-style spot where neighbors meet over coffee, travelers stop for
              a hot meal, and every plate is made from scratch. From slow-simmered gravies to
              lattice-topped pies cooling on the counter, we cook the way home cooks do — with
              patience, butter, and a whole lot of care.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">4.6★</p>
                <p className="text-sm text-muted-foreground">418 happy guests</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">$10–20</p>
                <p className="text-sm text-muted-foreground">Per person</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">Daily</p>
                <p className="text-sm text-muted-foreground">Open till 10 PM</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={galleryCounter}
              alt="K-18 Café counter with fresh pies"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl object-cover shadow-warm"
            />
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="bg-gradient-warm py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Menu Highlights
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                Plates folks come back for.
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              How to Enjoy K-18
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Dine in or take it home.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Utensils,
                title: "Dine-In",
                desc: "Cozy booths, friendly faces, and meals served hot at your table.",
                available: true,
              },
              {
                icon: ShoppingBag,
                title: "Takeaway",
                desc: "Call ahead and we'll have your order ready when you arrive.",
                available: true,
              },
              {
                icon: XCircle,
                title: "Delivery",
                desc: "We don't deliver — but we'd love to see you in person.",
                available: false,
              },
            ].map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-7 transition-all ${
                  s.available
                    ? "border-border bg-card shadow-card"
                    : "border-dashed border-border bg-muted/40"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    s.available ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p
                  className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    s.available
                      ? "bg-accent/10 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s.available ? "Available" : "Not available"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              From Our Guests
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Loved by neighbors & travelers alike.
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium text-muted-foreground">
                4.6 from 418 reviews
              </span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.author}
                className="rounded-2xl bg-card p-7 shadow-card"
              >
                <Quote className="h-7 w-7 text-accent/40" />
                <blockquote className="mt-3 text-base leading-relaxed text-foreground">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">
                  — {r.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Gallery</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              A taste of K-18.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: galleryApplePie, alt: "Apple pie à la mode", span: "md:col-span-2 md:row-span-2 aspect-square" },
              { src: dishBreakfast, alt: "Pancake breakfast", span: "aspect-square" },
              { src: galleryCoffee, alt: "Coffee in cozy booth", span: "aspect-square" },
              { src: dishSteak, alt: "Chicken fried steak", span: "aspect-square" },
              { src: galleryCounter, alt: "Café counter", span: "aspect-square" },
              { src: dishChicken, alt: "Chicken fried chicken", span: "md:col-span-2 aspect-[2/1]" },
            ].map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-card ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Visit us today.</h2>
          <p className="max-w-xl text-lg text-primary-foreground/80">
            Pull up a booth or call ahead for takeaway. We're on KS-18 in Lucas, Kansas — and we
            saved a slice of pie just for you.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+17855256262"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-warm transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> Call for Takeaway
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MapPin className="h-4 w-4" /> Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
