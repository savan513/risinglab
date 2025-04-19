import { HeroSwiper } from "@/components/HeroSwiper"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { DesignSection } from "@/components/DesignSection"
import { InstagramFeed } from "@/components/InstagramFeed"
import { CallToAction } from "@/components/CallToAction"
import { BlogSection } from "@/components/BlogSection"
import { JewelleryCollections } from "@/components/JewelleryCollections"
import { DiamondCollections } from "@/components/DiamondCollections"
import { ClientTestimonials } from "@/components/ClientTestimonials"
import { ShippingBenefits } from "@/components/ShippingBenefits"
import { LuxicaPromise } from "@/components/LuxicaPromise"
import { BuybackPolicy } from "@/components/BuybackPolicy"

export default function Home() {
  return (
    <>
      <main>
        <HeroSwiper />
        <ShippingBenefits />
        <DesignSection />
        {/* <FeaturedProducts /> */}
        <DiamondCollections />
        <JewelleryCollections />
        <LuxicaPromise />
        <BuybackPolicy />
        <CallToAction />
        <InstagramFeed />
        <ClientTestimonials />
        <BlogSection />
      </main>
    </>
  )
}

