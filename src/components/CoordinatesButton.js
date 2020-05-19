import React from 'react'
import PropTypes from 'prop-types'

const CoordinatesButton = props => {
    const handleClick = (e) => {
        props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>        
        </div>
    )
}

export default CoordinatesButton
