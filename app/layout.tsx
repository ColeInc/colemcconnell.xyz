import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "John Doe - Developer & Technical Writer",
  description: "Portfolio and blog of John Doe, Full Stack Developer and Technical Writer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}