import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "FrameWork 1.0 ",
  description:
    "Join Flutter Kanpur's flagship annual hackathon and tech conference. Connect with speakers, explore tracks, and build the future with Flutter.",
  keywords: [
    "Flutter",
    "Kanpur",
    "Hackathon",
    "Tech Conference",
    "FrameWork",
    "Flutter Kanpur",
  ],
  openGraph: {
    title: "FrameWork 1.0 | Flutter Kanpur",
    description:
      "Flutter Kanpur's flagship annual hackathon and tech conference",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${michroma.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
