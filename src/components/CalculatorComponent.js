import React from "react";
import { CalculatorObject } from "./CalculatorObject";
import { ThemeProvider } from "styled-components";
import { theme3 } from "./styles/theme";
import { KeypadContainer, KeypadGrid } from "./styles/Keypad";
import { StyledButton } from "./styles/StyledButton";

const calculator = new CalculatorObject();

export const CalculatorComponent = () => {
  return (
    <ThemeProvider theme={theme3}>
      <div>input: {calculator.firstNum}</div>
      <KeypadContainer>
        <KeypadGrid>
          <StyledButton onClick={() => calculator.inputNum(7)}>
            <h2>7</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(8)}>
            <h2>8</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(9)}>
            <h2>9</h2>
          </StyledButton>
          <StyledButton>
            <h2>DEL</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(4)}>
            <h2>4</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(5)}>
            <h2>5</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(6)}>
            <h2>6</h2>
          </StyledButton>
          <StyledButton>
            <h2>+</h2>
          </StyledButton>{" "}
          <StyledButton onClick={() => calculator.inputNum(1)}>
            <h2>1</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(2)}>
            <h2>2</h2>
          </StyledButton>
          <StyledButton onClick={() => calculator.inputNum(3)}>
            <h2>3</h2>
          </StyledButton>
          <StyledButton>
            <h2>-</h2>
          </StyledButton>{" "}
          <StyledButton>
            <h2>.</h2>
          </StyledButton>{" "}
          <StyledButton onClick={() => calculator.inputNum(0)}>
            <h2>0</h2>
          </StyledButton>
          <StyledButton>
            <h2>-</h2>
          </StyledButton>
          <StyledButton>
            <h2>x</h2>
          </StyledButton>
          <StyledButton>
            <h2>/</h2>
          </StyledButton>
          <StyledButton>
            <h2>=</h2>
          </StyledButton>
        </KeypadGrid>
      </KeypadContainer>
    </ThemeProvider>
  );
};
