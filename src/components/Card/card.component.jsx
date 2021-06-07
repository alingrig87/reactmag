import React from 'react'

import './card.style.css'

function Card(props) {
  return (
    <div className="card-container">
      <img alt="shop item" src={props.item.image} height="200" weight="200"/>
      <h2>{props.item.category}</h2>
      <p>{props.item.description}</p>
      <p>Price: ${props.item.price}</p>
    </div>
  )
}

export default Card
