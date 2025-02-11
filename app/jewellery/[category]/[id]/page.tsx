"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Heart, Instagram, Linkedin, Search, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { useRouter } from "next/navigation"

interface JewellerydetailProps {
  params: {
    category: string;
    id: string;
  };
}

export default function JewelleryDetail({ params }: JewellerydetailProps) {
  const { category, id } = params;

  const categoryTitle = params.category.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Get data from Redux store
  const { fetchJewelleryByCategoryData, loading } = useSelector((state: RootState) => ({
    fetchJewelleryByCategoryData: state.jewellery.fetchJewelleryByCategoryData,
    loading: state.jewellery.loading,
  }));

  // Find the specific diamond using params.id
  const currentJewellery = useMemo(() => {
    return fetchJewelleryByCategoryData?.find(jewellery => jewellery._id === params.id);
  }, [fetchJewelleryByCategoryData, params.id]);

  const router = useRouter();

  useEffect(() => {
    if (!fetchJewelleryByCategoryData || fetchJewelleryByCategoryData.length === 0) {
      router.push(`/jewellery/${params.category}`);
    }
  }, [fetchJewelleryByCategoryData, params.category, router])

  const handleInquiry = () => {
    const phone = "1234567890"
    const message = `I'm interested in jewellery product ID: ${params.id}`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/yourusername",
      label: "Instagram",
      color: "text-pink-500"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/yourusername",
      label: "Facebook",
      color: "text-blue-600"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@yourchannel",
      label: "YouTube",
      color: "text-red-500"
    },
    {
      icon: Twitter,
      href: "https://www.Twitter.com/@yourchannel",
      label: "Twitter",
      color: "text-blue-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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
            <Link href={`/jewellery/${category}`} className="hover:text-gold">
              {categoryTitle}
            </Link>
            <span>/</span>
            <Link href={`/diamond/${category}/${params.id}`}
              className="hover:text-gold"
            >
              {currentJewellery?.jewelleryName}
            </Link>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={currentJewellery?.images[0] || "/placeholder.svg"}
                alt={currentJewellery?.diamondName}
                fill
                className="object-cover"
              />
              {currentJewellery?.hot && (
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    HOT
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-serif text-gray-900">{currentJewellery?.jewelleryName}</h1>
            <h1 className="text-2xl text-gold">₹ {currentJewellery?.price}</h1>
            <div className="prose prose-lg max-w-none">
              <p dangerouslySetInnerHTML={{ __html: currentJewellery?.description || '' }}></p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                className="w-full font-bold bg-green-500 hover:bg-green-500/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
                onClick={handleInquiry}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className=""> INQUIRY NOW</span>
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            {/* Categories & Share */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Categories:</span>
                <Link href="/jewellery" className="text-gold hover:underline">
                  Jewellery
                </Link>
                ,
                <Link href={`/jewellery/${category}`} className="text-gold hover:underline">
                  {categoryTitle}
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-sm text-gray-500">SKU:</span>
                <span className="text-sm text-gray-600">{currentJewellery?.sku}</span>
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
              <div dangerouslySetInnerHTML={{ __html: currentJewellery?.description || '' }} />
            </TabsContent>
            <TabsContent value="additional" className="prose prose-lg max-w-none mt-8">
              <div className="grid grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Category", value: currentJewellery?.category.name },
                      { label: "Brand", value: currentJewellery?.brand },
                      { label: "Color", value: currentJewellery?.color },
                      { label: "SKU", value: currentJewellery?.sku },
                      { label: "Size", value: currentJewellery?.size },
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

