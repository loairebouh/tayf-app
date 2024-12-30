import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";


const inter = Inter({
  subsets: ["latin"],
  weight : ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Tayf Bio - طيف بيو",
  description: "طيف - لمسة من الطبيعة إلى جمالك -- Tayf - A touch of nature to your beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationBar></NavigationBar>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
