import { useState } from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
import Products from './components/Products'

export default function App() {
  const [products] = useState([
    { name: 'Tomate', price: 1500, img: '/products/tomate.jpg' },
    { name: 'Guisantes', price: 2500, img: '/products/guisantes.jpg' },
    { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg' },
  ])
  const [cart, setCart] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const addToCart = (product) => {
    if (cart.some((prod) => prod.name === product.name)) {
      const newCart = cart.map((prod) => {
        return prod.name === product.name
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod
      })

      return setCart(newCart)
    }

    return setCart([...cart, { ...product, quantity: 1 }])
  }

  const showCart = () => {
    if (!cart.length) return
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <Navbar
        cart={cart}
        isVisible={isVisible}
        handleShowCart={showCart}
      />

      <Layout>
        <Title />

        <Products
          products={products}
          addProductToCart={addToCart}
        />
      </Layout>
    </div>
  )
}
