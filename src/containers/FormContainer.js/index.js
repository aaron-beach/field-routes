import { SignUp, Header } from "../../components/Forms";
import { COLORS, BREAKPOINTS } from "../../components/shared";
import styled from "styled-components";

const FormContainer = () => {
  const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${COLORS.GRAY};
    @media (${BREAKPOINTS.MEDIUM}) {
      flex-direction: column;
      padding: 40px 0;
    }
  `;

  return (
    <>
      <FormWrapper>
        <Header />
        <SignUp />
      </FormWrapper>
    </>
  );
};

export default FormContainer;
