import "@/app/globals.css"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cole McConnell - Full Stack Engineer & Writer",
  description: "Portfolio and Newsletter of Cole McConnell, Full Stack Software Engineer & Writer",
  // icons: {
  //   icon: '/favicon.ico',
  // },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 