import "./globals.css";
import Navbar from "../app/components/Navbar";
import React from "react"; // needed for React.ReactNode type

export const metadata = {
  title: "Wefetch",
  description: "Turning Data Points into Sustainable Actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
