import React from 'react'
import { posts } from '../portfolio'
import { Link, useParams } from 'react-router-dom'

const PostPage = () => {
  const params = useParams()
  const post = posts.items.find((item) => item.id === Number(params.id))
  return (
    <div className='post'>
      <p className='post__breadcrumb'>
        <Link to="/blog"><span className='post__back'><i class="fa-solid fa-arrow-left"></i> BLOG </span></Link>
        <i class="fa-solid fa-angle-right"></i> {post.title}
      </p>
      <h3 className='post__title'>{post.title}</h3>
      <p className='post__stack'>{post.stack}</p>
      <img className='post__image' src={ post.image } alt="postImage" />
      <p className='post__description'>{post.description}</p>
    </div>
  )
}

export default PostPage
