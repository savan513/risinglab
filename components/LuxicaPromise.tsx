"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  RefreshCcw,
  Truck,
  Award,
  Shield,
  Clock,
  BadgeCheck
} from "lucide-react"

export function LuxicaPromise() {
  const benefits = [
    {
      icon: <RefreshCcw className="w-8 h-8 text-gold" />,
      title: "100% Buy Back",
      description: "We guarantee full buyback value on all purchases"
    },
    {
      icon: <Truck className="w-8 h-8 text-gold" />,
      title: "Free Shipping",
      description: "Complimentary shipping on every order"
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "IGI Certified",
      description: "All diamonds certified by International Gemological Institute"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Lifetime Warranty",
      description: "Our jewelry comes with lifelong warranty coverage"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-gold" />,
      title: "Certified Jewellery",
      description: "Every piece authenticated and certified for quality"
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Certified Hallmark",
      description: "Official hallmarking guarantees precious metal purity"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-gold/5 z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="h-px w-8 bg-gold/40"></div>
              <span className="text-sm uppercase tracking-widest text-gold font-light">Our Value Promise</span>
              <div className="h-px w-8 bg-gold/40"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Luxica's Promise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm tracking-widest">
              We stand by our products with these guarantees for your peace of mind
            </p>
            <div className="mt-5 w-40 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"></div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="relative bg-background/80 backdrop-blur-sm border border-gold/10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(212,175,55,0.1)] overflow-hidden">
            {/* Decorative card background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            {/* Card content */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full p-5 bg-gold/5 dark:bg-background/40 backdrop-blur-sm  border border-gold/10 rounded-xl hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
                    {/* Card hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Card edge highlights on hover */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>

                    <div className="relative z-10 mb-4">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-background to-gold/5 shadow-md border border-gold/10 group-hover:border-gold/30 transition-all duration-500 mx-auto">
                        {/* Animated wave borders */}
                        <div className="absolute w-[calc(100%+12px)] h-[calc(100%+12px)] border border-gold/20 rounded-full animate-wave-1"></div>
                        <div className="absolute w-[calc(100%+18px)] h-[calc(100%+18px)] border border-gold/15 rounded-full animate-wave-2"></div>
                        <div className="absolute w-[calc(100%+24px)] h-[calc(100%+24px)] border border-gold/10 rounded-full animate-wave-3"></div>

                        {benefit.icon}
                      </div>
                    </div>

                    <h3 className="relative z-10 text-base font-serif text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <div className="relative z-10 w-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-3 group-hover:w-16 transition-all duration-500"></div>

                    <p className="relative z-10 text-xs text-muted-foreground max-w-[150px] mx-auto">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/30"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/30"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/30"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/30"></div>
          </div>
        </div>
      </div>

      {/* Add the keyframe animations for waves */}
      <style jsx global>{`
        @keyframes wave1 {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        @keyframes wave2 {
          0% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.4; }
        }
        @keyframes wave3 {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        .animate-wave-1 {
          animation: wave1 3s infinite ease-in-out;
        }
        .animate-wave-2 {
          animation: wave2 4s infinite ease-in-out;
          animation-delay: 0.5s;
        }
        .animate-wave-3 {
          animation: wave3 5s infinite ease-in-out;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
} 