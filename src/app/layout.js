import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateProfessionalServiceSchema,
} from "@/lib/structuredData";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const baseUrl = "https://ana-yet.vercel.app";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MD ANAYET MIAH - MERN Stack Developer | Full Stack Developer Bangladesh",
    template: "%s | MD ANAYET MIAH",
  },
  description:
    "Experienced MERN Stack Developer from Sylhet, Bangladesh. Specializing in MongoDB, Express, React, and Node.js. Building scalable web applications with modern technologies. Available for freelance projects.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer Bangladesh",
    "React Developer",
    "Node.js Developer",
    "Web Developer Sylhet",
    "MongoDB",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Development Services",
    "Freelance Developer",
  ],
  authors: [{ name: "MD ANAYET MIAH", url: baseUrl }],
  creator: "MD ANAYET MIAH",
  publisher: "MD ANAYET MIAH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "MD ANAYET MIAH Portfolio",
    title: "MD ANAYET MIAH - MERN Stack Developer | Full Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in MongoDB, Express, React, and Node.js. Building scalable web applications with modern technologies.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "MD ANAYET MIAH - MERN Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD ANAYET MIAH - MERN Stack Developer",
    description: "Full-stack developer specializing in MERN stack. Building scalable web applications.",
    creator: "@md_anayet_m",
    images: [`${baseUrl}/og-image.png`],
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
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
    // Add other verification codes as needed
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  const personSchema = generatePersonSchema(personalInfo);
  const websiteSchema = generateWebSiteSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();
  const professionalServiceSchema = generateProfessionalServiceSchema(personalInfo);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-sans bg-dark-bg text-gray-100 antialiased`}
      >
        {/* Skip to main content link for accessibility and SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        {children}

        {/* Google Analytics 4 - Add your measurement ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
