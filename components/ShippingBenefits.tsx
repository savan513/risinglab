"use client"
import Image from "next/image"
import { Truck, Award, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function ShippingBenefits() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="w-full pb-10 pt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div 
            className="group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-background/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] h-full transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 text-gold group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Truck size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-gold">Free Shipping</h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Free Shipping on all orders</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-background/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] h-full transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 text-gold group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-gold">Certified Jewellery</h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Certified & HallMark</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-background/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] h-full transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 text-gold group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Clock size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-gold">Support 24/7</h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="bg-background/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.2)] h-full transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)]">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 text-gold group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-gold">100% Payment Secure</h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Your payment are safe with us</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
} 