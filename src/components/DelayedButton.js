// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        e.persist()
        setTimeout( function(){this.props.onDelayedClick(e)}.bind(this), this.props.delay)
    }

    render() {

        return (
            <div>
                <button onClick={this.handleClick}> Delayed Button</button>
            </div>
        )
    }
}