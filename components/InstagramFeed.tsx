"use client"

import { MediaRenderer } from "@/components/ui/media-renderer";
import { Heart, MessageSquare, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { diamondsInstagram1, diamondsInstagram2, diamondsInstagram4, diamondsInstagram5 } from "@/public/assets/img";

const instagramPosts = [
  {
    id: 1,
    image: diamondsInstagram1.src,
    likes: "1.2K",
    comments: "234",
    link: "https://www.instagram.com/p/1",
  },
  {
    id: 2,
    image: diamondsInstagram2.src,
    likes: "856",
    comments: "156",
    link: "https://www.instagram.com/p/2",
  },
  {
    id: 3,
    image: diamondsInstagram4.src,
    likes: "2.1K",
    comments: "342",
    link: "https://www.instagram.com/p/3",
  },
  {
    id: 4,
    image: diamondsInstagram5.src,
    likes: "1.5K",
    comments: "198",
    link: "https://www.instagram.com/p/4",
  },
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <span className="text-gold font-serif italic text-lg md:text-xl">Our Instagram Collection</span>
          <h2 className="text-3xl md:text-4xl font-serif">SHOP ON INSTAGRAM</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our latest designs and stunning diamonds on Instagram. Follow us for inspiration and discover your
            next timeless piece!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden"
              >
                <MediaRenderer
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex items-center text-gold">
                      <Heart className="w-6 h-6 mr-2" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center text-gold font-bold" >
                      <MessageSquare className="w-6 h-6 mr-2" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Link href="https://www.instagram.com/risinglab09" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us on Instagram
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

