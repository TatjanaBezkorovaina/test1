import React from "react";
import "./title.scss";

const Title = () => {
  const specialty = "FrontEnd";
  const style = {
    color: "green",
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Tatjana Bezkorovaina {specialty} developer
      </h1>
      <ul style={style}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <h3 className="skills">My skills:</h3>
    </>
  );
};

export default Title;
