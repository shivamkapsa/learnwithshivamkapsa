import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnwithshivamkapsa.vercel.app"),

  title: {
    default: "Learn With Shivam Kapsa",
    template: "%s | Learn With Shivam Kapsa",
  },

  description:
    "Learn web development, Computer Science, interview skills and exam preparation with structured courses, notes, blogs and practical resources.",

  applicationName: "LearnWithShivamKapsa",

  authors: [
    {
      name: "Shivam Kapsa",
    },
  ],

  creator: "Shivam Kapsa",
  publisher: "LearnWithShivamKapsa",

  keywords: [
    "web development",
    "React",
    "JavaScript",
    "Next.js",
    "Node.js",
    "Angular",
    "Computer Science",
    "programming",
    "interview preparation",
    "government exam preparation",
    "DSSSB",
    "TGT Computer Science",
    "CTET",
    "UPTET",
    "coding interview",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://learnwithshivamkapsa.vercel.app",
    siteName: "Learn With Shivam Kapsa",
    title: "Learn With Shivam Kapsa",
    description:
      "Learn web development, Computer Science, interview skills and exam preparation with structured courses, notes, blogs and practical resources.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Learn With Shivam Kapsa",
    description:
      "Learn web development, Computer Science, interview skills and exam preparation with structured courses, notes, blogs and practical resources.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
