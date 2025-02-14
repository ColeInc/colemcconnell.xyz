import { SanityClient, createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const getClient = (): SanityClient => {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_READ_TOKEN,
  })
}

// Image builder configuration
const builder = imageUrlBuilder(getClient())

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}