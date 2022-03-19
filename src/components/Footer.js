import styled from 'styled-components';
import { COLORS } from './shared';
import { P } from './type';

const Footer = () => {
	const Wrapper = styled.footer`
		align-items: center;
		background-color: ${COLORS.DARK_BLUE};
		color: ${COLORS.WHITE};
		display: flex;
		height: 97px;
		justify-content: center;
	`;

	const FooterText = styled(P)`
		font-size: 14px;
    padding: 12px;
    `;
    
    const FooterLink = styled.a`
		color: ${COLORS.WHITE};
		font-size: 14px;
    padding: 12px;
    `;
    
    const FooterDivider = styled.span`
		border-left: 1px solid white;
		height: 14px;
	`;

	return (
		<Wrapper>
			<FooterText>
				© 2021 Field Service Holdings, LLC - Trademarks and brands are the
				property of their respective owners.
			</FooterText>
      <FooterLink href='/'>Terms of Use</FooterLink>
      <FooterDivider />
			<FooterLink href='/'>Privacy Policy</FooterLink>
      <FooterDivider />
			<FooterLink href='/'>Accessibility Statement</FooterLink>
		</Wrapper>
	);
};

export default Footer;
