import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"
              alt="Lab-grown diamond"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">The Rise of Lab Grown Diamond</h2>
            <p className="text-gray-300 mb-6">
              We are at the forefront of sustainable luxury, offering ethically crafted, lab-grown diamonds that rival
              the beauty and quality of mined diamonds. Our commitment to innovation and environmental responsibility
              sets a new standard in the jewelry industry.
            </p>
            <p className="text-gray-300 mb-8">
              Experience the future of diamonds – brilliant, sustainable, and conflict-free. Join us in shaping a more
              ethical and eco-friendly approach to luxury.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-black">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

