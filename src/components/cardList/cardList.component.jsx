import React from 'react'
import Card from '../Card/card.component'

import './cardList.style.css'


function CardList(props) {
  return (
    <div className="card-list">
      {props.items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CardList
