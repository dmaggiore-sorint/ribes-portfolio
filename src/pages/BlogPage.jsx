import React from 'react';
import Card from '../components/Card';
import { projects } from "../portfolio";

const BlogPage = () => {
  return (
    <section className='blog'>
      {projects && projects.items.map(item => <Card key={item.title} item={item} />)}
    </section>
  )
}

export default BlogPage