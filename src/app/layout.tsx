import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuroraBackground } from "@/components/aurora-background";
import { LoadingProvider } from "@/context/loading-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MavsThink Hackathon",
  description: "Join us for the biggest business hackathon at UTA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} relative`}>
        <LoadingProvider>
          <div className="relative z-0">
            {" "}
            <AuroraBackground>{children}</AuroraBackground>
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
