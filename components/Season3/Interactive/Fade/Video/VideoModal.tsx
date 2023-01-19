import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import styles from './season3.videoModal.module.scss';
import FadeModal from '../FadeModal/FadeModal';
import PlayInteractive from 'components/Season3/Svg/PlayInteractive';
import Ripple from 'components/Season3/Shared/Ripple/Ripple';

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

  //const video2Level = eval(data.field_ec_episode_json)[0].field_ec_asset_id;
  //console.log(eval(data.field_ec_episode_json)[0].field_ec_asset_id);

  let srcVideo = UrlUtils.getVideoUrl('482209');
  let title = data.field_ec_title;

  if (data.id == '1505') {
    srcVideo = UrlUtils.getVideoUrl('482211');
  }
  // Guillermo 1
  if (data.id == '1512') {
    srcVideo = UrlUtils.getVideoUrl('482203');
  }
  // Guillermo 2
  if (data.id == '1515') {
    srcVideo = UrlUtils.getVideoUrl('482205');
  }

  // Yenny 1
  if (data.id == '1518') {
    srcVideo = UrlUtils.getVideoUrl('482207');
  }

  // Diego 1
  if (data.id == '1520') {
    srcVideo = UrlUtils.getVideoUrl('482197');
  }
  // Diego 2
  if (data.id == '1523') {
    srcVideo = UrlUtils.getVideoUrl('482199');
  }
  // Diego 3
  if (data.id == '1522') {
    srcVideo = UrlUtils.getVideoUrl('482201');
  }

  // Sole 1
  if (data.id == '1524') {
    srcVideo = UrlUtils.getVideoUrl('482213');
  }
  // Sole 2
  if (data.id == '1527') {
    srcVideo = UrlUtils.getVideoUrl('482213');
  }


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
