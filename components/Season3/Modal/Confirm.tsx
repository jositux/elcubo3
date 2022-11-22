import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import styles from './season2.confirmModal.module.scss';
import disableScroll from 'disable-scroll';

const Confirm = forwardRef((props: any, ref) => {

  const { onConfirm, isLoading } = props;
  const [confirmActive, setConfirmState] = useState(false);
  const [audios, setAudios] = useState(null);

  useImperativeHandle(
    ref,
    () => ({
      showConfirm() {
        handleOpenConfirm();
      }
    }),
  );

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseConfirm();
      }
    }
    window.onclick = function (e) {
      if (e.target.id == 'container_intro') {
        handleCloseConfirm();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenConfirm = () => {
    setConfirmState(!confirmActive);
    disableScroll.on();
  };

  const handleCloseConfirm = () => {
    setConfirmState(false);
    disableScroll.off();
    if (audios?.click) {
      audios.click.play();
    }
  };

  const handleOnConfirm = () => {
    onConfirm();
  };

  return (
    <div className={`${styles.containerCover} ${confirmActive ? styles.open : ""}`}>
      <div id="container_intro" className={styles.ContainerConfirm}>
        <div className={`${styles.intro} ${styles.fadeIn}`}>
          <div className={styles.introContent}>
            <h1>¿Deseas volver a iniciar la experiencia?</h1>
            <p>Si aceptas se reiniciará la historia y perderás el avance realizado, junto con el puntaje y las pistas recolectadas.
            </p>

            <div className={styles.buttons2Columns}>
              <div className={styles.buttonBig}>
                <ButtonBig type="button" onClick={handleCloseConfirm} text={'No'} />
              </div>
              <div className={styles.buttonBig}>
                <ButtonBig type="button" onClick={handleOnConfirm} text={isLoading ? 'Iniciando...' : 'Sí, iniciar de nuevo'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Confirm;
