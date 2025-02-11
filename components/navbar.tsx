import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
})

export function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 px-4 py-4">
      <nav className="mx-auto max-w-6xl bg-black/50 backdrop-blur-xl border border-zinc-800 rounded-lg px-2 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/profile-avatar.jpg" 
            alt="Profile" 
            width={28} 
            height={28} 
            className="rounded-full"
            priority
          />
          {/* <span className="font-medium uppercase">John Doe</span> */}
        </div>

        <div className="flex items-center gap-6">
          <Link href="/" className={`text-sm text-zinc-400 hover:text-white transition-colors uppercase ${robotoMono.className}`}>
            Home
          </Link>
          <Link href="/articles" className={`text-sm text-zinc-400 hover:text-white transition-colors uppercase ${robotoMono.className}`}>
            Articles
          </Link>
          <Button variant="outline" size="sm" className={`ml-4 uppercase bg-gradient-to-br from-[#6af0a0] to-[#3085ee] hover:from-blue-600 hover:to-green-600 text-black font-medium border-0 ${robotoMono.className}`}>
            Subscribe
          </Button>
        </div>
      </nav>
    </div>
  )
}