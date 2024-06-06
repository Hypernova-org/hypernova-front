import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "HyperNova",
  description: "HyperNova - IT company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header/>
      <body className="font-greycliff text-mainWhite">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
