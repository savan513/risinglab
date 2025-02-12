"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "info@risinglab.com",
    color: "text-blue-500",
    delay: 0.2,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 77777 88888",
    color: "text-green-500",
    delay: 0.3,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Surat, Gujarat, India",
    color: "text-red-500",
    delay: 0.4,
  },
]

export function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {contactItems.map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.delay }}
          viewport={{ once: true }}
          className="group flex items-center space-x-4 bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 dark:border-gold/50"
        >
          <div className={`p-3 rounded-full bg-background ${item.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className={`w-8 h-8 ${item.color}`} />
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {item.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

