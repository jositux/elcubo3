import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import styles from './season3.videoFadeModal.module.scss';

const VideoModal = ({ videoId, showModal, setShowModal, onVideoEnded, autoPlay }) => {

  const [player, setPlayer] = useState(null);
  const srcVideo = UrlUtils.getVideoUrl(videoId);

  useEffect(() => {
    disableScroll.on();
    if (player && showModal) {
      player.play();
    }
  }, [showModal]);

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
          <Video2Level
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
