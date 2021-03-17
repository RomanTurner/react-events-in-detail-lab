import React from 'react'

export default function CoordinatesButton(props) {
    return (
      <div>
        <button onClick={(e) => props.onReceiveCoordinates([e.clientX, e.clientY])}>X</button>
      </div>
    );
}

