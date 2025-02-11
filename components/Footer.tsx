"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { useTheme } from "next-themes"

const diamondLinks = [
  { href: "/certified-diamonds", label: "Certified Diamonds" },
  { href: "/fancy-color-diamonds", label: "Fancy Color Diamonds" },
  { href: "/fancy-shape-diamonds", label: "Fancy Shape Diamonds" },
  { href: "/lab-grown-diamonds", label: "Lab Grown Diamonds" },
  { href: "/loose-diamonds", label: "Loose Diamonds" },
  { href: "/natural-diamonds", label: "Natural Diamonds" },
]

const jewelleryLinks = [
  { href: "/bracelet", label: "Bracelet" },
  { href: "/earrings", label: "Earrings" },
  { href: "/necklace", label: "Necklace" },
  { href: "/pendant", label: "Pendant" },
  { href: "/rings", label: "Rings" },
  { href: "/watch", label: "Watch" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact us" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
]

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/yourusername", 
    label: "Instagram", 
    color: "text-pink-500" 
  },
  { 
    icon: Facebook, 
    href: "https://www.facebook.com/yourusername", 
    label: "Facebook", 
    color: "text-blue-600" 
  },
  { 
    icon: Youtube, 
    href: "https://www.youtube.com/@yourchannel", 
    label: "YouTube", 
    color: "text-red-500" 
  },
];

export function Footer() {
  const { theme } = useTheme()
  const logoUrl =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-02.jpg-EVZkpBnzJtBfInKjfi8Iqx2JKGnC7y.jpeg" // Dark theme logo
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-01-XO98e4ali9WrzPwRBNS46yR8PML5pw.png" // Light theme logo

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-3">
            <Link href="/" className="block mb-6">
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt="The Rise of Lab Grown Diamond"
                width={180}
                height={100}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 text-center md:text-left">
              All Jenny Diamonds products are ethically sourced and certified. Prices and availability may vary.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`hover:opacity-80 transition-opacity`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={`h-5 w-5 ${social.color}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Diamonds Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg mb-4">DIAMONDS</h3>
            <ul className="space-y-2">
              {diamondLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jewellery Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg mb-4">JEWELLERY</h3>
            <ul className="space-y-2">
              {jewelleryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
              <MapPin color="#FFD700" className="h-4 w-4 mr-2" />
              Surat - India
            </div>
            <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
              <Phone color="#008080" className="h-4 w-4 mr-2" />
              <span>Phone: +91 97248 20911</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
              <Mail color="#006400" className="h-4 w-4 mr-2" />
              <a href="mailto:jennydiamondst99@gmail.com" className="hover:text-foreground transition-colors">
                Email: jennydiamondst99@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Jenny Diamonds © {new Date().getFullYear()} Built by WeberFx.</p>
        </div>
      </div>
    </footer>
  )
}

