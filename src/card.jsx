import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
  }

  //standardize prop names to be all lowercase to avoid React errors
  standardize(cardinfo) {
    let standardized = {};
    Object.keys(cardinfo).forEach(key => {
      if (cardinfo[key] === true || cardinfo[key] === false) {
        // handles value of reserved to be converted into a string
        standardized[key.toLowerCase()] = String(cardinfo[key]);
      } else {
        // handles all keys that needs that needs to be lowercased
        standardized[key.toLowerCase()] = cardinfo[key];
      }
    })
    return standardized;
  }

  render() {
    const {imageUrl, cardInfo} = this.props;
    const standardizedCardInfo = this.standardize(cardInfo);
    return (
      <div
        className='card'
        style={{backgroundImage: `url(${imageUrl})`}}
        {...standardizedCardInfo}
        ></div>
    )
  }
}



export default Card;
