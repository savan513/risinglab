"use client"

import { motion } from "framer-motion"
import { Diamond, Heart, Shield, Star } from "lucide-react"

const values = [
  {
    icon: Diamond,
    title: "Quality",
    description: "We source only the finest diamonds and materials for our jewelry.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for craftsmanship shines through in every piece we create.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our business practices.",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "We continuously evolve our designs and techniques to stay at the forefront of jewelry making.",
  },
]

export function OurValues() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

