import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { diamondsInstagram3, diamondsInstagram9, mainBanner2 } from "@/public/assets/img"

export function DesignSection() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-4">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={diamondsInstagram9}
                  alt="Diamond necklace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={diamondsInstagram3}
                    alt="Diamond pendant"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={mainBanner2}
                    alt="Lab grown diamond"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-serif text-center px-4">
                      Crafted with Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-6 max-w-xl">
              <span className="text-lg md:text-xl text-gold font-serif">The Rise of Lab Grown Diamond</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
                SUSTAINABLE
                <br />
                LUXURY
              </h2>
              <h3 className="text-3xl font-serif">INNOVATION</h3>
              <p className="text-muted-foreground text-lg">
                Experience the future of luxury with our lab-grown diamonds. We combine cutting-edge technology 
                with sustainable practices to create stunning diamonds that are ethically sourced and 
                environmentally conscious. Each piece represents the perfect fusion of innovation and timeless elegance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/jewellery">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold/90 text-black"
                  >
                    SHOP NOW
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-black hover:bg-gold hover:text-black dark:text-white"
                  >
                    ABOUT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

