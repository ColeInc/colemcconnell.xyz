"use client"

import { Facebook, Twitter, Linkedin, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareButtons() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
        <Facebook className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
        <Twitter className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
        <Copy className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
        <Linkedin className="w-5 h-5" />
      </Button>
    </div>
  )
}