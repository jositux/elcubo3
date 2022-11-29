import React, { Fragment, useState} from 'react';
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import styles from './season3.audioModal.module.scss';

const AudioModal = ({ showAudioModal, onCloseAudioModal }) => {

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseAudioModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseAudioModal
      }
    });

  });


  return (
    <div id="container" className={`${styles.containerCover} ${showAudioModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.t_close} onClick={onCloseAudioModal}>
          <ArrowDown width={30} height  ={30} />
          </div>
          <img className={styles.imgGallery} src="/images/season3/slider/audio_background.jpg" />
          <div className={styles.Content}>
          <h2>Título del Audio</h2>
          
          {
          showAudioModal &&
            <div className={styles.fullScreenVideo}>
              <AudioWave audio="/audios/season3/hito2.mp3" />
            </div>
          }
          
          </div>
        </div>
      </div>
    </div>
     
     

 
      
   
  );
};

export default AudioModal;