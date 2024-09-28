import type { Metadata } from "next";

import NavBar from "./components/Navbar";
import Footer from "@/components/custom/Footer";
import SubHeader from "./components/SubHeader";


export const metadata: Metadata = {
  title: "Nep Market",
  description:
    "Nep Market is a Authentic Nepali E-commerce platform for customers to buy and sell only Nepali authentic products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html>
      <body>
        <NavBar />
        <SubHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
