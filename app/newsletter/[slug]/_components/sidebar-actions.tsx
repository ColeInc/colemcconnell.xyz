"use client"

import { useState } from "react"
import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SidebarActions() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="hidden md:flex flex-col fixed left-4 top-1/3 gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-gray-800"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
        <Share2 className="w-5 h-5" />
      </Button>
    </div>
  )
}