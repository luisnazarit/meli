import { MetadataRoute } from 'next'
import { DOMAIN } from './constants/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}