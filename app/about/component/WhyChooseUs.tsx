"use client"

import { motion } from "framer-motion"
import { Award, Gem, UserCheck, Zap } from "lucide-react"

const reasons = [
  {
    icon: Gem,
    title: "Sustainable Choice",
    description: "Eco-friendly diamonds created with minimal environmental impact.",
  },
  {
    icon: UserCheck,
    title: "Advanced Technology",
    description: "State-of-the-art facilities creating perfect diamonds.",
  },
  {
    icon: Award,
    title: "Ethical Production",
    description: "100% conflict-free, environmentally conscious creation process.",
  },
  {
    icon: Zap,
    title: "Superior Value",
    description: "Premium quality diamonds at better value than mined stones.",
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

