import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sprint 70 | Électroménager, dépannage & pièces",
  description: "Dépannage, réparation, vente et pièces détachées pour votre électroménager.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
