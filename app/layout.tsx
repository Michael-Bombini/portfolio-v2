import Navigation from "@/components/ui/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Bombini - FullStack Developer",
  description:
    "Michael Bombini is an Italian Full Stack Developer who loves creating amazing things.",
  robots: {
    googleBot: {
      index: true,
    },
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
