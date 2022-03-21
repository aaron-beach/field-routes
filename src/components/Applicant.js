import styled from "styled-components";
import { P } from "./type";
import { COLORS } from "./shared";

const Applicant = () => {
  const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 175px;
    justify-content: center;
  `;

  const ApplicantText = styled(P)`
    color: ${COLORS.DARK_BLUE};
    font: normal normal 600 32px/32px Libre Franklin;
    letter-spacing: 0.16px;
    margin: 0;
    margin-bottom: 16px;
  `;

  const LinkedIn = styled.img`
    height: 40px;
  `;

  return (
    <Wrapper>
      <ApplicantText>Aaron Beach</ApplicantText>
      <a href="https://www.linkedin.com/in/arbeach/" target="_blank" rel="noreferrer">
        <LinkedIn src="./LI.png" />
      </a>
    </Wrapper>
  );
};

export default Applicant;
