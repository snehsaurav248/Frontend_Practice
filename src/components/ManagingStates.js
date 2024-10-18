import React, { useState } from "react";
import "./ManagingStates.css";

function Counter() {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="handle-states">
      <div className="click">
        <p>You have clicked {click} Times</p>
        <button onClick={() => setClick(click + 1)} className="button-clicked">Click Me</button> 
        </div>
      <div className="count">
        <p>I am counting it {count} times </p>
        <button onClick={() => setCount(count + 2)} className="counted">
          Counting always times two
        </button>
      </div>
    </div>
  );
}
export default Counter;
