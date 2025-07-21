"use client";

import Image from "next/image";
import Link from "next/link";
import { DynamicMedia } from "@/components/DynamicMedia";
import {
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Grid3X3,
  Heart,
  List,
  Search,
  Eye,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState, useMemo } from "react";
import { fetchDiamondsByCategory } from "@/lib/store/features/diamondSlice";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store/store";
import { handleInquiry } from "../page";
import { useWishlist } from "@/hooks/useWishlist";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { mainBanner7 } from "@/public/assets/img";
import { ProductModal } from "@/components/ui/product-modal";

interface DiamondListingProps {
  params: {
    category: string;
    id: string;
  };
}

export default function DiamondListing({ params }: DiamondListingProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [gridView, setGridView] = useState<'grid2x2' | 'grid3x3'>('grid3x3');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Convert URL-friendly format back to display format
  const categoryTitle = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const slug = params.category;
  console.log("slug :==> ", slug);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchDiamondsByCategory(slug));
  }, []);

  // Useselector
  const { fetchDiamondsByCategoryData, loading } = useSelector(
    (state: RootState) => ({
      fetchDiamondsByCategoryData: state.diamond.fetchDiamondsByCategoryData,
      loading: state.diamond.loading,
    })
  );

  // Add search filter function
  const filteredDiamonds = useMemo(() => {
    if (!searchQuery.trim() || !fetchDiamondsByCategoryData) {
      return fetchDiamondsByCategoryData;
    }
    
    return fetchDiamondsByCategoryData.filter((item: any) =>
      item.diamondName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [fetchDiamondsByCategoryData, searchQuery]);

  const handleQuickView = (diamond: any) => {
    setSelectedProduct(diamond);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <DynamicMedia
            src={mainBanner7}
            alt="Diamond Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-4 md:space-y-6 pt-10 sm:pt-16 lg:pt-4"
            >
              <nav className="hidden sm:flex items-center gap-3 text-white/60 mb-4 md:mb-8">
                <Link href="/" className="hover:text-gold transition-colors">HOME</Link>
                <span>/</span>
                <Link href="/diamond" className="hover:text-gold transition-colors">DIAMOND</Link>
                <span>/</span>
                <span className="text-gold">{categoryTitle?.toLocaleUpperCase()}</span>
              </nav>

              <div className="space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white"
                >
                  <span className="block leading-tight">Discover Our</span>
                  <span className="block text-gold mt-2">{categoryTitle}</span>
                  <span className="block leading-tight">Collection</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm sm:text-base text-white/80 max-w-lg mx-auto lg:mx-0"
                >
                  Experience the perfect blend of traditional craftsmanship and contemporary design
                  in our carefully curated diamond collection.
                </motion.p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden lg:grid grid-cols-2 gap-4 relative"
            >
              {[
                { number: "GIA", label: "CERTIFIED DIAMONDS" },
                { number: "VVS", label: "CLARITY GRADE" },
                { number: "100%", label: "NATURAL DIAMONDS" },
                { number: "D-F", label: "COLOR GRADE" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 
                    rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl font-serif text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                <List className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* Search Input */}
              <div className="relative flex-1 sm:max-w-[300px]">
                {isSearchOpen ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative"
                  >
                    <Input
                      type="search"
                      placeholder="Search diamonds..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                      autoFocus
                    />
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm 
                          hover:bg-gold/10 transition-colors border border-gold/20 group/close"
                        onClick={() => setSearchQuery("")}
                      >
                        <X className="h-4 w-4 text-gold transition-transform duration-300 group-hover/close:rotate-180" />
                      </Button>
                    )}
                  </motion.div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-muted-foreground"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search diamonds...
                  </Button>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="hidden md:flex items-center gap-2 border-r border-border pr-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-8 w-8", gridView === 'grid2x2' && "text-gold")}
                  onClick={() => setGridView('grid2x2')}
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-8 w-8", gridView === 'grid3x3' && "text-gold")}
                  onClick={() => setGridView('grid3x3')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Results Count */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Found {filteredDiamonds?.length || 0} results for "{searchQuery}"
            </p>
          </div>
        )}

        <div className={cn(
          "grid gap-4 md:gap-6",
          "grid-cols-1 md:grid-cols-2",
          gridView === 'grid2x2' ? "lg:grid-cols-2" : "lg:grid-cols-3"
        )}>
          {(loading ? Array(6).fill(null) : filteredDiamonds).map((diamond: any, index: number) => (
            <ProductCard
              key={loading ? index : diamond._id}
              diamond={diamond}
              loading={loading}
              index={index}
              handleInquiry={handleInquiry}
              isInWishlist={isInWishlist}
              toggleWishlist={toggleWishlist}
              category={params.category}
              handleQuickView={handleQuickView}
            />
          ))}

          {/* No Results Message */}
          {!loading && filteredDiamonds?.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="mb-4">
                <Search className="h-12 w-12 text-muted-foreground mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">
                We couldn't find any diamonds matching your search
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal
        isOpen={showModal}
        onClose={handleCloseModal}
        product={selectedProduct}
        categorySlug={params.category}
        onInquiry={handleInquiry}
      />
    </div>
  );
}

// ProductCard Component
function ProductCard({ diamond, loading, index, handleInquiry, isInWishlist, toggleWishlist, category, handleQuickView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {loading ? (
        <div className="bg-card rounded-xl overflow-hidden border border-border/50 animate-pulse">
          <div className="aspect-[16/10] bg-muted" />
          <div className="p-6 space-y-4">
            <div className="h-4 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-10 bg-muted rounded" />
          </div>
        </div>
      ) : (
        <Link href={`/diamond/${category}/${diamond._id}`}>
          <div className="group bg-card hover:bg-card/80 rounded-xl overflow-hidden border border-border/50 
            hover:border-gold/30 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <DynamicMedia
                src={diamond.images[0] || "/placeholder.svg"}
                alt={diamond.diamondName}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {diamond.hot && (
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white 
                  px-3 py-1 rounded-full text-xs font-medium">
                  HOT
                </div>
              )}
              <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 
                group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <Button
                  size="icon"
                  variant="secondary"
                  className={`h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-black/80 dark:hover:bg-black
                    ${isInWishlist(diamond._id) ? 'bg-gold/20 hover:bg-gold/30' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist({
                      id: diamond._id,
                      title: diamond.diamondName,
                      price: diamond.price,
                      image: diamond.images[0],
                      categories: [diamond.category?.name || ''],
                      hot: diamond.hot
                    });
                  }}
                >
                  <Heart 
                    className={`h-4 w-4 transition-all duration-300
                      ${isInWishlist(diamond._id)
                        ? "fill-gold text-gold scale-110"
                        : "text-gray-600 dark:text-gray-300"}`}
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white 
                    dark:bg-black/80 dark:hover:bg-black"
                  onClick={(e) => {
                    e.preventDefault();
                    handleQuickView(diamond);
                  }}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-serif font-medium group-hover:text-gold transition-colors">
                  {diamond.diamondName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {diamond.category?.name || 'Diamond'}
                </p>
              </div>

              

              <Button
                size="sm"
                className="w-full font-medium bg-green-500 hover:bg-green-500/90 text-white 
                      dark:bg-green-600 dark:hover:bg-green-600/90 dark:text-white group/button
                      transition-all duration-300 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  handleInquiry(diamond.diamondName)
                }}
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
        </Link>
      )}
    </motion.div>
  );
}
