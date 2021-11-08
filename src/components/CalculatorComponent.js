import React from "react";
import { ThemeProvider } from "styled-components";
import { theme3 } from "./styles/theme";
import { StyledButton } from "./styles/StyledButton";

export const CalculatorComponent = () => {
    return (
        <ThemeProvider theme = {theme3}>
            <StyledButton><h2>5</h2></StyledButton>
        </ThemeProvider>
    )
}