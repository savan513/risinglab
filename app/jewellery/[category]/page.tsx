'use client'

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Grid2X2, Grid3X3, Heart, List, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "@/lib/store/store"
import { fetchJewelleryByCategory } from "@/lib/store/features/jewellerySlice"

interface JewelleryListingProps {
    params: {
        category: string;
        id: string;
    };
}
const diamonds = [
    {
        id: "1",
        title: "Diamonds",
        image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923",
        categories: ["Diamonds", "Natural Diamonds"],
        hot: true,
    },
    {
        id: "2",
        title: "Lab Grown Diamond 1 mm 2.5m Round Loose Lab Diamond Brilliant Cut",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        categories: ["Lab Grown Diamonds", "Loose Diamonds"],
    },
    {
        id: "3",
        title: "Round Brilliant Loose Top Quality Lab Grown Diamond",
        image: "https://images.unsplash.com/photo-1603255466024-2c0802ad6218",
        categories: ["Lab Grown Diamonds", "Loose Diamonds"],
    },
    // Add more diamonds...
]
export default function DiamondListing({ params }: JewelleryListingProps) {
    console.log("params :==> ", params);
    // Convert URL-friendly format back to display format
    const categoryTitle = params.category.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const slug = params.category;
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    useEffect(() => {
        dispatch(fetchJewelleryByCategory(slug))
    }, []);

    // Useselector
    const { fetchJewelleryByCategoryData, loading } = useSelector((state: RootState) => ({
        fetchJewelleryByCategoryData: state.jewellery.fetchJewelleryByCategoryData,
        loading: state.jewellery.loading,
    }))

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950/50">
            {/* Hero Banner */}
            <div className="relative h-[300px]">
                <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bjoDs90ckxlMGP2ZkcapeiD0ua4tD7.png"
                    alt="Diamonds Collection"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">← Jewellery</h1>
                        <div className="flex items-center justify-center gap-8 text-white/80">
                            <div>
                                DIAMONDS
                                <br />4 Products
                            </div>
                            <div>
                                JEWELLERY
                                <br />5 Products
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Left Side */}
                        <Button variant="ghost">
                            <List className="w-4 h-4 mr-2" />
                            Show sidebar
                        </Button>

                        {/* Right Side */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span>Show:</span>
                                <Select defaultValue="12">
                                    <SelectTrigger className="w-[70px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="9">9</SelectItem>
                                        <SelectItem value="12">12</SelectItem>
                                        <SelectItem value="18">18</SelectItem>
                                        <SelectItem value="24">24</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon">
                                    <Grid2X2 className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Grid3X3 className="w-4 h-4" />
                                </Button>
                            </div>

                            <Select defaultValue="default">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="default">Default sorting</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                    <SelectItem value="latest">Latest</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 py-12">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="group relative animate-pulse">
                                {/* Skeleton for HOT Badge */}
                                <div className="absolute top-4 left-4 z-10 bg-gray-300 h-5 w-10 rounded" />

                                {/* Skeleton for Image */}
                                <div className="relative aspect-square bg-gray-300 rounded-lg overflow-hidden" />

                                {/* Skeleton for Content */}
                                <div className="mt-4 space-y-2">
                                    {/* Category Skeleton */}
                                    <div className="h-4 w-1/4 bg-gray-300 rounded" />

                                    {/* Title Skeleton */}
                                    <div className="h-6 w-3/4 bg-gray-300 rounded" />
                                    <div className="h-6 w-2/4 bg-gray-300 rounded" />

                                    {/* Button Skeleton */}
                                    <div className="h-10 w-full bg-gray-300 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {fetchJewelleryByCategoryData?.length > 0 ? (
                            <>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {fetchJewelleryByCategoryData?.map((jewellery) => (
                                        <div key={jewellery._id} className="group relative">
                                            {jewellery.hot && (
                                                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    HOT
                                                </div>
                                            )}
                                            <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                                                <Image
                                                    src={jewellery.images[0] || "/placeholder.svg"}
                                                    alt={jewellery.jewelleryName}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

                                                {/* Quick Actions */}
                                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <Button variant="secondary" size="icon" className="rounded-full bg-white hover:bg-gold text-black">
                                                        <Search className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="secondary" size="icon" className="rounded-full bg-white hover:bg-gold text-black">
                                                        <Heart className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="mt-4 space-y-2">
                                                <div className="text-sm text-gold">{jewellery.category.name}</div>
                                                <Link href={`/jewellery/${slug}/${jewellery._id}`} className="block">
                                                    <h3 className="text-lg font-serif text-black group-hover:text-gold transition-colors line-clamp-2">
                                                        {jewellery.jewelleryName}
                                                    </h3>
                                                </Link>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    ₹ {jewellery.price}
                                                </h3>
                                                {/* Inquiry Button */}
                                                <Button
                                                    className="w-full font-bold bg-green-500 hover:bg-green-500/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90"
                                                // onClick={() => handleInquiry(jewellery.id)}
                                                >
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 font-bold fill-current "
                                                        //  color="#25D366"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                    </svg>
                                                    <span className=""> INQUIRY NOW</span>
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </>
                        ) : (
                            <>
                                <h5 className="text-center">No Data Found</h5>
                            </>
                        )}
                    </>
                )}
                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    <Button variant="outline" size="icon" className="text-black border-black/20">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="text-black border-black/20">
                        1
                    </Button>
                    <Button variant="outline" className="text-black border-black/20">
                        2
                    </Button>
                    <Button variant="outline" size="icon" className="text-black border-black/20">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
} 