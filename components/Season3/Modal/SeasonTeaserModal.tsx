import React, { useState, useEffect } from "react";
import ButtonPrimary from 'components/Season2/Shared/Button/ButtonPrimary';
import styles from './season2.seasonTeaserModal.module.scss';

const SeasonTeaserModal = () => {

  const [modalActive, setModalState] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const [audios, setAudios] = useState(null);

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
    });
  }, [])

  const togglePreviewClass = () => {
    setPreviewActive(!previewActive);
  };

  const hidePreview = () => {
    togglePreviewClass();
    playVideo();
  };

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        handleCloseVideo();

      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        handleCloseVideo();

      }
    });

  });

  const handleOpenVideo = () => {
    setModalState(!modalActive);
    setPreviewActive(false);
    disableScroll();
    if (audios ?.click) {
      audios.click.play();
    }
  }

  const handleCloseVideo = () => {
    stopVideo();
    enableScroll();
    setModalState(!modalActive);
  }

  const playVideo = () => {
    document.getElementById('youtubeVideo').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  }

  const stopVideo = () => {
    document.getElementById('youtubeVideo').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  }

  const disableScroll = () => {
    document.body.classList.add('stopScrolling');
  }

  const enableScroll = () => {
    document.body.classList.remove('stopScrolling');
  }

  return (
    <React.Fragment>
      <button id="trigger" className={styles.trigger} onClick={() => handleOpenVideo()} >Ver Teaser</button>
      <div className={`${styles.containerCover} ${modalActive ? styles.open : ""}`}>
        <div id="container" className={styles.container}>
          <div className={styles.child}>
            <p className={styles.t_close} onClick={() => handleCloseVideo()}>
            </p>

            <div className={styles.videoCover}>
              <div className={styles.videoLayer}>
                <div className={styles.videoPlaceholder}>
                  <iframe id="youtubeVideo" width="100%" height="540" src="https://www.youtube.com/embed/jRzlj8WMM-g?enablejsapi=1&version=3&playerapiid=ytplayer" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                </div>
              </div>
              <div id={styles.videoPreview} className={previewActive ? styles.hidden : null}
                onClick={hidePreview} >
                <img src="/images/season2/bg-teaser-video.jpg" />
                <svg width="67" height="81" viewBox="0 0 67 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01099 1.43494V79.1736L65.1737 40.3043L2.01099 1.43494Z" stroke="white" strokeWidth="2.50525" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className={styles.copy}>
              <div>
                <h1>¡Regístrate!</h1>
              </div>
              <div>
                <p>
                  Así podrás disfrutar de toda una experiencia interactiva y acceder a contenido exclusivo.
                </p>
              </div>

              <div>

                <ButtonPrimary url="#" text="Registrarme" /><br /><br />
                <a href="/el-cubo/temporada-2/selector" className={styles.button}>En otro momento</a>

              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment >
  );
};

export default SeasonTeaserModal;
