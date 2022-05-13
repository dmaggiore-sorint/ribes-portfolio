import React from 'react';
import Card from '../components/Card';
import { projects } from '../portfolio';

const BlogPage = () => {
  return (
    <div className='blog'>
      { projects && projects.items && projects.items.map(item => (
        <Card item={item} key={item.title} />
      )) }
    </div>
  );
};

export default BlogPage;
