import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Dashboard from 'components/Season3/Modal/DashboardSlideModal';
import GalleryModal from 'components/Season3/Interactive/Gallery/GalleryModal';
import AudioModal from 'components/Season3/Interactive/Audio/AudioModal';
import VideoModal from 'components/Season3/Interactive/Video/VideoModal';
import UrlUtils from 'utils/Url';
import styles from './lineal.module.scss';

const Lineal = () => {

  let srcVideo = UrlUtils.getVideoUrl("479317");
  let duration = 1265;

  const urlAudio = "/images/season3/hitos/juan-de-jesus/1/violencia.mp3";

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

  const markers = [
    {
      time: 1163,
      url: '/images/season3/hitos/icons/0.jpg',
      text: 'Violencia en Mogotes',
      type: 'audio',
    },
    {
      time: 709,
      url: '/images/season3/hitos/icons/0.jpg',
      text: 'Jordan Sin Parroco',
      type: 'video',
    },
    {
      time: 566,
      url: '/images/season3/hitos/icons/0.jpg',
      text: 'Jordan Sin cementerio',
      type: 'gallery',
    },
    {
      time: 323,
      url: '/images/season3/hitos/icons/0.jpg',
      text: 'Una misa solo',
      type: 'video',
    },
    {
      time: 60,
      url: '/images/season3/hitos/icons/0.jpg',
      text: 'Santa Rosa, Patrona de Jordan',
      type: 'gallery',
    },
  ];

  useEffect(() => {
    if (player) {
      player.on('play', (event) => {
        setInterval(() => {
          markers.map((element, index) => {
            if (element.time == parseInt(player.currentTime, 10)) {
              openActiveInteractive();
            }
            if (element.time + 12 == parseInt(player.currentTime, 10)) {
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

  const [isOpenGallery, setIsOpenGallery] = useState(false);

  const handleOnCloseGalleryModal = () => {
    setIsOpenGallery(false);
    handlePlayVideo(true);
  };

  const handleOnOpenSlideModal = () => {
    handlePlayVideo(false);
  };

  const handleOnCloseSlideModal = () => {
    handlePlayVideo(true);
  };

  // Status Active
  const [isActiveInteractive, setIsActiveInteractive] = useState(false);

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

      <VideoModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        videoId={"482209"}
        onVideoEnded={handleOnDashboardVideoEnd}
      />

      <GalleryModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        showGalleryModal={isOpenGallery}
        onCloseGalleryModal={handleOnCloseGalleryModal}
      />

      <AudioModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        title="Violencia de Mogotes"
        urlAudio={urlAudio}
        images={images}
      />
    </div>
  );
};


export default Lineal;