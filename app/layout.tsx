import "./global.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jack Dickinson",
    template: "%s | Jack Dickinson",
  },
  description: "Portfolio site for Jack Dickinson and the projects he has built.",
  openGraph: {
    title: "Jack Dickinson",
    description:
      "Portfolio site for Jack Dickinson and the projects he has built.",
    url: baseUrl,
    siteName: "Jack Dickinson",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("bg-neutral-950 text-stone-100")}
    >
      <body className="mx-3 mt-5 max-w-[72rem] antialiased lg:mx-auto">
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
