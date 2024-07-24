import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/ui/nav-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caelan Gray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-16 bg-neutral-900`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
