import React, { useState, useEffect } from "react";
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import styles from './season2.signatureModal.module.scss';
import disableScroll from 'disable-scroll';

const Signature = ({ name, onConfirm, isLoading, setShowSignature }) => {
  const [audios, setAudios] = useState(null);
  //const [modalSignatureActive, setModalSignatureState] = useState(true);

  useEffect(() => {
    disableScroll.on();
    const audiosObject = {
      click: new Audio('/audios/actions/click_1.mp3'),
    };
    setAudios(audiosObject);
    audiosObject.click.play();
  
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    }
    window.onclick = function (e) {
      if (e.target.id == 'container_intro') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    audios.click.play();
    setShowSignature(false);
    disableScroll.off();
  };

  const handleOnConfirm = () => {
    audios.click.play();
    disableScroll.off();
    onConfirm();
  };

  return (
    <div className={`${styles.containerCoverSignature} ${setShowSignature ? styles.open : ""}`}>
      <div id="container_intro" className={styles.ContainerSignature}>
        <div className={`${styles.intro} ${styles.fadeIn}`}>

        <p className={styles.t_close_intro} onClick={() => handleClose()}>
        </p>
          
          <div className={styles.introContent}>
            <h1>{name}...</h1>
            <p>A partir de este momento te conviertes en periodista investigador para el caso del romano misógino... ¿aceptas?
            </p>
            <div className={styles.containerImg}>
              <img src="/images/season2/logo-signature.png" />
            </div>

            <hr />
            <div className={styles.buttons1Column}>
              <div className={styles.buttonBig}>
                <ButtonBig type="button" onClick={handleOnConfirm} text={isLoading ? 'Iniciando...' : 'Acepto'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
