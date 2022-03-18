import styled from 'styled-components';

const Button = ( props ) => {

  const StyledButton = styled.button`
		height: 56px;
		background: #66c4ab;
    color: white;
    width: 170px;
    border: none;
    font-size: 20px;
    font-weight: 600;
	`;
  return (
    <StyledButton>{ props.name }</StyledButton>
  )
};

export default Button;