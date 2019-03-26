// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    let array = [event.clientX, event.clientY];
    // this.props.onReceiveCoordinates(array);
    console.log(array);
    return this.props.onReceiveCoordinates(array);
  };

  render() {
    return (
      <button onClick={this.createArray}>B</button>
    )
  }
}
