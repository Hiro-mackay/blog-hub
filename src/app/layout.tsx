import { SiteFooter } from "@src/components/SiteFooter";
import { SiteHeader } from "@src/components/SiteHeader";
import { LayoutProps } from "@src/types";
import { Inter } from "next/font/google";
import "@src/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ja" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
