import React, { Fragment } from 'react';
import styles from './season3.button.module.scss';

const Link = ({ url = '#', text, type = 'a', onClick = () => { } }) => {
  return (
    <Fragment>
      {type === 'a' ?
        <a href={url} className={styles.LinkModal}>{text}</a>
        :
        <button onClick={onClick} className={styles.LinkModal}>{text}</button>
      }
    </Fragment>
  );
};

export default Link;
