"use client"

import Image from "next/image"
import Link from "next/link"
import { DynamicMedia } from "@/components/DynamicMedia"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { MessageCircle, ChevronLeft, ChevronRight, ZoomIn, X, ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: any
  categorySlug: string
  onInquiry: (productName: string) => void
}

// Add these theme colors at the top of the file
const theme = {
  gold: {
    DEFAULT: "rgb(212, 175, 55)",
    hover: "rgb(192, 155, 35)",
    light: "rgba(212, 175, 55, 0.1)",
    border: "rgba(212, 175, 55, 0.2)",
  }
}

export function ProductModal({
  isOpen,
  onClose,
  product,
  categorySlug,
  onInquiry
}: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isExpanded, setIsExpanded] = useState(false)

  if (!product) return null

  const images = Array.isArray(product.images)
    ? product.images
    : product.image
      ? [product.image]
      : ["/placeholder.svg"]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === (images.length - 1) ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] lg:max-w-5xl p-0 overflow-hidden bg-background h-[90vh] lg:h-auto border-gold/20">
        {/* Close button */}
        <motion.button
          className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm 
            hover:bg-gold/10 transition-colors border border-gold/20 group/close"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="h-4 w-4 text-gold transition-transform duration-300 group-hover/close:rotate-180" />
        </motion.button>

        <div className="grid lg:grid-cols-2 h-full lg:h-auto overflow-y-auto">
          {/* Left: Image Section */}
          <div className="relative space-y-4 p-4 lg:p-6 bg-gold/5 dark:bg-gold/[0.03]">
            {/* Main Image */}
            <motion.div
              className="relative aspect-square rounded-lg overflow-hidden cursor-zoom-in bg-background border border-gold/20"
              onMouseMove={handleMouseMove}
              onClick={() => setIsZoomed(!isZoomed)}
              whileHover={{ scale: isZoomed ? 1 : 1.02 }}
            >
              <DynamicMedia
                src={images[selectedImage]}
                alt={product.jewelleryName || product.title || "Product image"}
                fill
                className={cn(
                  "object-cover transition-all duration-300",
                  isZoomed && "scale-150 object-none"
                )}
                style={
                  isZoomed
                    ? {
                      objectPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                    }
                    : undefined
                }
              />
              {/* Hot Badge */}
              {product?.hot && (
                <div className="absolute top-4 left-4 z-10 bg-gold text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </div>
              )}
              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                <motion.button
                  className="rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-gold/10 transition-colors border border-gold/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-4 h-4 text-gold" />
                </motion.button>
                <motion.button
                  className="rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-gold/10 transition-colors border border-gold/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-4 h-4 text-gold" />
                </motion.button>
              </div>
              {/* Zoom Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-gold/10 transition-colors border border-gold/20"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsZoomed(!isZoomed)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ZoomIn className="w-4 h-4 text-gold" />
              </motion.button>
            </motion.div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent">
              {images.map((image: string, index: number) => (
                <motion.button
                  key={index}
                  className={cn(
                    "relative w-16 lg:w-20 aspect-square rounded-md overflow-hidden flex-shrink-0 bg-background border",
                    selectedImage === index
                      ? "border-gold ring-1 ring-gold"
                      : "border-gold/20 hover:border-gold/40"
                  )}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DynamicMedia
                    src={image}
                    alt={`${product.jewelleryName || product.title || "Product"} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 border-t lg:border-t-0 lg:border-l border-gold/20">
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-xl lg:text-2xl font-serif">
                {product.jewelleryName}
              </DialogTitle>
              <div className="text-sm text-gold">
                {product.category?.name}
              </div>
            </DialogHeader>

            <div className="space-y-4 lg:space-y-4">
              {
                product.price && (
                  <div className="text-xl lg:text-2xl font-bold text-green-500 dark:text-green-400 
                transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-500 -mb-2">
                    ₹{product.price?.toLocaleString()}
                  </div>
                )
              }

              <div className="space-y-1">
                <div
                  className={cn(
                    "prose prose-sm dark:prose-invert overflow-hidden transition-all duration-300 py-4",
                    !isExpanded ?
                      "max-h-[200px]" :
                      "max-h-[350px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gold/10 hover:scrollbar-thumb-gold/20"
                  )}
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />

                {product.description?.length > 100 && (
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-medium w-full border-gold/20 hover:bg-gold/10 hover:border-gold text-gold px-4 h-7 transition-all duration-300 group flex items-center gap-1"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
                      ) : (
                        <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                      )}
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-3 border-t border-gold/20 pt-4 mt-2">
                {[
                  { label: "SKU", value: product.sku },
                  { label: "Brand", value: product.brand },
                  { label: "Size", value: product.size },
                  { label: "Color", value: product.color },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="">{label}:</span>
                    <span className="font-medium">{value || "-"}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="w-full font-bold bg-green-500 hover:bg-green-500/90 text-white dark:bg-green-600 dark:hover:bg-green-600/90"
                  onClick={() => onInquiry(product.jewelleryName)}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  INQUIRY NOW
                </Button>
                {
                 categorySlug !== "rings" && (<>
                 
                <Link
                  href={`/${product.diamondName ? 'diamond' : 'jewellery'}/${categorySlug}/${product._id}`}
                  className="w-full sm:flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-gold/20 hover:bg-gold/10 hover:border-gold text-gold"
                  >
                    VIEW DETAILS
                  </Button>
                </Link>
                 </>)
                }
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 