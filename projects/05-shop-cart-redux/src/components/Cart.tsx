import styled from 'styled-components'

import useCart from '../hooks/useCart'
import { Button } from '../elements'

export default function Cart() {
  const { cartProducts, removeProductFromCart } = useCart()

  return (
    <div>
      <h3>Carrito de compras</h3>

      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Product key={product.id}>
            <ProductName>{product.title}</ProductName>
            <ProductQuantity>Cantidad: {product.quantity}</ProductQuantity>

            <Button
              $bgColor='crimson'
              $hoverBgColor='darkred'
              onClick={() => removeProductFromCart(product.id)}
            >
              Eliminar
            </Button>
          </Product>
        ))
      ) : (
        <p>Aun no has agregado ningún producto al carrito</p>
      )}
    </div>
  )
}

const Product = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`

const ProductName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`

const ProductQuantity = styled.p`
  margin-bottom: 10px;
  color: #404040;
  font-size: 14px;
`
