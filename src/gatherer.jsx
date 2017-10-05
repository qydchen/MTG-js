import React from 'react';
import { values } from 'lodash';
import * as d3 from 'd3';
import * as mtg from 'mtgsdk';
import Card from './card';

class Gatherer extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: {},
    }
    this.count = 0;
  }

  componentDidMount() {
    this.fetchCards({rarity: "Mythic Rare"});
  }

  fetchCards(filterObj) {
    let cards = Object.assign({}, this.state.cards)
    // fetches mtg.io for cards based on a filter
    mtg.card.where(filterObj)
    .then(result => {
      result.forEach((card) => {
        cards[card.id] = card;
        this.count += 1;
      })
      this.setState({cards});
    })
  }

  renderCards(cards) {
    return _.values(cards).map((card) =>
      <Card
        key={card.id}
        imageUrl={card.imageUrl}
        cardInfo={card}
      >
      </Card>
    );
  }

  render() {
    const {cards} = this.state;
    if (this.count) {
      return (
        <div className='card-container'>
          {this.renderCards(cards)}
        </div>
      )
    } else {
      return (
        <div className='card-container'></div>
      )
    }
  }

}

export default Gatherer;

// data: [30, 86, 168, 281, 303, 365], // for d3

// fetchCard(cardId) {
//   const {cards} = this.state;
//   const {query} = this
//   mtg.card.find(cardId)
//   .then(result => {
//     let newCards = Object.assign({}, cards, {[result.card.name]: result.card})
//     this.setState({cards: newCards});
//   })
  // mtg.card.find(cardId)
  // .then(result => {
  //   query[result.card.name] = result.card;
  //   this.setState({cards: query});
  // })
// }

// generateCard() {
//   d3.select('.chart')
//     .selectAll("div")
//     .data(this.state.cards)
//     .enter()
//     .append("div")
//     .style("width", el => el + "px")
//     .text(el => el)
// }
