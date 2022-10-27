import React from 'react';
import styles from './season2.message.module.scss';
import HtmlParser from 'html-react-parser';

const Message = ({ message = '' }) => {
  return (
    <div className={`${styles.iMessageCover} ${styles.fadeIn}`}>
      <h1 className={styles.iMessage}>{HtmlParser(message)}</h1>
    </div>
  );
};

export default Message;
