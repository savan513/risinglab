"use client"

import Image from "next/image"
import { DynamicMedia } from "@/components/DynamicMedia"
import { motion } from "framer-motion"
import { diamondsInstagram1, diamondsInstagram2, diamondsInstagram3, diamondsInstagram4, diamondsInstagram6, diamondsInstagram7 } from "@/public/assets/img"

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
              At The Rise Of Lab Grown Diamonds, our mission is to revolutionize the jewelry industry through sustainable,
              ethically created diamonds. We're committed to offering exceptional lab-grown diamonds that match the beauty
              and quality of natural diamonds while being environmentally conscious and socially responsible.
            </p>
            <p className="text-lg text-muted-foreground">
              Our legacy is built on innovation, sustainability, and transparency. We're proud to be at the forefront
              of the lab-grown diamond revolution, providing our customers with conscious luxury that doesn't compromise
              on quality or ethics. Each piece represents our commitment to a more sustainable future in fine jewelry.
            </p>
            <p className="text-lg text-muted-foreground">
              Looking ahead, we continue to invest in cutting-edge technology and sustainable practices, ensuring that
              our lab-grown diamonds meet the highest standards while minimizing environmental impact. We're creating
              a new legacy of responsible luxury for generations to come.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[600px] grid grid-cols-2 gap-4 rounded-lg overflow-hidden"
          >
            {/* Main Large Image */}
            <div className="col-span-2 relative h-[350px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/70 transition-all duration-300" />
              <DynamicMedia
                src={diamondsInstagram4}
                alt="Lab grown diamond creation process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute bottom-6 left-6 z-20 max-w-[80%]">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-playfair text-white mb-2"
                >
                  Crafting Excellence
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-white/90"
                >
                  Where innovation meets timeless beauty
                </motion.p>
              </div>
            </div>

            {/* Bottom Left Image */}
            <div className="relative h-[230px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/70 transition-all duration-300" />
              <DynamicMedia
                src={diamondsInstagram7}
                alt="Sustainable diamond creation"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-4 left-4 z-20"
              >
                <p className="text-white font-medium">Ethical Excellence</p>
              </motion.div>
            </div>

            {/* Bottom Right Image */}
            <div className="relative h-[230px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/70 transition-all duration-300" />
              <DynamicMedia
                src={diamondsInstagram6}
                alt="Quality control process"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-4 left-4 z-20"
              >
                <p className="text-white font-medium">Precision & Beauty</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

