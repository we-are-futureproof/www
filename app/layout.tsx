import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Mono, Inter } from "next/font/google"
import { siteConfig, defaultOpenGraph, defaultTwitter } from "../lib/seo-config"

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  generator: 'Next.js',
  metadataBase: new URL(siteConfig.url),
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  category: siteConfig.category,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:logo" content={siteConfig.ogImage} key="og-logo" />
      </head>
      <body className={`${spaceMono.variable} ${inter.variable} font-mono`}>{children}</body>
    </html>
  )
}