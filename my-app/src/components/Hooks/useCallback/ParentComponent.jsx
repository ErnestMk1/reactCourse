import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [salary, setSalary] = useState(100000);
  const [age, setAge] = useState(20);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
    <Title />

    <Count text="Age" count={age}/>
    <Button handleClick={incrementAge}>Increment Age</Button>

    <Count text="Sallary" count={salary}/>
    <Button handleClick={incrementSalary}>Increment Sallary</Button>
    </>
  );
};

export default ParentComponent;
