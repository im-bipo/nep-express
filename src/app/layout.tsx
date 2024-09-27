import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";

export const metadata: Metadata = {
  title: "Nep Express",
  description: "Nep Express, the ultimate tourist guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
