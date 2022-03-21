import styled from "styled-components";

export const BREAKPOINTS = {
  SMALL: "max-width: 40rem",
  MEDIUM: "max-width: 50rem",
  LARGE: "max-width: 60rem",
};

export const COLORS = {
  BLACK: "#231F20",
  WHITE: "#ffffff",
  RED: "#FF595A",
  GREEN: "#66C4AB",
  LIGHT_GRAY: "#f6f6f6",
  LITE_BLUE: "#00AECF",
  DARK_BLUE: "#1A1353",
  DARK_GREEN: "#2A474D",
  GRAY: "#F7F7F9",
};

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  padding: 0 1rem;
`;

export const VerticalDivider = styled.span`
  border-left: 1px solid
    ${(props) => {
      return props.color ? props.color : COLORS.WHITE;
    }};
  height: 14px;
`;
