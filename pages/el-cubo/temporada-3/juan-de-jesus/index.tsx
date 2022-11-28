import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import DashboardLinealModal from 'components/Season3/Modal/DashboardLinealModal';
import UrlUtils from 'utils/Url';
import VideoModal from 'components/Season3/Modal/VideoModal';
import styles from './lineal.module.scss'


const Lineal = () => {
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

    let srcVideo = UrlUtils.getVideoUrl("470809");

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
        time: 10, 
        text: 'Violencia en Mogotes', 
      },
      {
        time: 40, 
        text: 'Sin Parroco',      
      },
      {
        time: 60, 
        text: 'Sin cementerio',    
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

    return (
        <div>
            <DashboardLinealModal
                showModal={showDashboardModal}
                onCloseDashboard={handleOnCloseDashboardLineal}
            />
            <div ref={steal} className={styles.steal}>
                <img className={styles.stealDesktop} src="/images/season3/steals/0-juan-desktop.jpg" />
                <img className={styles.stealMobile} src="/images/season3/steals/0-juan-mobile.jpg" />
            </div>
            <VideoPlayer
                showBackButton
                backButtonLink={""}
                backButtonText={"Volver"}
                title={"Juan de Jesús"}
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

      {isOpen &&
        <div className={styles.fullScreenVideo}>
          <VideoModal
            videoId={"475352"}
            showModal={isOpen}
            setShowModal={setIsOpen}
            onVideoEnded={handleOnDashboardVideoEnd} />
        </div>
      }
        </div>
    );
};


export default Lineal;