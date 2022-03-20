import SignUpForm from '../../components/SignUpForm';
import { COLORS } from '../../components/shared';
import { P, SectionTitle } from '../../components/type';
import styled from 'styled-components';

const FormContainer = () => {
	const FormWrapper = styled.div`
		display: flex;
		justify-content: center;
    background-color: ${COLORS.GRAY};
	`;

  const Header = styled.div`
		max-width: 600px;
		display: flex;
    flex-direction: column;
		justify-content: center;
	`;

	return (
		<>
			<FormWrapper>
				<Header>
					<SectionTitle>We Are Looking Forward To Working With You</SectionTitle>
					<P>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
					</P>
				</Header>
				<SignUpForm></SignUpForm>
			</FormWrapper>
		</>
	);
};

export default FormContainer;
