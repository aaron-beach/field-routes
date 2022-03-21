import useSWR from "swr";
import styled from "styled-components";
import { useState } from "react";
import { Teaser, Header, Profile } from "../../components/Profiles";

const url = "https://randomuser.me/api/?results=9";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProfilesContainer = () => {
  const [profileToShow, setProfileToShow] = useState("");
  const [show, setShow] = useState(true);
  const { data: result, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  const TeaserWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1392px;
    margin: 0 auto;
    padding-bottom: 60px;
  `;

  const Box = styled.div`
    display: none;
    position: fixed;
    top: 20%;
    left: calc(50% - 200px);
    width: 400px;
    height: 100%;
    max-height: 400px;
    padding: 0;
    margin: 0;
    border-radius: 8px;
    background-color: white;
    z-index: 11;
    text-align: center;
  `;

  const Shadow = styled.div`
    display: none;
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
    z-index: 10;
    opacity: 0.5;
    filter: alpha(opacity=50);
  `;

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  const handleLightBox = (user) => {
    setProfileToShow(user);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const profileCards = result.results.map((user, i) => (
    <Teaser key={i} onClick={() => handleLightBox(user)} user={user} />
  ));

  return (
    <>
      <Header />
      <TeaserWrapper>{profileCards}</TeaserWrapper>
      {profileToShow && (
        <>
          <Shadow id="shadowing" style={{ display: show ? "block" : "none" }} />
          <Box id="box" style={{ display: show ? "block" : "none" }}>
            <Profile user={profileToShow} onClick={handleClose} />
          </Box>
        </>
      )}
    </>
  );
};

export default ProfilesContainer;
