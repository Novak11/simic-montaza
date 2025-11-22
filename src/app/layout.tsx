import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "SIMIĆ MONTAŽA | Industrijska Montaža Opreme",
  description: "Profesionalna instalacija industrijskih mašina, ventilacije, elektronike i specijalizovane opreme. Pouzdani partner za industrijsku montažu u Srbiji.",
  keywords: ["industrijska montaža", "montaža mašina", "ventilacija", "elektronika", "CNC mašine", "Srbija", "Nova Pazova"],
  authors: [{ name: "SIMIĆ MONTAŽA" }],
  openGraph: {
    title: "SIMIĆ MONTAŽA | Industrijska Montaža Opreme",
    description: "Profesionalna instalacija industrijskih mašina, ventilacije, elektronike i specijalizovane opreme.",
    type: "website",
    locale: "sr_RS",
    siteName: "SIMIĆ MONTAŽA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-background text-text-primary">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
