import React from 'react';
// import { values } from 'lodash';
import * as d3 from 'd3';
import * as mtg from 'mtgsdk';
import Card from './card';

class Gatherer extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    }
  }

  componentDidMount() {
    this.fetchCard(1);
    this.fetchCard(2);
    this.fetchCard(3);
    this.fetchCard(4);
  }

  fetchCard(cardId) {
    let {cards} = this.state;
    let that = this;
    mtg.card.find(cardId)
    .then(result => {
      cards.push({imageUrl: result.card.imageUrl});
    }).then(() => {
      that.setState({cards});
    });
  }

  renderCards() {
    const {cards} = this.state;
    return cards.map((card, i) =>
      <Card key={i} imageUrl={card.imageUrl}></Card>
    );
  }

  render() {
    const {cards} = this.state;
    if (cards.length) {
      return (
        <div className='card-container'>
          {this.renderCards()}
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

// generateCard() {
//   d3.select('.chart')
//     .selectAll("div")
//     .data(this.state.cards)
//     .enter()
//     .append("div")
//     .style("width", el => el + "px")
//     .text(el => el)
// }
