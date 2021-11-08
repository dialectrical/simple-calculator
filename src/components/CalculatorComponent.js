import React from "react";
import { ThemeProvider } from "styled-components";
import { theme3 } from "./styles/theme";
import { KeypadContainer, KeypadGrid } from "./styles/Keypad";
import { StyledButton } from "./styles/StyledButton";

export const CalculatorComponent = () => {
    return (
        <ThemeProvider theme = {theme3}>
            <KeypadContainer>
                <KeypadGrid>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                <StyledButton><h2>5</h2></StyledButton>
                </KeypadGrid>
            </KeypadContainer>
        </ThemeProvider>
    )
}