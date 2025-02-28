import type { Metadata } from "next";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "Cole McConnell - Full Stack Engineer & Writer",
  description: "Portfolio and Newsletter of Cole McConnell, Full Stack Software Engineer & Writer",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster />
    </html>
  )
}