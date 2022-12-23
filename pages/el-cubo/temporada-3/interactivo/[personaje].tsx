import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Dashboard from 'components/Season3/Modal/DashboardSlideModal';
import GalleryModal from 'components/Season3/Interactive/Gallery/GalleryModal';
import AudioModal from 'components/Season3/Interactive/Audio/AudioModal';
import VideoModal from 'components/Season3/Interactive/Video/VideoModal';
import UrlUtils from 'utils/Url';
import styles from './lineal.module.scss';
import { rawFetch } from 'libs/fetcher';

const Personaje = (props) => {
  const {
    personaje,
    episodio,
    interactivos,
    confesionario
  } = props;

  let srcVideo = UrlUtils.getVideoUrl(episodio?.field_ec_asset_id);
  let duration = episodio?.field_ec_video_duration;
  const [isActiveInteractive, setIsActiveInteractive] = useState(false);
  const [interactiveData, setInteractiveData] = useState(null);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSlideModal, setIsOpenSlideModal] = useState(false);
  const [isOpenAudio, setIsOpenAudio] = useState(false);
  const [interactiveType, setInteractiveType] = useState('')
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const steal = useRef(null);

  const markers = interactivos.map(i => {
    return {
      time: parseInt(i?.field_ec_time_action),
      url: i?.field_ec_thumb,
      text: i?.field_ec_title
    }
  });

  const urlAudio = "/images/season3/hitos/juan-de-jesus/1/violencia.mp3";

  const fadeOut = (el, pTime) => {
    el.style.opacity = 1;
    const fadeO = () => {
      if ((el.style.opacity -= 0.07) < 0) {
        el.style.display = 'none';
      } else {
        setTimeout(fadeO, pTime);
      }
    };
    fadeO();
  };

  useEffect(() => {
    const fixLoad = () => {
      player.forward(5);
      player.rewind(5);
      player.play();
    };
    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(steal.current, 40);
        fixLoad();
      }, 4000);

    };
    if (steal?.current && player) {
      onLoadFadeout();
    }
  }, [steal.current, player]);

  const handlePlayVideo = (playVideo) => {
    if (playVideo) {
      player.play();
    } else {
      player.pause();
    }
  };

  useEffect(() => {
    if (player) {
      player.on('play', (event) => {
        setInterval(() => {
          interactivos.map((i, index) => {
            if (parseInt(player.currentTime, 10) == i.field_ec_time_action) {
              console.log('ENTRE, Y EL TIPO ES', i)
              if (!isActiveInteractive) {
                openActiveInteractive();
                setInteractiveData(i);
                switch (i.type) {
                  case 'ec3_interactive_audio':
                    setInteractiveType('audio');
                    break;
                  case 'ec3_interactive_video':
                    setInteractiveType('video');
                    break;
                  case 'ec3_interactive_gallery':
                    setInteractiveType('gallery');
                    break;
                  default:
                    setInteractiveType(null);
                    break;
                }
              }
            }
            if (parseInt(player.currentTime, 10) == i.field_ec_time_action + 12) {
              closeActiveInteractive();
            }
          })
        }, 1000);
      });
    }
  }, [player]);

  useEffect(() => {
    const fixLoad = () => {
      player.forward(5);
      player.rewind(5);
      player.play();
    };
    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(steal.current, 40);
        fixLoad();
      }, 4000);

    };
    if (steal?.current && player) {
      onLoadFadeout();
    }
  }, [steal.current, player]);

  const handleOnClickDashboard = () => {
    setShowDashboardModal(true);
  };

  const handleOnCloseDashboard = () => {
    setShowDashboardModal(false);
    handlePlayVideo(true);
  };

  const images = [
    {
      url: '/images/season3/hitos/juan-de-jesus/1/0.jpg',
      text: 'Violencia en Mogotes',
    },
    {
      url: '/images/season3/hitos/juan-de-jesus/1/1.jpg',
      text: 'Jordan Sin Parroco',
    },
    {
      url: '/images/season3/hitos/juan-de-jesus/1/3.jpg',
      text: 'Jordan Sin cementerio',
    },
    {
      url: '/images/season3/hitos/juan-de-jesus/1/4.jpg',
      text: 'Una misa solo',
    },
  ];

  const handleOnDashboardVideoEnd = () => {
    handlePlayVideo(true);
  };

  const handleOnCloseGalleryModal = () => {
    setIsOpenGallery(false);
    handlePlayVideo(true);
  };

  const handleOnOpenSlideModal = () => {
    handlePlayVideo(false);
  };

  const handleOnCloseSlideModal = () => {
    setIsActiveInteractive(false);
    handlePlayVideo(true);
  };

  const openActiveInteractive = () => {
    setIsActiveInteractive(true);
  };

  const closeActiveInteractive = () => {
    setIsActiveInteractive(false);
  };

  return (
    <div className={styles.NodeContainer}>
      <Dashboard
        char="juandejesus"
        showModal={showDashboardModal}
        onCloseDashboard={handleOnCloseDashboard}
      />
      <div ref={steal} className={styles.steal}>
        <img className={styles.stealDesktop} src="/images/season3/steals/personaje-juan.jpg" />
        <img className={styles.stealMobile} src="/images/season3/steals/personaje-juan.jpg" />
      </div>
      <div className={`${styles.coverVideo} ${isActiveInteractive ? styles.activeInteractive : ""}`}>
        <VideoPlayer
          showBackButton
          backButtonLink={"/el-cubo/temporada-3/personajes/map?ref=view"}
          backButtonText={"Volver"}
          title={"Juan de Jesús"}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          fullscreen={false}
          showDashboardLineal
          openActiveInteractive={openActiveInteractive}
          closeActiveInteractive={closeActiveInteractive}
          markers={markers}
          duration={duration}
          onClickDashboardLineal={handleOnClickDashboard}
        />
      </div>

      {interactiveType === 'video' && <VideoModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        onVideoEnded={handleOnDashboardVideoEnd}
        data={interactiveData}
      />}

      {interactiveType === 'gallery' && <GalleryModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        onCloseGalleryModal={handleOnCloseGalleryModal}
        data={interactiveData}
      />}

      {interactiveType === 'audio' && <AudioModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        data={interactiveData}
      />}

    </div>
  );
};

// export async function getStaticPaths() {
//   const paths = [
//     'juan'
//   ]

//   return {
//     paths,
//     fallback: false,
//   };
// }

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { personaje } = params;
  const dataRaw = await rawFetch('/api/v1/elcubo3/season/6679/interactive/all');
  const dataJson = await dataRaw.json();
  const filtteredData = dataJson.filter(d => personaje === d.field_ec_title);

  if (!filtteredData || !filtteredData.length) {
    return {
      props: {
        personaje: null
      },
    };
  }

  const dataPersonaje = filtteredData[0];
  const {
    field_ec_episode_json,
    field_ec3_interactives_items_json,
    field_ec_confessional_episode_json,
    field_ec_characters,
    field_ec_video_duration
  } = dataPersonaje;

  const episodeJson = JSON.parse(field_ec_episode_json)?.[0];
  const itemsInteractivo = JSON.parse(field_ec3_interactives_items_json).sort((a, b) => {
    const durA = parseInt(a.field_ec_time_action);
    const durB = parseInt(b.field_ec_time_action);
    if (durA > durB) {
      return 1;
    } else if (durA < durB) {
      return -1;
    }
    return 0;
  });

  const confesionario = JSON.parse(field_ec_confessional_episode_json)?.[0];
  const persona = JSON.parse(field_ec_characters)?.[0];

  return {
    props: {
      personaje: persona,
      episodio: {
        ...episodeJson,
        field_ec_video_duration
      },
      interactivos: itemsInteractivo,
      confesionario,
    },
  };
};

export default Personaje;