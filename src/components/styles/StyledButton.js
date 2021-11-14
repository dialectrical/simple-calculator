import styled from "styled-components";

export const StyledButton = styled.button`
  height: 64px;
  width: 60px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.keyBgSecondary};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.keyShadow};
  h2 {
    height: 40px;
    width: 40px;
    margin-top: 10px;
    margin-left: 5px;
    color: ${(props) => props.theme.primaryText};
    font-size: 28px;
    font-family: Spartan;
    font-weight: bold;
    text-align: center;
  }
  :hover {
    cursor: pointer;
  }
`;
