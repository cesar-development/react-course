import { useState, useEffect } from 'react'

export function useArticles () {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setArticles([
        {
          id: window.crypto.randomUUID(),
          title: 'Titulo del primer articulo'
        },
        {
          id: window.crypto.randomUUID(),
          title: 'Titulo del segundo articulo'
        },
        {
          id: window.crypto.randomUUID(),
          title: 'Titulo del tercer articulo'
        }
      ])

      setIsLoading(false)
    }, 3000)
  }, [])

  return [articles, isLoading]
}
