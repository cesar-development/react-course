import styled from 'styled-components'

import { Button } from '../elements'
import useProducts from '../hooks/useProducts'

export default function Products() {
  const { products, addToCart } = useProducts()

  return (
    <div>
      <h3>Productos</h3>

      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id}>
            <p>{product.title}</p>

            <Button onClick={() => addToCart(product)}>
              Agregar al carrito
            </Button>
          </Product>
        ))}
      </ProductsContainer>
    </div>
  )
}

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`

const Product = styled.div`
  padding: 20px;
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`
