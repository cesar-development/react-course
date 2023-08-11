import type { Product, ProductId } from '../../types.d'
import { type CartState } from '.'

type CartActionType =
  | { type: 'ADD_TO_CART', payload: Product }
  | { type: 'REMOVE_FROM_CART', payload: ProductId }

export function cartReducer(state: CartState, action: CartActionType): CartState {
  const { type } = action

  switch (type) {
    case 'ADD_TO_CART': {
      const { payload } = action

      const productIndexInCart = state.cartProducts.findIndex((product) => product.id === payload.id)

      if (productIndexInCart !== -1) {
        const newState = structuredClone(state)
        state.cartProducts[productIndexInCart].quantity += 1

        return newState
      }

      return {
        ...state,
        cartProducts: [
          ...state.cartProducts,
          {
            ...payload,
            quantity: 1
          }
        ]
      }
    }

    case 'REMOVE_FROM_CART': {
      const { payload: productId } = action

      return {
        ...state,
        cartProducts: state.cartProducts.filter((product) => product.id !== productId)
      }
    }

    default:
      return state
  }
}
