import styled from 'styled-components';


export const COLORS = {
	BLACK: '#231F20',
	WHITE: '#ffffff',
	RED: '#E41714',
	BLUE: '#00A3E0',
	YELLOW: '#FFCD00',
	GREEN: '#009639',
	PURPLE: '#93328E',
	ORANGE: '#FF6A13',
	PINK: '#DA1184',
	LIGHT_GRAY: '#f6f6f6',
};

export const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 72rem;
	padding: 0 1rem;
	@media (${BREAKPOINTS.MEDIUM}) {
		padding: 0 0.625rem;
	}
`;
