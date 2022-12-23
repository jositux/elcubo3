import React, { Fragment, useState } from 'react';
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import styles from './season3.slideModal.module.scss';

const SlideModal = ({ children, isActive, handleOpenInteractive, handleCloseInteractive }) => {

  // Slide Vacio
  const [isOpenSlideModal, setIsOpenSlideModal] = useState(false);

  const handleToggle = () => {
    if (!isOpenSlideModal) {
      openSlide();
    }
    else {
      closeSlide();
    }
  };

  let openSlide = () => {
    handleOpenInteractive();
    setIsOpenSlideModal(true);
  };

  const closeSlide = () => {
    handleCloseInteractive();
    setIsOpenSlideModal(false);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setIsOpenSlideModal(false);
      }
    });
  });

  return (
    <div id="container"
      className={
        `${styles.containerCover} 
        ${isOpenSlideModal ? styles.open : ""} 
        ${isActive ? styles.active : ""}`
      }>
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={
            `${styles.t_close} 
            ${isOpenSlideModal ? styles.arrowDown : ""} 
            ${isActive ? styles.arrowUp : ""}`
          }
            onClick={
              handleToggle
            }>
            <ArrowDown width={30} height={30} />
          </div>
          {/* <img className={styles.imgGallery} src="/images/season3/slider/audio_background.jpg" /> */}
          <div className={styles.Content}>
            {isOpenSlideModal && children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModal;