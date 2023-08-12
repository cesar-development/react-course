export type ProductId = ReturnType<typeof window.crypto.randomUUID>

export interface Product {
  id:    ProductId
  title: string
  price: number
}

export interface ProductInCart extends Product {
  quantity: number
}
