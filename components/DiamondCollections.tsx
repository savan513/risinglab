"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "@/lib/store/store"
import { fetchDiamondCategory } from "@/lib/store/features/diamondSlice"

const collections = [
  {
    id: 1,
    title: "NATURAL DIAMONDS",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
    href: "/diamonds/natural",
    description: "Timeless beauty formed by nature",
  },
  {
    id: 2,
    title: "LAB GROWN DIAMONDS",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    href: "/diamonds/lab-grown",
    description: "Sustainable brilliance, ethically created",
  },
  {
    id: 3,
    title: "FANCY SHAPE DIAMONDS",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427",
    href: "/diamonds/fancy-shape",
    description: "Unique cuts for distinctive style",
  },
  {
    id: 4,
    title: "FANCY COLOR DIAMONDS",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
    href: "/diamonds/fancy-color",
    description: "Rare and vibrant natural hues",
  },
  {
    id: 5,
    title: "LOOSE DIAMONDS",
    image: "https://images.unsplash.com/photo-1603255466024-2c0802ad6218",
    href: "/diamonds/loose",
    description: "Select your perfect stone",
  },
  {
    id: 6,
    title: "CERTIFIED DIAMONDS",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
    href: "/diamonds/certified",
    description: "Quality assured by experts",
  },
]

export function DiamondCollections() {
  // dispatch hook
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // useeffect
  useEffect(() => {
    const filter = { parent: "67a11386f8bba178b89e62c4" };
    dispatch(fetchDiamondCategory(filter))
  }, [])

  // Useselector
  const { loading, fetchDiamondCategoryData } = useSelector((state: RootState) => ({
    fetchDiamondCategoryData: state?.diamond?.fetchDiamondCategoryData,
    loading: state?.diamond?.loading,
  }))

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-serif italic block mb-4"
          >
            Cut, Clarity, and Brilliance for Every Style
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif text-black mb-6"
          >
            Explore Our Diamond Collections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-black/80"
          >
            Discover a world of dazzling diamonds, expertly categorized to help you find your perfect match. From
            timeless round cuts to modern princess designs, explore a variety of shapes, sizes, and styles, all crafted
            for maximum brilliance and elegance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-800 rounded-lg animate-pulse">
                  {/* Skeleton Image */}
                  <div className="absolute inset-0 bg-gray-700" />

                  {/* Skeleton Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="h-6 bg-gray-600 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>

                  {/* Skeleton Borders */}
                  <div className="absolute inset-4 border border-gray-600 opacity-30" />
                </div>
              </motion.div>
            ))
            : fetchDiamondCategoryData.map((collection, index) => (
              <motion.div
                key={collection._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/diamond/${collection?.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-black rounded-lg">
                    <Image
                      src={collection.images[0] || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 scale-100 group-hover:scale-125"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center transform transition-all duration-700 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-2xl font-serif text-white mb-2">{collection?.name}</h3>
                        {/* <p className="text-white/90 text-sm max-w-[200px] mx-auto"  dangerouslySetInnerHTML={{ __html: collection.description }}>{collection.description}</p> */}
                        <div className="mt-4 inline-block border-b-2 border-white/0 group-hover:border-white/60 transition-colors duration-700">
                          <span className="text-white text-sm">View Collection</span>
                        </div>
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-700">
                      <h3 className="text-2xl font-serif text-white text-center px-4">{collection?.name}</h3>
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

