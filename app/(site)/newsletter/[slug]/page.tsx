import { getClient } from "@/lib/sanity.client"
import { getArticleBySlug } from "@/lib/sanity.queries"
import { AuthorInfo } from "./_components/author-info"
import { notFound } from "next/navigation"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import type { Article } from "@/types/article"

interface PageProps {
  readonly params: Promise<{
    readonly slug: string
  }>
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  if (!resolvedParams.slug) {
    notFound()
  }

  const article = await getClient().fetch<Article>(getArticleBySlug, { 
    slug: resolvedParams.slug 
  })

  if (!article) {
    notFound()
  }

  const portableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="mb-6 text-[1rem]">{children}</p>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold mt-12 mb-6">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold mt-8 mb-4">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-zinc-700 pl-4 italic my-6 text-[1rem]">
          {children}
        </blockquote>
      ),
      list: ({ children }) => (
        <li className="pl-4 relative before:absolute before:left-0 before:content-['•'] before:text-[1rem]">
          {children}
        </li>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="text-[1rem] list-none space-y-2 mb-6">
          {children}
        </ul>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        if (!value?.href) return <>{children}</>
        return (
          <a href={value.href} className="text-blue-400 hover:text-blue-300">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <article className="container max-w-4xl mx-auto px-4 pt-24 pb-8">
        {/* <BlogBreadcrumb /> */}
        {/* <SidebarActions /> */}
        {/* <p className="text-2xl font-bold text-red-500">{params.slug}</p> */}
        
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-zinc-200 prose-blockquote:text-zinc-300 prose-blockquote:border-zinc-700 prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-code:text-zinc-100 prose-a:text-blue-400 hover:prose-a:text-blue-300">
          <h1 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl not-prose">
            {article.title}
          </h1>

          <div className="not-prose">
            <AuthorInfo author={article.author} />
          </div>

          <p className="!text-sm text-zinc-400 mt-2 not-prose">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          
          <div className="mt-8">
            <PortableText
              value={article.body}
              components={portableTextComponents}
            />
          </div>
        </div>
      </article>
    </div>
  )
}