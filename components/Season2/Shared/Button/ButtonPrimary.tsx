import React from 'react';
import styles from './season2.button.module.scss';

const ButtonPrimary = ({ url = '#', text, type = 'a', onClick }) => {
  return (
    <React.Fragment>
      {type === 'a' ?
        <a href={url} className={styles.ButtonPrimary}>{text}</a>
        :
        <button onClick={onClick} className={styles.ButtonPrimary}>{text}</button>
      }
    </React.Fragment>
  );
};

export default ButtonPrimary;
