import { MediaRenderer } from "@/components/ui/media-renderer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: any;
  onWishlistToggle: (product: any) => void;
  isInWishlist: boolean;
}

export function ProductCard({ product, onWishlistToggle, isInWishlist }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-card hover:bg-card/80 rounded-xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-300">
        <div className="relative aspect-[16/10] overflow-hidden">
          <MediaRenderer
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.hot && (
            <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
              HOT
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors duration-300">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gold">₹{product.price}</div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onWishlistToggle(product)}
              className={cn(
                "transition-colors duration-300",
                isInWishlist && "text-red-500 border-red-500"
              )}
            >
              <Heart className={cn("w-4 h-4", isInWishlist && "fill-red-500")} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

