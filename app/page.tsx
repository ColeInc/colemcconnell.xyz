import { HeroSection } from "@/app/home/_components/hero-section"
import { ServicesSection } from "@/app/home/_components/services-section"
import { ProjectsSection } from "@/app/home/_components/projects-section"
import { ArticlesSection } from "@/app/home/_components/articles-section"

export default function Home() {
  return (
    <div className="min-h-screen text-white pt-16">
      <HeroSection />
      <main className="container mx-auto px-4 space-y-12 pb-12">
        <ServicesSection />
        <ArticlesSection />
        <ProjectsSection />
      </main>
    </div>
  )
}