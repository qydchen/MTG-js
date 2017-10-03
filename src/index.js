// import _ from 'lodash';
import * as d3 from 'd3';
// import React from 'react';
// import ReactDOM from 'react-dom';


function component() {
  let data = [30, 86, 168, 281, 303, 365];
  let element = document.createElement('div');
  element.className = 'chart';
  d3.select(element)
    .selectAll("div")
    .data(data)
      .enter()
      .append("div")
      .style("width", function(d) { return d + "px"; })
      .text(function(d) { return d; });

  return element;
}

document.body.appendChild(component())
