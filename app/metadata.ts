import { Metadata } from 'next'
import { siteConfig, defaultOpenGraph, defaultTwitter } from '@/lib/seo-config'

export const metadata: Metadata = {
  // Use the default title from the site config
  // This is important as the homepage should have the primary site title
  title: siteConfig.title,
  description: siteConfig.description,
  // Reusing the defaults from site config, but we could customize them
  // if needed for the homepage specifically
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter
}
