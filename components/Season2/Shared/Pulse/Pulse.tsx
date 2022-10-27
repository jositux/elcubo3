import React from 'react';
import styles from './season2.pulse.module.scss';

const Pulse = ({ x, y, xMobile, yMobile, text, onClick }) => {

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
        <div className={styles.coverPulse}>
          <a className={styles.pulse} href="#" >
          </a>
        </div>
        <span className={styles.pulseText}>{text}</span>
      </div>

      <div onClick={onClick} className={`${styles.coverSelector} d-mobile`} style={styleMobile}>
        <div className={styles.coverPulse}>
          <a className={styles.pulse} href="#" >
          </a>
        </div>
        <span className={styles.pulseText}>{text}</span>
      </div>
    </React.Fragment >
  );
};

export default Pulse;
