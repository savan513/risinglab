declare module "swiper/react" {
  import type { Swiper as SwiperType } from "swiper"
  import type { ReactElement, ComponentProps } from "react"
  import type { SwiperModule } from "swiper/types"

  interface SwiperProps extends Omit<ComponentProps<"div">, "ref"> {
    children: ReactElement | ReactElement[]
    ref?: React.RefObject<SwiperType>
    onBeforeInit?: (swiper: SwiperType) => void
    modules?: SwiperModule[]
    pagination?: any
    navigation?: any
    autoplay?: any
    spaceBetween?: number
    slidesPerView?: number
    breakpoints?: any
    className?: string
  }

  interface SwiperSlideProps extends Omit<ComponentProps<"div">, "ref"> {
    children: ReactElement | ReactElement[]
    ref?: React.RefObject<HTMLElement>
  }

  export const Swiper: React.FunctionComponent<SwiperProps>
  export const SwiperSlide: React.FunctionComponent<SwiperSlideProps>
}

