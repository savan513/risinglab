"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "@/lib/store/store"
import { fetchDiamondCategory } from "@/lib/store/features/diamondSlice"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { ChevronLeft, ChevronRight, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { handleInquiry } from "@/app/diamond/page"

// Custom hook for responsive design
const useWindowSize = () => {
  // Initialize with reasonable defaults
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024
  });

  useEffect(() => {
    // Only execute on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth
      });
    };

    // Set on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// Skeleton Component for loading state
const CollectionSkeleton = () => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
    <div className="relative">
      <div className="aspect-[16/12] relative overflow-hidden">
        <Skeleton className="absolute inset-0" />
      </div>
    </div>
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  </div>
);

export function DiamondCollections() {
  // dispatch hook
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const swiperRef = useRef<SwiperType>()
  const { width } = useWindowSize();

  // useeffect
  useEffect(() => {
    const filter = { parent: "67a11386f8bba178b89e62c4" };
    dispatch(fetchDiamondCategory(filter))
  }, [])

  // Useselector
  const { loading, fetchDiamondCategoryData } = useSelector((state: RootState) => ({
    fetchDiamondCategoryData: state?.diamond?.fetchDiamondCategoryData,
    loading: state?.diamond?.loading,
  }))

  // selected items
  const selectedItems = fetchDiamondCategoryData?.length > 10
    ? fetchDiamondCategoryData?.sort(() => 0.5 - Math.random()).slice(0, 6)  // If length > 10, pick 6 random fetchDiamondCategoryData?
    : fetchDiamondCategoryData?.slice(0, Math.min(6, fetchDiamondCategoryData?.length));  // Else, take all available items (up to 6)

  // Dynamic skeletonArray based on viewport width
  const getSkeletonCount = () => {
    if (width >= 1024) return 3; // lg screens - 3 columns
    if (width >= 768) return 2;  // md screens - 2 columns
    if (width >= 640) return 2;  // sm screens - 2 columns
    return 1;                    // xs screens - 1 column
  };

  const skeletonArray = Array(getSkeletonCount()).fill(null);

  return (
    // <section className="pt-20 pb-10 bg-background">
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6  max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-serif italic text-xl"
          >
            Cut, Clarity, and Brilliance for Every Style
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif"
          >
            EXPLORE OUR DIAMOND COLLECTIONS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-3xl mx-auto"
          >
            Discover a world of dazzling diamonds, expertly categorized to help you find your perfect match. From
            timeless round cuts to modern princess designs, explore a variety of shapes, sizes, and styles, all crafted
            for maximum brilliance and elegance.
          </motion.p>
        </div>

        <div className="relative">
          {loading ? (
            // Skeleton loaders
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skeletonArray.map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <CollectionSkeleton />
                </motion.div>
              ))}
            </div>
          ) : (
            <>
              <Swiper
                onBeforeInit={(swiper: SwiperType) => {
                  swiperRef.current = swiper
                }}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  renderBullet: (index: number, className: string) => `<span class="${className} bg-gold"></span>`,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                className="!pb-16"
              >
                {fetchDiamondCategoryData?.map((collection, index) => (
                  <SwiperSlide key={collection._id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/diamond/${collection?.slug}`}>
                        <article className="group bg-white dark:bg-gray-900 rounded-xl p-4 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                          <div className="relative">
                            {/* Image */}
                            <div className="aspect-[16/12] relative overflow-hidden">
                              <Image
                                src={collection.images[0] || "/placeholder.svg"}
                                alt={collection.name}
                                fill
                                className="object-cover transform group-hover:scale-110 rounded-lg transition-transform duration-500"
                                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                priority={index < 3}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                          </div>

                          {/* Card hover effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                          {/* Card edge highlights on hover */}
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>

                          {/* Content */}
                          <div className="pt-4 space-y-4">
                            <div className="flex items-end justify-between">

                              {/* collection name */}
                              <h3 className="text-xl font-serif text-gray-900 dark:text-white group-hover:text-gold transition-colors duration-300">
                                {collection.name}
                              </h3>

                              {/* Premium */}
                              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                <Gem className="w-4 h-4 text-gold" />
                                <span>Diamond</span>
                              </div>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex items-center">
                                <Button
                                  size="sm"
                                  className="relative group/view border border-gold font-medium bg-white hover:bg-gold/5 text-gold 
                                  dark:bg-gray-800 dark:border-gold dark:hover:bg-gray-700 dark:text-gold/90 
                                  overflow-hidden transition-all duration-500 text-sm"
                                >
                                  {/* Animated borders */}
                                  <span className="absolute inset-px border border-dashed border-gold dark:border-gold opacity-0 
                                  group-hover/view:opacity-100 transition-opacity duration-300"></span>

                                  <span className="group-hover/view:tracking-wider transition-all duration-300">
                                    Explore Collection
                                  </span>
                                </Button>
                              </div>

                              {/* Inquiry Now Button */}
                              <div className="">
                                <Button
                                  size="sm"
                                  className="relative group/inquiry border border-green-500 font-medium bg-white hover:bg-green-50 text-green-600 
                                  dark:bg-gray-800 dark:border-green-600 dark:hover:bg-gray-700 dark:text-green-400 
                                  overflow-hidden transition-all duration-500 text-sm"
                                  onClick={() => handleInquiry(collection.name)}
                                >
                                  {/* Animated borders */}
                                  <span className="absolute inset-px border border-dashed border-green-500 dark:border-green-400 opacity-0 
                                  group-hover/inquiry:opacity-100 transition-opacity duration-300"></span>

                                  <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 mr-1 fill-current transition-transform group-hover/inquiry:scale-110"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                  </svg>
                                  <span className="group-hover/inquiry:tracking-wider transition-all duration-300">
                                    INQUIRY NOW
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="absolute left-0 right-0 top-[42%] -translate-y-1/2 z-10 pointer-events-none">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto text-black hover:text-black/80 bg-gold/50 hover:bg-gold/80 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transform transition-all duration-300"
                      onClick={() => swiperRef.current?.slidePrev()}
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto text-black hover:text-black/80 bg-gold/50 hover:bg-gold/80 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transform transition-all duration-300"
                      onClick={() => swiperRef.current?.slideNext()}
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}


