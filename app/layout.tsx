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
      className={cx("bg-stone-50 text-neutral-950")}
    >
      <body className="mx-4 mt-8 max-w-5xl antialiased lg:mx-auto">
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
