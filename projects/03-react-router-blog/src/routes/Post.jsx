import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

import posts from '../data/posts'

export default function Post() {
  const [post, setPost] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const postInData = posts.find((post) => post.id === id)

    if (!postInData) {
      navigate('/', {
        replace: true,
      })
    }

    setPost(postInData)
  }, [id, navigate])

  return (
    <>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      )}
    </>
  )
}
