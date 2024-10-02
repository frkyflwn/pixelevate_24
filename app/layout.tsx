import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import { Footer } from "./components/Footer";
config.autoAddCss = false;

const inter = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixelevate - Digitale Lösungen für Ihr Business",
  keywords: "Pixelevate, Webseite, App, Online-Shop, Automatisierung, Prozesse, Berater, Coaches, Trainer, Therapeuten, Experten, Effizienz, Kontaktieren, maßgeschneidert, digital, Lösungen, Arbeitsabläufe, optimieren, Automatisierung",
  description: "Pixelevate - Digitale Lösungen für Ihr Business. Wir bieten individuelle Lösungen für Ihre Webseite, App oder Online-Shop und spezialisieren uns auf die Automatisierung von Prozessen. Perfekt für Berater, Coaches, Trainer, Therapeuten und Experten. Steigern Sie Ihre Effizienz und konzentrieren Sie sich auf das Wesentliche. Kontaktieren Sie uns für maßgeschneiderte digitale Lösungen, die Ihre Arbeitsabläufe optimieren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
