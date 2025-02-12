"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shuffle, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/useWishlist"

const products = [
  {
    id: "1",
    title: "Engagement Ring",
    categories: ["Jewellery", "Rings"],
    price: 429.0,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    hot: true
  },
  {
    id: "2",
    title: "Ring",
    categories: ["Jewellery", "Rings"],
    price: 429.0,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    hot: false
  },
  {
    id: "3",
    title: "Diamonds",
    categories: ["Diamonds", "Natural Diamonds"],
    price: 429.0,
    image: "https://images.unsplash.com/photo-1615655096345-61a54750068d?auto=format&fit=crop&w=600&q=80",
    hot: true
  },
]

export function FeaturedProducts() {
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist()

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId)
  }

  const handleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <span className="text-gold font-serif italic text-xl">Unmatched Brilliance, Timeless Elegance</span>
          <h2 className="text-3xl md:text-4xl font-serif">FEATURED PRODUCTS</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of stunning diamonds and fine jewellery, each piece selected for its
            exceptional quality and craftsmanship. Whether searching for a brilliant solitaire or an elegant jewellery
            design, find the perfect symbol of sophistication and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="group relative">
                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.hot && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      HOT
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-8 w-8"
                      onClick={() => handleWishlist(product)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-gold text-gold" : ""}`} 
                      />
                    </Button>
                    <Link href={`/product/${product.id}`}>
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <Search className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.categories.join(", ")}</p>
                  <p className="text-lime-600 font-bold mt-2">₹{product.price.toFixed(2)}</p>

                  <Button
                    className="w-full mt-4 font-bold bg-green-500 hover:bg-green-500/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
                    onClick={() => window.open(`https://wa.me/+919724820911?text=I'm interested in ${product.title}`)}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>INQUIRY NOW</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

