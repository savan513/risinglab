import Image from "next/image"
import Link from "next/link"
import { DynamicMedia } from "@/components/DynamicMedia"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden bg-background/50 backdrop-blur border-gold/20">
          <div className="relative aspect-square">
            <DynamicMedia src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-gold mb-1">{category}</p>
            <h3 className="font-serif text-lg mb-2">{name}</h3>
            <p className="text-lg font-semibold">${price.toLocaleString()}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full py-2 text-sm border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
            >
              View Details
            </motion.button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  )
}

