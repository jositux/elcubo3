import React from 'react';
import Logo from 'components/Season2/Shared/Logo/Logo';
import UserLogin from 'components/Season2/Shared/UserLogin/UserLogin';
import styles from './season2.headerSeason.module.scss';

const HeaderSeason = () => {

  return (
    <header className={styles.homePageHeader}>
      <Logo url="/" />
      <UserLogin />
    </header>
  );
};

export default HeaderSeason;
