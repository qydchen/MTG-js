// import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Gatherer from './gatherer';

// hook React onto id='game'
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Gatherer />, document.getElementById("game"));
})
