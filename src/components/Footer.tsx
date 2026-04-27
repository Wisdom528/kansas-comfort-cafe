import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-base font-bold text-accent-foreground">
              K
            </span>
            <span className="font-display text-xl font-semibold text-foreground">K-18 Café</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Homemade comfort food and friendly service in the heart of Lucas, Kansas.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base font-semibold text-foreground">Visit Us</h3>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            5495 KS-18, Lucas, Kansas, USA
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <a href="tel:+17855256262" className="hover:text-accent">+1 785-525-6262</a>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0 text-accent" />
            Open daily · Closes at 10 PM
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base font-semibold text-foreground">Explore</h3>
          <ul className="space-y-2">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "Our Story" },
              { to: "/contact", label: "Contact & Map" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} K-18 Café · Lucas, Kansas
      </div>
    </footer>
  );
}
