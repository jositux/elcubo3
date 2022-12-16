import React from 'react';
import styles from './toast.module.scss';
import HtmlParser from 'html-react-parser';

const Toast = ({ title, img, duration = 10000, onClose }) => {

  setTimeout(onClose, duration);

  return (
    <div className={`${styles.toast_container} ${styles.fadeIn}`}>
      <div id="toast" className={`${styles.toast} ${styles.active}`}>
        <p className={styles.t_title}>
          <img src={img} />
          {HtmlParser(title)}
        </p>
        <p id="t_close" onClick={onClose} className={styles.t_close}></p>
      </div>
    </div>
  );
};

export default Toast;