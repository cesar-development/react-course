import { useReducer } from 'react'

import { CartContext, cartReducer } from '.'
import type { Product, ProductId, ProductInCart } from '../../types.d'

export interface CartState {
  cartProducts: ProductInCart[]
}

const CART_INITIAL_STATE: CartState = {
  cartProducts: []
}

interface Props {
  children?: JSX.Element  | JSX.Element[]
}

export function CartProvider({ children }: Props) {
  const [{ cartProducts }, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId: ProductId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,

        // Methods
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
