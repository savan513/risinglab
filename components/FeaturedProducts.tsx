"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/hooks/useWishlist"
import { ProductModal } from "@/components/ui/product-modal"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/lib/store"
import { fetchJewelleryCollection } from "@/lib/store/features/jewellerySlice"
import { handleInquiry } from "@/app/diamond/page"

export function FeaturedProducts() {
  const dispatch = useDispatch<AppDispatch>()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Get jewellery data from Redux store
  const { fetchJewelleryCollectionData: allProducts, loading: storeLoading } = useSelector(
    (state: RootState) => state.jewellery
  )
  // Function to fetch and shuffle products
  const fetchAndShuffleProducts = async () => {
    try {
      setLoading(true)
      const response = await dispatch(fetchJewelleryCollection()).unwrap()
      console.log("response :==> ", response);
      if (response?.length) {
        if (response.length <= 3) {
          setProducts(response)
        } else {
          const selectedItems = response.length > 10
            ? response.sort(() => 0.5 - Math.random()).slice(0, 3)
            : response.slice(0, Math.min(3, response.length))

          setProducts(selectedItems)
        }
      }
      // if (allProducts) {
      //   if (allProducts.length <= 3) {
      //     setProducts(allProducts)
      //   } else {
      //     const selectedItems = allProducts?.length > 10
      //       ? allProducts?.sort(() => 0.5 - Math.random()).slice(0, 3) 
      //       : allProducts?.slice(0, Math.min(3, allProducts?.length));

      //     setProducts(selectedItems)
      //   }
      // }
    } catch (error) {
      console.error('Error fetching products:', error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  // Effect to update products when store data changes
  useEffect(() => {
    if (allProducts) {
      if (allProducts.length <= 3) {
        // console.log("<<<<<<======allProducts 999======>>>>>>", allProducts);
        setProducts(allProducts)
      } else {
        // console.log("<<<<<<======3 products,======>>>>>>", allProducts);
        // If more than 3 products, randomly select 3s
        const selectedItems = allProducts?.length > 10
          ? allProducts?.sort(() => 0.5 - Math.random()).slice(0, 3)  // If length > 10, pick 6 random allProducts?
          : allProducts?.slice(0, Math.min(3, allProducts?.length));  // Else, take all available items (up to 3)
        // console.log("<<<<<<======selectedItems======>>>>>>", selectedItems);
        setProducts(selectedItems)
      }
      setLoading(false)
    }
  }, [allProducts])

  useEffect(() => {
    fetchAndShuffleProducts()
    const interval = setInterval(fetchAndShuffleProducts, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleQuickView = (product: any) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProduct(null)
  }

  // Loading state from both local and store
  const isLoading = loading || storeLoading

  return (
    <section className="pt-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <span className="text-gold font-serif italic text-xl">Unmatched Brilliance, Timeless Elegance</span>
          <h2 className="text-3xl md:text-4xl font-serif">FEATURED PRODUCTS</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of stunning diamonds and fine jewellery, each piece selected for its
            exceptional quality and craftsmanship. Whether searching for a brilliant solitaire or an elegant jewellery
            design, find the perfect symbol of sophistication and style.
          </p>
        </div>

        {isLoading ? (
          // Loading skeleton grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md overflow-hidden border border-border/50 dark:border-gold/20 animate-pulse"
              >
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
                  <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Products grid with dynamic columns
          <div className={`grid gap-4 ${products.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' :
            products.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
            }`}>
            {products?.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="group relative bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 dark:border-gold/20">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.jewelleryName}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.hot && (
                      <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        HOT
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="icon"
                        variant="secondary"
                        className={`h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-black/80 dark:hover:bg-black
                          ${isInWishlist(product._id) ? 'bg-gold/20 hover:bg-gold/30' : ''}`}
                        onClick={() => toggleWishlist({
                          id: product._id,
                          title: product.jewelleryName,
                          price: product.price,
                          image: product.images[0],
                          categories: [product.category],
                          hot: product.hot
                        })}
                      >
                        <Heart
                          className={`h-4 w-4 transition-all duration-300
                            ${isInWishlist(product._id)
                              ? "fill-gold text-gold scale-110"
                              : "text-gray-600 dark:text-gray-300"}`}
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-black/80 dark:hover:bg-black"
                        onClick={() => handleQuickView(product)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="space-y-1.5 mb-3">
                      <h3 className="font-serif text-base font-medium group-hover:text-gold transition-colors line-clamp-1">
                        {product.jewelleryName}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {/* {product.category} */}
                        SKU : {product?.sku} | Size : {product?.size?.map((size:any) => size)}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-base font-semibold text-gold transition-colors duration-300 
                          group-hover:text-green-500 dark:group-hover:text-green-400">
                          ₹{product.price?.toFixed(2)}
                        </p>
                        <div className="h-px flex-1 mx-3 bg-border dark:bg-gold/20 group-hover:bg-green-500/20 transition-colors duration-300"></div>
                        <div className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                          In Stock
                        </div>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="w-full font-medium bg-green-500 hover:bg-green-500/90 text-white 
                      dark:bg-green-600 dark:hover:bg-green-600/90 dark:text-white group/button
                      transition-all duration-300 text-sm"
                      onClick={() => handleInquiry(product.jewelleryName)}
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Refresh Button - Only show when products are available */}
        {products.length === 0 && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={fetchAndShuffleProducts}
              className="border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300
                dark:hover:text-black group"
              disabled={isLoading}
            >
              <svg
                className="w-4 h-4 mr-2 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Products
            </Button>
          </div>
        )}

        <ProductModal
          isOpen={showModal}
          onClose={handleCloseModal}
          product={selectedProduct}
          categorySlug={"rings"}
          onInquiry={handleInquiry}
        />
      </div>
    </section>
  )
}