import Image from "next/image";
import { DynamicMedia } from "@/components/DynamicMedia";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <DynamicMedia
          src="https://sjc.microlink.io/jWaSIh3nLv7kM8ibFRnDf8p_anyvLSAs9YopivNgjmVCWakDy4RuWnVNteCzSjCpk_7_wVzhRBaTU1N8rfQesQ.jpeg"
          alt="Luxury gold necklace with red gemstones"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold font-serif">RISING LAB DIAMONDS</span>
            <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6">
              diamonds & <br />
              <span className="text-gradient">JEWELLERY</span>
            </h1>
            <p className="text-2xl md:text-3xl font-serif mb-8">STORE</p>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Rising Lab Diamonds offers a carefully curated selection of
              exceptional diamonds and jewellery. With a focus on quality and
              craftsmanship, each piece is designed to reflect timeless elegance
              and beauty.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-black">
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
