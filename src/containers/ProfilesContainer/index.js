import { COLORS } from '../../components/shared';
import { P, SectionTitle } from '../../components/type';
import styled from 'styled-components';
import { Card, Header } from '../../components/Profiles';

const ProfilesContainer = ( props ) => {
  const { user } = props;
  return (
		<>
			<Header />
			<Card user={user} />
		</>
	);
};

export default ProfilesContainer;
