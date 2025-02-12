"use client"

import { ContactForm } from "@/app/contact/component/contact-form";
// import { SiteHeader } from "@/components/site-header";
import { ContactInfo } from "./component/ContactInfo";
import { GoogleMap } from "./component/GoogleMap";
import { motion } from "framer-motion";
import { diamonds3, diamondsInstagram3, diamondsInstagram9, mainBanner1, mainBanner10, mainBanner12, mainBanner13, mainBanner14, mainBanner2, mainBanner9 } from "@/public/assets/img";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 mt-10">
      {/* <SiteHeader /> */}
      <main className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-playfair mb-4 text-foreground">Contact Us</h1>
          <nav className="text-sm breadcrumbs">
            <ul className="flex items-center justify-center space-x-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-gold transition-colors">Home</a>
              </li>
              <li className="text-gold">•</li>
              <li className="text-foreground">Contact Us</li>
            </ul>
          </nav>
        </motion.div>

        {/* Updated Contact Form and Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-xl"
          >
            {/* Main Image */}
            <div className="absolute inset-0 bg-gold/10" />
            <img
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury lab grown diamonds store interior"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Decorative Image Grid */}
            <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-2 w-32">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={mainBanner1}
                  alt="Diamond ring"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={diamondsInstagram9}
                  alt="Gold necklace"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={mainBanner2}
                  alt="Diamond closeup"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={diamondsInstagram3}
                  alt="Luxury bracelet"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
              </motion.div>
            </div>

            {/* Updated Overlay Text */}
            <div className="absolute top-6 left-6 bg-black/60 p-4 rounded-lg max-w-xs">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-sm font-light"
              >
                Experience the brilliance of The Rise Of Lab Grown Diamonds. Visit our showroom to discover sustainable luxury.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactInfo />
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <GoogleMap />
        </motion.div>
      </main>
    </div>
  )
}

