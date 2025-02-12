import { HeroSwiper } from "@/components/HeroSwiper"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { DesignSection } from "@/components/DesignSection"
import { InstagramFeed } from "@/components/InstagramFeed"
import { CallToAction } from "@/components/CallToAction"
import { BlogSection } from "@/components/BlogSection"
import { JewelleryCollections } from "@/components/JewelleryCollections"
import { DiamondCollections } from "@/components/DiamondCollections"
import { ClientTestimonials } from "@/components/ClientTestimonials"

export default function Home() {
  return (
    <>
      <main>
        <HeroSwiper />
        <DesignSection />
        <FeaturedProducts />
        <DiamondCollections />
        <JewelleryCollections />
        <CallToAction />
        <InstagramFeed />
        <ClientTestimonials />
        <BlogSection />
      </main>
    </>
  )
}

