import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import fetcher from 'libs/fetcher';
import { NavLabyrinthStyles } from 'styles/navlabyrinth.style';
import { OnboardStyles } from 'styles/onboard.styles';
import CharacterOnboarding from '../../../../../components/Chronological/CharacterOnboarding';
import BackToCharacters from '../../../../../components/Labyrinth/BackToCharacters';
import Characters from 'constants/Characters';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import NamesUtils from 'utils/Names';
import { season1_id } from 'constants/Season';

const CharacterPage = ({ chronology, character, node, bgImage, bgImage980 }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isLoggedIn = AuthService.isLoggedIn();
  const [chronologyList, setChronologyList] = useState(null);
  const [viewedAll, setViewedAll] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await UserService.getMe();
      const userChronoDataString = data.elcubo_cronologico;
      const userChronoDataJSON = JSON.parse(userChronoDataString);

      if (chronology && chronology.length) {
        let characterChronology;
        let chronologyList = [];
        characterChronology = chronology.find(c => {
          const charName = NamesUtils.getCharacterName(JSON.parse(c.field_ec_character_term_json)[0].character_name)
          return charName === character;
        });
        const characterId = characterChronology.field_ec_character;
        const { field_ec_episodes_items, field_ec_episodes_items_json } = characterChronology;
        const episodesData = JSON.parse(field_ec_episodes_items_json);
        const episodesList = field_ec_episodes_items.split(',').map((i) => i.trim());
        chronologyList = episodesList
          .map((e) => {
            const episode = episodesData.find((ep) => Number(ep.id) === Number(e));
            if (!episode) {
              return;
            }
            const episodeView = JSON.parse(episode.view);
            const viewed = userChronoDataJSON[character].viewedNodes.indexOf(episodeView[0].nid) < 0 ? false : true;
            return {
              id: episodeView[0].nid,
              link: `/el-cubo/temporada-1/cronologico/${episodeView[0].nid}?personaje=${characterId}&modo=cronologico`,
              name: episode.field_ec_title,
              image: episodeView[0].field_ec_video_preview,
              image_320: episodeView[0].field_ec_video_preview_320,
              viewed,
            };
          })
          .filter((i) => i !== undefined);
        setChronologyList(chronologyList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (chronologyList && chronologyList.length) {
      const viewed = chronologyList.filter(item => item.viewed);
      if (viewed.length === chronologyList.length) {
        setViewedAll(true);
      } else {
        setViewedAll(false);
      }
    }
  }, [chronologyList]);

  React.useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, []);

  React.useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Cronológico - El Cubo</title>
      </Head>
      <NavLabyrinthStyles />
      <OnboardStyles />

      <BackToCharacters text={'Volver a elegir personajes'} />
      <CharacterOnboarding node={node} character={character} viewedAll={viewedAll} bgImage={isSmallScreen ? bgImage980 : bgImage} />
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
  const chronology = await fetcher(`/api/v1/elcubo/season/${season1_id}/chrono`);

  const characterNode = chronology.filter((node) => {
    const nodeData = JSON.parse(node.field_ec_character_term_json);
    return (
      nodeData[0].character_name
        .split(' ')
        .slice(-1)
        .join(' ')
        .trim()
        .toLowerCase() === context.params.personaje
    );
  });
  const characterJson = JSON.parse(characterNode[0].field_ec_character_term_json);
  const bgImage = characterJson[0].field_ec_image_bg_chrono;
  const bgImage980 = characterJson[0].field_ec_image_bg_chrono_980;

  return {
    props: {
      chronology,
      character: context.params.personaje,
      node: characterNode[0],
      bgImage,
      bgImage980,
    },
  };
};

export default CharacterPage;
