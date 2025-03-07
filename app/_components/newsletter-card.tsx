import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"

export function NewsletterCard() {
  return (
    <Card className="w-full md:w-[400px] bg-card/20 border-border flex-grow">
      <CardHeader>
        <CardTitle className="text-md text-foreground uppercase">Newsletter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Get weekly insights on transitioning from engineer to founder, building profitable SaaS, and escaping the corporate life.
          </p>
        </div>
        <NewsletterForm className="ml-3 !mt-0 space-y-3 flex items-center justify-center" />
      </CardContent>
    </Card>
  )
} 