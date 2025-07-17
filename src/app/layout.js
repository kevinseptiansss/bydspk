import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BYD Showroom - Rintan Putri | Electric Vehicle Sales Consultant",
  description: "Discover BYD's innovative electric vehicles with Rintan Putri, your trusted sales consultant. Explore our collection of EVs including Dolphin, Seal, Atto, and more. Contact via WhatsApp for personalized consultation.",
  keywords: "BYD, electric vehicle, EV, sales consultant, Rintan Putri, Indonesia, showroom, car dealer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
