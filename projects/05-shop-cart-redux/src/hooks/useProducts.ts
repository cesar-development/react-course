import { useState, useEffect } from 'react'

import type { Product } from '../types.d'
import { getInitialProducts } from '../services/products'

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts(getInitialProducts())
  }, [])

  return {
    products,
  }
}
