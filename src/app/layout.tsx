import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: {
    default: "Aadithya S — Embedded Systems Engineer",
    template: "%s | Aadithya S",
  },
  description: profile.introduction,
  applicationName: "Aadithya S Portfolio",
  openGraph: {
    title: "Aadithya S — Hardware, Firmware & Connected Systems",
    description: profile.introduction,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadithya S — Embedded Systems Engineer",
    description: profile.introduction,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body id="top">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark'}catch{}`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
