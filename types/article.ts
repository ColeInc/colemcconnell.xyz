import type { Image, Slug } from "sanity"

export interface Author {
  name: string
  image?: Image
  bio?: string
}

export interface Article {
  _id: string
  title: string
  slug: Slug
  mainImage?: Image
  publishedAt: string
  body: any[] // PortableTextBlock[] if you want to be more specific
  author?: Author
} 