import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from './season2.seasonIntroModal.module.scss';
import disableScroll from 'disable-scroll';
import SoundActive from "components/Season2/Svg/SoundActive";
import SoundInactive from 'components/Season2/Svg/SoundInactive';

const SeasonIntroModal = forwardRef((props, ref) => {
  const [modalIntroActive, setModalIntroState] = useState(true);
  const [soundActive, setSoundState] = useState(false);
  const [audios, setAudios] = useState(null);
  const videoRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      showAlert() {
        handleOpenVideo();
      }
    }),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    disableScroll.on();
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseIntroVideo();
      }
    }
    window.onclick = function (e) {
      if (e.target.id == 'container_intro') {
        handleCloseIntroVideo();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

  }, []);

  const handleOpenVideo = () => {
    setModalIntroState(!modalIntroActive);
    playVideo(videoRef?.current);
    disableScroll.on();
  };

  const handleCloseIntroVideo = () => {
    setModalIntroState(!modalIntroActive);
    stopVideo(videoRef?.current);
    disableScroll.off();
    if (audios?.click) {
      audios.click.play();
    }
  };

  const handleToggleSound = () => {
    setSoundState(prev => !prev);
  };

  const stopVideo = (video) => {
    video.pause();
    video.currentTime = 0;
  };

  const playVideo = (video) => {
    video.pause();
    video.currentTime = 0;
    video.play();
  };

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.addEventListener('ended', handleCloseIntroVideo);
    }
    return () => videoRef?.current?.removeEventListener('ended', handleCloseIntroVideo);
  }, [videoRef?.current]);

  return (
    <div className={`${styles.containerCover} ${modalIntroActive ? styles.open : ""}`}>
      <div id="container_intro" className={styles.Container}>
        <div className={`${styles.intro} ${styles.fadeIn}`}>
          <p className={styles.t_close_intro} onClick={() => handleCloseIntroVideo()}>
          </p>

          <video ref={videoRef} controls={false} muted={!soundActive} autoPlay playsInline>
            <source src="/videos/season2.mp4" type="video/mp4" />
          </video>

          <div className={styles.Footer}>
            <div className={styles.FooterContent}>
              <button id="boton" type="button" onClick={() => handleToggleSound()} className={`${soundActive ? "Active" : ""}`}>
                {soundActive ? <SoundActive /> : <SoundInactive />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SeasonIntroModal;
