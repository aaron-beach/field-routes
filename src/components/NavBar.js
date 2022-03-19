import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';
import { COLORS } from './shared';

const NavBar = () => {
	const Wrapper = styled.nav`
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: ${COLORS.WHITE};
		height: 100px;
		position: fixed;
		top: 0;
		width: 100%;
	`;
		
	const PhoneLink = styled.a`
		font-size: 18px;
		font-family: 'Libre Franklin', sans-serif;
		margin: 32px;
		text-decoration: none;
		font-weight: 600;
		color: ${COLORS.DARK_BLUE}
		
	`;
	return (
			<Wrapper>
        <Logo />
        <div>
          <PhoneLink href='tel:888-888-8888'>(888) 888-8888</PhoneLink>
          <Button name="Contact Us"/>

        </div>
			</Wrapper>
	);
};

export default NavBar;
