import React, { Fragment, useEffect, useState } from 'react';
import styles from './season3.button.module.scss';


const ButtonHome = ({ url = '#', text, type = 'a', onClick = () => { } }) => {

  return (
    <Fragment>
      {type === 'a' ?
        <a href={url} className={styles.ButtonHome}>{text}</a>
        :
        <button onClick={onClick} className={styles.ButtonHome}>{text}</button>
      }
    </Fragment>
  );
};

export default ButtonHome;