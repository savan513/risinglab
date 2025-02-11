"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

const diamondCuts = [
  {
    title: "Round Cut Diamonds",
    description: "Classic brilliance, known for their exceptional sparkle.",
  },
  {
    title: "Princess Cut Diamonds",
    description: "A modern, angular cut that exudes sophistication.",
  },
  {
    title: "Emerald Cut Diamonds",
    description: "Elegant with a vintage appeal, featuring a step-cut design.",
  },
  {
    title: "Cushion Cut Diamonds",
    description: "Soft, rounded edges with a romantic and timeless style.",
  },
  {
    title: "Oval Cut Diamonds",
    description: "A twist on tradition, offering brilliance in an elongated shape.",
  },
  {
    title: "Pear Cut Diamonds",
    description: "Unique and striking, blending round and marquise cuts.",
  },
]

export function CallToAction() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Unveil the
                <br />
                Brilliance of Our
                <br />
                Diamonds
              </h2>
              <p className="text-muted-foreground text-lg">
                At Jenny Diamonds, we take pride in offering an extraordinary collection of diamonds, each carefully
                selected for its brilliance, clarity, and ethical sourcing. Whether you&apos;re marking a special
                occasion or searching for a timeless piece, our diamonds are crafted to reflect elegance and perfection.
              </p>
            </div>

            <div className="space-y-6">
              {diamondCuts.map((cut, index) => (
                <motion.div
                  key={cut.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Diamond className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">{cut.title}</h3>
                    <p className="text-muted-foreground">{cut.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                GO TO SHOP
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-black hover:bg-gold hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                READ MORE
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-8 relative">
              {/* Decorative line connecting images */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M 100,100 L 300,100 L 300,300 L 100,300 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gold/30"
                  />
                </svg>
              </div>

              {/* Diamond Images */}
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=600&q=80"
                  alt="Pink diamonds cluster"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=600&q=80"
                  alt="Emerald cut diamond"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden col-span-2 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
                  alt="Diamond sparkle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

