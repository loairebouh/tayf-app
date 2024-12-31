import { qatarBold, qatarMeduim, qatarThin } from "./components/Fonts";
import NavigationBar from "./components/NavigationBar";
import "./globals.css";

export const metadata = {
  title: "Tayf Bio - طيف بيو",
  description: "طيف - لمسة من الطبيعة إلى جمالك -- Tayf - A touch of nature to your beauty",
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={qatarBold.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
