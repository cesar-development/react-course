import styled from 'styled-components'
import { useArticles } from '../hooks/useArticles'

export default function Blog () {
  const [articles, isLoading] = useArticles()
  console.log(articles)

  return (
    <BlogContainer>
      <Title>Blog</Title>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article) => (
          <Article key={article.id}>{article.title}</Article>
        ))
      )}
    </BlogContainer>
  )
}

const BlogContainer = styled.div`
  margin: 40px 0 20px 0;
`

const Title = styled.h2`
  margin-top: 10px;
`

const Article = styled.p`
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`
