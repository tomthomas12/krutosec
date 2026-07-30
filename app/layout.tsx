import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krutosec.com"),
  title: {
    default: "Krutosec | Penetration Testing & Secure Development",
    template: "%s | Krutosec",
  },
  description:
    "Krutosec is an offensive security and secure development partner — web, API, cloud, mobile, and LLM penetration testing with manual, evidence-backed findings.",
  keywords: [
    "penetration testing",
    "API security testing",
    "cloud security assessment",
    "LLM security testing",
    "secure software development",
    "Krutosec",
  ],
  openGraph: {
    title: "Krutosec | Penetration Testing & Secure Development",
    description:
      "Manual, evidence-backed penetration testing and secure development for teams that can't afford to guess.",
    url: "https://www.krutosec.com",
    siteName: "Krutosec",
    images: ["/logo.png"],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Krutosec",
              url: "https://www.krutosec.com",
              logo: "https://www.krutosec.com/logo.png",
              description:
                "Offensive security and secure development firm offering penetration testing, secure development, and LLM security testing.",
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
