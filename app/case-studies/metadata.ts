import { Metadata } from 'next'
import { siteConfig, defaultOpenGraph, defaultTwitter } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore real-world AI implementation success stories. See how futureproof has helped businesses transform AI complexity into competitive advantage with measurable results.',
  openGraph: {
    ...defaultOpenGraph,
    title: 'Case Studies | futureproof',
    description: 'Explore real-world AI implementation success stories. See how futureproof has helped businesses transform AI complexity into competitive advantage with measurable results.',
    url: `${siteConfig.url}/case-studies`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'Case Studies | futureproof',
    description: 'Explore real-world AI implementation success stories. See how futureproof has helped businesses transform AI complexity into competitive advantage with measurable results.',
  }
}
