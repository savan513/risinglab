"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function OurStory() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
              alt="Jewelry craftsman at work"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-playfair">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 1990, Jenny Diamonds has been at the forefront of luxury jewelry, offering an unparalleled
              selection of diamonds and fine jewelry pieces that celebrate life's most precious moments.
            </p>
            <p className="text-lg text-muted-foreground">
              Our journey began with a passion for exceptional craftsmanship and a commitment to sourcing only the
              finest, ethically-produced diamonds. Over the years, we've grown from a small family-owned boutique to a
              renowned name in the world of luxury jewelry, all while maintaining our dedication to quality and
              personalized service.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, Jenny Diamonds continues to innovate, embracing new technologies and design trends while honoring
              the timeless traditions that have made us a trusted name for generations of customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

