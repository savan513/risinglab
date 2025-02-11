declare module "swiper/react" {
  import type { Swiper as SwiperType } from "swiper"
  import type { ReactElement, ComponentProps } from "react"

  interface SwiperProps extends Omit<ComponentProps<"div">, "ref"> {
    children: ReactElement | ReactElement[]
    ref?: React.RefObject<SwiperType>
  }

  interface SwiperSlideProps extends Omit<ComponentProps<"div">, "ref"> {
    children: ReactElement | ReactElement[]
    ref?: React.RefObject<HTMLElement>
  }

  export const Swiper: React.FunctionComponent<SwiperProps>
  export const SwiperSlide: React.FunctionComponent<SwiperSlideProps>
}

