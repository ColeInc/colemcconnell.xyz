import { groq } from "next-sanity"

export const getArticleBySlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    author-> {
      name,
      image,
      bio
    }
  }
` 