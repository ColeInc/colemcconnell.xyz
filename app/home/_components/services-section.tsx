import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SERVICES = [
  {
    title: "Build MVPs",
    description: "Service description goes here...",
    cta: "Learn more"
  },
  {
    title: "Consultation",
    description: "Service description goes here...",
    cta: "Book a call"
  },
  {
    title: "Ghostwriting",
    description: "Service description goes here...",
    cta: "Get in touch"
  }
]

export function ServicesSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <Card key={service.title} className="bg-zinc-900/20 border-zinc-800/50">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">{service.description}</p>
              <Button variant="link" className="mt-4 px-0">
                {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}