import { useState, useEffect, useContext } from 'react'

import type { Product } from '../types.d'
import { getInitialProducts } from '../services/products'
import { CartContext } from '../context/cart'

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const { cartProducts, addToCart, removeFromCart } = useContext(CartContext)

  useEffect(() => {
    setProducts(getInitialProducts())
  }, [])

  return {
    products,
    cartProducts,
    addToCart,
    removeFromCart,
  }
}
