"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1920&q=80",
    title: "The Future of Diamonds",
    subtitle: "Ethically Crafted, Stunningly Beautiful",
    description:
      "Experience the brilliance of our lab-grown diamonds, combining cutting-edge technology with timeless elegance.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1920&q=80",
    title: "Sustainable Luxury",
    subtitle: "Eco-Friendly Elegance",
    description:
      "Our lab-grown diamonds offer the same quality and beauty as mined diamonds, with a smaller environmental footprint.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80",
    title: "Timeless Designs",
    subtitle: "Modern Craftsmanship",
    description: "Discover our collection of exquisite jewelry, where innovation meets tradition in every piece.",
  },
]

export function HeroSwiper() {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} bg-gold"></span>`,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                  >
                    <h2 className="text-gold font-serif mb-2">{slide.title}</h2>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{slide.subtitle}</h1>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl">{slide.description}</p>
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-gold hover:bg-gold/90 text-black">
                        Shop Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-black"
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !text-gold" />
        <div className="swiper-button-next !text-gold" />
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #d4af37;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
        }
      `}</style>
    </div>
  )
}

