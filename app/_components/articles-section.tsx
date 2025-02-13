import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import Link from "next/link"

// Define TypeScript interface for the article data
interface Article {
  _id: string
  title: string
  publishedAt: string
  preview: string
  slug: {
    current: string
  }
}

/**
 * Fetches the 4 most recent articles from Sanity CMS
 * Orders by publishedAt date in descending order
 * Returns only necessary fields for the articles preview section
 */
async function getRecentArticles(): Promise<Article[]> {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc)[0...4] {
      _id,
      title,
      "preview": array::join(string::split(pt::text(body[0...1]), "")[0...150], "") + "...",
      publishedAt,
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
      <h2 className="text-xl font-semibold mb-6">Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Card key={article._id} className="bg-zinc-900/20 border-zinc-800/50">
            <CardContent className="p-6">
              <p className="text-sm text-zinc-400 mb-2">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{article.preview}</p>
              <Link href={`/posts/${article.slug.current}`}>
                <Button variant="link" className="px-0">
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}