import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus_SC } from "next/font/google";
import "./globals.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellusSC = Marcellus_SC({
  variable: "--font-marcellus-sc",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excellent Cuts | Premium Barbershop Experience",
  description:
    "Excellent Cuts offers professional grooming, precision haircuts, and beard styling in a relaxed, modern environment. Visit us today for an excellent cut—every time.",
  keywords: [
    "barbershop",
    "men’s haircut",
    "beard trim",
    "fade haircut",
    "grooming",
    "Excellent Cuts",
    "hair stylist",
    "barber near me"
  ],
  openGraph: {
    title: "Excellent Cuts | Premium Barbershop Experience",
    description:
      "Step into Excellent Cuts for expert grooming and precision haircuts tailored to your style.",
    url: "https://excellent-cuts.vercel.app",
    siteName: "Excellent Cuts",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
        alt: "Excellent Cuts Barbershop",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellusSC.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
