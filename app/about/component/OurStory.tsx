"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { diamondsInstagram1, diamondsInstagram2, diamondsInstagram4 } from "@/public/assets/img"

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
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src={diamondsInstagram1}
              alt="Lab grown diamond craftsmanship"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-8 left-8 z-20 max-w-[80%]">
              <h3 className="text-2xl font-playfair text-white mb-2">Excellence in Diamond Creation</h3>
              <p className="text-white/90">Pioneering sustainable luxury with advanced technology</p>
            </div>
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
              Established with a vision to transform the diamond industry, we embarked on our journey to make
              sustainable luxury accessible through advanced lab-grown diamond technology. Our commitment to innovation
              and environmental responsibility has positioned us as leaders in the sustainable jewelry movement.
            </p>
            <p className="text-lg text-muted-foreground">
              We've dedicated ourselves to perfecting the art and science of creating lab-grown diamonds that are
              chemically, physically, and optically identical to mined diamonds. Our state-of-the-art facilities
              combine cutting-edge technology with expert craftsmanship to produce diamonds of exceptional quality
              and beauty.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we continue to push boundaries in sustainable luxury, offering conscious consumers an ethical
              alternative that doesn't compromise on quality or environmental responsibility. Our lab-grown diamonds
              represent the future of fine jewelry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

