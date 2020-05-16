// Code DelayedButton Component Here
import React from "react";

const DelayedButton = (props) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.persist();
          setTimeout(() => props.onDelayedClick(e), props.delay);
        }}
      >
        CLICK ME
      </button>
    </div>
  );
};

export default DelayedButton;
