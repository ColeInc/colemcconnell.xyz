import { AboutCard } from "./about-card"

export function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-8">
      {/* <div className="flex flex-col md:flex-row items-start gap-8 mb-12"> */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <AboutCard />
        {/* <NewsletterCard /> */}
      </div>
    </header>
  )
}