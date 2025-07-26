"use client"

import Image from "next/image"
import Link from "next/link"
import { DynamicMedia } from "@/components/DynamicMedia"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { mainBanner1, mainBanner2, mainBanner3, mainBanner5, mainBanner6 } from "@/public/assets/img"

const slides: any = [
  {
    id: 1,
    image: mainBanner5,
    title: "The Rise of Lab Grown Diamond",
    subtitle: "Future of Sustainable Luxury",
    description:
      "Experience the brilliance of our ethically crafted lab-grown diamonds, where innovation meets timeless elegance.",
  },
  {
    id: 2,
    image: mainBanner6,
    title: "Ethical Excellence",
    subtitle: "Conscious Luxury Choice",
    description:
      "Our lab-grown diamonds represent the perfect fusion of technology and sustainability, offering exceptional quality with minimal environmental impact.",
  },
  {
    id: 3,
    image: mainBanner3,
    title: "Revolutionary Craftsmanship",
    subtitle: "Where Science Meets Art",
    description: 
      "Discover our collection of exquisite lab-grown diamonds, created with cutting-edge technology and masterful precision.",
  },
]

export function HeroSwiper() {
  return (
    <div className="relative h-[80vh] sm:h-[80vh] md:h-[90vh] min-h-[400px] w-full">
      <Swiper
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index: number, className: string) => `<span class="${className} bg-gold"></span>`,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <DynamicMedia 
                src={slide.image || "/placeholder.svg"} 
                alt={slide.title} 
                fill 
                className="object-cover" 
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 sm:from-black/70 sm:to-black/30" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto sm:mx-0"
                  >
                    <h2 className="text-lg sm:text-xl md:text-2xl text-gold font-serif mb-2">{slide.title}</h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 sm:mb-4">
                      {slide.subtitle}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl line-clamp-3 sm:line-clamp-none">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Link href="/jewellery" className="w-full sm:w-auto">
                        <Button 
                          size="lg" 
                          className="bg-gold hover:bg-gold/90 text-black w-full sm:w-auto text-sm sm:text-base"
                        >
                          SHOP NOW
                        </Button>
                      </Link>
                      <Link href="/about" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-gold text-gold bg-gold/5 hover:bg-gold hover:text-black 
                                   dark:text-white w-full sm:w-auto text-sm sm:text-base"
                        >
                          LEARN MORE
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev !hidden sm:!flex !text-gold !w-8 !h-8 sm:!w-12 sm:!h-12" />
        <div className="swiper-button-next !hidden sm:!flex !text-gold !w-8 !h-8 sm:!w-12 sm:!h-12" />
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
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
          font-size: 16px;
        }
        @media (min-width: 640px) {
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  )
}

