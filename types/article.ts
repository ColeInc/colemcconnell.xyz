export interface Article {
  _id: string
  title: string
  publishedAt: string
  preview: string
  mainImage?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  slug: {
    current: string
  }
} 