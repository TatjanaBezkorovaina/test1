import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter">
        <button onClick={minus} className="counter__btn">
          <span> - </span>
        </button>
        <span className="counter__text"> {count} </span>
        <button onClick={add} className="counter__btn">
          <span> + </span>
        </button>
      </div>
    </>
  );
};

export default Counter;
