import styled from 'styled-components';
import { COLORS } from '../../components/shared';
import { SectionSubtitle, P } from '../../components/type';

const Profile = ( props ) => {
  const { user, onClick } = props;

  const ProfileHeader = styled.div`
		height: 66px;
		width: 400px;
	`;

	const ProfileImage = styled.img`
		width: 128px;
		border-radius: 50%;
		transform: translateY(-50%);
	`;

	const ProfileName = styled(SectionSubtitle)`
		color: ${COLORS.LITE_BLUE};
		font-size: 24px;
		font-weight: 600;
		margin: 0;
		margin-top: 24px;
		text-transform: capitalize;
	`;

	const ProfileDesc = styled(P)`
		color: ${COLORS.DARK_GREEN};
		&.details {
			margin: 6px;
		}
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
	return (
		<>
			<ProfileHeader>
				<ProfileImage src={user.picture.large} />
			</ProfileHeader>
			<CloseButton onClick={onClick}>X</CloseButton>
			<ProfileName>
				{user.name.first} {user.name.last}
			</ProfileName>
			<ProfileDesc>Age: {user.dob.age}</ProfileDesc>
			<ProfileDesc className='details'>
				{user.location.street.number}
				{user.location.street.name}
			</ProfileDesc>
			<ProfileDesc className='details'>
				{user.location.city}, {user.location.country}
			</ProfileDesc>
			<ProfileDesc className='details'>{user.phone}</ProfileDesc>
			<ProfileDesc>{user.email}</ProfileDesc>
		</>
	);
};

export default Profile;
