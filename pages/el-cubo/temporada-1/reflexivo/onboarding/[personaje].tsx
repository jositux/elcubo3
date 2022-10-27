import React, { useState, useEffect } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import fetcher from 'libs/fetcher';
import { NavLabyrinthStyles } from 'styles/navlabyrinth.style';
import { OnboardStyles } from 'styles/onboard.styles';
import CharacterOnboarding from 'components/Reflexive/CharacterOnboarding';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Characters from 'constants/Characters';
import UserService from 'services/User';
import AuthService from 'services/Auth';
import { season1_id } from 'constants/Season';

const CharacterPage = ({ character, bgImage, bgImage980 }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isLoggedIn = AuthService.isLoggedIn();
  const [hasReward, setHasReward] = useState(null);

  const getUserRewards = async () => {
    try {
      const { data } = await UserService.getMe();
      const readNodesString = data.elcubo_reflexivo;
      const readNodesJSON = JSON.parse(readNodesString);
      let reward = false;
      if (readNodesJSON) {
        reward = readNodesJSON[character].reward;
      }
      setHasReward(reward);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserRewards();
    }
  }, []);

  useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Reflexivo - El Cubo</title>
      </Head>
      <NavLabyrinthStyles />
      <OnboardStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />
      <CharacterOnboarding character={character} hasReward={hasReward} bgImage={isSmallScreen ? bgImage980 : bgImage} />
    </AppLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: Characters.map((personaje) => ({ params: { personaje } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const initialNodes = await fetcher(`/api/v1/elcubo/season/${season1_id}/labyrinth`);
  const characterNode = initialNodes.filter((node) => {
    const nodeData = JSON.parse(node.character_json);
    return (
      nodeData[0].character_name
        .split(' ')
        .slice(-1)
        .join(' ')
        .trim()
        .toLowerCase() === context.params.personaje
    );
  });
  const characterJson = JSON.parse(characterNode[0].character_json);
  const bgImage = characterJson[0].field_ec_image_bg_reflex;
  const bgImage980 = characterJson[0].field_ec_image_bg_reflex_980;

  return {
    props: {
      character: context.params.personaje,
      bgImage,
      bgImage980,
    },
  };
};

export default CharacterPage;
