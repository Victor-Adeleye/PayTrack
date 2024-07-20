import type { Metadata } from "next";
import "./globals.css";

import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Simplified Payroll Management",
  description: "Paytrack landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="border">
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
