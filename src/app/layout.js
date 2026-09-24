import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Header } from "@/components/layout/Header";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: `${company.name} | ${company.developer}`,
  description: company.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <a
          className="sr-only z-[60] rounded-md bg-white px-4 py-3 font-semibold text-brand-navy shadow-soft focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#contenido"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
