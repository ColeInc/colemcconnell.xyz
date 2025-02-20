import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"

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
        <NewsletterForm className="ml-3 !mt-0 space-y-3 flex items-center justify-center" />
      </CardContent>
    </Card>
  )
} 