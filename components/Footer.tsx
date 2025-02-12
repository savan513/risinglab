"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Gem,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

const diamondLinks = [
  { href: "/certified-diamonds", label: "Certified Diamonds" },
  { href: "/fancy-color-diamonds", label: "Fancy Color Diamonds" },
  { href: "/fancy-shape-diamonds", label: "Fancy Shape Diamonds" },
  { href: "/lab-grown-diamonds", label: "Lab Grown Diamonds" },
  { href: "/loose-diamonds", label: "Loose Diamonds" },
  { href: "/natural-diamonds", label: "Natural Diamonds" },
];

const jewelleryLinks = [
  { href: "/bracelet", label: "Bracelet" },
  { href: "/earrings", label: "Earrings" },
  { href: "/necklace", label: "Necklace" },
  { href: "/pendant", label: "Pendant" },
  { href: "/rings", label: "Rings" },
  { href: "/watch", label: "Watch" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact us" },
  { href: "/about", label: "About us" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/yourusername",
    label: "Instagram",
    color: "text-pink-500 hover:text-pink-600",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/yourusername",
    label: "Facebook",
    color: "text-blue-600 hover:text-blue-700",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@yourchannel",
    label: "YouTube",
    color: "text-red-500 hover:text-red-600",
  },
];

export function Footer() {
  const { theme } = useTheme();
  const logoUrl =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-02.jpg-EVZkpBnzJtBfInKjfi8Iqx2JKGnC7y.jpeg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-01-XO98e4ali9WrzPwRBNS46yR8PML5pw.png";

  // Useselector
  const { loading, fetchDiamondCategoryData, fetchJewelleryCategoryData } =
    useSelector((state: RootState) => ({
      fetchDiamondCategoryData: state?.diamond?.fetchDiamondCategoryData,
      fetchJewelleryCategoryData: state?.jewellery?.fetchJewelleryCategoryData,
      loading: state?.diamond?.loading,
    }));
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center lg:items-start">
            <Link
              href="/"
              className="block mb-6 transform hover:scale-105 transition-transform"
            >
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt="The Rise of Lab Grown Diamond"
                width={180}
                height={100}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 text-center lg:text-left max-w-sm">
              All The Rise Of Lab Grown Diamonds products are ethically sourced
              and certified. Our commitment to sustainability and quality
              defines our legacy.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="transform hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={`h-6 w-6 ${social.color}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="font-serif text-lg mb-4 text-center lg:text-left font-semibold">
              DIAMONDS
            </h3>
            <ul className="space-y-3 text-center lg:text-left">
              {fetchDiamondCategoryData.map((link) => (
                <li key={link._id}>
                  <Link
                    href={`/diamond/${link?.slug}`}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="font-serif text-lg mb-4 text-center lg:text-left font-semibold">
              JEWELLERY
            </h3>
            <ul className="space-y-3 text-center lg:text-left">
              {fetchJewelleryCategoryData.map((link) => (
                <li key={link._id}>
                  <Link
                    href={`/jewellery/${link?.slug}`}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="font-serif text-lg mb-4 text-center lg:text-left font-semibold">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-center lg:text-left">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gold/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-sm text-muted-foreground group hover:text-foreground transition-colors">
              <MapPin className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span>Surat - India</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-sm text-muted-foreground group hover:text-foreground transition-colors">
              <Phone className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              <span>+91 77777 88888</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-sm text-muted-foreground group hover:text-foreground transition-colors">
              <Mail className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <a
                href="mailto:info@risinglab.com"
                className="hover:underline"
              >
                info@risinglab.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gold/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            RISING LAB - LAB Grown Diamonds © {new Date().getFullYear()} | Built
            <span>
              <Gem className="w-4 h-4 text-gold" />{" "}
            </span>
            by WebPearl
          </p>
        </div>
      </div>
    </footer>
  );
}
