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
        <img className={styles.imgGallery} src={imagen} />
      </FadeModal>
    </Fragment>
  );
};

export default ImageFadeModal;