import styled from 'styled-components';
import { COLORS, VerticalDivider } from '../shared';
import { SectionSubtitle, P, A } from '../type';

const Teaser = (props) => {
	const { user, onClick } = props;

	const TeaserWrapper = styled.div`
		background-color: ${COLORS.WHITE};
		border-radius: 8px;
		filter: drop-shadow(0 3px 24px #00000014);
		height: 192px;
		margin-top: calc(128px / 2);
		margin-bottom: 60px;
		text-align: center;
		width: 400px;

		&:hover {
			background-color: ${COLORS.LITE_BLUE};
			.teaser-link {
				color: ${COLORS.WHITE};
			}
		}
	`;

	const TeaserHeader = styled.div`
		height: 66px;
		width: 400px;
	`;

	const TeaserImage = styled.img`
		width: 128px;
		border-radius: 50%;
		transform: translateY(-50%);
	`;

	const TeaserDesc = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const TeaserName = styled(SectionSubtitle)`
		color: ${COLORS.DARK_GREEN};
		font-size: 16px;
		font-weight: 600;
		padding: 24px;
		padding-right: 8px;
		margin: 0;
		text-transform: capitalize;
	`;

	const TeaserLocation = styled(P)`
		color: ${COLORS.DARK_GREEN};
		text-transform: capitalize;
		padding-left: 8px;
		margin: 0;
	`;
	const TeaserAction = styled(A)`
		color: ${COLORS.LITE_BLUE};
		font-weight: 600;
		text-decoration: none;
	`;

	return (
		<>
			{user && (
				<>
					<TeaserWrapper onClick={ onClick }>
						<TeaserHeader>
							<TeaserImage src={user.picture.large} />
						</TeaserHeader>
						<TeaserDesc>
							<TeaserName>
								{user.name.first} {user.name.last}
							</TeaserName>
							<VerticalDivider color={COLORS.DARK_GREEN} />
							<TeaserLocation>
								{user.location.city}, {user.location.country}
							</TeaserLocation>
						</TeaserDesc>
						<TeaserAction className='teaser-link'>Learn More</TeaserAction>
					</TeaserWrapper>
				</>
			)}
		</>
	);
};

export default Teaser;
