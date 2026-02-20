import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdou Nizar – Apprenti Data/Business Analyst",
  description:
    "Portfolio d'Abdou Nizar, étudiant en BUT Science des Données, à la recherche d'une alternance de 24 mois en Data Analyst ou Business Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
