import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS, VerticalDivider } from './shared';
import { SectionSubtitle, P, A } from './type';

const ProfileCard = (props) => {
	const [data, setData] = useState([]);
	const [ user, setUser ] = useState( [] );

	const getData = () => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData( myJson );
				setUser( myJson.results );
			});
	};

	useEffect(() => {
		getData();
	}, []);


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

	const CardName = styled(SectionSubtitle)`
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
		width: 400px;
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

	const handleLightBox = () => {
		document.getElementById('shadowing').style.display = 'block';
		document.getElementById('box').style.display = 'block';
	};

	const handleClose = () => {
		console.log('Close');
		document.getElementById('box').style.display = 'none';
		document.getElementById('shadowing').style.display = 'none';
	};

	return (
		<>
			<Card onClick={handleLightBox}>
				{user &&
					user.length > 0 &&
					user.map((item) => (
						<>
							<CardHeader>
								<CardImage src={item.picture.large} />
							</CardHeader>
							<CardTitle>
								<CardName>
									{item.name.first} {item.name.last}
								</CardName>
								<VerticalDivider color={COLORS.DARK_GREEN} />
								<CardLocation>
									{item.location.city} {item.location.timezone.description}
								</CardLocation>
							</CardTitle>
						</>
					))}
				<CardAction className='card-link'>Learn More</CardAction>
			</Card>
			<div id='shadowing'></div>
			<div id='box'>
				<div id='boxheader'>
					<button id='boxclose' onClick={handleClose}>
						X
					</button>
				</div>
				<div id='boxcontent'>
					{user &&
						user.length > 0 &&
						user.map((item) => (
							<>
								<button id='boxclose' onClick={handleClose}>
									X
								</button>
								<CardHeader>
									<CardImage src={item.picture.large} />
								</CardHeader>
								<CardTitle>
									<CardName>
										{item.name.first} {item.name.last}
									</CardName>
									<VerticalDivider color={COLORS.DARK_GREEN} />
									<CardLocation>
										{item.location.city} {item.location.timezone.description}
									</CardLocation>
								</CardTitle>
							</>
						))}
				</div>
			</div>
		</>
	);
};

export default ProfileCard;
