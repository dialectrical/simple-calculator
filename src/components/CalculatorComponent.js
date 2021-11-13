import React from "react";
import { ThemeProvider } from "styled-components";
import { theme3 } from "./styles/theme";
import { KeypadContainer, KeypadGrid } from "./styles/Keypad";
import { CalcButton } from "./CalcButton";

export const CalculatorComponent = () => {
  return (
    <ThemeProvider theme={theme3}>
      <KeypadContainer>
        <KeypadGrid>
          <CalcButton label="7" />
          <CalcButton label="8" />
          <CalcButton label="9" />
          <CalcButton label="DEL" />
          <CalcButton label="4" />
          <CalcButton label="5" />
          <CalcButton label="6" />
          <CalcButton label="+" />
          <CalcButton label="2" />
          <CalcButton label="1" />
          <CalcButton label="3" />
          <CalcButton label="-" />
          <CalcButton label="." />
          <CalcButton label="0" />
          <CalcButton label="/" />
          <CalcButton label="x" />
          <CalcButton label="RESET" />
          <CalcButton label="=" />
        </KeypadGrid>
      </KeypadContainer>
    </ThemeProvider>
  );
};
