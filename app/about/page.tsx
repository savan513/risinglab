"use client"

import { SiteHeader } from "@/components/site-header"
import { OurStory } from "./component/OurStory"
import { OurValues } from "./component/OurValues"
import { MissionLegacy } from "./component/MissionLegacy"
import { WhyChooseUs } from "./component/WhyChooseUs"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* <SiteHeader /> */}
      <main className="pt-6">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">About Jenny Diamonds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting timeless elegance through exceptional diamonds and fine jewelry since 1990
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

