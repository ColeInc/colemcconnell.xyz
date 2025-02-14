import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cole McConnell - Full Stack Engineer & Writer",
  description: "Portfolio and Newsletter of Cole McConnell, Full Stack Engineer & Writer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}