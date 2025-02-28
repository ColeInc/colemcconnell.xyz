'use client'

import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client"
import { ArticleCard } from "@/app/_components/article-card"
import type { Article } from "@/types/article"
import { groq } from "next-sanity"

async function getArticles(start: number = 0, end: number = 10): Promise<Article[]> {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc)[${start}...${end}] {
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
    console.error('Error fetching articles:', error)
    return []
  }
}

const ArticleGrid = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  
  const loadMoreArticles = async () => {
    setIsLoading(true)
    const start = currentPage * 10
    const end = start + 10
    
    const newArticles = await getArticles(start, end)
    
    if (newArticles.length < 10) {
      setHasMore(false)
    }
    
    setArticles(prev => [...prev, ...newArticles])
    setCurrentPage(prev => prev + 1)
    setIsLoading(false)
  }

  // Load initial articles
  useEffect(() => {
    loadMoreArticles()
  }, [])

  return (
    <div className="space-y-8 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreArticles}
            disabled={isLoading}
            className="px-6 py-3 text-zinc-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Load More Articles'}
          </button>
        </div>
      )}
    </div>
  )
}

export default ArticleGrid