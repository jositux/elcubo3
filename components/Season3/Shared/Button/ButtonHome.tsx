import React, { Fragment } from 'react';
import styles from './season3.button.module.scss';


const ButtonHome = ({ url = '#', text, type = 'a', onClick = () => { } }) => {
  return (
    <Fragment>
      <a href={url} className={styles.ButtonHome}>{text}</a>
    </Fragment>
  );
};

export default ButtonHome;