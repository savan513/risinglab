"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { X, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/useWishlist"
import { mainBanner12, mainBanner14 } from "@/public/assets/img"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-black">
        <Image
          src={mainBanner12}
          alt="Wishlist Banner"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white"
            >
              My Wishlist
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-gold"
            >
              <nav className="text-sm breadcrumbs">
                <ul className="flex items-center justify-center space-x-2">
                  <li>
                    <a href="/" className="text-gold hover:text-black transition-colors">Home</a>
                  </li>
                  <li className="text-gold">•</li>
                  <li className="text-gold">Wishlist</li>
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wishlist Items Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <Heart className="w-16 h-16 mx-auto text-gold/50" />
              <h2 className="text-2xl font-serif">Your wishlist is empty</h2>
              <p className="text-muted-foreground">Browse our collection and add items to your wishlist</p>
              <Link href="/jewellery">
                <Button className="mt-4 bg-gold hover:bg-gold/90 text-black">
                  EXPLORE COLLECTION
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 z-20 bg-gold/40 hover:bg-gold/80 text-white hover:text-red-400 backdrop-blur-sm rounded-full transition-all duration-300"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>

                    {/* Image Section */}
                    <div className="relative aspect-square">
                      {/* <Link href={"#"}> */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* </Link> */}
                      {/* Labels */}
                      {item.hot && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          HOT
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="mt-4 text-center p-4">
                      <h3 className="font-serif text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.categories.join(", ")}</p>
                      <p className="text-lime-600 font-bold mt-2">₹{item.price.toFixed(2)}</p>

                      {/* Inquiry Button */}
                      <Button
                        className="w-full mt-4 font-bold bg-green-500 hover:bg-green-500/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
                        onClick={() => window.open(`https://wa.me/+919724820911?text=I'm interested in ${item.title}`)}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>INQUIRY NOW</span>
                      </Button>

                      {/* View Details Link */}
                      {/* <Link href={`/product/${item.id}`} className="block mt-2">
                        <Button
                          variant="outline"
                          className="w-full border-gold hover:bg-gold hover:text-black transition-colors"
                        >
                          VIEW DETAILS
                        </Button>
                      </Link> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

