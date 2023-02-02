import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import styles from './season3.videoModal.module.scss';
import FadeModal from '../FadeModal/FadeModal';
import PlayInteractive from 'components/Season3/Svg/PlayInteractive';
import Ripple from 'components/Season3/Shared/Ripple/Ripple';
import { stringify } from "querystring";

const VideoModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data,
  duration
}) => {
  const [player, setPlayer] = useState(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const position = (data.field_ec_time_action * 100 / duration).toFixed(2);
  let srcVideo = UrlUtils.getVideoUrl(data.field_ec_asset_id);
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

  const openHandler = () => {
    setOpenVideo(true);
    handleOpenInteractive();
  }

  const stopVideoHandler = () => {
    setOpenVideo(false)
    const stop = player && (player.stop || player.pause);
    stop && stop();
  }

  return (
    <div className={`${styles.interactiveCover} ${isActive ? styles.open : ''}`} >
      <div className={styles.interactiveContent}>
        <div className={styles.trigger} onClick={openHandler}>
          <div className={styles.buttonTrigger} style={{
            left: `${position}%`,
          }}>
            <h2 className={styles.InteractiveTitle}>
              {title}
            </h2>
            <Ripple />
            <PlayInteractive />
            <span className={styles.marker}>
            </span>
          </div>
        </div>

        <span className={styles.Line}>
        </span>


        <FadeModal
          showModal={openVideo}
          onOpenModal={handleOpenInteractive}
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
    </div>
  );
};

export default VideoModal;
