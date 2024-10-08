import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WalletProviderLayout from './WalletProviderLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sol.lens",
  description: "Your SOL wallet explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProviderLayout>{children}</WalletProviderLayout>
      </body>
    </html>
  );
}
