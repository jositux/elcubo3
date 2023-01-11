import React, { Fragment, useEffect } from 'react';
import FadeModal from 'components/Season3/Modal/FadeModal/FadeModal';
import styles from './season3.imageFadeModal.module.scss';

const ImageFadeModal = ({ imagen, showModal, onCloseModal, setShowModal }) => {

  return (
    <Fragment>
      <FadeModal
        showModal={showModal}
        onCloseModal={onCloseModal}
        setShowModal={setShowModal}
      >

        <div className={showModal ? styles.openFade : ''}>
          {imagen &&
            <img className={styles.imgGallery} src={imagen} />
          }
        </div>
      </FadeModal>
    </Fragment>
  );
};

export default ImageFadeModal;