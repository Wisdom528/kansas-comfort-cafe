import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Back home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "K-18 Café — Homemade Comfort Food in Lucas, Kansas" },
      {
        name: "description",
        content:
          "K-18 Café serves homemade comfort food, fresh pies, and friendly service in Lucas, Kansas. Dine-in & takeaway. Open daily until 10 PM.",
      },
      { name: "author", content: "K-18 Café" },
      { property: "og:title", content: "K-18 Café — Homemade Comfort Food" },
      {
        property: "og:description",
        content: "Family-style café in Lucas, Kansas. Homemade meals, fresh pies, friendly service.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
