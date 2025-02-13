import Image from "next/image"
import { Mail, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function HeroSection() {
  const TWITTER_URL = 'https://twitter.com/cole_mccon'
  const GITHUB_URL = 'https://github.com/coleinc'  
  // const LINKEDIN_URL = 'https://www.linkedin.com/in/cole-mcconnell/'
  const EMAIL_URL = 'mailto:clmccnnll@gmail.com'
            
  return (
    <header className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className=" space-y-4 max-w-[350px]">
          <div className="bg-zinc-900/20 rounded-lg p-4 border border-zinc-800/50 ">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/images/profile-avatar.jpg" alt="Profile" width={80} height={80} className="rounded-full" />
              <div>
                <h1 className="text-2xl font-bold">Cole McConnell</h1>
                <p className="text-zinc-400 leading-[1.2]">Full Stack Software Engineer & Writer</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400 pb-6">
              Building SaaS products and writing about how engineers can make the jump from a 9-5 to becoming well-rounded, self-sufficient founders.
            </p>
          <div className="flex gap-3 pb-1">
            <Link href={TWITTER_URL} target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent hover:bg-zinc-800 transition-colors"
              >
                <Twitter className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Button>
            </Link>
            <Link href={GITHUB_URL} target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Button>
            </Link>
            {/* <Link href={LINKEDIN_URL} target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent hover:bg-zinc-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Button>
            </Link> */}
            <Link href={EMAIL_URL}>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent hover:bg-zinc-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Button>
            </Link>
          </div>
          </div>
        </div>

        <Card className="w-full md:w-[400px] bg-zinc-900/20 border-zinc-800/50 flex-grow">
          <CardHeader>
            <CardTitle className="text-md text-zinc-200 uppercase">Newsletter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {/* <h3 className="font-semibold text-zinc-200">Stay Updated</h3> */}
              {/* <p className="text-sm text-zinc-400">Get weekly insights on financial freedom, tech careers, and building profitable side projects.</p> */}
              {/* <p className="text-sm text-zinc-400">Get weekly insights on technical entrepreneurship, AI product building, and escaping the corporate life.</p> */}
              <p className="text-sm text-zinc-400">Get weekly insights on transitioning from engineer to founder, building profitable SaaS, and escaping the corporate life.</p>
              {/* leveraging the tech revolution, 
              escaping the 9-5
              transitioning from engineer to founder, building profitable SaaS, and gaining independence */}
            </div>
            <form className="space-y-3 flex items-center justify-center">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900/50 border-zinc-800 placeholder:text-zinc-600 text-white focus:border-zinc-700 focus:border-[0.5px]"
              />
              <Button className="ml-3 !mt-0 bg-zinc-800 hover:bg-gradient-to-r hover:from-[#6af0a0] hover:to-[#3085ee] text-zinc-400 hover:text-black transition-all  uppercase">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}