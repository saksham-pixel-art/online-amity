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
    default: "Online MBA, BBA, MCA, BCA Degrees | Amity University Online India",
    template: "%s | Amity University Online",
  },
  description:
    "Earn UGC-approved, WASC-accredited online degrees from Amity University. 100% online MBA, BBA, MCA & BCA programs with placement support, flexible EMI & 30% scholarship. Apply now for July 2026 batch!",
  keywords: [
    "online MBA India",
    "online BBA degree",
    "online MCA program",
    "online BCA course",
    "UGC approved online degree",
    "WASC accredited MBA",
    "distance MBA India",
    "online university India",
    "Amity online admission",
    "best online MBA India",
    "affordable online degree",
    "online degree with placement",
    "NAAC A+ online university",
    "work and study MBA",
    "online masters degree India",
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
    title: "Online MBA, BBA, MCA, BCA Degrees | Amity University Online India",
    description:
      "Earn UGC-approved, WASC-accredited online degrees with placement support. 30% scholarship + flexible EMI. Apply for July 2026 batch!",
    type: "website",
    locale: "en_IN",
    siteName: "Amity University Online",
    url: "https://amityonline.com",
    images: [
      {
        url: "/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png",
        width: 1200,
        height: 630,
        alt: "Amity University Online - UGC Approved & WASC Accredited Degrees",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AmityOnline",
    creator: "@AmityOnline",
    title: "Online MBA, BBA, MCA, BCA Degrees | Amity University Online",
    description:
      "Earn UGC-approved, WASC-accredited online degrees with placement support. 30% scholarship available!",
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
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png"
          as="image"
          type="image/png"
        />
        
        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Amity Online" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />
        
        {/* Verification tags (add your actual verification codes) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Amity University Online",
              alternateName: "Amity Online",
              description:
                "India's leading online university offering UGC-approved, WASC-accredited degree programs in MBA, BBA, MCA, and BCA with 100% online flexibility and placement support.",
              url: "https://amityonline.com",
              logo: {
                "@type": "ImageObject",
                url: "https://amityonline.com/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png",
                width: 1200,
                height: 630,
              },
              image: "https://amityonline.com/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png",
              telephone: "+91-1800-123-4567",
              email: "admissions@amityonline.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Uttar Pradesh",
                addressLocality: "Noida",
              },
              sameAs: [
                "https://www.facebook.com/amityonline",
                "https://www.linkedin.com/school/amity-university-online",
                "https://twitter.com/amityonline",
                "https://www.instagram.com/amityonline",
                "https://www.youtube.com/amityonline",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "12500",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Online Degree Programs",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Online MBA (Global)",
                    description: "Master of Business Administration with global management specialization. UGC-approved, WASC-accredited, QS-ranked program.",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                    educationalCredentialAwarded: "Master's Degree",
                    timeToComplete: "P2Y",
                    occupationalCredentialAwarded: "MBA",
                    offers: {
                      "@type": "Offer",
                      category: "Online Education",
                      availability: "https://schema.org/InStock",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "Online BBA",
                    description: "Bachelor of Business Administration with emerging specializations. UGC-approved degree program.",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                    educationalCredentialAwarded: "Bachelor's Degree",
                    timeToComplete: "P3Y",
                    occupationalCredentialAwarded: "BBA",
                    offers: {
                      "@type": "Offer",
                      category: "Online Education",
                      availability: "https://schema.org/InStock",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "Online MCA",
                    description: "Master of Computer Applications with industry certifications. UGC-approved, WASC-accredited program.",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                    educationalCredentialAwarded: "Master's Degree",
                    timeToComplete: "P2Y",
                    occupationalCredentialAwarded: "MCA",
                    offers: {
                      "@type": "Offer",
                      category: "Online Education",
                      availability: "https://schema.org/InStock",
                    },
                  },
                  {
                    "@type": "Course",
                    name: "Online BCA",
                    description: "Bachelor of Computer Applications with real-world projects. UGC-approved degree program.",
                    provider: {
                      "@type": "EducationalOrganization",
                      name: "Amity University Online",
                    },
                    educationalCredentialAwarded: "Bachelor's Degree",
                    timeToComplete: "P3Y",
                    occupationalCredentialAwarded: "BCA",
                    offers: {
                      "@type": "Offer",
                      category: "Online Education",
                      availability: "https://schema.org/InStock",
                    },
                  },
                ],
              },
              accreditation: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Accreditation",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "University Grants Commission (UGC)",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Accreditation",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "WASC Senior College and University Commission",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Accreditation",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "National Assessment and Accreditation Council (NAAC)",
                    description: "A+ Grade",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amity University Online",
              url: "https://amityonline.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://amityonline.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://amityonline.com",
                },
              ],
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
