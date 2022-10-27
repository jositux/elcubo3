import React from 'react';
import styles from './season2.logo.module.scss';

const Logo = ({ url }) => {

  return (
    <p><a href={url} >
      <img className={styles.elcuboLogo} src="/images/logo2021.png" />
    </a></p>
  );
};

export default Logo;
