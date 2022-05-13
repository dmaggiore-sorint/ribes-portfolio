import React from 'react'
import Card from '../components/Card'
import { posts } from '../portfolio'

const BlogPage = () => {
  return (
    <div className="blog">
      <h3 className="blog__title">{posts.title}</h3>
      <p className="blog__description">{posts.description}</p>
      <div className="blog__posts">
        {posts &&
          posts.items &&
          posts.items.map((item) => <Card item={item} key={item.title} />)}
      </div>
    </div>
  )
}

export default BlogPage
