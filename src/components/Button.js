import styled from "styled-components";
import { COLORS } from "./shared";

const Button = (props) => {
  const StyledButton = styled.button`
    height: 56px;
    background: ${COLORS.GREEN};
    color: ${COLORS.WHITE};
    width: ${props.variant ? "100%" : "176px"};
    border: none;
    font-size: 20px;
    font-weight: 600;
  `;
  return <StyledButton>{props.name}</StyledButton>;
};

export default Button;
