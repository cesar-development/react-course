import { Product } from '../types.d'

export function getInitialProducts(): Product[] {
  return [
    {
      id: window.crypto.randomUUID(),
      title: 'Product 1',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 2',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 3',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 4',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 5',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 6',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 7',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 8',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 9',
      price: Math.ceil(Math.random() * 100),
    },
    {
      id: window.crypto.randomUUID(),
      title: 'Product 10',
      price: Math.ceil(Math.random() * 100),
    },
  ] as Product[]
}
