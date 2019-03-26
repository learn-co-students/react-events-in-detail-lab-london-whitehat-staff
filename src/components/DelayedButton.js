// Code DelayedButton Component Here

import React, { Component } from 'react';

export default class DelayedButton extends Component {

  delayed = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
}

//pass event, event.persist holds to data so we can access it immediately. 
//settimeout starts a delay initiation, this.props, is showing what we will delay, this.props.delay is giving how long we will delay


  render(){
    return(
      <button onClick={this.delayed} /> 
             
    )
  }



}