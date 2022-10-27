import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import fetcher from 'libs/fetcher';
import { ReflexiveStyles } from 'styles/reflexive.style';
import { NavReflexiveStyles } from 'styles/navreflexive.style';
import CharacterIndex from '../../../../components/Reflexive/CharacterIndex';
import BackToCharacters from '../../../../components/Labyrinth/BackToCharacters';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import Characters from 'constants/Characters';
import ModesUtils from 'utils/Modes';
import { season1_id } from 'constants/Season';

const CharacterPage = ({ character, node, bgImage, bgImage980, episodeData }) => {

  const [user, setUser] = useState(null);
  const isLoggedIn = AuthService.isLoggedIn();
  const answers = JSON.parse(node.children_answer_json);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  React.useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  const updateUser = async (id, data) => {
    await UserService.update(id, data);
  };

  const updateUserOnViewedAll = () => {
    // Ya miró todos
  };

  React.useEffect(
    () => {
      if (isLoggedIn && user) {
        try {
          const userReflexiveDataString = user.elcubo_reflexivo;
          const userReflexiveDataJSON = JSON.parse(userReflexiveDataString);
          const userReflexiveData = ModesUtils.setCharacterNodesReflexive(userReflexiveDataJSON, character, node.nid, answers);
          updateUser(user.id, {
            field_ec_reflexive_data_json: {
              value: JSON.stringify(userReflexiveData),
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
    [user],
  );

  const getMe = async () => {
    try {
      const me = await UserService.getMe();
      setUser(me.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      getMe();
    }
  }, []);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Reflexivo - El Cubo</title>
      </Head>
      <ReflexiveStyles />
      <NavReflexiveStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />
      <CharacterIndex
        character={character}
        node={node}
        bgImage={isSmallScreen ? bgImage980 : bgImage}
        episodeData={episodeData}
        onViewedAll={updateUserOnViewedAll}
      />
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
  const initialNodes = await fetcher(`/api/v1/elcubo/season/${season1_id}/reflexive`);
  const characterNode = initialNodes.filter((node) => {
    const nodeData = JSON.parse(node.field_ec_character_json);
    return (
      nodeData[0].character_name
        .split(' ')
        .slice(-1)
        .join(' ')
        .trim()
        .toLowerCase() === context.params.personaje
    );
  });
  const characterJson = JSON.parse(characterNode[0].field_ec_character_json);
  const episodeData = JSON.parse(characterNode[0].field_ec_episode_json);
  const bgImage = characterJson[0].field_ec_image_bg_reflex;
  const bgImage980 = characterJson[0].field_ec_image_bg_reflex_980;

  return {
    props: {
      character: context.params.personaje,
      episodeData: episodeData[0],
      node: characterNode[0],
      bgImage,
      bgImage980,
    },
  };
};

export default CharacterPage;
