import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Paul-Peter Arslan",
  description:
    "Portfolio spanning human-AI interaction, embodied design, models of human behavior, and simulation of AI agents.",
  openGraph: {
    title: "Paul-Peter Arslan | Human-AI Interaction and Simulation",
    description:
      "Portfolio spanning human-AI interaction, embodied design, models of human behavior, and simulation of AI agents.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul-Peter Arslan | Human-AI Interaction and Simulation",
    description:
      "Portfolio spanning human-AI interaction, embodied design, models of human behavior, and simulation of AI agents.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
