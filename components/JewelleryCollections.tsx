"use client"

import { MediaRenderer } from "@/components/ui/media-renderer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JewelleryCollections() {
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
            Jewellery Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our exquisite collection of fine jewelry, each piece crafted with precision and care
            to bring out your unique style and elegance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={collection.link}>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                  <MediaRenderer
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-serif text-white mb-2">{collection.title}</h3>
                    <p className="text-white/80 mb-4">{collection.description}</p>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const collections = [
  {
    id: 1,
    title: "Engagement Rings",
    description: "Timeless symbols of love and commitment",
    image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&q=80",
    link: "/jewellery/engagement-rings",
  },
  {
    id: 2,
    title: "Wedding Bands",
    description: "Celebrate your special day with elegance",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?auto=format&fit=crop&q=80",
    link: "/jewellery/wedding-bands",
  },
  {
    id: 3,
    title: "Fine Jewelry",
    description: "Everyday luxury for every occasion",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
    link: "/jewellery/fine-jewelry",
  },
];



