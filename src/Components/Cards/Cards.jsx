import React from 'react'
import './Cards.css'

const Cards = ({image, title, info}) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <span>{title}</span>
        <span>{info}</span>
        {/* <button className="c-button">VEJA MAIS</button> */}
    </div>
  )
}

export default Cards