import React from 'react';
import styles from './RotateAdvice.module.scss';

const RotateAdvice = () => {
  return (
    <div className={styles.containerAdvice}>
      <a href="/el-cubo/temporada-2/selector" className={styles.backToSeason}>
          <img src="/images/icon-arrow-back.svg" />
      <span>Volver</span>
      </a>
      <div>
        <img className={styles.iconSmart} src={'/images/rotate.gif'} />
        <p>
          Para disfrutar mejor de la experiencia te invitamos a girar tu celular.
      </p>
      </div>
    </div>
  );
};

export default RotateAdvice;