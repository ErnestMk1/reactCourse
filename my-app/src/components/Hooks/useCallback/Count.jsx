import React from "react";

const Count = (props) => {
  console.log(`rendering ${props.text}`);

  return (
    <>
    {props.text}: {props.count}
    </>
  );
};

export default React.memo(Count);
