// Code CoordinatesButton Component Here
import React, { Component } from 'react';



class CoordinatesButton extends Component {
    handleClick = (e) => {
        let mouseCoordinates = []
        let xValue = e.screenX
        let yValue = e.screenY
        mouseCoordinates.push(xValue, yValue)
        this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render() {
        return (
            <div>
                < button onClick={this.handleClick}>a button my button</button>
            </div>
        );
    }
}


export default CoordinatesButton;
