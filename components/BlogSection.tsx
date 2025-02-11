"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { User, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const blogPosts = [
    {
        id: 1,
        title: "Natural Diamonds vs Lab-Grown Diamonds: A Comprehensive Guide",
        excerpt:
            "Diamonds have captivated human hearts for centuries with their timeless beauty, rarity, and symbolic significance...",
        image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
        date: new Date("2024-01-04"),
        category: "DIAMOND",
        author: "Jenny",
        likes: 24,
        slug: "natural-vs-lab-grown-diamonds",
    },
    {
        id: 2,
        title: "Diamond Care and Maintenance Tips",
        excerpt:
            "Diamonds are renowned for their brilliance, durability, and timeless appeal. Owning a diamond is a cherished expe...",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
        date: new Date("2024-01-01"),
        category: "DIAMOND",
        author: "Jenny",
        likes: 18,
        slug: "diamond-care-maintenance",
    },
    {
        id: 3,
        title: "The World's Most Expensive Diamond Watch: A Testament to Luxury and Craftsmanship",
        excerpt:
            "In the world of luxury, few objects capture the imagination as powerfully as a diamond watch. These extraordinary...",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
        date: new Date("2023-12-26"),
        category: "DIAMOND",
        author: "Jenny",
        likes: 32,
        slug: "most-expensive-diamond-watch",
    },
]

export function BlogSection() {
    const swiperRef = useRef<SwiperType>()

    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-6"
                    >
                        BLOGS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        Stay informed with our expert insights on diamonds, jewellery trends, and styling tips.
                    </motion.p>
                </div>

                {/* Blog Slider */}
                <div className="relative">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        //     el: ".blog-pagination",
                        //     bulletClass:
                        //         "inline-block w-4 h-4 mx-1 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer transition-all duration-300",
                        //     bulletActiveClass: "!bg-gold w-6",
                        // }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => `<span class="${className} bg-gold"></span>`,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        className="testimonials-swiper !pb-16"
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <Link href={`/blog/${post.slug}`} className="block group">
                                    <div className="relative">
                                        {/* Date Badge */}
                                        <div className="absolute top-4 left-4 z-10 bg-white dark:bg-black px-3 py-2 text-center rounded">
                                            <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                                                {format(post.date, "dd")}
                                            </span>
                                            <span className="block text-sm text-gray-600 dark:text-gray-400 uppercase">
                                                {format(post.date, "MMM")}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="inline-block bg-gold px-3 py-1 text-xs text-white rounded">{post.category}</span>
                                        </div>

                                        {/* Image */}
                                        <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-6">
                                            <Image
                                                src={post.image || "/placeholder.svg"}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-serif text-gray-900 dark:text-white group-hover:text-gold transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center space-x-2">
                                                <User className="w-4 h-4" />
                                                <span>Posted by {post.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Heart className="w-4 h-4" />
                                                <span>{post.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    {/* <div className="blog-pagination flex justify-center items-center mt-8" /> */}

                    {/* Navigation Buttons */}
                    {/* <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-between">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="pointer-events-auto text-white hover:text-white/80 bg-gold hover:bg-gold/80 rounded-full"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="pointer-events-auto text-white hover:text-white/80 bg-gold hover:bg-gold/80 rounded-full"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </div> */}
                    <div className="swiper-button-prev !text-gold after:!text-2xl" />
                    <div className="swiper-button-next !text-gold after:!text-2xl" />
                </div>
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

