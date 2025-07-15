"use client"

import { MediaRenderer } from "@/components/ui/media-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { mainBanner1, mainBanner2, mainBanner3, mainBanner4, mainBanner5 } from "@/public/assets/img";

const slides = [
  {
    id: 1,
    image: mainBanner1.src,
    title: "Luxury Diamond Collection",
  },
  {
    id: 2,
    image: mainBanner2.src,
    title: "Elegant Jewelry Designs",
  },
  {
    id: 3,
    image: mainBanner3.src,
    title: "Premium Diamond Selection",
  },
  {
    id: 4,
    image: mainBanner4.src,
    title: "Exclusive Diamond Collection",
  },
  {
    id: 5,
    image: mainBanner5.src,
    title: "Luxury Diamond Jewelry",
  },
];

export function HeroSwiper() {
  return (
    <div className="relative h-[80vh] sm:h-[80vh] md:h-[90vh] min-h-[400px] w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index: number, className: string) => `<span class="${className} bg-gold"></span>`,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <MediaRenderer 
                src={slide.image} 
                alt={slide.title} 
                fill 
                className="object-cover" 
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 sm:from-black/70 sm:to-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

