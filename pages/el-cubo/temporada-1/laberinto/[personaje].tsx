import React, { useState, Fragment } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import fetcher from 'libs/fetcher';
import { NavLabyrinthStyles } from 'styles/navlabyrinth.style';
import { OnboardStyles } from 'styles/onboard.styles';
import CharacterIndex from 'components/Labyrinth/CharacterIndex';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Characters from 'constants/Characters';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import ModesUtils from 'utils/Modes';
import { season1_id } from 'constants/Season';

const CharacterPage = ({ character, node, bgImage, bgImage980 }) => {

  const isLoggedIn = AuthService.isLoggedIn();
  const nodeId = node.node_labyrinth_id;
  const nextPageLink = `/el-cubo/temporada-1/laberinto/${character.name}/${nodeId}?initial=${character.name}`;
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  React.useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  const getMe = async () => {
    try {
      const { data } = await UserService.getMe();
      const userLabyrinthDataString = data.elcubo_laberinto;
      const userLabyrinthDataJSON = JSON.parse(userLabyrinthDataString);
      setUser(data);
      setUserData(userLabyrinthDataJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    if (isLoggedIn && user) {
      try {
        const userLabyrinthData = ModesUtils.setCurrentCharacterLabyrinth(userData, character);
        await UserService.update(user.id, {
          field_ec_labyrinth_data_json: {
            value: JSON.stringify(userLabyrinthData),
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      getMe();
    }
  }, []);

  const handleUserClickedUpdate = () => {
    window.location.href = nextPageLink;
  };

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Laberinto - El cubo</title>
      </Head>
      <NavLabyrinthStyles />
      <OnboardStyles />

      <Fragment>
        <BackToCharacters text={'Volver a elegir personajes'} />
        <CharacterIndex
          onContinueClick={handleUserClickedUpdate}
          character={character}
          userData={userData}
          bgImage={isSmallScreen ? bgImage980 : bgImage}
        />
      </Fragment>

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
  const bgImage = characterJson[0].field_ec_image_bg_lab;
  const bgImage980 = characterJson[0].field_ec_image_bg_lab_980;
  const id = characterJson[0].tid;

  return {
    props: {
      character: {
        id,
        name: context.params.personaje,
      },
      node: characterNode[0],
      bgImage,
      bgImage980,
    },
  };
};

export default CharacterPage;
