import type { Metadata } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "@/styles/globals.css";
import { BASE_PATH } from "@/lib/base-path";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manpottery — Handcrafted Pottery Studio",
    template: "%s | Manpottery",
  },
  description:
    "Handcrafted pottery made with intention. Each piece tells a story of clay, fire, and the human touch. Explore our collections, products, and pottery courses.",
  keywords: ["pottery", "ceramics", "handcrafted", "studio", "courses"],
  icons: [
    {
      rel: "icon",
      url: `${BASE_PATH}/images/fav-image.PNG`,
      type: "image/png",
    },
  ],
  manifest: `${BASE_PATH}/manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${nunito.variable}`}>
      <body className="font-body bg-cream text-stone antialiased">
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
