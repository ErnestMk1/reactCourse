import React from "react";
import { Greet } from "../props/Greet";

export const Custom = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.messageCount}
    </div>
  );
};
