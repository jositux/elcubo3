import React, { Fragment } from 'react';
import styles from './season3.button.module.scss';

const ButtonModal = ({ url = '#', text, type = 'a', onClick = () => { } }) => {
  return (
    <Fragment>
      {type === 'a' ?
        <a href={url} className={styles.ButtonModal}>{text}</a>
        :
        <button onClick={onClick} className={styles.ButtonModal}>{text}</button>
      }
    </Fragment>
  );
};

export default ButtonModal;
