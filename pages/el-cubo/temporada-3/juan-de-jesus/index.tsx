import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Dashboard from 'components/Season3/Modal/DashboardSlideModal';
import GalleryModal from 'components/Season3/Interactive/Gallery/GalleryModal';
import AudioModal from 'components/Season3/Interactive/Audio/AudioModal';
import VideoModal from 'components/Season3/Modal/VideoModal';
import UrlUtils from 'utils/Url';

import SlideModal from 'components/Season3/Interactive/SlideModal/SlideModal';
import styles from './lineal.module.scss';


const Lineal = () => {

    let srcVideo = UrlUtils.getVideoUrl("470809");
    let duration = 1983;
    // FIXME: Remove/refactor
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

    const markers = [
      {
        time: 1163, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Violencia en Mogotes', 
      },
      {
        time: 709, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Jordan Sin Parroco',      
      },
      {
        time: 566, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Jordan Sin cementerio',    
      },
      {
        time: 323, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Una misa solo',    
      },
      {
        time: 60, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Santa Rosa, Patrona de Jordan',    
      },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleOnPlayVideo = () => {
      setIsOpen(true) 
      handlePlayVideo(false);
    };
  
    const handleOnDashboardVideoEnd = () => {
      setIsOpen(false);
      handlePlayVideo(true);
    };

    const [isOpenGallery, setIsOpenGallery] = useState(false);

    const handleOnOpenGalleryModal = () => {
      setIsOpenGallery(true);
      handlePlayVideo(false);
    };

    const handleOnCloseGalleryModal = () => {
      setIsOpenGallery(false);
      handlePlayVideo(true);
    };


    const [isOpenAudio, setIsOpenAudio] = useState(false);

    const handleOnOpenAudioModal = () => {
      setIsOpenAudio(true);
      handlePlayVideo(false);
    };

    const handleOnCloseAudioModal = () => {
      setIsOpenAudio(false);
      handlePlayVideo(true);
    };


    // Slide Vacio
    const [isOpenSlideModal, setIsOpenSlideModal] = useState(false);

    const handleOnOpenSlideModal = () => {
      setIsOpenSlideModal(true);
      handlePlayVideo(false);
    };

    const handleOnCloseSlideModal = () => {
      setIsOpenSlideModal(false);
      handlePlayVideo(true);
    };

    // Status Active
    const [isActiveInteractive, setIsActiveInteractive] = useState(false);
    
    const toggleActiveInteractive = () => {
      setIsActiveInteractive(!isActiveInteractive);
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
            <div className={ `${styles.coverVideo} ${isActiveInteractive ? styles.activeInteractive : ""}`}>
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
                markers = {markers}
                duration = {duration}
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
            videoId={"482203"}
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
      
      
      <div className={ `${styles.coverSlide} ${isActiveInteractive ? styles.activeInteractiveSlide : ""}`}>
      <SlideModal
            isActive={isActiveInteractive}
            handleOnOpenSlideModal={handleOnOpenSlideModal}
            handleOnCloseSlideModal={handleOnCloseSlideModal} 
            />
      </div>
    </div>
    );
};


export default Lineal;