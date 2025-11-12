import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "La Mojana Viva — Ubaldo Munive Rodelo",
    template: "%s | La Mojana Viva",
  },
  description: "Archivo digital de poesía, cuentos y canciones de La Mojana. Legado cultural de Ubaldo Munive Rodelo.",
  keywords: ["poesía colombiana", "La Mojana", "Ubaldo Munive Rodelo", "literatura regional", "cultura colombiana"],
  authors: [{ name: "Ubaldo Munive Rodelo" }],
  openGraph: {
    title: "La Mojana Viva",
    description: "Legado cultural de Ubaldo Munive Rodelo",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}