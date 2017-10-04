import React from 'react';

const Card = ({imageUrl}) => {
  return (
    <div style={{backgroundImage: `url(${imageUrl})`}}></div>
  )
}

export default Card;
