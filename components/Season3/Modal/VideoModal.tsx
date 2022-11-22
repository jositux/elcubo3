import React, { useState, useEffect } from "react";
import VideoPlayer from 'components/Season2/VideoPlayer/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import styles from './season2.videoModal.module.scss';

const VideoModal = ({ videoId, showModal, setShowModal, onVideoEnded, autoPlay }) => {

  const [player, setPlayer] = useState(null);
  const srcVideo = UrlUtils.getVideoUrl(videoId);

  useEffect(() => {
    disableScroll.on();
    if (player) {
      player.play();
    }
  }, [player]);

  const handleCloseVideo = () => {
    disableScroll.off();
    player.stop();
    onVideoEnded();
    setShowModal(false);
  }

  return (
    <div className={`${styles.containerCover} ${styles.containerVideoModal} ${showModal ? styles.open : ""}`}>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={() => handleCloseVideo()}>
          </p>
          <VideoPlayer
            title={""}
            source={srcVideo}
            showPrevButton={false}
            showNextButton={false}
            setPlayer={setPlayer}
            onVideoEnded={onVideoEnded}
            fullscreen={false}
            autoPlay={autoPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
