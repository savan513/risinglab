"use client"

import { SiteHeader } from "@/components/site-header"
import { OurStory } from "./component/OurStory"
import { OurValues } from "./component/OurValues"
import { MissionLegacy } from "./component/MissionLegacy"
import { WhyChooseUs } from "./component/WhyChooseUs"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen mt-10">
      {/* <SiteHeader /> */}
      <main className="pt-10">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">The Rise Of Lab Grown Diamonds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering sustainable luxury with ethically created lab-grown diamonds for a brighter future
          </p>
        </section>
        <OurStory />
        <OurValues />
        <MissionLegacy />
        <WhyChooseUs />
      </main>
    </div>
  )
}

