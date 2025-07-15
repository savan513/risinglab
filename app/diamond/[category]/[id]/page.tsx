"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { useRouter } from "next/navigation"
import { socialLinks } from "@/components/Footer"
import { cn } from "@/lib/utils"
import { useWishlist } from "@/hooks/useWishlist"
import { handleInquiry } from "../../page"

interface DiamondDetailProps {
  params: {
    category: string;
    id: string;
  };
}

export default function DiamondDetail({ params }: DiamondDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { toggleWishlist, isInWishlist } = useWishlist()

  const { category, id } = params;

  const categoryTitle = params.category.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Get data from Redux store
  const { fetchDiamondsByCategoryData, loading } = useSelector((state: RootState) => ({
    fetchDiamondsByCategoryData: state.diamond.fetchDiamondsByCategoryData,
    loading: state.diamond.loading,
  }));

  // Find the specific diamond using params.id
  const currentDiamond = useMemo(() => {
    return fetchDiamondsByCategoryData?.find(diamond => diamond._id === params.id);
  }, [fetchDiamondsByCategoryData, params.id]);


  const router = useRouter();

  useEffect(() => {
    if (!fetchDiamondsByCategoryData || fetchDiamondsByCategoryData.length === 0) {
      router.push(`/diamond/${params.category}`);
    }
  }, [fetchDiamondsByCategoryData, params.category, router])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setMousePosition({ x, y })
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % (currentDiamond?.images?.length || 1))
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + (currentDiamond?.images?.length || 1)) % (currentDiamond?.images?.length || 1))
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/diamond" className="hover:text-gold">
              Diamonds
            </Link>
            <span>/</span>
            <Link href={`/diamond/${category}`} className="hover:text-gold">
              {categoryTitle}
            </Link>
            <span>/</span>
            <Link href={`/diamond/${category}/${params.id}`}
              className="hover:text-gold"
            >
              {currentDiamond?.diamondName}
            </Link>
            {/* <span>/</span>
            <span className="text-gray-900">Diamonds</span> */}
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
                src={currentDiamond?.images[selectedImage] || "/placeholder.svg"}
                alt={currentDiamond?.diamondName}
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
              {currentDiamond?.hot && (
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
                {currentDiamond?.images.map((image: any, index: number) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-border",
                      selectedImage === index && "ring-2 ring-gold"
                    )}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${currentDiamond?.diamondName} - ${index + 1}`}
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
                {currentDiamond?.diamondName}
              </h1>
              {
                currentDiamond?.price && (

                  <h2 className="text-2xl text-lime-600 font-bold">₹ {currentDiamond?.price}</h2>
                )
              }
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p dangerouslySetInnerHTML={{ __html: currentDiamond?.p_description || "" }}></p>
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
                onClick={() => handleInquiry(currentDiamond?.diamondName)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 fill-current transition-transform group-hover/button:scale-110"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="group-hover/button:tracking-wider transition-all duration-300">
                  INQUIRY NOW
                </span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "hover:border-gold hover:text-gold",
                  isInWishlist(currentDiamond?._id) && "bg-gold/20 hover:bg-gold/30"
                )}
                onClick={() => toggleWishlist({
                  id: currentDiamond?._id,
                  title: currentDiamond?.diamondName,
                  price: currentDiamond?.price,
                  image: currentDiamond?.images[0],
                  categories: [currentDiamond?.category],
                  hot: currentDiamond?.hot
                })}
              >
                <Heart className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isInWishlist(currentDiamond?._id) && "fill-gold text-gold scale-110"
                )} />
              </Button>
            </motion.div>

            {/* Categories & Share */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Categories:</span>
                <Link href="/diamond" className="text-gold hover:underline">
                  Diamonds
                </Link>
                ,
                <Link href={`/diamond/${category}`} className="text-gold hover:underline">
                  {categoryTitle}
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Share:</span>
                <div className="flex items-center gap-2">
                  {socialLinks?.map((social, index) => (
                    <>
                      <a
                        key={social.label}
                        href={social.href}
                        className={`hover:opacity-80 transition-opacity`}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </a>
                    </>
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
            <TabsContent value="description" className="prose prose-lg max-w-none mt-8">
              <h2>Product Details</h2>
              <div dangerouslySetInnerHTML={{ __html: currentDiamond?.description || '' }} />
            </TabsContent>
            <TabsContent value="additional" className="prose prose-lg max-w-none mt-8">
              <div className="grid grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Specifications</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Category", value: currentDiamond?.category.name },
                      { label: "Brand", value: currentDiamond?.brand },
                      { label: "Diamond Type", value: currentDiamond?.diamondType },
                      { label: "Color", value: currentDiamond?.color },
                      { label: "Weight", value: currentDiamond?.weight },
                      { label: "Clarity", value: currentDiamond?.clarity },
                      { label: "Shape", value: currentDiamond?.shape },
                      { label: "Size", value: currentDiamond?.size },
                      { label: "Cut", value: currentDiamond?.cut },
                    ].map(({ label, value }) => (
                      <li key={label} className="flex items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600 w-32">{label}:</span>
                        <span className="text-gray-900 font-medium">{value || "-"}</span>
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