"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShareButtons } from "./share-buttons"

export function AuthorInfo() {
  return (
    <div className="flex items-center justify-between py-6 border-y border-gray-800 mb-8">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/images/profile-avatar.jpg" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">Andrea Bosoni</div>
          <div className="text-sm text-gray-400">February 05, 2025</div>
        </div>
      </div>
      <ShareButtons />
    </div>
  )
}