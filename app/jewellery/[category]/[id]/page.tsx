"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Heart, Instagram, Linkedin, Search, Twitter, Youtube, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { useRouter } from "next/navigation"
import { socialLinks } from "@/components/Footer"
import { cn } from "@/lib/utils"
import { useWishlist } from "@/hooks/useWishlist"

interface JewellerydetailProps {
  params: {
    category: string
    id: string
  }
}

export default function JewelleryDetail({ params }: JewellerydetailProps) {
  const { category, id } = params
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const categoryTitle = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Get data from Redux store
  const { fetchJewelleryByCategoryData, loading } = useSelector((state: RootState) => ({
    fetchJewelleryByCategoryData: state.jewellery.fetchJewelleryByCategoryData,
    loading: state.jewellery.loading,
  }))

  // Find the specific jewellery using params.id
  const currentJewellery = useMemo(() => {
    return fetchJewelleryByCategoryData?.find((jewellery) => jewellery._id === params.id)
  }, [fetchJewelleryByCategoryData, params.id])

  const router = useRouter()

  useEffect(() => {
    if (!fetchJewelleryByCategoryData || fetchJewelleryByCategoryData.length === 0) {
      router.push(`/jewellery/${params.category}`)
    }
  }, [fetchJewelleryByCategoryData, params.category, router])

  const handleInquiry = () => {
    const phone = "1234567890"
    const message = `I'm interested in jewellery product ID: ${params.id}`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % (currentJewellery?.images?.length || 1))
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + (currentJewellery?.images?.length || 1)) % (currentJewellery?.images?.length || 1))
  }

  // Add wishlist hook
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/jewellery" className="hover:text-gold transition-colors">
              Jewellery
            </Link>
            <span>/</span>
            <Link href={`/jewellery/${category}`} className="hover:text-gold transition-colors">
              {categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-gold">{currentJewellery?.jewelleryName}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <motion.div
              className="relative aspect-square bg-card rounded-lg overflow-hidden cursor-zoom-in border border-border"
              onMouseMove={handleMouseMove}
              onClick={() => setIsZoomed(!isZoomed)}
              whileHover={{ scale: isZoomed ? 1 : 1.02 }}
            >
              <Image
                src={currentJewellery?.images[selectedImage] || "/placeholder.svg"}
                alt={currentJewellery?.jewelleryName}
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  isZoomed && "scale-150",
                  isZoomed && "object-none"
                )}
                style={
                  isZoomed
                    ? {
                        objectPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                      }
                    : undefined
                }
              />
              {currentJewellery?.hot && (
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                    HOT
                  </span>
                </div>
              )}
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsZoomed(!isZoomed)
                }}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Thumbnail Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={previousImage}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex-1 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {currentJewellery?.images.map((image:any, index:any) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "relative w-16 lg:w-20 aspect-square rounded-lg overflow-hidden cursor-pointer border border-border",
                      selectedImage === index && "ring-2 ring-gold"
                    )}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${currentJewellery?.jewelleryName} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-serif text-foreground mb-2">
                {currentJewellery?.jewelleryName}
              </h1>
              <h2 className="text-2xl text-lime-600 font-bold">₹ {currentJewellery?.price}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p dangerouslySetInnerHTML={{ __html: currentJewellery?.description || "" }}></p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <Button
                size="sm"
                className="w-full font-medium bg-green-500 hover:bg-green-500/90 text-white 
                  dark:bg-green-600 dark:hover:bg-green-600/90 dark:text-white group/button
                  transition-all duration-300 text-sm"
                onClick={() => handleInquiry()}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                INQUIRY NOW
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "hover:border-gold hover:text-gold",
                  isInWishlist(currentJewellery?._id) && "bg-gold/20 hover:bg-gold/30"
                )}
                onClick={() => toggleWishlist({
                  id: currentJewellery?._id,
                  title: currentJewellery?.jewelleryName,
                  price: currentJewellery?.price,
                  image: currentJewellery?.images[0],
                  categories: [currentJewellery?.category],
                  hot: currentJewellery?.hot
                })}
              >
                <Heart className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isInWishlist(currentJewellery?._id) && "fill-gold text-gold scale-110"
                )} />
              </Button>
            </motion.div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">SKU:</span>
                  <span className="ml-2 text-foreground">{currentJewellery?.sku}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <Link
                    href={`/jewellery/${category}`}
                    className="ml-2 text-gold hover:underline"
                  >
                    {categoryTitle}
                  </Link>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex items-center gap-2">
                  {socialLinks?.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`hover:opacity-80 transition-opacity`}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
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
            <TabsContent value="description" className="prose prose-lg dark:prose-invert max-w-none mt-8">
              <h2>Product Details</h2>
              <div
                dangerouslySetInnerHTML={{ __html: currentJewellery?.description || "" }}
              />
            </TabsContent>
            <TabsContent value="additional" className="mt-8">
              <div className="grid grid-cols-2 gap-8 p-6 bg-muted rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Specifications
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Category", value: currentJewellery?.category.name },
                      { label: "Brand", value: currentJewellery?.brand },
                      { label: "Color", value: currentJewellery?.color },
                      { label: "SKU", value: currentJewellery?.sku },
                      { label: "Size", value: currentJewellery?.size },
                    ].map(({ label, value }) => (
                      <li
                        key={label}
                        className="flex items-center border-b border-border pb-2"
                      >
                        <span className="text-muted-foreground w-32">{label}:</span>
                        <span className="text-foreground font-medium">{value || "-"}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

