import React from 'react';
import styles from './season2.ribble.module.scss';

const Ribble = ({ x, y, xMobile, yMobile, text, onClick, rel }) => {

  const styleDesktop = {
    left: `${x}vw`,
    bottom: `${y}vh`
  };

  const styleMobile = {
    left: `${xMobile}vw`,
    bottom: `${yMobile}vh`
  };

  return (
    <React.Fragment>
      <div onClick={onClick} className={`${styles.coverSelector} d-desktop`} style={styleDesktop}>
        <div className={styles.coverRibble}>
          <div id={"id_" + rel} className={`${styles.loading}`}>
            <div className={styles.box}>
              <span ></span>
              <span ></span>
              <span ></span>
            </div>
          </div>
        </div>
        <span className={styles.ribbleText}>{text}</span>
      </div>

      <div onClick={onClick} className={`${styles.coverSelector} d-mobile`} style={styleMobile}>
        <div className={styles.coverRibble}>
          <div id={"id_" + rel} className={`${styles.loading}`}>
            <div className={styles.box}>
              <span ></span>
              <span ></span>
              <span ></span>
            </div>
          </div>
        </div>
        <span className={styles.ribbleText}>{text}</span>
      </div>
    </React.Fragment >
  );
};

export default Ribble;
