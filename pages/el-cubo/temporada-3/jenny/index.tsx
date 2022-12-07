import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import DashboardLinealModal from 'components/Season3/Modal/DashboardLinealModal';
import GalleryModal from 'components/Season3/Modal/GalleryModal';
import AudioModal from 'components/Season3/Modal/AudioModal';
import VideoModal from 'components/Season3/Modal/VideoModal';
import Pulse from 'components/Season3/Shared/Pulse/Pulse';
import UrlUtils from 'utils/Url';
import styles from './lineal.module.scss'


const Lineal = () => {
    let srcVideo = UrlUtils.getVideoUrl("477146");
    let duration = 744;
    // FIXME: Remove/refactor
    const [showDashboardModal, setShowDashboardModal] = useState(false);

    //const [showAudioModal, setShowAudioModal] = useState(false);

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

    const handleOnClickDashboardLineal = () => {
        setShowDashboardModal(true);
    };

    const handleOnCloseDashboardLineal = () => {
        setShowDashboardModal(false);
        handlePlayVideo(true);
    };

    const markers = [
      {
        time: 500, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Origen de la familia Delgado', 
      },
      {
        time: 400, 
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Educación en la ruralidad',      
      },
      {
        time: 300,
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Las personas en el campo',    
      },
      {
        time: 100,
        url: '/images/season3/hitos/icons/0.jpg',
        text: 'Las señoritas',    
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
  
    

    return (
        <div className={styles.NodeContainer}>
            <DashboardLinealModal
                char = 'jenny'
                showModal={showDashboardModal}
                onCloseDashboard={handleOnCloseDashboardLineal}
            />
            <div ref={steal} className={styles.steal}>
                <img className={styles.stealDesktop} src="/images/season3/steals/personaje-jenny.jpg" />
                <img className={styles.stealMobile} src="/images/season3/steals/personaje-jenny.jpg" />
            </div>
            <VideoPlayer
                showBackButton
                backButtonLink={"/el-cubo/temporada-3/personajes/map?ref=view"}
                backButtonText={"Volver"}
                title={"Jenny"}
                source={srcVideo}
                showPrevButton={false}
                showNextButton={false}
                setPlayer={setPlayer}
                fullscreen={false}
                showDashboardLineal
                markers = {markers}
                duration = {duration}
                onClickDashboardLineal={handleOnClickDashboardLineal}   
            />

      <span className={styles.Video2level} onClick={handleOnPlayVideo}>Abrir Video 2 level</span>

      <span className={styles.Gallery2level} onClick={handleOnOpenGalleryModal}>Abrir Gallery 2 level</span>

      <span className={styles.Audio2level} onClick={handleOnOpenAudioModal}>Abrir Audio 2 level</span>

      <Pulse 
            onClick={() => alert('Enlace a otro personaje')}
            x={80}
            y={50}
            xMobile={80}
            yMobile={50}
            text={'Texto'}
      />

     
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
      
    </div>
    );
};


export default Lineal;