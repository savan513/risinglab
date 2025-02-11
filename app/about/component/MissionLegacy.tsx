"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function MissionLegacy() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-playfair">Our Mission & Legacy</h2>
            <p className="text-lg text-muted-foreground">
              At Jenny Diamonds, our mission is to create exquisite jewelry that becomes a part of your most cherished
              memories. We strive to offer pieces that not only captivate with their beauty but also stand the test of
              time, becoming heirlooms passed down through generations.
            </p>
            <p className="text-lg text-muted-foreground">
              Our legacy is built on trust, expertise, and an unwavering commitment to excellence. For over three
              decades, we've been honored to be a part of countless love stories, celebrations, and milestones,
              providing our customers with jewelry that symbolizes their most precious moments.
            </p>
            <p className="text-lg text-muted-foreground">
              As we look to the future, we remain dedicated to preserving the art of fine jewelry making while embracing
              innovation and sustainability. Our goal is to continue creating beautiful, responsibly sourced jewelry
              that tells your unique story for years to come.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant diamond ring"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

