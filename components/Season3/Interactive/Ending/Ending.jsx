import React, { useState } from 'react';
import styles from './Ending.module.scss';

const Ending = ({ onButtonClicked, onContinue }) => {

  return (
    <React.Fragment>
      <div className={`${styles.EndingCover} ${styles.fadeIn}`}>
        <div className={styles.Ending}>
          <h1>Has llegado al final de la experiencia</h1>
          <div className={styles.EndingContent}>
            <h3>Estas son las estadísticas que lograste al recorrer el Modo interactivo</h3>
            <img className={styles.LineTop} src="/images/season2/line-top.svg" />

            <img className={styles.LineTop} src="/images/season2/line-top.svg" />

            <h3>¿Quieres ver el detalle de tus resultados?</h3>
            <div className={styles.EndingButtons}>
              <button onClick={onButtonClicked}>Ir al Dashboard</button>
              <button onClick={onContinue}>En otro momento</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ending;
