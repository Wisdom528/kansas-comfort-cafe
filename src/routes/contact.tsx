import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Utensils, ShoppingBag, XCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Directions — K-18 Café" },
      {
        name: "description",
        content:
          "Visit K-18 Café at 5495 KS-18, Lucas, Kansas. Call +1 785-525-6262. Open daily until 10 PM. Dine-in and takeaway available.",
      },
      { property: "og:title", content: "Contact K-18 Café" },
      {
        property: "og:description",
        content: "5495 KS-18, Lucas, Kansas · +1 785-525-6262 · Open daily until 10 PM.",
      },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { day: "Monday", time: "Open – 10 PM" },
  { day: "Tuesday", time: "Open – 10 PM" },
  { day: "Wednesday", time: "Open – 10 PM" },
  { day: "Thursday", time: "Open – 10 PM" },
  { day: "Friday", time: "Open – 10 PM" },
  { day: "Saturday", time: "Open – 10 PM" },
  { day: "Sunday", time: "Open – 10 PM" },
];

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-warm py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Visit & Contact
          </p>
          <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
            We'd love to see you.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Find us on KS-18 in Lucas, Kansas. Pull up, grab a booth, and stay awhile.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Address",
                value: "5495 KS-18, Lucas, Kansas, USA",
                href: "https://www.google.com/maps/search/?api=1&query=K-18+Cafe+Lucas+Kansas",
                cta: "Get Directions",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+1 785-525-6262",
                href: "tel:+17855256262",
                cta: "Call Now",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 text-foreground">{c.value}</p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  {c.cta} →
                </a>
              </div>
            ))}

            <div className="rounded-2xl bg-card p-6 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Hours</h3>
              <ul className="mt-4 divide-y divide-border text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl shadow-warm">
              <iframe
                title="K-18 Café location map"
                src="https://www.google.com/maps?q=5495+KS-18,+Lucas,+KS&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[520px] w-full border-0"
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Utensils, label: "Dine-in", available: true },
                { icon: ShoppingBag, label: "Takeaway", available: true },
                { icon: XCircle, label: "Delivery", available: false },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 rounded-2xl border p-4 ${
                    s.available
                      ? "border-border bg-card"
                      : "border-dashed border-border bg-muted/40"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      s.available ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {s.available ? "Available" : "Not available"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Call ahead for takeaway.
          </h2>
          <p className="text-primary-foreground/80">
            We'll have your order hot and ready when you arrive.
          </p>
          <a
            href="tel:+17855256262"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-warm transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> +1 785-525-6262
          </a>
        </div>
      </section>
    </>
  );
}
