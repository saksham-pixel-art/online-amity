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

const BASE_URL = "https://amityonline.learnlith.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Online MBA, BBA, MCA & BCA Degrees | Amity University Online",
    template: "%s | Amity University Online",
  },
  description:
    "Earn UGC-approved Online MBA, BBA, MCA and BCA degrees from Amity University Online with flexible learning, expert faculty and placement support.",
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
    title: "Online MBA, BBA, MCA & BCA Degrees | Amity University Online",
    description:
      "Earn UGC-approved Online MBA, BBA, MCA and BCA degrees from Amity University Online with flexible learning, expert faculty and placement support.",
    type: "website",
    locale: "en_IN",
    siteName: "Amity University Online",
    url: `${BASE_URL}/`,
    images: [
      {
        url: `${BASE_URL}/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png`,
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
    title: "Online MBA, BBA, MCA & BCA Degrees | Amity University Online",
    description:
      "Earn UGC-approved Online MBA, BBA, MCA and BCA degrees from Amity University Online with flexible learning, expert faculty and placement support.",
    images: [`${BASE_URL}/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png`],
  },
  alternates: {
    canonical: `${BASE_URL}/`,
  },
};

/* ─── JSON-LD Schema Data ─────────────────────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  "@id": `${BASE_URL}/#organization`,
  name: "Amity University Online",
  alternateName: "Amity Online",
  description:
    "India's leading online university offering UGC-approved, WASC-accredited degree programs in MBA, BBA, MCA, and BCA with 100% online flexibility and placement support.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png`,
    width: 1200,
    height: 630,
    caption: "Amity University Online",
  },
  image: `${BASE_URL}/assets/6084f44d00fa7aa6f0e1cee97e8abc05.png`,
  telephone: "+91-7037010407",
  email: "admissions@onlineamity.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 125",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201313",
    addressCountry: "IN",
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
        description:
          "Master of Business Administration with global management specialization. UGC-approved, WASC-accredited, QS-ranked program.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Amity University Online",
          sameAs: BASE_URL,
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
        description:
          "Bachelor of Business Administration with emerging specializations. UGC-approved degree program.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Amity University Online",
          sameAs: BASE_URL,
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
        description:
          "Master of Computer Applications with industry certifications. UGC-approved, WASC-accredited program.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Amity University Online",
          sameAs: BASE_URL,
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
        description:
          "Bachelor of Computer Applications with real-world projects. UGC-approved degree program.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Amity University Online",
          sameAs: BASE_URL,
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
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Amity University Online",
  url: BASE_URL,
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Amity University Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity University Online is the digital learning wing of the world-renowned Amity Education Group, offering top-tier accredited degree programs that combine academic rigor with the flexibility of online learning. Students can earn UGC-recognized, WASC and NAAC A+ accredited degrees from anywhere in the world.",
      },
    },
    {
      "@type": "Question",
      name: "What is the admission process of Amity Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The admission process is simple and fully online. You can apply by filling out the enquiry form on our website, after which our counselors will guide you through document submission, fee payment, and enrollment. No entrance exam is required for most programs.",
      },
    },
    {
      "@type": "Question",
      name: "How do I access my course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once enrolled, you will receive login credentials to access the Amity Online Learning Management System (LMS). All course materials, lectures, assignments, and resources are available 24/7 on the platform, accessible from any device.",
      },
    },
    {
      "@type": "Question",
      name: "How will I get admission confirmation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After completing the application and fee payment, you will receive an official admission confirmation via email along with your student ID and LMS access credentials. Our support team is available to assist you throughout the process.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation of admission policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission cancellation and refund policies are governed by university guidelines. Students can request cancellation within the specified period by contacting the admissions office. Refunds, if applicable, are processed as per the university's refund policy.",
      },
    },
    {
      "@type": "Question",
      name: "What academic support services are available to online students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amity Online provides comprehensive academic support including dedicated faculty mentors, 24/7 LMS access, live doubt-clearing sessions, discussion forums, digital library access, and career counseling services to ensure holistic student development.",
      },
    },
    {
      "@type": "Question",
      name: "How are exams and assessments conducted in online programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exams are conducted online through a secure, AI-enabled proctoring system, allowing you to complete assessments from the comfort of your home. Assessments include a mix of assignments, quizzes, projects, and semester-end examinations.",
      },
    },
    {
      "@type": "Question",
      name: "Are student loans available for online students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Amity Online programs are eligible for education loans from leading banks and financial institutions. Our team can guide you through the loan application process and provide the necessary documentation for loan approval.",
      },
    },
    {
      "@type": "Question",
      name: "How are online classes conducted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classes are conducted through a blend of pre-recorded video lectures, live interactive sessions, and self-paced learning modules on our advanced LMS platform. Students can access content anytime and interact with faculty during scheduled live sessions.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Resource Hints — Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical hero image for LCP */}
        <link
          rel="preload"
          href="/assets/6cacedb12d1bd72137add9d5bc727948.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />

        {/* Mobile & PWA meta */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Amity Online" />

        {/* Geo tags — Local SEO */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Noida, Uttar Pradesh, India" />
        <meta name="geo.position" content="28.5355;77.3910" />
        <meta name="ICBM" content="28.5355, 77.3910" />

        {/* Google / Bing verification */}
        <meta name="google-site-verification" content="mYn5o6Lgmu55eq879llvZ_m8vQ57O-Rz8BLqyQMDU9Y" />
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVG66TDW');
            `,
          }}
        />

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0874L45298"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0874L45298', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />

        {/* ── Structured Data: Organization + EducationalOrganization ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* ── Structured Data: WebSite with SearchAction ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />

        {/* ── Structured Data: BreadcrumbList ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* ── Structured Data: FAQPage ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-on-surface">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVG66TDW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
