// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
   constructor(prop){
       super(prop)
   }

   handleClick = (event) => {
       let x = event.clientX
       let y = event.clientY
    const arr = [x, y]
    this.props.onReceiveCoordinates(arr)
   }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}></button>
      </div>
    )
  }
  
}