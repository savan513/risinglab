import Link from "next/link"
import { Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/diamonds", label: "DIAMONDS" },
  { href: "/jewellery", label: "JEWELLERY" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" },
  { href: "/blog", label: "BLOG" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-gold"
            >
              <path d="M2.2 16.06L3.88 12 2.2 7.94l4.06-1.68L7.94 2.2 12 3.88l4.06-1.68 1.68 4.06 4.06 1.68L20.12 12l1.68 4.06-4.06 1.68-1.68 4.06L12 20.12 7.94 21.8l-1.68-4.06L2.2 16.06z" />
            </svg>
            <span className="hidden md:inline-block text-xl font-serif">Jenny Diamonds</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
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

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

