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

  console.log(data)
  //console.log(eval(data.field_ec_episode_json.field_ec_asset_id));

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
