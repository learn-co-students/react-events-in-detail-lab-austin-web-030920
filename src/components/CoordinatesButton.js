// Code CoordinatesButton Component Here
import React from "react";

const CoordinatesButton = (props) => {

  return (
    <div>
      <button
        onClick={(e) => props.onReceiveCoordinates([e.clientX, e.clientY])}
      >
        BIGGER
      </button>
    </div>
  );
};

export default CoordinatesButton;
