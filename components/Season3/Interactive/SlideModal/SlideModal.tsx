import React, { useEffect, useState } from 'react';
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import styles from './season3.slideModal.module.scss';

const SlideModal = ({
  children,
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  setOpenSlide = null,
  onOpenCallback = () => { },
  onCloseCallback = () => { },
}) => {
  // Slide Vacio
  const [isOpenSlideModal, setIsOpenSlideModal] = useState(false);

  useEffect(() => {
    if (setOpenSlide === true) {
      openSlide();
    }
    if (setOpenSlide === false) {
      closeSlide();
    }
  }, [setOpenSlide]);

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
    onOpenCallback && onOpenCallback();
  };

  const closeSlide = () => {
    handleCloseInteractive();
    setIsOpenSlideModal(false);
    onCloseCallback && onCloseCallback();
  };

  useEffect(() => {
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
          {<img className={styles.imgContent} src="/images/season3/slider/audio_background.jpg" />}
          <div className={styles.Content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModal;