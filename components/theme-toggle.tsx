'use client'

import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log(`Theme changed to: ${newTheme}`)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed md:top-4 z-30 right-4 p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-blue-400 active:scale-95 active:bg-gray-300 dark:active:bg-gray-700 z-40"
      aria-label="Toggle theme"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
    >
      <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
      <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
    </button>
  )
} 