
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ARTICLES = [
  {
    id: 1,
    date: "Jan 1, 2024",
    title: "Article Title 1",
    preview: "A brief preview of the article content goes here..."
  },
  {
    id: 2,
    date: "Jan 1, 2024",
    title: "Article Title 2",
    preview: "A brief preview of the article content goes here..."
  },
  {
    id: 3,
    date: "Jan 1, 2024",
    title: "Article Title 3",
    preview: "A brief preview of the article content goes here..."
  },
  {
    id: 4,
    date: "Jan 1, 2024",
    title: "Article Title 4",
    preview: "A brief preview of the article content goes here..."
  }
]

export function ArticlesSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Popular Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <Card key={article.id} className="bg-zinc-900/20 border-zinc-800/50">
            <CardContent className="p-6">
              <p className="text-sm text-zinc-400 mb-2">{article.date}</p>
              <h3 className="font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{article.preview}</p>
              <Button variant="link" className="px-0">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}