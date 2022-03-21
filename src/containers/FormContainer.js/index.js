import { SignUp, Header } from "../../components/Forms";
import { COLORS } from "../../components/shared";
import styled from "styled-components";

const FormContainer = () => {
  const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${COLORS.GRAY};
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
