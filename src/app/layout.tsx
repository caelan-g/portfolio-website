import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/ui/nav-bar";
import Footer from "@/app/components/ui/footer";
import "@/app/globals.css";

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
      <body className={`${inter.className} w-full`}>
        <div className="absolute z-10 w-full">
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
