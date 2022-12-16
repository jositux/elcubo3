import React, { Fragment, useState} from 'react';
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import styles from './season3.slideModal.module.scss';

const SlideModal = ({ showSlideModal, onCloseSlideModal }) => {

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseSlideModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseSlideModal
      }
    });

  });


  return (
    <div id="container" className={`${styles.containerCover} ${showSlideModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.t_close} onClick={onCloseSlideModal}>
          <ArrowDown width={30} height  ={30} />
          </div>
          <img className={styles.imgGallery} src="/images/season3/slider/audio_background.jpg" />
          <div className={styles.Content}>
          
          
          {showSlideModal &&
          <div>
          <h2>contenido</h2>
          </div>
            }
          

          </div>
        </div>
      </div>
    </div>   
   
  );
};

export default SlideModal;