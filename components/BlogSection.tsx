"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { DynamicMedia } from "@/components/DynamicMedia"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { User, Gem, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { blogPosts } from "@/app/blog/page"


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
                        onBeforeInit={(swiper: any) => {
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
                        pagination={{
                            clickable: true,
                            renderBullet: (index: any, className: any) => `<span class="${className} bg-gold"></span>`,
                        }}
                        className="testimonials-swiper !pb-16"
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="relative">
                                            {/* Date Badge */}
                                            <div className="absolute top-4 left-4 z-10 bg-white dark:bg-black px-3 py-2 text-center rounded">
                                                <span className="block text-2xl font-bold text-gray-900 dark:text-white">
                                                    {format(new Date(post.date), "dd")}
                                                </span>
                                                <span className="block text-sm text-gray-600 dark:text-gray-400 uppercase">
                                                    {format(new Date(post.date), "MMM")}
                                                </span>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="inline-block bg-gold px-3 py-1 text-xs text-white rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>

                                            {/* Image */}
                                            <div className="aspect-[16/10] relative overflow-hidden">
                                                <DynamicMedia
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-4">
                                            <h3 className="text-xl font-serif text-gray-900 dark:text-white group-hover:text-gold transition-colors duration-300">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <User className="w-4 h-4" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <Gem className="w-4 h-4 text-gold" />
                                                    <span>{post.likes}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-between">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="pointer-events-auto text-black hover:text-black/80 bg-gold/50 hover:bg-gold/80 rounded-full"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="pointer-events-auto text-black hover:text-black/80 bg-gold/50 hover:bg-gold/80 rounded-full"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

