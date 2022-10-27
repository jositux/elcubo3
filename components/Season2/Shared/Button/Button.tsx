import React from 'react';
import styles from './season2.button.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>{text}</button>
  );
};

export default Button;
