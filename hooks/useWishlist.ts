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

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === id)
  }

  const addToWishlist = (item: WishlistItem) => {
    if (!isInWishlist(item.id)) {
      const newItems = [...wishlistItems, item]
      setWishlistItems(newItems)
      localStorage.setItem('wishlist', JSON.stringify(newItems))
    }
  }

  const removeFromWishlist = (id: string) => {
    const newItems = wishlistItems.filter(item => item.id !== id)
    setWishlistItems(newItems)
    localStorage.setItem('wishlist', JSON.stringify(newItems))
  }

  const toggleWishlist = (item: WishlistItem) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id)
    } else {
      addToWishlist(item)
    }
  }

  return { 
    wishlistItems, 
    addToWishlist, 
    removeFromWishlist, 
    isInWishlist,
    toggleWishlist 
  }
} 