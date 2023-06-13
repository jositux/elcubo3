import React from 'react';
import styles from './RotateAdvice.module.scss';

const RotateAdvice = ({ router }) => {
  return (
    <div className={styles.containerAdvice}>
      <a href="/el-cubo/temporada-3/personajes?ref=view" className={styles.backToSeason}>
        <img src="/images/icon-arrow-back.svg" />
        <span>
          {router.locale === 'en' ?
            'Back' :
            'Volver'}
        </span>
      </a>
      <div>
        <img className={styles.iconSmart} src={'/images/rotate.gif'} />
        <p>
          {router.locale === 'en' ?
            'To better enjoy the experience, rotate your phone. ' :
            'Para disfrutar mejor de la experiencia te invitamos a girar tu celular.'}

          <br />
          <span>
            {router.locale === 'en' ?
              'Make sure that the auto-rotate feature is enabled."' :
              'Asegúrate que la rotación automática de tu dispositivo esté activada.'}

          </span>
        </p>
      </div>
    </div>
  );
};

export default RotateAdvice;