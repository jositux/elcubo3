import React from 'react';
import styles from './season2.button.module.scss';

const ButtonBig = ({ url = '#', text, type = 'a', onClick = () => { } }) => {
  return (
    <React.Fragment>
      {type === 'a' ?
        <a href={url} className={styles.ButtonBig}>{text}</a>
        :
        <button onClick={onClick} className={styles.ButtonBig}>{text}</button>
      }
    </React.Fragment>
  );
};

export default ButtonBig;
