import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import SlideModal from '../SlideModal/SlideModal';

const VideoModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  onVideoEnded,
  autoPlay = true,
  data
}) => {
  const [player, setPlayer] = useState(null);
  const srcVideo = UrlUtils.getVideoUrl('482209');
  const [openSlide, setOpenSlide] = useState(null)

  useEffect(() => {
    disableScroll.on();
    if (player) {
      player.play();
    }
  }, [player]);

  return (
    <SlideModal
      isActive={isActive}
      handleOpenInteractive={handleOpenInteractive}
      handleCloseInteractive={handleCloseInteractive}
      setOpenSlide={openSlide}
    >
      {/* <div className={styles.fullScreenVideo}> */}
      <Video2Level
        title={""}
        source={srcVideo}
        showPrevButton={false}
        showNextButton={false}
        setPlayer={setPlayer}
        onVideoEnded={() => {
          console.log('CIERRO EL SLIDER')
          setOpenSlide(false)
        }}
        fullscreen={false}
        autoPlay={autoPlay}
      />
      {/* </div> */}
    </SlideModal>
  );
};

export default VideoModal;
