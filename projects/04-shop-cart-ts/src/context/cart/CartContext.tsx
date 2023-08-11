import { createContext } from 'react'
import type { ProductId, Product, ProductInCart } from '../../types.d'

interface ContextProps {
  cartProducts: ProductInCart[]

  // Methods
  addToCart: (product: Product) => void
  removeFromCart: (id: ProductId) => void
}

export const CartContext = createContext({} as ContextProps)
