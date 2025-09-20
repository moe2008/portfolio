import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// METADATA EXPORT - Das ist der richtige Weg für App Router
export const metadata = {
  title: "Web Developer & Automation Expert – MERN/Next.js | modev",
  description:
    "SaaS-Entwicklung mit MERN/Next.js, API-Integrationen und Automationen (Zapier/n8n). Schnelle Time-to-Market, starke SEO & Performance.",

  // Basis Meta-Tags
  keywords: [
    "SaaS",
    "MERN Stack",
    "Next.js",
    "API Integration",
    "Automation",
    "Zapier",
    "n8n",
    "Web Development",
  ],
  authors: [{ name: "modev" }],
  creator: "modev",
  publisher: "modev",
  robots: "index, follow",

  // Open Graph
  openGraph: {
    title: "Web Developer & Automation Expert – MERN/Next.js | modev",
    description:
      "SaaS-Entwicklung mit MERN/Next.js, API-Integrationen und Automationen (Zapier/n8n). Schnelle Time-to-Market, starke SEO & Performance.",
    url: "https://example.com/de",
    siteName: "modev",
    locale: "de_DE",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Web Developer & Automation Expert – MERN/Next.js | modev",
    description:
      "SaaS-Entwicklung mit MERN/Next.js, API-Integrationen und Automationen (Zapier/n8n). Schnelle Time-to-Market, starke SEO & Performance.",
  },

  // Canonical und Alternates
  alternates: {
    canonical: "https://example.com/de",
    languages: {
      de: "https://example.com/de",
      en: "https://example.com/en",
      "x-default": "https://example.com/de",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://example.com/#organization",
                  name: "modev",
                  url: "https://example.com",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://example.com/#website",
                  url: "https://example.com",
                  name: "modev",
                  publisher: { "@id": "https://example.com/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://example.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Service",
                  name: "SaaS Development & Automation",
                  provider: { "@id": "https://example.com/#organization" },
                  areaServed: ["DE", "EN"],
                  offers: { "@type": "Offer", priceRange: "€€–€€€" },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
