import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { ArticlesSection } from "@/components/home/articles-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <HeroSection />
      <main className="container mx-auto px-4 space-y-12 pb-12">
        <ServicesSection />
        <ProjectsSection />
        <ArticlesSection />
      </main>
    </div>
  )
}