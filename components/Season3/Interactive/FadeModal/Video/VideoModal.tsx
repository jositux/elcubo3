import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import styles from './season3.videoModal.module.scss';
import FadeModal from 'components/Season3/Modal/FadeModal/FadeModal';

const VideoModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data
}) => {
  const [player, setPlayer] = useState(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  let srcVideo = UrlUtils.getVideoUrl('482209');
  let title = data.field_ec_title;

  const [openVideo, setOpenVideo] = useState(null)


  useEffect(() => {
    disableScroll.on();
    if (player) {
      if (isSlideOpen) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [player, isSlideOpen]);

  const stopVideoHandler = () => {
    setOpenVideo(false)
    const stop = player && (player.stop || player.pause);
    stop && stop();
  }

  return (
    <div className={styles.interactiveVideo}>
      <div className={styles.trigger} onClick={() => setOpenVideo(true)}>HELLLO</div>


      <FadeModal
        showModal={openVideo}
        onCloseModal={handleCloseInteractive}
        setShowModal={openVideo}
      >
        {openVideo &&
          <Video2Level
            title={title}
            source={srcVideo}
            showPrevButton={false}
            showNextButton={false}
            setPlayer={setPlayer}
            onVideoEnded={() => {
              handleCloseInteractive();
            }}
            fullscreen={false}
            autoPlay={true}
          />
        }
      </FadeModal>
    </div>
  );
};

export default VideoModal;
