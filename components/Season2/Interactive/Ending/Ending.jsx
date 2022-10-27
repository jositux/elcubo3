import React, { useState } from 'react';
import HeaderInteractive from 'components/Season2/Dashboard/HeaderInteractive';
import styles from './Ending.module.scss';
import { useInteractive } from 'hooks/useInteractive';

const Ending = ({ onButtonClicked, onContinue }) => {
  const {
    currentPoints,
    totalPoints,
    totalCollectibles,
    viewedCollectibles,
    ownedCollectibles,
    ownedConfessionalCount,
    confessionalTotal,
  } = useInteractive();

  return (
    <React.Fragment>
      <div className={`${styles.EndingCover} ${styles.fadeIn}`}>
        <div className={styles.Ending}>
          <h1>Has llegado al final de la experiencia</h1>
          <div className={styles.EndingContent}>
            <h3>Estas son las estadísticas que lograste al recorrer el Modo interactivo</h3>
            <img className={styles.LineTop} src="/images/season2/line-top.svg" />

            <HeaderInteractive
              currentPoints={currentPoints}
              totalPoints={totalPoints}
              totalCollectibles={totalCollectibles}
              viewedCollectibles={viewedCollectibles}
              ownedCollectibles={ownedCollectibles}
              ownedConfessionalCount={ownedConfessionalCount}
              confessionalTotal={confessionalTotal}
            />

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
