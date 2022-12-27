import React, { useState } from 'react';
import styles from './Ending.module.scss';

const Ending = ({ name, onButtonClicked = () => {}, onContinue = () => {}}) => {

  return (
    <React.Fragment>
      <div className={`${styles.EndingCover} ${styles.fadeIn}`}>
        <div className={styles.Ending}>
          <h1>¡Has desbloqueado el confesionario de {name}!</h1>
          <div className={styles.EndingContent}>
           
              <a onClick={onButtonClicked}>Ver confesionario</a>
          
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ending;
