import React from 'react';
import styles from './season2.button.module.scss';

const Link = ({ url = '#', text, type = 'a', onClick = () => { } }) => {
  return (
    <React.Fragment>
      {type === 'a' ?
        <a href={url} className={styles.LinkNormal}>{text}</a>
        :
        <button onClick={onClick} className={styles.LinkNormal}>{text}</button>
      }
    </React.Fragment>
  );
};

export default Link;
