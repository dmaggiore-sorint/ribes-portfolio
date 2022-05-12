import React from 'react'

const Card = ({item}) => {
  return (
    <div className='card'>
      <div className="projects__item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div className="projects__item-stack">{item.stack}</div>
      </div>
    </div>
  )
}

export default Card
