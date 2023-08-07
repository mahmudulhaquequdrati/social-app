import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social Media App created by mahmud qudrati",
};
const inter = Inter({ subsets: ["latin"] });

import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
