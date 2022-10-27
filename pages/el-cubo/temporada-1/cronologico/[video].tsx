import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { GetStaticProps } from 'next';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import { Container } from 'styles/Home';
import fetch from 'libs/fetcher';
import AppLayout from 'layouts/AppLayout';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Error from 'next/error';
import PlayerChronology from 'components/PlayerChronology/PlayerChronology';
import useSWR from 'swr';
import CharacterSelector from 'components/CharacterSelector/CharacterSelector';
import { setTimeout } from 'timers';
import { VideoPlayerWrapper } from 'components/VideoPlayer/VideoPlayer.style';
import { ListChronoCover } from 'components/PlayerChronology/PlayerChronology.style';
import { ElcuboGlobalStyles } from 'styles/cronologico.style';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import { MenuPlayerStyle } from 'styles/menu-player.style';
import Head from 'next/head';
import Links from 'constants/Links';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import ModesUtils from 'utils/Modes';
import Names from 'utils/Names';
import { season1_id } from 'constants/Season';
import UrlUtils from 'utils/Url';
//import ScreenMode from 'utils/ScreenMode';

const FullPlayerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  position: relative;
`;

const VideoPage = ({ title, video, srcVideo, poster, poster980, chronology }) => {

  const { isFallback, query } = useRouter();
  const { modo, personaje } = query;

  if (!isFallback && !video) {
    return <Error statusCode={404} title="Video could not be found" />;
  }

  // const { data: chronology, error } = useSWR(`/api/v1/elcubo/season/${season1_id}/chrono`);
  const [character, setCharacter] = useState();
  const [chronologyList, setChronologyList] = useState([]);
  const [showChapters, setShowChapters] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [videoTitle, setVideoTitle] = useState();
  const [startVideo, setStartVideo] = useState(false);
  const [userChronoData, setUserChronoData] = useState(null);
  const [user, setUser] = useState(null);
  const isLoggedIn = AuthService.isLoggedIn();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  //const isFullScreen = ScreenMode.getScreenMode('chronological');

  React.useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  const fetchUser = async () => {
    if (isLoggedIn) {
      try {
        const { data } = await UserService.getMe();
        const userChronoDataString = data.elcubo_cronologico;
        const userChronoDataJSON = JSON.parse(userChronoDataString);
        setUserChronoData(userChronoDataJSON);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateUser = async () => {
    if (user && character) {
      const userChronoNodes = ModesUtils.setCharacterNodesChrono(userChronoData, character, video);
      await UserService.update(user.id, {
        field_ec_chrono_data_json: {
          value: JSON.stringify(userChronoNodes),
        },
      });
    }
  };

  React.useEffect(() => {
    if (character) {
      updateUser();
    }
  }, [user, userChronoData, character]);

  React.useEffect(() => {
    if (isLoggedIn) {
      fetchUser();
    }
  }, []);

  React.useEffect(() => {
    let character;
    let chronologyList = [];
    if (chronology && chronology.length && personaje) {
      let characterChronology;
      characterChronology = chronology.find((c) => c.field_ec_character === personaje);
      const characterData = JSON.parse(characterChronology.field_ec_character_term_json);
      character = characterData[0].character_name;
      if (modo === 'cronologico' && chronology) {
        const { field_ec_episodes_items, field_ec_episodes_items_json } = characterChronology;
        const episodesData = JSON.parse(field_ec_episodes_items_json);
        const episodesList = field_ec_episodes_items.split(',').map((i) => i.trim());
        chronologyList = episodesList
          .map((e) => {
            let viewed = false;
            const episode = episodesData.find((ep) => Number(ep.id) === Number(e));
            if (!episode) {
              return;
            }
            const episodeView = JSON.parse(episode.view);
            if (isLoggedIn && userChronoData) {
              const charName = Names.getCharacterName(character);
              viewed = userChronoData[charName].viewedNodes.indexOf(episodeView[0].nid) < 0 ? false : true;
            }
            const isActive = Number(video) === Number(episodeView[0].nid);
            if (isActive) {
              setVideoTitle(episode.field_ec_title);
            }
            return {
              id: episodeView[0].nid,
              link: `/el-cubo/temporada-1/cronologico/${episodeView[0].nid}?personaje=${personaje}&modo=${modo}`,
              name: episode.field_ec_title,
              active: isActive,
              image: episodeView[0].field_ec_video_preview,
              image_320: episodeView[0].field_ec_video_preview_320,
              viewed
            };
          })
          .filter((i) => i !== undefined);
        const index = chronologyList.findIndex((el) => el.id === video);
        if (index > 0) {
          setShowPrevButton(true);
        }
        if (index < chronologyList.length - 1) {
          setShowNextButton(true);
        }
        setCharacter(character);
        setChronologyList(chronologyList);
        const characterList = chronology.map((cr) => {
          const name = JSON.parse(cr.field_ec_character_term_json)[0].character_name;
          const character = cr.field_ec_character;
          const id = cr.field_ec_episodes_items.split(',').map((e) => e.trim())[0];
          const episodes = JSON.parse(cr.field_ec_episodes_items_json);
          const episode = episodes.find((e) => e.id === id);
          const episodeView = JSON.parse(episode.view);
          return {
            name,
            active: personaje === character,
            link: `/el-cubo/temporada-1/cronologico/${episodeView[0].nid}?personaje=${character}&modo=cronologico`,
          };
        });
        setCharacterList(characterList);
      }

      const fadeOut = (el, pTime) => {
        el.style.opacity = 1;
        const fade = () => {
          if ((el.style.opacity -= .07) < 0) {
            el.style.display = "none";
          } else {
            setTimeout(fade, pTime);
          }
        };
        fade();
      };

      const onLoadFadeout = () => {
        window.setTimeout(() => {
          fadeOut(document.querySelectorAll('.steal_title')[0], 30);
          fadeOut(document.querySelectorAll('.steal')[0], 50);
          setStartVideo(true);
        }, 3000)
      };
      onLoadFadeout();
      // Pane Slide 
      const button_open = document.querySelectorAll('.toggle-chrono-mobile');
      const button_close = document.querySelector('.close-chrono-mobile');
      const pane = document.querySelector('.pane-chrono-mobile');

      if (button_open) {
        button_open.forEach(function (link) {
          link.addEventListener('click', () => {
            pane.classList.add('open');
          });
        });
      }

      if (button_close) {
        button_close.addEventListener('click', () => {
          pane.classList.remove('open');
        });
      }
    }
  }, [chronology, personaje, userChronoData]);

  const handleBackClick = React.useCallback(() => {
    const index = chronologyList.findIndex((el) => el.id === video);
    if (index > 0) {
      const prevChapter = chronologyList[index - 1];
      if (prevChapter) {
        window.location.href = prevChapter.link;
      }
    }
  }, [chronologyList]);

  const handleNextClick = React.useCallback(() => {
    const index = chronologyList.findIndex((el) => el.id === video);
    if (index <= chronologyList.length) {
      const nextChapter = chronologyList[index + 1];
      if (nextChapter) {
        window.location.href = nextChapter.link;
      }
    }
  }, [chronologyList]);

  const handleVideoEnded = React.useCallback(() => {
    const index = chronologyList.findIndex((el) => el.id === video);
    if (index <= chronologyList.length) {
      const nextChapter = chronologyList[index + 1];
      if (nextChapter) {
        window.location.href = nextChapter.link;
      } else if (isLoggedIn) {
        window.location.href = Links.cronoReward(character);
      } else {
        window.location.href = Links.guest;
      }
    }
  }, [chronologyList]);

  const handleChapterClick = () => setShowChapters(!showChapters);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>{character}. {videoTitle} El Cubo</title>
      </Head>
      <ElcuboGlobalStyles />
      <MenuPlayerStyle />
      <Container>
        {isFallback ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="header-top">
              <div className="header-top-inner">
                <nav className="nav">
                  <a href="#" title="Cambiar de personaje" className="toggle menu-elcubo">
                    <img className="icon-change" src="/images/icon-change-char2.svg" />
                  </a>
                  <a href="#" title="Cronología" className="toggle-chrono-mobile menu-elcubo">
                    <img className="icon-change" src="/images/icon-wall-clock.svg" />
                  </a>
                </nav>
              </div>
            </div>
            <h2 className="steal_title">{videoTitle}</h2>
            <div className="steal">
              <img src={isSmallScreen ? poster980 : poster} />
            </div>

            <CharacterSelector list={characterList} />
            {startVideo ?
              <FullPlayerWrapper>
                <VideoPlayer
                  showBackButton
                  backButtonLink="/el-cubo/temporada-1/personajes"
                  title={videoTitle}
                  source={srcVideo}
                  onBackClick={handleBackClick}
                  onNextClick={handleNextClick}
                  onChaptersClick={handleChapterClick}
                  chapterButtonName={showChapters ? 'Ocultar Cronología' : 'Mostrar Cronología'}
                  showPrevButton={showPrevButton}
                  showNextButton={showNextButton}
                  onVideoEnded={handleVideoEnded}
                >
                  {showChapters && modo === 'cronologico' && chronology && (
                    <PlayerChronology character={character} chronology={chronologyList} />
                  )}
                </VideoPlayer>
              </FullPlayerWrapper>
              :
              null
            }
          </>
        )}
      </Container>

      <div className="pane pane-chrono-mobile">
        <a className="close close-chrono-mobile">
          <img src="/images/pane-close.svg" />
        </a>
        <div className="pane-content">
          {showChapters && modo === 'cronologico' && chronology && (
            <PlayerChronology character={character} chronology={chronologyList} />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export async function getStaticPaths() {
  const episodes = await fetch(`/api/v1/elcubo/season/${season1_id}/episode/all`);
  const paths = episodes.map((ep) => ({
    params: {
      video: ep.nid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const chapter = await fetch(`/api/v1/elcubo/season/${season1_id}/episode/${params.video}`);
  const chronology = await fetch(`/api/v1/elcubo/season/${season1_id}/chrono`);

  let srcVideoId = chapter[0]?.field_ec_asset_id;
  const srcVideo = srcVideoId
    ? UrlUtils.getVideoUrl(srcVideoId)
    : undefined;

  return {
    props: {
      title: chapter[0].title,
      video: params.video,
      srcVideo: srcVideo || null,
      poster: chapter[0]?.field_ec_video_preview || null,
      poster980: chapter[0]?.field_ec_video_preview_980 || null,
      chronology,
    },
    revalidate: 900,
  };
};
export default VideoPage;

