import styled from "styled-components";

const Logo = () => {
  const StyledLogo = styled.img`
    width: 256px;
  `;

  return (
    <>
      <StyledLogo src="/fieldroutes-tm-site-logo.svg" />
    </>
  );
};

export default Logo;
