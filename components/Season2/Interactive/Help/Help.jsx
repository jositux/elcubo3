import React from 'react';
import styles from './Help.module.scss';
import HtmlParser from 'html-react-parser';

const Help = ({ text, duration = 7000, onClose }) => {

  setTimeout(onClose, duration);

  return (
    <div className={`${styles.helpCover} ${styles.fadeIn}`}>
      <img className={styles.ButtonArrow} src="/images/season2/arrow-here.svg" />
      <div className={`${styles.toast_container} ${styles.fadeIn}`}>
        <div id="toast" className={`${styles.toast} ${styles.active}`}>
          <p className={styles.t_text}>            
            {HtmlParser(text)}
          </p>
          <p id="t_close" onClick={onClose} className={styles.t_close}></p>
        </div>
      </div>
    </div>
  );
};

export default Help;