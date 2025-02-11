"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/useWishlist"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()

  const handleInquiry = (productId: string) => {
    const phone = "1234567890"
    const message = `I'm interested in product ID: ${productId}`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[200px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1UhQ7egnh70CZtFvCcclw2hIL3Oe9.png"
          alt="Wishlist"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">WISHLIST</h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-gold">
                HOME
              </Link>
              <span>/</span>
              <span>WISHLIST</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-serif text-gray-900 mb-8">YOUR PRODUCTS WISHLIST</h2>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products in your wishlist</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-lg shadow-sm">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-red-500 hover:text-red-600"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <X className="w-5 h-5" />
                </Button>

                {item.hot && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                  </div>
                )}

                <Link href={`/product/${item.id}`}>
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <div className="text-sm text-gold mb-2">{item.categories.join(", ")}</div>
                  <Link href={`/product/${item.id}`}>
                    <h3 className="text-lg font-serif text-gray-900 group-hover:text-gold transition-colors mb-2">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-lg text-gold mb-4">₹{item.price.toFixed(2)}</div>

                  <Button
                    className="w-full bg-black hover:bg-black/90 text-white"
                    onClick={() => handleInquiry(item.id)}
                  >
                    INQUIRY NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

