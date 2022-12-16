import React from 'react';
import styles from './season2.messageAfter.module.scss';
import HtmlParser from 'html-react-parser';

const MessageAfterVideo = ({ message = 'text', onTimeEnd = () => { }, duration = 7000 }) => {
  setTimeout(onTimeEnd, duration);

  if (message === null) {
    message = ' ';
  }

  return (
    <div className={`${styles.iMessageCover} ${styles.fadeIn}`}>
      <h1 className={styles.iMessage}>{ HtmlParser(message) }</h1>
    </div>
  );
};

export default MessageAfterVideo;
