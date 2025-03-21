import { Metadata } from 'next'
import { siteConfig, defaultOpenGraph, defaultTwitter } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'AI Services',
  description: 'Comprehensive suite of AI advisory services designed specifically for small and medium businesses, addressing specific challenges in the AI adoption journey.',
  openGraph: {
    ...defaultOpenGraph,
    title: 'AI Services | Futureproof',
    description: 'Comprehensive suite of AI advisory services designed specifically for small and medium businesses, addressing specific challenges in the AI adoption journey.',
    url: `${siteConfig.url}/services`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'AI Services | Futureproof',
    description: 'Comprehensive suite of AI advisory services designed specifically for small and medium businesses, addressing specific challenges in the AI adoption journey.',
  }
}
