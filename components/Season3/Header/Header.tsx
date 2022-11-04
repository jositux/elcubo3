import React, { Fragment } from 'react';
import { RTVCGlobalStyles } from 'styles/rtvc.style';
import Logo from '../Shared/Logo/Logo';
import UserLogin from '../Shared/UserLogin/UserLogin';
import styles from './season3.header.module.scss';

const Header = () => {

  return (
    <Fragment>
      <RTVCGlobalStyles />
      <header id="mainMenu" className="OrHeader__Header-sc-1x6b4le-0 flrEJC">
        <div className="resizecontainer OrHeader__Menu-sc-1x6b4le-2 gJJULp">
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
            <UserLogin />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
