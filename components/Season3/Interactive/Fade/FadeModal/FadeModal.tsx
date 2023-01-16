import React, { useEffect } from 'react';
import disableScroll from 'disable-scroll';
import styles from './season3.fadeModal.module.scss';

const FadeModal = ({ children, showModal, onOpenModal, onCloseModal, setShowModal }) => {

  useEffect(() => {
    onOpenModal;
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseModal()
      }
    });
  }, [onOpenModal]);


  return (
    <div className={`${styles.containerCover} ${styles.containerVideoModal} ${showModal ? styles.open : ""}`}>
      <div className={styles.child}>
        <img className={styles.imgGallery} src="/images/season3/slider/galeria_background.jpg" />

        <p className={styles.t_close} onClick={() => onCloseModal()}>
        </p>

        <div className={styles.ContainerContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FadeModal;