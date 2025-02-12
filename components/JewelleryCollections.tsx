"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { RootState } from "@/lib/store/store"
import { fetchJewelleryCategory } from "@/lib/store/features/jewellerySlice"

const collections = [
  {
    id: 1,
    title: "WATCH",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    href: "/jewellery/watch",
    description: "Timeless elegance on your wrist",
  },
  {
    id: 2,
    title: "RINGS",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    href: "/jewellery/rings",
    description: "Symbols of eternal love",
  },
  {
    id: 3,
    title: "PENDANT",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    href: "/jewellery/pendant",
    description: "Statement pieces that inspire",
  },
  {
    id: 4,
    title: "NECKLACE",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
    href: "/jewellery/necklace",
    description: "Graceful chains of beauty",
  },
  {
    id: 5,
    title: "EARRINGS",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
    href: "/jewellery/earrings",
    description: "Frame your face with sparkle",
  },
  {
    id: 6,
    title: "BRACELET",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    href: "/jewellery/bracelet",
    description: "Elegant wrist embellishments",
  },
]

export function JewelleryCollections() {
  // dispatch hook
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // useeffect
  useEffect(() => {
    const filter = { parent: "67a11573f8bba178b89e62c9" };
    dispatch(fetchJewelleryCategory(filter))
  }, [])

  // Useselector
  const { loading, fetchJewelleryCategoryData } = useSelector((state: RootState) => ({
    fetchJewelleryCategoryData: state?.jewellery?.fetchJewelleryCategoryData,
    loading: state?.jewellery?.loading,
  }))
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-serif italic text-xl"
          >
            Crafted Elegance for Every Occasion
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif"
          >
            Explore Our Jewellery Collections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-3xl mx-auto"
          >
            Browse our stunning range of fine jewellery, thoughtfully categorized for your convenience. Whether
            you&apos;re seeking timeless classics or contemporary designs, our rings, necklaces, bracelets, and earrings
            offer exceptional beauty and craftsmanship for every style and celebration.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fetchJewelleryCategoryData.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/jewellery/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={collection.images[0] || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 scale-100 group-hover:scale-125"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={index < 3} // Load first 3 images immediately
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center transform transition-all duration-700 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-2xl font-serif text-white mb-2">{collection.name}</h3>
                      {/* <p className="text-white/90 text-sm max-w-[200px] mx-auto">{collection.description}</p> */}
                      <div className="mt-4 inline-block border-b-2 border-white/0 group-hover:border-white/60 transition-colors duration-700">
                        <span className="text-white text-sm">Explore Collection</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-700">
                    <h3 className="text-2xl font-serif text-white text-center">{collection.name}</h3>
                  </div>

                  {/* Decorative Borders */}
                  <div className="absolute inset-4 border border-white/0 group-hover:border-white/60 transition-all duration-700 scale-90 group-hover:scale-100" />
                  <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-700 scale-95 group-hover:scale-105 rotate-45 group-hover:rotate-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

