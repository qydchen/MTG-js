import React from 'react';

const Card = ({imageUrl}) => {
  return (
    <div className='card' style={{backgroundImage: `url(${imageUrl})`}}></div>
  )
}

export default Card;
