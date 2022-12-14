import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season2/VideoPlayer/VideoPlayer';
import DashboardLinealModal from 'components/Season2/Shared/Modal/DashboardLinealModal';
import UrlUtils from 'utils/Url';
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

    let srcVideo = UrlUtils.getVideoUrl('a02328');

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


    return (
        <div>
            <DashboardLinealModal
                showModal={showDashboardModal}
                onCloseDashboard={handleOnCloseDashboardLineal}
            />
            <div ref={steal} className={styles.steal}>
                <img className={styles.stealDesktop} src="/images/season2/preview.jpg" />
                <img className={styles.stealMobile} src="/images/season2/preview_mobile.jpg" />
            </div>
            <VideoPlayer
                showBackButton
                backButtonLink={"/el-cubo/temporada-2/"}
                backButtonText={"Volver"}
                title={""}
                source={srcVideo}
                showPrevButton={false}
                showNextButton={false}
                setPlayer={setPlayer}
                fullscreen={true}
                showDashboardLineal
                onClickDashboardLineal={handleOnClickDashboardLineal}
            />
        </div>
    );
};


export default Lineal;