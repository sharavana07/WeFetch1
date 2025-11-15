import "./globals.css";
import Navbar from "../app/components/Navbar";

export const metadata = {
  title: "Wefetch",
  description: "Turning Data Points into Sustainable Actions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
