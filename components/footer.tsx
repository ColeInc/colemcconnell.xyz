import { Mail, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to my newsletter</h3>
            <p className="text-sm text-zinc-400">Get the latest updates directly in your inbox.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-zinc-900 border-zinc-800" />
              <Button>Subscribe</Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
            <p className="text-sm text-zinc-400">Feel free to reach out for collaborations or just to say hi!</p>
          </div>
        </div>
      </div>
    </footer>
  )
}