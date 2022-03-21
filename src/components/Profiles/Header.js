import styled from "styled-components";
import { COLORS } from "../shared";
import { P, SectionTitle } from "../type";

const Header = () => {
  const Wrapper = styled.div`
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
  `;
  const HeaderText = styled(SectionTitle)`
    color: ${COLORS.DARK_BLUE};
  `;
  const BodyText = styled(P)`
    color: ${COLORS.DARK_GREEN};
    margin-bottom: 88px;
  `;

  return (
    <Wrapper>
      <HeaderText>This is body content, specifically an h2</HeaderText>
      <BodyText>
        FieldRoutes is a Cloud-based and mobile SaaS provider for field service businesses. The platform automates all
        aspects of field service operations for enterprise and small business customers that span office management,
        advanced route optimization, payment processing, digital sales, marketing, and customer acquisition solutions
        that accelerate growth, streamline operations, increase customer retention, and maximize revenue.
      </BodyText>
    </Wrapper>
  );
};

export default Header;
