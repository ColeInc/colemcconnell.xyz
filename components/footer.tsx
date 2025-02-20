import { Mail, Twitter, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function Footer() {
  const TWITTER_URL = 'https://twitter.com/cole_mccon'
  const GITHUB_URL = 'https://github.com/coleinc'  
  const LINKEDIN_URL = 'https://www.linkedin.com/in/cole-mcconnell/'
  const EMAIL_URL = 'mailto:clmccnnll@gmail.com'

  return (
    <footer className="border-t border-zinc-600 bg-black">
      <div className="container mx-auto px-12 py-12 max-w-5xl">
        <div className="flex flex-col md:flex-row md:grid-cols-2 justify-between gap-8">
          {/* Newsletter Subscription */}
          <div className="space-y-4 max-w-[530px]">
            <h3 className="text-lg font-semibold text-zinc-200 !mb-0 pb-0">Subscribe to my Weekly Newsletter</h3>
            <p className="text-sm text-zinc-400 !mt-2 pt-0">Weekly insights on transitioning from engineer to founder, building profitable SaaS, and escaping the corporate life.</p>
            <NewsletterForm className="!ml-0 flex gap-2" />
            {/* <NewsletterForm className="!ml-0 flex gap-2 max-w-[350px]" /> */}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Connect with me</h3> */}
            <div className="flex gap-2">
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
            <Link href={LINKEDIN_URL} target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-transparent hover:bg-zinc-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
              </Button>
            </Link>
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
            <p className="text-sm text-zinc-500 md:text-right">Designed by Cole.</p>
            <p className="text-xs !mt-1 text-zinc-700 md:text-right">© Copyright {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

