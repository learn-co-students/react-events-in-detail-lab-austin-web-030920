import React from 'react'

const DelayedButton = props => {
    const handleClick = (event) => {
        event.persist();
        window.setTimeout(() => props.onDelayedClick(event), props.delay)
    }

    return (
        <div>
            <button onClick={handleClick}>Delayed Click!</button>
        </div>
    )
}

export default DelayedButton
