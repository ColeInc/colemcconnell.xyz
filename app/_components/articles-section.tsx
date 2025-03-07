import { client } from "@/sanity/lib/client"
import { ArticleCard } from "./article-card"
import type { Article } from "@/types/article"
import { groq } from "next-sanity"

/**
 * Fetches the 4 most recent articles from Sanity CMS
 * Orders by publishedAt date in descending order
 * Returns only necessary fields for the articles preview section
 */
async function getRecentArticles(): Promise<Article[]> {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc)[0...9] {
      _id,
      title,
      "preview": array::join(string::split(pt::text(body[0...1]), "")[0...150], "") + "...",
      publishedAt,
      mainImage,
      slug
    }
  `
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching recent articles:', error)
    return []
  }
}

export async function ArticlesSection() {
  const articles = await getRecentArticles()

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6 uppercase">Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </section>
  )
}