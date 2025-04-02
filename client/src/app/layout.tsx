import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Philosopher } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const philosopher = Philosopher({
  variable: "--font-philosopher",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ParkinsansBold = localFont({
  src: "./fonts/Parkinsans-Bold.ttf",
  variable: "--font-park-bold",
  weight: "600",
});
const ParkinsansMedium = localFont({
  src: "./fonts/Parkinsans-Medium.ttf",
  variable: "--font-park-medium",
  weight: "500",
});

const ParkinsansRegular = localFont({
  src: "./fonts/Parkinsans-Regular.ttf",
  variable: "--font-park-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Home | DCHairs",
  description: "DCHairs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${philosopher.variable} ${poppins.variable} ${ParkinsansBold.variable}  ${ParkinsansRegular.variable}  ${ParkinsansMedium.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
