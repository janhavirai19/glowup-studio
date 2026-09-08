import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlowUp Studio | Beauty & Wellness",
  description:
    "GlowUp Studio - Premium beauty, skincare and wellness experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}