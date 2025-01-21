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
  title: "Mohsen Tavakoli | Senior Frontend Developer",
  description: "Welcome to the portfolio of Mohsen Tavakoli, a Senior Frontend Developer with over 5 years of experience specializing in React.js, JavaScript, and advanced web technologies. Explore my projects, skills, and professional journey.",
  keywords: "Mohsen Tavakoli, Frontend Developer, React.js Developer, Portfolio, Senior Developer, JavaScript Developer, Web Development, Software Engineer, Projects, Resume",
  author: "Mohsen Tavakoli",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}
