import React from 'react';
import styles from './season2.buttonTrivia.module.scss';


const ButtonTrivia = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.ButtonTrivia} ${disabled ? styles.ButtonDisabled : ''}`}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonTrivia;
