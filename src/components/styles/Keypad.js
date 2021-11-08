import styled from "styled-components";

export const KeypadContainer = styled.div`
    display: inline-block;
    height: 420px;
    width: 327px;
    background-color: ${props => props.theme.keypadBg};
    border-radius: 10px;
`

export const KeypadGrid = styled.div`
    height: 372px;
    width: 279px;
    margin: 24px 24px 24px 24px;
    display: grid;
    grid-template-columns: 60px 60px 60px 60px;
    grid-template-rows: 64px 64px 64px 64px;
    gap: 13px;
`
//    justify-items: center;
