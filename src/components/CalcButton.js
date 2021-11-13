import React from "react";
import { StyledButton } from "./styles/StyledButton";

export const CalcButton = (props) => {
  return (
    <StyledButton onClick={() => props.func}>
      <h2>{props.label}</h2>
    </StyledButton>
  );
};
