// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    delayed = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return(
            <div>
                <button onClick={this.delayed}>DelayedButton</button>
            </div>
        )
    }
}