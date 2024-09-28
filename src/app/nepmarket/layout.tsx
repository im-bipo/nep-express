import type { Metadata } from "next";
import NavBar from "./Navbar";
import Footer from "./Footer";

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
    <body>
      <NavBar />
      {children}
      <Footer />
    </body>
  );
}
