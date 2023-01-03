import React, { useEffect } from 'react';
import styles from './season3.fadeModal.module.scss';

const FadeModal = ({ showModal, onCloseModal, setShowModal }) => {


  useEffect(() => {
    window.onclick = function (e) {
      if (e.target.id == 'container') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    });


  });

  const handleClose = () => {
    onCloseModal();
    setShowModal(false);
  }

  return (
    <div className={`${styles.containerCover} ${styles.containerVideoModal} ${showModal ? styles.open : ""}`}>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={() => handleClose()}>
          </p>

          <div className={styles.ContainerContent}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeModal;