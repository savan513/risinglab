"use client"

import { MediaRenderer } from "@/components/ui/media-renderer";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from our valued customers about their experiences with our diamonds and service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold opacity-20" />
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <MediaRenderer
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.testimonial}</p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/assets/img/client-img/freepik__the-style-is-candid-image-photography-with-natural__35846.jpeg",
    testimonial:
      "The quality of the lab-grown diamond I purchased exceeded my expectations. The customer service was exceptional, and the entire process was smooth and transparent.",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "/assets/img/client-img/freepik__the-style-is-candid-image-photography-with-natural__35847.jpeg",
    testimonial:
      "I was initially skeptical about lab-grown diamonds, but Rising Lab completely changed my perspective. The diamond I bought is absolutely stunning and eco-friendly.",
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    image: "/assets/img/client-img/freepik__the-style-is-candid-image-photography-with-natural__35848.jpeg",
    testimonial:
      "The attention to detail and craftsmanship is remarkable. I appreciate their commitment to sustainability without compromising on quality and beauty.",
  },
];

