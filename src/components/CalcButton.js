import React from "react";
import { StyledButton } from "./styles/StyledButton";

export const CalcButton = (props) => {
  console.log("hi");
  return (
    <StyledButton onClick={() => props.func}>
      <h2>{props.label}</h2>
    </StyledButton>
  );
};
