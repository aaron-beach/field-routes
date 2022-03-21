import { P, SectionTitle } from "../type";
import styled from "styled-components";
import { COLORS } from "../shared";

const Header = () => {
  const Wrapper = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const HeaderText = styled(SectionTitle)`
    color: ${COLORS.DARK_BLUE};
  `;
  const BodyText = styled(P)`
    color: ${COLORS.DARK_GREEN};
    font: normal normal normal 18px/30px Libre Franklin;
    letter-spacing: 0px;
  `;
  return (
    <Wrapper>
      <HeaderText>We Are Looking Forward To Working With You</HeaderText>
      <BodyText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
      </BodyText>
    </Wrapper>
  );
};

export default Header;
