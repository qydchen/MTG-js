import React from 'react';

const Card = ({imageUrl, cardInfo}) => {
  return (
    <div
      className='card'
      style={{backgroundImage: `url(${imageUrl})`}}
      multiverseid={cardInfo.multiverseid}
      layout={cardInfo.layout}
      manaCost={cardInfo.manaCost}
      cmc={cardInfo.cmc}
      colors={cardInfo.colors}
      type={cardInfo.type}
      types={cardInfo.types}
      subtypes={cardInfo.subtypes}
      rarity={cardInfo.rarity}
      text={cardInfo.text}
      flavor={cardInfo.flavor}
      artist={cardInfo.artist}
      number={cardInfo.number}
      power={cardInfo.power}
      toughness={cardInfo.toughness}
      reserved={cardInfo.reserved}
      rulings={cardInfo.rulings}
      printings={cardInfo.printings}
      originalText={cardInfo.originalText}
      originalType={cardInfo.originalType}
      legalities={cardInfo.legalities}
      source={cardInfo.source}
      set={cardInfo.set}
    ></div>
  )
}

export default Card;
