import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soha Ahrari | Frontend Developer",
  description:
    "Soha Ahrari is a frontend developer from Herat, Afghanistan, specializing in React.js, Next.js, JavaScript, responsive web design, and modern web applications.",
  keywords: [
    "Soha Ahrari",
    "Soha Ehrari",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "Herat Developer",
    "Afghanistan Developer",
  ],
  authors: [
    {
      name: "Soha Ahrari",
    },
  ],
  creator: "Soha Ahrari",
  publisher: "Soha Ahrari",

  metadataBase: new URL("https://your-domain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Soha Ahrari | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript, and responsive web applications.",
    url: "https://your-domain.com",
    siteName: "Soha Ahrari Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soha Ahrari | Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript, and modern web applications.",
    creator: "@davod1854",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}