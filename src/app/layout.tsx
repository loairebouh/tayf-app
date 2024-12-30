import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
