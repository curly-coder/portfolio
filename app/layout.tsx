import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";

const inter = Inter({ subsets: ["latin"], display: 'swap', preload: true });

export const metadata: Metadata = {
  title: "Anastasia Kumeda Portfolio",
  description: "Frontend Developer specializing in responsive web design, HTML, CSS, JavaScript, React, WordPress, and e-commerce solutions for high-performance websites and user-friendly interfaces.",
  openGraph: {
    title: "Anastasia Kumeda | Portfolio",
    description: "Frontend developer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}