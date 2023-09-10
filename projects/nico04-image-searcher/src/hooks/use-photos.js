import { useRef, useState } from 'react'

const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/photos'
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || ''

export default function usePhotos() {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const lastSearch = useRef('')

  const fetchPhotos = async (search) => {
    if (lastSearch.current === search) {
      return
    }

    setIsLoading(true)

    const response = await fetch(
      `${UNSPLASH_BASE_URL}?per_page=20&query=${search}`,
      {
        headers: {
          'Authorization': `Client-ID ${CLIENT_ID}`
        }
      }
    )

    const { results } = await response.json()
    setPhotos(results)

    setIsLoading(false)
  }

  return {
    photos,
    fetchPhotos,
    isLoading,
  }
}
