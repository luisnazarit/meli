import { MetadataRoute } from 'next'
import { DOMAIN } from './constants/constants'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  }
}