import React from 'react';
import { values } from 'lodash';
import * as d3 from 'd3';
import * as mtg from 'mtgsdk';
import Card from './card';

class Gatherer extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      data: [30, 86, 168, 281, 303, 365], // for d3
    }
  }

  componentDidMount() {
    this.fetchCard();
  }

  // componentDidUpdate() {
  //
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

  fetchCard() {
    let cards = this.state.cards.slice();
    mtg.card.find(3)
    .then(result => {
      cards.push({imageUrl: result.card.imageUrl});
    })
    this.setState({cards});
    debugger;
  }

  renderCard(imageUrl) {
    return (
      <Card imageUrl={imageUrl}></Card>
    )
  }

  render() {
    const {cards} = this.state;
    // debugger;
    // if (cards.length === 0) {
    //   return (
    //     <div className='card-container'></div>
    //   )
    // } else {
    //   debugger;
    //   return (
    //     <div className='card-container'>
    //       {this.renderCard(cards[0].imageUrl)}
    //     </div>
    //   )
    // }
    return (<div className='card-container'></div>)
  }

}

export default Gatherer;
