import React from 'react';
import styles from './season3.logo.module.scss';

const Logo = ({ url }) => {

  return (
    <a href={url} >
      <img className={styles.elcuboLogo} src="/images/logo2021.png" />
    </a>
  );
};

export default Logo;
