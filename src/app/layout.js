import { Inter } from "next/font/google";
//style
import "./globals.css";
import clsx from "clsx";
import { FireFliesBackground } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}