"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const testimonials = [
  {
    id: 1,
    name: "Helen Signy",
    role: "Happy Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented is pursuit compact.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Loyal Client",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "The quality and craftsmanship of their jewelry is exceptional. Their attention to detail and customer service made my experience truly memorable.",
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "I was amazed by the stunning collection of diamonds. The expertise and guidance provided helped me find the perfect piece for my special occasion.",
  },
  {
    id: 4,
    name: "Rachel Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "The attention to detail in every piece is remarkable. From selection to delivery, the entire experience was nothing short of exceptional.",
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
              centeredSlides={true}
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
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 relative border-2 border-gold">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
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

