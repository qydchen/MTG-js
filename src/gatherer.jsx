import React from 'react';
import * as d3 from 'd3';

class Gatherer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [30, 86, 168, 281, 303, 365],
    }
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

  render() {
    return (
      <div className='chart'></div>
    )
  }

}

export default Gatherer;
