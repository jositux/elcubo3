import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import disableScroll from 'disable-scroll';
import SlideModal from '../SlideModal/SlideModal';

const VideoModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  autoPlay = false,
  data
}) => {
  const [player, setPlayer] = useState(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  let srcVideo = UrlUtils.getVideoUrl('482209');
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

  const [openSlide, setOpenSlide] = useState(null)

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
    const stop = player && (player.stop || player.pause);
    stop && stop();
  }

  return (
    <div className="interactive-video">
      <SlideModal
        isActive={isActive}
        handleOpenInteractive={handleOpenInteractive}
        handleCloseInteractive={handleCloseInteractive}
        setOpenSlide={openSlide}
        onOpenCallback={() => setIsSlideOpen(true)}
        onCloseCallback={stopVideoHandler}
      >
        <Video2Level
          title={""}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          onVideoEnded={() => {
            setOpenSlide(false)
          }}
          fullscreen={false}
          autoPlay={autoPlay}
        />
      </SlideModal>
    </div>
  );
};

export default VideoModal;
