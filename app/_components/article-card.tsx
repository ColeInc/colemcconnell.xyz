import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/types/article"
import { urlFor } from "@/lib/sanity.client"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="group bg-zinc-900/20 border-zinc-700/40 hover:border-zinc-700/60 transition-colors overflow-hidden">
      <Link href={`/newsletter/${article.slug.current}`}>
        <div className="relative w-full h-48 overflow-hidden">
          {article.mainImage ? (
            <Image
              src={urlFor(article.mainImage).width(800).height(400).url()}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800/50" />
          )}
        </div>
        <CardContent className="p-6">
          <p className="text-xs text-zinc-500 mb-1">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <h3 className="font-semibold mb-4 text-white group-hover:text-zinc-300 transition-colors">
            {article.title}
          </h3>
          <div className="inline-flex items-center text-zinc-400 group-hover:text-white transition-colors">
            <span className="mr-2">Read article</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
} 