import styled from 'styled-components';
import { COLORS } from './shared';
import { PageTitle } from './type';


const Banner = () => {

  const BannerText = styled(PageTitle)`
    height: 256px;
    line-height: 256px;
    color: ${COLORS.WHITE};
    margin: 0;
    margin-top: 100px;
    background-color: ${COLORS.DARK_BLUE};
    font-style: italic;
    text-align: center;
  `;
  return (
		<>
			<BannerText>FieldRoutes Sales & Marketing Dev Test</BannerText>
		</>
	);
};

export default Banner;