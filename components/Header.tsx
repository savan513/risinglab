"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";

type DropdownItem = {
  label: string;
  href: string;
};

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Useselector
  const { loading, fetchDiamondCategoryData, fetchJewelleryCategoryData } =
    useSelector((state: RootState) => ({
      fetchDiamondCategoryData: state?.diamond?.fetchDiamondCategoryData,
      fetchJewelleryCategoryData: state?.jewellery?.fetchJewelleryCategoryData,
      loading: state?.diamond?.loading,
    }));

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.1; // 10vh threshold
      setScrolled(isScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const logoUrl =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-02.jpg-97rUotvzZpqyNoTmClxxu8AqWQFv8U.jpeg"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-01-mKZcU6Fueji9gDFperhAX0SmrKrHlS.png";

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  // Transform Diamond Categories into Dropdown Items
  const diamondDropdownItems: DropdownItem[] = fetchDiamondCategoryData
    ? fetchDiamondCategoryData.map(
        (item: { _id: string; slug: string; name: string }) => ({
          href: `/diamond/${item?.slug}`,
          label: item.name,
        })
      )
    : [];

  // Transform jewellery Categories into Dropdown Items
  const jewelleryDropdownItems: DropdownItem[] = fetchJewelleryCategoryData
    ? fetchJewelleryCategoryData.map(
        (item: { _id: string; slug: string; name: string }) => ({
          href: `/jewellery/${item?.slug}`,
          label: item.name,
        })
      )
    : [];

  const navItems = [
    { href: "/", label: "HOME" },
    {
      href: "/diamond",
      label: "DIAMONDS",
      hasDropdown: true,
      dropdownItems: diamondDropdownItems,
    },
    {
      href: "/jewellery",
      label: "JEWELLERY",
      hasDropdown: true,
      dropdownItems: jewelleryDropdownItems,
    },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
    { href: "/blog", label: "BLOG" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 
        ${
          scrolled
            ? "bg-background shadow-lg backdrop-blur-md border-b border-gold/20"
            : "bg-gradient-to-b from-background/10 to-background/60 backdrop-blur-sm"
        }
        transition-all duration-500 ease-in-out`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500
          ${scrolled ? "opacity-95" : "opacity-80"}
          bg-gradient-to-b from-background via-background/95 to-background/90`}
      />

      <div className="container mx-auto px-4 relative">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out
            ${scrolled ? "h-18 md:h-18" : "h-18 md:h-22"}`}
        >
          {/* Enhanced Logo Section */}
          <div className="flex items-center relative">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className={`relative transition-all duration-300
                  ${
                    scrolled
                      ? "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                      : "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={logoUrl || "/placeholder.svg"}
                  alt="The Rise of Lab Grown Diamond"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 46px, (max-width: 1024px) 62px, 78px"
                  priority
                  quality={95}
                />
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <motion.span
                  className={`font-serif text-gold transition-all duration-300
                    ${
                      scrolled
                        ? "text-base md:text-lg lg:text-xl"
                        : "text-lg md:text-xl lg:text-2xl"
                    }`}
                  // whileHover={{ color: 'var(--gold)' }}
                >
                  RISING LAB
                </motion.span>
                {/* <motion.span 
                  className={`text-muted-foreground font-medium transition-all duration-300
                    ${scrolled 
                      ? 'text-xs md:text-sm lg:text-base' 
                      : 'text-sm md:text-base lg:text-lg'
                    }`}
                >
                  Lab Grown Diamond
                </motion.span> */}
              </div>
            </Link>
          </div>

          {/* Updated Navigation with better responsive dropdowns */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="relative group"
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm tracking-wide transition-all duration-300 flex items-center
                    ${
                      scrolled
                        ? "text-foreground hover:text-gold"
                        : "text-foreground/90 hover:text-gold"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Enhanced Responsive Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  >
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="bg-background/95 backdrop-blur-md border border-gold/20 
                        rounded-lg shadow-lg py-2 min-w-[200px] overflow-hidden
                        max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20"
                    >
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <motion.div
                          key={dropdownItem.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: { delay: index * 0.05 },
                          }}
                        >
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gold/10 hover:text-gold 
                              transition-colors relative group/item whitespace-nowrap"
                          >
                            <span className="relative z-10">
                              {dropdownItem.label}
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-gold/5 opacity-0 group-hover/item:opacity-100 
                                transition-opacity duration-200"
                              layoutId={`dropdown-hover-${item.label}`}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right side buttons with improved scaling */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
                className={`hover:text-gold transition-transform ${
                  scrolled ? "scale-90" : "scale-100"
                }`}
              >
                {showSearch ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
            <Link href="/wishlist">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-gold relative group"
                >
                  <Heart className="h-5 w-5 group-hover:fill-gold transition-colors" />
                  <span className="sr-only">Wishlist</span>
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:text-gold"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </motion.div>

            {/* Updated Mobile Menu with better dropdown handling */}
            <div className="lg:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[300px] bg-background overflow-y-auto"
                >
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
                      <div key={item.href} className="relative">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={handleNavItemClick}
                            className="block py-3 text-sm hover:text-gold transition-colors flex-1"
                          >
                            {item.label}
                          </Link>
                          {item.hasDropdown && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-1 hover:text-gold"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const element = document.getElementById(
                                  `dropdown-${item.label}`
                                );
                                element?.classList.toggle("hidden");
                              }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        {item.hasDropdown && (
                          <div
                            id={`dropdown-${item.label}`}
                            className="hidden pl-4 border-l border-gold/20 ml-4 mt-2 space-y-2"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={handleNavItemClick}
                                className="block py-2 text-sm text-muted-foreground hover:text-gold 
                                  transition-colors"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search Bar with improved animation */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
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
    </motion.header>
  );
}
