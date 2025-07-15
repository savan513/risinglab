"use client"

import { MediaRenderer } from "@/components/ui/media-renderer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <MediaRenderer
                src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80"
                alt="Diamond certification process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="text-xl font-serif text-white mb-2">GIA Certified</h3>
                  <p className="text-white/80 text-sm">
                    Every diamond comes with a GIA certification ensuring its authenticity and quality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-gold font-serif">OUR PROMISE</span>
            <h2 className="text-3xl md:text-4xl font-serif">
              The Rising Lab Promise
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Rising Lab, we stand behind every diamond we sell. Our commitment to quality,
                transparency, and customer satisfaction is unwavering.
              </p>
              <p>
                Each diamond undergoes rigorous quality checks and comes with a comprehensive
                certification, ensuring you receive exactly what you pay for.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <Button className="bg-gold hover:bg-gold/90 text-black">Learn More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 