import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ProductInCart, type Product, ProductId } from '../../types.d'

export interface CartState {
  cartProducts: ProductInCart[]
}

const initialState: CartState = {
  cartProducts: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { payload } = action

      const productIndexInCart = state.cartProducts.findIndex((product) => product.id === payload.id)
      
      if (productIndexInCart !== -1) {
        state.cartProducts[productIndexInCart].quantity += 1
      } else {
        state.cartProducts.push({ ...payload, quantity: 1})
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductId>) => {
      return {
        ...state,
        cartProducts: state.cartProducts.filter((product) => product.id !== action.payload)
      }
    }
  }
})

export default cartSlice.reducer

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions
