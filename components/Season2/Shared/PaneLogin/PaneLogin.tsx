import React from 'react';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import Link from 'components/Season2/Shared/Button/Link';
import Links from '../../../../constants/Links';
import styles from './season2.paneLogin.module.scss';

const PaneLogin = ({ isActive, onClose }) => {
  return (
    <div className={`${styles.PaneLogin} ${isActive ? styles.open : styles.inactive}`}>
      <div className={styles.PaneCover} >
      </div>
      <div className={styles.pane}>
        <button
          onClick={onClose}
          className={`${styles.icon} ${styles.close}`}
        >
          <img src="/images/pane-close.svg" />
        </button>
        <div className={styles.PaneContent}>
          <h2>¡Regístrate!</h2>
          <p>Solo así podrás acceder y disfrutar de la experiencia interactiva del Cubo Inquisidor y tener acceso a pistas y contenidos exclusivos.
<br />Si deseas registrarte en otro momento, solo podrás disfrutar la versión lineal de la serie.</p>
          <div className={styles.col2}>
            <ButtonBig url={Links.registerSelector} text="Registrarme" />
            <Link url="/el-cubo/temporada-2/selector" text="En otro momento" type="a" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaneLogin;