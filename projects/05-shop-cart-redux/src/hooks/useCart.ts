import { useAppDispatch, useAppSelector } from './useRedux'
import { addToCart, removeFromCart } from '../store/cart/slice'
import type { Product, ProductId } from '../types.d'

export default function useCartActions() {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts)
  const dispatch = useAppDispatch()

  const addProductToCart = (product: Product) => {
    dispatch(addToCart(product))
  }

  const removeProductFromCart = (productId: ProductId) => {
    dispatch(removeFromCart(productId))
  }

  return {
    cartProducts,
    addProductToCart,
    removeProductFromCart,
  }
}
