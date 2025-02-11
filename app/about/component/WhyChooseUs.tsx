"use client"

import { motion } from "framer-motion"
import { Award, Gem, UserCheck, Zap } from "lucide-react"

const reasons = [
  {
    icon: Gem,
    title: "Exceptional Quality",
    description: "We offer only the finest, hand-selected diamonds and gemstones.",
  },
  {
    icon: UserCheck,
    title: "Expert Craftsmanship",
    description: "Our master jewelers bring decades of experience to every piece.",
  },
  {
    icon: Award,
    title: "Ethical Sourcing",
    description: "We ensure all our materials are responsibly and ethically sourced.",
  },
  {
    icon: Zap,
    title: "Personalized Service",
    description: "Experience tailored assistance from our knowledgeable team.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Why Choose Jenny Diamonds?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

