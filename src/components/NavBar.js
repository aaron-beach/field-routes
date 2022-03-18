import styled from 'styled-components';
import Button from "./Button";

const NavBar = () => {
	const Wrapper = styled.section`
		padding: 4em;
    display: flex;
    justify-content: space-around;
		background: papayawhip;
	`;
	return (
		<>
			<Wrapper>
        <h1>FieldRoutes</h1>
        <div>
          <a href='tel:888-888-8888'>(888) 888-8888</a>
          <Button name="Contact Us"/>

        </div>
			</Wrapper>
		</>
	);
};

export default NavBar;
