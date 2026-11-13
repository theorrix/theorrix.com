import type { Metadata, Viewport } from "next";
import { Geist, Fira_Code } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theorrix.com"),
  title: {
    default: "Theorrix — From Nothing to Something",
    template: "%s | Theorrix — From Nothing to Something",
  },
  description:
    "Theorrix — From Nothing to Something. An independent online technology learning platform. Learn technology, build real things, and grow your skills across full-stack development, system design, artificial intelligence, and more.",
  keywords: [
    "From Nothing to Something",
    "Theorrix",
    "Technology Learning",
    "Software Engineering",
    "Full-Stack Development",
    "System Design",
    "Distributed Systems",
    "Artificial Intelligence",
    "AI Engineering",
    "Programming Tutorials",
    "Computer Science Fundamentals",
    "Tech Education",
  ],
  authors: [{ name: "Theorrix", url: "https://theorrix.com" }],
  creator: "Theorrix",
  publisher: "Theorrix",
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://theorrix.com",
    languages: {
      "en-US": "https://theorrix.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theorrix.com",
    siteName: "Theorrix",
    title: "Theorrix — From Nothing to Something",
    description:
      "From Nothing to Something. Learn technology, build real things, and grow your skills with practical software engineering, systems, and AI tutorials.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Theorrix — From Nothing to Something",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theorrix — From Nothing to Something",
    description:
      "From Nothing to Something. Learn technology, build real things, and grow your skills across full-stack development, system design, artificial intelligence, and more.",
    creator: "@theorrix",
    site: "@theorrix",
    images: ["/opengraph-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/media/symbol.webp", type: "image/webp", sizes: "1000x1000" },
    ],
    apple: [
      { url: "/media/symbol.webp", type: "image/webp" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://theorrix.com/#organization",
      name: "Theorrix",
      slogan: "From Nothing to Something.",
      url: "https://theorrix.com",
      logo: "https://theorrix.com/media/logo.webp",
      image: "https://theorrix.com/opengraph-image.png",
      email: "theorrixhq@gmail.com",
      description:
        "Theorrix — From Nothing to Something. An independent online technology learning platform making learning technology easier, clearer, and more practical.",
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Development",
        "System Design",
        "Distributed Systems",
        "Artificial Intelligence",
        "Computer Science",
        "Algorithms",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "technical inquiries",
          email: "theorrixhq@gmail.com",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://github.com/theorrix",
        "https://youtube.com/@theorrix",
        "https://instagram.com/theorrix",
        "https://linkedin.com/company/theorrix",
        "https://x.com/theorrix",
        "https://reddit.com/user/theorrix",
        "https://threads.net/@theorrix",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://theorrix.com/#website",
      url: "https://theorrix.com",
      name: "Theorrix — From Nothing to Something",
      description:
        "Theorrix — From Nothing to Something. An independent online technology learning platform.",
      publisher: {
        "@id": "https://theorrix.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://theorrix.com/#curriculum",
      name: "Theorrix Learning Areas & Curriculum Tracks",
      description:
        "Comprehensive educational tracks covering full-stack development, system design, and artificial intelligence.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Full-Stack Development",
          description:
            "Understand modern frontend, backend, and API development through clear, end-to-end practical projects.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "System Design",
          description:
            "Learn how real-world, scalable, and resilient software architectures are planned, structured, and maintained in production.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Artificial Intelligence",
          description:
            "Explore modern AI foundations, intelligent agents, neural architectures, and practical engineering implementations.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NF46WF2G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF46WF2G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div className="bg-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
