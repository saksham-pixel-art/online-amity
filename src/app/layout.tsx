import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#002147",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amityonline.com"),
  title: {
    default: "Amity University Online | Unlock Global Learning",
    template: "%s | Amity University Online",
  },
  description:
    "Experience world-class online degree programs from anywhere. Earn UGC-recognized, WASC-accredited degrees in MBA, BBA, MCA, and BCA with 100% online flexibility and placement support.",
  keywords: [
    "Amity Online",
    "Online MBA",
    "Online BCA",
    "Online BBA",
    "Online MCA",
    "Online Degrees",
    "Distance Education",
    "UGC Recognized",
    "WASC Accredited",
    "NAAC A+",
  ],
  authors: [{ name: "Amity University Online" }],
  creator: "Amity University Online",
  publisher: "Amity University Online",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Amity University Online | Unlock Global Learning",
    description:
      "Earn accredited online degree programs from anywhere with placement support. WASC, UGC, NAAC A+ recognized.",
    type: "website",
    locale: "en_US",
    siteName: "Amity University Online",
    images: [
      {
        url: "/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png",
        width: 1200,
        height: 630,
        alt: "Amity University Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amity University Online | Unlock Global Learning",
    description:
      "Earn accredited online degree programs from anywhere with placement support.",
    images: ["/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Amity University Online",
              description:
                "World-class online degree programs with WASC, UGC, and NAAC A+ accreditation.",
              url: "https://amityonline.com",
              logo: "https://amityonline.com/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png",
              sameAs: [
                "https://www.amityonline.com",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Online Degree Programs",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "MBA (Global)",
                    description: "Online MBA with global management specialization",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "BBA",
                    description: "Bachelor of Business Administration",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "MCA",
                    description: "Master of Computer Applications",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "BCA",
                    description: "Bachelor of Computer Applications",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
