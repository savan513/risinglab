import { useState, useEffect } from 'react'

interface WishlistItem {
  id: string
  title: string
  price: number
  image: string
  categories: string[]
  hot?: boolean
}

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('wishlist')
    if (stored) setWishlistItems(JSON.parse(stored))
  }, [])

  const addToWishlist = (item: WishlistItem) => {
    const newItems = [...wishlistItems, item]
    setWishlistItems(newItems)
    localStorage.setItem('wishlist', JSON.stringify(newItems))
  }

  const removeFromWishlist = (id: string) => {
    const newItems = wishlistItems.filter(item => item.id !== id)
    setWishlistItems(newItems)
    localStorage.setItem('wishlist', JSON.stringify(newItems))
  }

  return { wishlistItems, addToWishlist, removeFromWishlist }
} 