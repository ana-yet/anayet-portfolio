import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "MD ANAYET MIAH - MERN Stack Developer",
  description:
    "Full-stack developer specializing in MongoDB, Express, React, and Node.js. Building scalable web applications with modern technologies.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Web Development",
  ],
  authors: [{ name: "MD ANAYET MIAH" }],
  openGraph: {
    title: "John Doe - MERN Stack Developer",
    description:
      "Full-stack developer specializing in MongoDB, Express, React, and Node.js",
    type: "website",
    locale: "en_US",
    url: "https://johndoe.com",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD ANAYET MIAH - MERN Stack Developer",
    description: "Full-stack developer specializing in MERN stack",
    creator: "@anayet",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-sans bg-dark-bg text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
