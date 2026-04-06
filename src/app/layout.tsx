import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pixel = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Safvan | Full Stack Developer",
  description: "A premium, dark-themed, cinematic developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${pixel.variable} min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-500 antialiased font-sans selection:bg-black selection:text-white overflow-x-hidden p-4 md:p-6 lg:p-8 cursor-default`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <CustomCursor />
          <div className="mx-auto flex flex-col gap-6 md:gap-10 max-w-[1600px] w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
