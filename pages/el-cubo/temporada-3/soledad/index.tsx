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

    let srcVideo = UrlUtils.getVideoUrl("477154");
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
        time: 800, 
        text: 'Condiciones de la mujer rural', 
      },
      {
        time: 600, 
        text: 'Violencia en el matrimonio',      
      },
      {
        time: 400, 
        text: 'Campaña al concejo de Soledad',    
      },
      {
        time: 200, 
        text: 'La familia Silva en la política',    
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
                showModal={showDashboardModal}
                onCloseDashboard={handleOnCloseDashboardLineal}
            />
            <div ref={steal} className={styles.steal}>
                <img className={styles.stealDesktop} src="/images/season3/steals/personaje-soledad.jpg" />
                <img className={styles.stealMobile} src="/images/season3/steals/personaje-soledad.jpg" />
            </div>
            <VideoPlayer
                showBackButton
                backButtonLink={"/el-cubo/temporada-3/personajes/map?ref=view"}
                backButtonText={"Volver"}
                title={"Soledad"}
                source={srcVideo}
                showPrevButton={false}
                showNextButton={false}
                setPlayer={setPlayer}
                fullscreen={true}
                showDashboardLineal
                markers = {markers}
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