import Image from "next/image"
import { Mail, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutCard() {
  const TWITTER_URL = 'https://twitter.com/cole_mccon'
  const GITHUB_URL = 'https://github.com/coleinc'  
  const EMAIL_URL = 'mailto:clmccnnll@gmail.com'

  return (
    // uncomment dis when reenabling newsletter card
    // <div className="space-y-4 max-w-[350px]">
    <div className="space-y-4 flex-1 max-w-[550px]">
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center gap-4 mb-4">
          <Image src="/images/profile-avatar.jpg" alt="Profile" width={80} height={80} className="rounded-full" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Cole McConnell</h1>
            <p className="text-muted-foreground leading-[1.2]">Full Stack Engineer & Writer</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground pb-6">
          Building SaaS products and writing about how engineers can make the jump from a 9-5 to becoming well-rounded, self-sufficient founders.
        </p>
        <div className="flex gap-3 pb-1">
          <Link href={TWITTER_URL} target="_blank">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-transparent hover:bg-accent"
            >
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
          </Link>
          <Link href={GITHUB_URL} target="_blank">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-transparent hover:bg-accent"
            >
              <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
          </Link>
          <Link href={EMAIL_URL}>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-transparent hover:bg-accent"
            >
              <Mail className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 