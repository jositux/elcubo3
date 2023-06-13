import React, { Fragment } from 'react';
import Logo from '../Shared/Logo/Logo';
//import UserLoginSeason from '../Shared/UserLogin/UserLoginSeason';
import LangSelector from './LangSelector';
import styles from './season3.header.module.scss';
import { RTVCGlobalStyles } from 'styles/rtvc.style';

const HeaderSeason = () => {

  return (
    <Fragment>
      <RTVCGlobalStyles />
      <header id="mainMenu" className={styles.MainMenu}>
        <div className={styles.MenuContent}>
          <div className={styles.logosContainer}>
            <a className={styles.logoRTVCplay} href="https://www.rtvcplay.co/">
              <img
                className={styles.logoRTVCplay}
                src="/images/logo-RTVCPlay-Header.png"
                alt="RTVCPlay"
              />
            </a>
            <div className={styles.separadorLogos}></div>
            <Logo url="/" />
          </div>
          <div className={styles.LoginContainer}>
            <LangSelector />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderSeason;
