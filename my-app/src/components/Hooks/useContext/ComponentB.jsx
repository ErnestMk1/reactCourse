import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { NameContext, SurnameContext, ThemeContext } from "./contextAPI";

const ComponentB = () => {
  const name = useContext(NameContext);
  const surname = useContext(SurnameContext);
  const theme = useContext(ThemeContext);

  return (
    <ComponentC
      name={name}
      surname={surname}
      theme={theme}
    />
  );
};

export default ComponentB;
