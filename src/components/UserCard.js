import styled from 'styled-components';
import { COLORS, VerticalDivider } from './shared';
import { SectionSubtitle, P, A } from './type';

const UserCard = () => {
  const Card = styled.div`
		background-color: ${COLORS.WHITE};
		border-radius: 8px;
		filter: drop-shadow(0 3px 24px #00000014);
		height: 192px;
		margin-top: calc(128px / 2);
		text-align: center;
		width: 400px;

		&:hover {
			background-color: ${COLORS.LITE_BLUE};

      .card-link {
        color: ${COLORS.WHITE};
      }
		}
	`;

  const CardTitle = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

  const CardName = styled( SectionSubtitle )`
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    color: ${COLORS.DARK_GREEN};
  `;

  const CardLocation = styled(P)`
		color: ${COLORS.DARK_GREEN};
		padding: 8px;
	`;
  
  const CardHeader = styled.div`
    height: 66px;
    width:400px;
  `;

  const CardImage = styled.img`
    width: 128px;
    border-radius: 50%;
    transform: translateY(-50%);
  `;

  const CardAction = styled(A)`
		color: ${COLORS.LITE_BLUE};
		font-weight: 600;
		text-decoration: none;
	`;

  return (
    <Card>
      <CardHeader>
        <CardImage src='https://randomuser.me/api/portraits/med/men/75.jpg' />
      </CardHeader>
      <CardTitle >
        <CardName>User Name</CardName>
        <VerticalDivider color={COLORS.DARK_GREEN} />
        <CardLocation>Location</CardLocation>
      </CardTitle>
			<CardAction href='/' className='card-link'>Learn More</CardAction>
		</Card>
	);
};

export default UserCard;