import React from "react";

const ComponentC = (props) => {
  return (
    <div>
      <h1>Hi, my name's {props.name} {props.surname}</h1>

      <button
        style={{background: props.theme.background, color: props.theme.foreground}}
      >
        I'm styled button
      </button>
    </div>
  );
};

export default ComponentC;
