import Image from "next/image"
import { Mail, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="flex-1 space-y-4">
          <div className="bg-zinc-900/20 rounded-lg p-4 border border-zinc-800/50">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/images/profile-avatar.jpg" alt="Profile" width={80} height={80} className="rounded-full" />
              <div>
                <h1 className="text-2xl font-bold">Cole McConnell</h1>
                <p className="text-zinc-400">Full Stack Software Engineer & Writer</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              Building products and writing about web development, AI, and developer tools. Previously worked at
              Company X and Company Y.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-zinc-800 transition-colors">
              <Twitter className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-zinc-800 transition-colors">
              <Github className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-zinc-800 transition-colors">
              <Mail className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
            </Button>
          </div>
        </div>

        <Card className="w-full md:w-[400px] bg-zinc-900/20 border-zinc-800/50">
          <CardHeader>
            <CardTitle className="text-sm text-zinc-400">Currently Working On</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Project Name</h3>
            <p className="text-sm text-zinc-400">Building an AI-powered productivity tool for developers</p>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}