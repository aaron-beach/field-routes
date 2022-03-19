import styled from 'styled-components';
import { P } from './type';
import { COLORS } from './shared';

const Applicant = () => {

  const Wrapper = styled.div`
		align-items: center;
		display: flex;
    flex-direction: column;
    height:  175px;
    justify-content: center;
	`;

  const ApplicantText = styled( P )`
    color: ${COLORS.DARK_BLUE};
    font-size: 32px;
    margin: 0;
    margin-bottom: 16px;
  `;

  const LinkedIn = styled.img`
    height: 40px
  `;
  
  return (
    <Wrapper>
      <ApplicantText>Aaron Beach</ApplicantText>
      <LinkedIn src='./LI.png'/>
    </Wrapper>
  )
};

export default Applicant;