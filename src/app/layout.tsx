import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Paul-Peter Arslan",
  description:
    "Portfolio spanning embodied AI, interaction design, neurorehabilitation research, and experimental systems.",
  icons: {
    icon: "/polpii.png",
    shortcut: "/polpii.png",
    apple: "/polpii.png",
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
      </body>
    </html>
  );
}
