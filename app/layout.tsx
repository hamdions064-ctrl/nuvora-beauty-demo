
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Éléa Beauty | Institut de beauté et bien-être",
  description:
    "Découvrez Éléa Beauty, votre espace beauté et bien-être. Soins du visage, massages relaxants et prestations beauté.",
  keywords: [
    "Éléa Beauty",
    "institut de beauté",
    "soins du visage",
    "massage",
    "bien-être",
    "beauté",
  ],
  openGraph: {
    title: "Éléa Beauty",
    description:
      "Un moment de beauté et de bien-être rien que pour vous.",
    type: "website",
    locale: "fr_TN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
