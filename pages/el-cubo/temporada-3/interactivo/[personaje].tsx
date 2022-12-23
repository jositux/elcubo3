import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Dashboard from 'components/Season3/Modal/DashboardSlideModal';
import GalleryModal from 'components/Season3/Modal/GalleryModal';
import AudioModal from 'components/Season3/Modal/AudioModal';
import VideoModal from 'components/Season3/Modal/VideoModal';
import UrlUtils from 'utils/Url';

import SlideModal from 'components/Season3/Interactive/SlideModal/SlideModal';
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
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSlideModal, setIsOpenSlideModal] = useState(false);
  const [isOpenAudio, setIsOpenAudio] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const steal = useRef(null);

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

  const handleOnClickDashboard = () => {
    setShowDashboardModal(true);
  };

  const handleOnCloseDashboard = () => {
    setShowDashboardModal(false);
    handlePlayVideo(true);
  };

  const markers = interactivos.map(i => {
    console.log(' parseInt(i?.field_ec_time_action)parseInt(i?.field_ec_time_action)', parseInt(i?.field_ec_time_action))
    return {
      time: parseInt(i?.field_ec_time_action),
      url: i?.field_ec_thumb,
      text: i?.field_ec_title
    }
  })

  const handleOnPlayVideo = () => {
    setIsOpen(true)
    handlePlayVideo(false);
  };

  const handleOnDashboardVideoEnd = () => {
    setIsOpen(false);
    handlePlayVideo(true);
  };

  const handleOnOpenGalleryModal = () => {
    setIsOpenGallery(true);
    handlePlayVideo(false);
  };

  const handleOnCloseGalleryModal = () => {
    setIsOpenGallery(false);
    handlePlayVideo(true);
  };

  const handleOnOpenAudioModal = () => {
    setIsOpenAudio(true);
    handlePlayVideo(false);
  };

  const handleOnCloseAudioModal = () => {
    setIsOpenAudio(false);
    handlePlayVideo(true);
  };

  const handleOnOpenSlideModal = () => {
    setIsOpenSlideModal(true);
    handlePlayVideo(false);
  };

  const handleOnCloseSlideModal = () => {
    setIsOpenSlideModal(false);
    handlePlayVideo(true);
  };

  const toggleActiveInteractive = () => {
    setIsActiveInteractive(!isActiveInteractive);
  };

  const handleOnActiveInteractive = () => {
    setIsActiveInteractive(true);
    handlePlayVideo(false);
  };

  const handleOffActiveInteractive = () => {
    setIsActiveInteractive(false);
    handlePlayVideo(true);
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
          markers={markers}
          duration={duration}
          onClickDashboardLineal={handleOnClickDashboard}
        />
      </div>

      <span className={styles.Video2level} onClick={handleOnPlayVideo}>Abrir Video 2 level</span>

      <span className={styles.Gallery2level} onClick={handleOnOpenGalleryModal}>Abrir Gallery 2 level</span>

      <span className={styles.Audio2level} onClick={handleOnOpenAudioModal}>Abrir Audio 2 level</span>
      <br />
      <span className={styles.Slide2level} onClick={handleOnOpenSlideModal}>Abrir Slide Vacio</span>

      <span className={styles.activeTrigger} onClick={toggleActiveInteractive}>{isActiveInteractive ? "DesacActivar" : "Activar"}</span>


      <div className={styles.fullScreenVideo}>
        <VideoModal
          videoId={"475352"}
          showModal={isOpen}
          setShowModal={setIsOpen}
          onVideoEnded={handleOnDashboardVideoEnd} />
      </div>


      <GalleryModal
        showGalleryModal={isOpenGallery}
        onCloseGalleryModal={handleOnCloseGalleryModal}
      />


      <AudioModal
        showAudioModal={isOpenAudio}
        onCloseAudioModal={handleOnCloseAudioModal}
      />

      <div className={`${styles.coverSlide} ${isActiveInteractive ? styles.activeInteractiveSlide : ""}`}>
        <SlideModal
          isActive={isActiveInteractive}
          showSlideModal={isOpenSlideModal}
          onCloseSlideModal={handleOnCloseSlideModal}
        />
      </div>
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
  const { params } = context
  const { personaje } = params
  const dataRaw = await rawFetch('/api/v1/elcubo3/season/6679/interactive/all');
  const dataJson = await dataRaw.json();
  const filtteredData = dataJson.filter(d => personaje === d.field_ec_title)

  if (!filtteredData || !filtteredData.length) {
    return {
      props: {
        personaje: null
      },
    };
  }

  const dataPersonaje = filtteredData[0]
  const {
    field_ec_episode_json,
    field_ec3_interactives_items_json,
    field_ec_confessional_episode_json,
    field_ec_characters,
    field_ec_video_duration
  } = dataPersonaje

  const episodeJson = JSON.parse(field_ec_episode_json)?.[0]
  const itemsInteractivo = JSON.parse(field_ec3_interactives_items_json).sort((a, b) => {
    const durA = parseInt(a.field_ec_time_action)
    const durB = parseInt(b.field_ec_time_action)
    if (durA > durB) {
      return 1
    } else if (durA < durB) {
      return -1
    }
    return 0
  })
  const confesionario = JSON.parse(field_ec_confessional_episode_json)?.[0]
  const persona = JSON.parse(field_ec_characters)?.[0]

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