// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

    coordinates = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let coords = [x, y]
        return this.props.onReceiveCoordinates(coords)
    }

    render(){
        return(
            <div>
                <button onClick={this.coordinates}>coordinates</button>
            </div>
        )
    }
}