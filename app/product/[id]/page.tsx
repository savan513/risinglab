"use client"

import Image from "next/image"
import { DynamicMedia } from "@/components/DynamicMedia"
import Link from "next/link"
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWishlist } from "@/hooks/useWishlist"

// Mock data - Replace with your actual data fetching logic
const getProductById = (id: string) => {
  // This is mock data - replace with your actual data source
  return {
    id,
    title: "Ring",
    price: 429.0,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    categories: ["Jewellery", "Rings"],
    sku: "MNK-003",
    hot: true,
    description:
      "Consequat a scelerisque suspendisse vel et eget eu vitae adipiscing nibh scelerisque semper cum adipiscing facilisis adipiscing est accumsan lorem vestibulum.",
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { isInWishlist, toggleWishlist } = useWishlist()
  const product = getProductById(params.id)
  const inWishlist = isInWishlist(params.id)

  const handleInquiry = () => {
    const phone = "1234567890"
    const message = `I'm interested in product ID: ${params.id}`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-serif text-gray-900">Product not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/jewellery" className="hover:text-gold">
              Jewellery
            </Link>
            <span>/</span>
            <Link href={`/jewellery/${product.categories[1]?.toLowerCase()}`} className="hover:text-gold">
              {product.categories[1]}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <DynamicMedia src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              {product.hot && (
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-gray-900">{product.title}</h1>
            <div className="text-2xl text-gold">₹{product.price.toFixed(2)}</div>

            <div className="prose prose-lg max-w-none">
              <p>{product.description}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="default" className="bg-black hover:bg-black/90" onClick={handleInquiry}>
                INQUIRY NOW
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toggleWishlist(product)}
                className={inWishlist ? "text-green-500 border-green-500" : ""}
              >
                <Heart className={`w-4 h-4 ${inWishlist ? "fill-green-500" : ""}`} />
              </Button>
            </div>

            {/* SKU & Categories */}
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">SKU:</span> {product.sku}
              </div>
              <div>
                <span className="text-gray-500">Categories:</span>{" "}
                {product.categories.map((category, index) => (
                  <span key={category}>
                    <Link href={`/jewellery/${category.toLowerCase()}`} className="text-gold hover:underline">
                      {category}
                    </Link>
                    {index < product.categories.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Share:</span>
              <div className="flex items-center gap-2">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <Button key={index} variant="ghost" size="icon" className="hover:text-gold">
                    <Icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
              <TabsTrigger value="additional">ADDITIONAL INFORMATION</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="prose prose-lg max-w-none mt-8">
              <h2>VESTIBULUM TEMPUS METUS</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet, cursus.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
                <li>Cras ornare tristique elit.</li>
                <li>Vivamus vestibulum nulla nec ante.</li>
                <li>Praesent placerat risus quis eros.</li>
                <li>Fusce pellentesque suscipit nibh.</li>
              </ul>
            </TabsContent>
            <TabsContent value="additional" className="prose prose-lg max-w-none mt-8">
              <p>Additional information about this product will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

