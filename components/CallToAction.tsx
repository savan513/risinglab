"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Diamond, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import { diamonds1, diamonds2, diamonds3, diamonds4, diamonds5, diamonds6, diamonds8 } from "@/public/assets/img"

const diamondCuts = [
  {
    title: "Lab Grown Brilliance",
    description: "Ethically created diamonds with exceptional sparkle and clarity.",
  },
  {
    title: "Sustainable Luxury",
    description: "Eco-friendly diamonds with minimal environmental impact.",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art processes creating flawless diamonds.",
  },
  {
    title: "Ethical Creation",
    description: "Conflict-free diamonds crafted with sustainable practices.",
  },
  {
    title: "Premium Quality",
    description: "Laboratory precision ensuring superior diamond quality.",
  },
  {
    title: "Future of Diamonds",
    description: "Innovative approach to creating timeless beauty.",
  },
]

export function CallToAction() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 max-w-2xl">
              <span className="text-gold font-serif text-lg md:text-xl">The Rise of Lab Grown Diamond</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Unveil the
                <br />
                Brilliance of Our
                <br />
                Diamonds
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience the future of luxury with our lab-grown diamonds. We combine cutting-edge technology
                with sustainable practices to create stunning diamonds that are ethically sourced and
                environmentally conscious. Our commitment to innovation brings you the same brilliance and
                quality as natural diamonds, with a positive impact on our planet.
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
                  <Gem className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground">{cut.title}</h3>
                    <p className="text-muted-foreground">{cut.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/diamonds" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black w-full sm:w-auto text-sm sm:text-base">
                  GO TO SHOP
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-black hover:bg-gold hover:text-black dark:text-white
                  w-full sm:w-auto text-sm sm:text-base"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative line connecting images */}
            {/* <div className="absolute inset-0 z-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <path
                  d="M 50,50 L 350,50 L 350,350 L 50,350 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gold/90"
                />
              </svg>
            </div> */}

            {/* Honeycomb decorative line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <pattern id="honeycomb" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
                  <path
                    d="M25,0 L50,14.43 L50,43.3 L25,57.73 L0,43.3 L0,14.43 Z M25,86.6 L50,72.17 L50,43.3 M25,86.6 L0,72.17 L0,43.3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gold/80"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#honeycomb)" />
            </svg>

            {/* Diamond Images */}
            <div className="grid grid-cols-3 gap-4 relative">
              <div className="relative aspect-square rounded-lg overflow-hidden col-span-2 row-span-2">
                <Image
                  src={diamonds1}
                  alt="Premium diamond collection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden"
              // style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src={diamonds8}
                  alt="Diamond craftsmanship"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden"
              // style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src={diamonds3}
                  alt="Diamond elegance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>



              <div className="relative aspect-square rounded-lg overflow-hidden"
              // style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src={diamonds4}
                  alt="Diamond brilliance"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden"
              // style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src={diamonds5}
                  alt="Diamond luxury"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden"
              // style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              >
                <Image
                  src={diamonds6}
                  alt="Diamond luxury"
                  fill
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

