import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocialFi Dashboard | @samdevrel",
  description: "Decentralized social media with Web3 monetization. Lens, Farcaster, Bluesky.",
  keywords: ["SocialFi", "Lens Protocol", "Farcaster", "Bluesky", "decentralized social"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
