"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Heart, Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/diamonds", label: "DIAMONDS" },
  { href: "/jewellery", label: "JEWELLERY" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" },
  { href: "/blog", label: "BLOG" },
]

export function Header() {
  const [mounted, setMounted] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const logoUrl =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-02.jpg-97rUotvzZpqyNoTmClxxu8AqWQFv8U.jpeg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-01-mKZcU6Fueji9gDFperhAX0SmrKrHlS.png"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12">
                <Image
                  src={logoUrl || "/placeholder.svg"}
                  alt="The Rise of Lab Grown Diamond"
                  fill
                  className="object-contain"
                  sizes="(max-width: 48px) 100vw, 48px"
                  priority
                />
              </div>
              <span className="hidden md:inline-block text-xl font-serif">Jenny Diamonds</span>
            </Link>
          </div>

          {/* Navigation (centered for larger screens) */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Search, Heart, and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} className="hover:text-gold">
              {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:text-gold"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background">
                  <SheetHeader>
                    <div className="flex justify-center py-4">
                      <div className="relative w-32 h-32">
                        <Image
                          src={logoUrl || "/placeholder.svg"}
                          alt="The Rise of Lab Grown Diamond"
                          fill
                          className="object-contain"
                          sizes="(max-width: 128px) 100vw, 128px"
                        />
                      </div>
                    </div>
                  </SheetHeader>
                  <nav className="mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 text-sm hover:text-gold transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="py-4">
                <div className="relative max-w-2xl mx-auto">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full pl-10 bg-background/50 border-gold/20 focus:border-gold"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

