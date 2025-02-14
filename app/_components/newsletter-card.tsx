import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function NewsletterCard() {
  return (
    <Card className="w-full md:w-[400px] bg-zinc-900/20 border-zinc-700/50 flex-grow">
      <CardHeader>
        <CardTitle className="text-md text-zinc-200 uppercase">Newsletter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-zinc-400">
            Get weekly insights on transitioning from engineer to founder, building profitable SaaS, and escaping the corporate life.
          </p>
        </div>
        <form className="space-y-3 flex items-center justify-center">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-zinc-900/50 border-zinc-800 placeholder:text-zinc-600 text-white focus:border-zinc-700 focus:border-[0.5px]"
          />
          {/* <Button className="ml-3 !mt-0 bg-zinc-800 hover:bg-gradient-to-r hover:from-[#6af0a0] hover:to-[#3085ee] text-zinc-400 hover:text-black transition-all uppercase">
            Subscribe
          </Button> */}
          <Button className="ml-3 !mt-0 bg-zinc-900 hover:bg-gradient-to-r hover:from-[#6af0a0] hover:to-[#3085ee] text-zinc-100 hover:text-black transition-all"></Button>
        </form>
      </CardContent>
    </Card>
  )
} 