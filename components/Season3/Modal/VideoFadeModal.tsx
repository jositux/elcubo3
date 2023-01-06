import React, { useState, useEffect } from "react";
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import FadeModal from 'components/Season3/Modal/FadeModal/FadeModal';

const VideoModal = ({ videoId, showModal, closeVideo, setShowModal, autoPlay }) => {

  const [player, setPlayer] = useState(null);

  const srcVideo = UrlUtils.getVideoUrl(videoId);

  useEffect(() => {
    if (player && showModal) {
      player.play();
    }
  }, [showModal]);

  const handleCloseVideo = () => {
    const stop = player && (player.stop || player.pause);
    stop && stop();
    closeVideo();
    setPlayer(null);
    setShowModal(false);
  }

  return (
    <FadeModal
      showModal={showModal}
      onCloseModal={closeVideo}
      setShowModal={setShowModal}
    >
      {showModal &&
        <Video2Level
          title={""}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          onVideoEnded={handleCloseVideo}
          fullscreen={false}
          autoPlay={autoPlay}
        />}
    </FadeModal>
  );
};

export default VideoModal;
