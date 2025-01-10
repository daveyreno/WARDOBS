import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
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
  description: "To try to get a job at a cool startup again.",
};

function MobileWarning() {
  return (
    <div className="flex h-screen items-center justify-center p-4 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Desktop View Required</h1>
        <p className="text-muted-foreground">
          Please view WardObs on a larger screen for the best experience.
        </p>
      </div>
    </div>
  );
}

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
          <TooltipProvider>
            <div className="hidden sm:block">
              {children}
              <Analytics />
            </div>
            <div className="sm:hidden">
              <MobileWarning />
            </div>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
