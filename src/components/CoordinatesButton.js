// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    onClickHandler = (event) => {
        let xYCoor = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(xYCoor)
    }

    render() {
        return (
            <button onClick={this.onClickHandler}></button>
        )
    }
}