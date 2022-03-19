import styled from 'styled-components';
import { COLORS, VerticalDivider } from '../../shared';
import { SectionSubtitle, P, A } from '../../type';

const Card = ( props ) => {
	
	const CardWrapper = styled.div`
		background-color: ${COLORS.WHITE};
		border-radius: 8px;
		filter: drop-shadow(0 3px 24px #00000014);
		height: 192px;
		margin-top: calc(128px / 2);
		text-align: center;
		width: 400px;

		&:hover {
			background-color: ${COLORS.LITE_BLUE};
			.teaser-link {
				color: ${COLORS.WHITE};
			}
		}
	`;

	const CardHeader = styled.div`
		height: 66px;
		width: 400px;
	`;

	const CardImage = styled.img`
		width: 128px;
		border-radius: 50%;
		transform: translateY(-50%);
	`;

	const CardName = styled(SectionSubtitle)`
		color: ${COLORS.LITE_BLUE};
		font-size: 24px;
		font-weight: 600;
		margin: 0;
		margin-top: 24px;
		text-transform: capitalize;
	`;

	const CardDesc = styled(P)`
		color: ${COLORS.DARK_GREEN};
		&.details {
			margin: 6px;
		}
	`;


	const Teaser = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const TeaserName = styled(CardName)`
		margin-top: 0;
		padding: 24px;
		padding-right: 8px;
		font-size: 16px;
		color: ${COLORS.DARK_GREEN};
	`;

	const TeaserLocation = styled(CardDesc)`
		text-transform: capitalize;
		padding-left: 8px;
		margin: 0;
	`;
	const TeaserAction = styled(A)`
		color: ${COLORS.LITE_BLUE};
		font-weight: 600;
		text-decoration: none;
	`;

	const CloseButton = styled.button`
		background: #bbbbbb 0% 0% no-repeat padding-box;
		box-shadow: inset 0px 0px 3px #00000052;
		opacity: 1;
		width: 32px;
		height: 32px;
		border: 4px solid white;
		border-radius: 50%;
		color: white;
		font-weight: 900;
		font-size: 18px;
		filter: drop-shadow(0 0 0.75rem #00000052);
		position: absolute;
		right: -8px;
		top: -8px;
		&:hover {
			background: ${COLORS.LITE_BLUE} 0% 0% no-repeat padding-box;
		}
	`;

	const handleLightBox = () => {
		document.getElementById('shadowing').style.display = 'block';
		document.getElementById('box').style.display = 'block';
	};

	const handleClose = () => {
		document.getElementById('box').style.display = 'none';
		document.getElementById('shadowing').style.display = 'none';
	};

	const CardTeaser = (user) => {
		return (
			<Teaser>
				<TeaserName>
					{user.first} {user.last}
				</TeaserName>
				<VerticalDivider color={COLORS.DARK_GREEN} />
				<TeaserLocation>
					{user.city}, {user.description}
				</TeaserLocation>
			</Teaser>
		);
	};

	return (
		props.user &&
		props.user.length > 0 &&
		props.user.map((item) => (
			<>
				<CardWrapper onClick={handleLightBox}>
					<CardHeader>
						<CardImage src={item.picture.large} />
					</CardHeader>
					<CardTeaser
						first={item.name.first}
						last={item.name.last}
						city={item.location.city}
						description={item.location.timezone.description}
					/>
					<TeaserAction className='teaser-link'>Learn More</TeaserAction>
				</CardWrapper>
				<div id='shadowing'></div>
				<div id='box'>
					<CardHeader>
						<CardImage src={item.picture.large} />
					</CardHeader>
					<CloseButton onClick={handleClose}>X</CloseButton>
					<CardName>
						{item.name.first} {item.name.last}
					</CardName>
					<CardDesc>Age: {item.dob.age}</CardDesc>
					<CardDesc className='details' >{item.location.street}</CardDesc>
					<CardDesc className='details' >
						{item.location.city}, {item.location.timezone.description}
					</CardDesc>
					<CardDesc className='details'>({item.phone.replace(/-/, ') ')}</CardDesc>
					<CardDesc>{item.email}</CardDesc>
				</div>
			</>
		))
	);
};

export default Card;
