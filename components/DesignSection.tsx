import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DesignSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
                  alt="Diamond necklace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
                  alt="Diamond pendant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-6 max-w-xl">
              <span className="text-gold font-serif">The Rise of Lab Grown Diamond</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
                DIAMONDS &
                <br />
                JEWELLERY
              </h2>
              <h3 className="text-3xl font-serif">STORE</h3>
              <p className="text-muted-foreground text-lg">
                Jenny Diamonds offers a carefully curated selection of exceptional diamonds and jewellery. With a focus
                on quality and craftsmanship, each piece is designed to reflect timeless elegance and beauty. Discover
                the perfect diamond to mark life's most cherished moments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-white dark:bg-black dark:text-black dark:hover:bg-white/90"
                >
                  SHOP NOW
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-black hover:bg-gold hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  ABOUT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

