import React from "react";
import "./button.scss";

const Button = () => {
  const more = () => {
    alert("Thanks");
  };

  return (
    <>
      <div className="button__wrapper">
        <button onClick={more} className="button__btn">
          Press Me!
        </button>
      </div>
    </>
  );
};

export default Button;
