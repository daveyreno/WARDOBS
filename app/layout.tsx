import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const wardfont = localFont({
  src: [
    {
      path: "./fonts/sans_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sans_semibold.woff2",
      weight: "500",
      style: "semibold",
    },
    {
      path: "./fonts/sans_bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WardObs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${wardfont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
