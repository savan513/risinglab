"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { clientImg1, clientImg2, clientImg3, clientImg4, clientImg5, clientImg6, clientImg7, clientImg8 } from "@/public/assets/img"
import { StaticImageData } from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const testimonials = [
  {
    id: 1,
    name: "Helen Signy",
    role: "Engagement Ring Customer",
    image: clientImg1,
    rating: 5,
    content:
      "The diamond engagement ring I purchased exceeded all my expectations. The brilliance and clarity of the stone is absolutely remarkable, and the setting perfectly showcases its beauty.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Diamond Collector",
    image: clientImg2,
    rating: 5,
    content:
      "The quality and craftsmanship of their jewelry is exceptional. Their attention to detail and personalized service made finding my perfect anniversary diamond truly memorable.",
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "First-time Buyer",
    image: clientImg3,
    rating: 5,
    content:
      "I was amazed by the stunning collection of diamonds. The expertise and guidance provided helped me find the perfect piece for my wedding day without exceeding my budget.",
  },
  {
    id: 4,
    name: "Rachel Chen",
    role: "Anniversary Gift",
    image: clientImg4,
    rating: 5,
    content:
      "The attention to detail in every piece is remarkable. The tennis bracelet I purchased for our anniversary sparkles with incredible brilliance and has become my wife's favorite piece.",
  },
  {
    id: 5,
    name: "Michael Thompson",
    role: "Custom Design Client",
    image: clientImg5,
    rating: 5,
    content:
      "Working with their custom design team was a pleasure. They transformed my vision into a stunning diamond pendant that perfectly captures my personal style and family heritage.",
  },
  {
    id: 6,
    name: "Jessica Williams",
    role: "Luxury Watch Buyer",
    image: clientImg6,
    rating: 5,
    content:
      "Their selection of luxury watches with diamond accents is unparalleled. The timepiece I purchased is not only precise but a true work of art that I'll cherish for generations.",
  },
  {
    id: 7,
    name: "David Martinez",
    role: "Investment Buyer",
    image: clientImg7,
    rating: 5,
    content:
      "As someone who views diamonds as investments, I appreciate their transparency about sourcing and certification. Their expertise helped me select stones with excellent long-term value.",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    role: "Repeat Customer",
    image: clientImg8,
    rating: 5,
    content:
      "I've purchased multiple pieces over the years, and the consistency in quality and service is why I keep returning. Their diamond earrings remain as brilliant today as when I first bought them.",
  },
]

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-16">WHAT OUR CLIENTS SAY</h2>

          <div className="relative px-12">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                renderBullet: (index: any, className: any) => `<span class="${className} bg-gold"></span>`,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="pb-16"
                  >
                    <div className="flex flex-col items-center max-w-3xl mx-auto">
                      <div className="w-28 h-28 rounded-full overflow-hidden mb-6 relative border-2 border-gold shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 768px) 100px, 112px"
                          className="object-cover object-center"
                          priority
                          style={{ objectPosition: "50% 30%" }}
                        />
                      </div>

                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                      </div>

                      <p className="text-muted-foreground text-center mb-6 text-lg italic">"{testimonial.content}"</p>

                      <div className="text-center">
                        <h3 className="font-medium text-foreground text-xl">{testimonial.name}</h3>
                        <p className="text-gold text-sm">- {testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev !text-gold after:!text-2xl" />
            <div className="swiper-button-next !text-gold after:!text-2xl" />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(212, 175, 55, 0.5);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #D4AF37;
        }
        .testimonials-swiper .swiper-button-prev,
        .testimonials-swiper .swiper-button-next {
          color: #D4AF37;
        }
        .testimonials-swiper .swiper-button-prev:after,
        .testimonials-swiper .swiper-button-next:after {
          font-size: 24px;
        }
      `}</style>
    </section>
  )
}

