import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Footer from "@/components/Footer";
import React from "react";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Menu, Search } from "lucide-react";
import SideBar from "@/components/SideBar";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { PlayerProvider } from "./context/PlayerContext";
import ClientLayout from "./ClientLayout";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-black bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
