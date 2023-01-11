import React, { createRef, useEffect, useRef, useState } from 'react';
import Links from '../../../../constants/Links';
import styles from './season3.paneLogin.module.scss';
import ButtonHome from '../Button/ButtonHome';
import Link from '../Button/Link';
import ButtonModal from '../Button/ButtonModal';



const PaneLogin = ({ isActive, onClose, isMobile }) => {

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref?.current?.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);


  return (
    <div className={`${styles.PaneLogin} ${isActive ? styles.open : styles.inactive}`} >

      <div className={styles.PaneCover}></div>

      <div className={styles.pane} ref={ref}>
        <button
          onClick={onClose}
          className={`${styles.icon} ${styles.close}`}
        >
        </button>

        <div className={styles.PaneContent}>
          <h2>¡Regístrate!</h2>
          <p>
            Puedes realizar la experiencia sin registrarte, pero si te registras obtienes muchas ventajas como poder salir y continuar con la experiencia cuando desees, desbloquear recompensas y acceder al nivel final para desvelar la historia al completo.
          </p>
          <div className={styles.Buttons}>
            <ButtonModal url={Links.register} text="Registrarme" />
            <Link url="/el-cubo/temporada-3/personajes/map" text="En otro momento" type="a" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default PaneLogin;