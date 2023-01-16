import React, { useEffect } from 'react';
import disableScroll from 'disable-scroll';
import styles from './season3.fadeModal.module.scss';

const FadeModal = ({ children, showModal, onCloseModal, setShowModal }) => {

  useEffect(() => {
    if (showModal) {
      //disableScroll.on();
    }

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseModal()
      }
    });


  });


  return (
    <div className={`${styles.containerCover} ${styles.containerVideoModal} ${showModal ? styles.open : ""}`}>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={() => onCloseModal()}>
          </p>

          <div className={styles.ContainerContent}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeModal;