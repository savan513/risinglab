import Link from "next/link"
import { Heart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M2.2 16.06L3.88 12 2.2 7.94l4.06-1.68L7.94 2.2 12 3.88l4.06-1.68 1.68 4.06 4.06 1.68L20.12 12l1.68 4.06-4.06 1.68-1.68 4.06L12 20.12 7.94 21.8l-1.68-4.06L2.2 16.06z" />
            </svg>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-primary">
              HOME
            </Link>
            <Link href="/diamonds" className="transition-colors hover:text-primary">
              DIAMONDS
            </Link>
            <Link href="/jewellery" className="transition-colors hover:text-primary">
              JEWELLERY
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              ABOUT US
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              CONTACT US
            </Link>
            <Link href="/blog" className="transition-colors hover:text-primary">
              BLOG
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </nav>
          <div className="hidden lg:block">
            <h2 className="font-playfair text-xl">RISING LAB DIAMONDS</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

