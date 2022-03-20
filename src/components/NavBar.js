import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';
import { COLORS } from './shared';

const NavBar = () => {
	const Wrapper = styled.nav`
		align-items: center;
		background: ${COLORS.WHITE};
		display: flex;
		height: 100px;
		justify-content: space-around;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;
	`;

	const PhoneLink = styled.a`
		color: ${COLORS.DARK_BLUE}
		font-family: 'Libre Franklin', sans-serif;
		font-size: 18px;
		font-weight: 600;
		margin: 32px;
		text-decoration: none;
		
	`;
	return (
		<Wrapper>
			<Logo />
			<div>
				<PhoneLink href='tel:888-888-8888'>(888) 888-8888</PhoneLink>
				<Button name='Contact Us' />
			</div>
		</Wrapper>
	);
};

export default NavBar;
