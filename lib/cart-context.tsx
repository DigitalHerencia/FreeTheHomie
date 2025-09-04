"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product } from "@/lib/types"

interface CartItem extends Product {
  quantity: number
  size: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity: number, size: string) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  subtotal: number
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  subtotal: 0,
})

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [subtotal, setSubtotal] = useState(0)

  // Load cart from localStorage on client side
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    // Calculate subtotal
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setSubtotal(total)
  }, [cartItems])

  const addToCart = (product: Product, quantity: number, size: string) => {
    setCartItems((prevItems) => {
      // Check if item already exists with the same size
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id && item.size === size)

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity, size }]
      }
    })
  }

  const removeFromCart = (productId: string, size: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === productId && item.size === size)))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId && item.size === size ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cart")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
