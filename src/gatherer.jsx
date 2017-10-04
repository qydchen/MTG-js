import React from 'react';
import * as d3 from 'd3';
import MTG from './mtgtest';

class Gatherer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [30, 86, 168, 281, 303, 365],
    }
    this.generator = new MTG;
    this.card = this.generator.findCard(3);
  }

  componentDidMount() {
    this.generateChart();
  }

  generateChart() {
    d3.select('.chart')
      .selectAll("div")
      .data(this.state.data)
      .enter()
      .append("div")
      .style("width", el => el + "px")
      .text(el => el)
  }

  // generateCard() {
  //   mtg.card.find(3)
  //   .then(result => {
  //       this.setState({[result.card.name]: result.card.imageUrl}) // "Black Lotus"
  //   });
  // }

  render() {
    return (
      <div className='chart'></div>
    )
  }

}

export default Gatherer;
