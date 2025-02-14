"use client"

import Image from "next/image"
import { urlFor } from "@/lib/sanity.client"
import type { Author } from "@/types/article"

interface AuthorInfoProps {
  author: Author | undefined
}

export function AuthorInfo({ author }: AuthorInfoProps) {
  if (!author) return null

  return (
    <div className="flex items-center gap-4 py-4 border-y border-zinc-800">
      {author.image && (
        <div className="relative w-12 h-12">
          <Image
            src={urlFor(author.image).width(100).height(100).url()}
            alt={author.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      <div>
        <p className="font-medium text-white">{author.name}</p>
        {author.bio && (
          <p className="text-sm text-zinc-400">{author.bio}</p>
        )}
      </div>
    </div>
  )
}