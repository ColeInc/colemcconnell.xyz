import { HeroSection } from "@/app/_components/hero-section"
import { ArticlesSection } from "@/app/_components/articles-section"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <main className="container mx-auto px-4 space-y-12 pb-12">
          {/* <ServicesSection /> */}
          <ArticlesSection />
          {/* <ProjectsSection /> */}
        </main>
      </div>
    </div>
  )
} 