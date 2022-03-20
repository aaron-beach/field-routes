import { Teaser, Header, Profile } from '../../components/Profiles';
import styled from 'styled-components';
import { useState } from 'react';
import { COLORS } from '../../components/shared';
import { SectionSubtitle, P } from '../../components/type';

const ProfilesContainer = (props) => {
	const [profileToShow, setProfileToShow] = useState('');
	const { users } = props;

	const TeaserWrapper = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		max-width: 1392px;
		margin: 0 auto;
		padding-bottom: 60px;
	`;

	const handleLightBox = (user) => {
		console.log(user);
		setProfileToShow(user);
		document.getElementById('shadowing').style.display = 'block';
		document.getElementById('box').style.display = 'block';
	};

	const handleClose = () => {
		document.getElementById('box').style.display = 'none';
		document.getElementById('shadowing').style.display = 'none';
	};

	const profileCards = users.map((user, i) => (
		<Teaser key={i} onClick={() => handleLightBox(user)} user={user} />
	));

	return (
		<>
			<Header />
			<TeaserWrapper>{profileCards}</TeaserWrapper>
			<div id='shadowing'></div>
			<div id={`box`}>
				{profileToShow && (
					<>
						<Profile user={profileToShow} onClick={handleClose} />
					</>
				)}
			</div>
		</>
	);
};

export default ProfilesContainer;
