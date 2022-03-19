import styled from 'styled-components';
import { COLORS } from './shared';

const Logo = () => {
  const StyledLogo = styled.img`
    width: 256px;
  `;
  
	return (
		<>
			<StyledLogo src='/fieldroutes-tm-site-logo.svg' />
		</>
	);
};

export default Logo;