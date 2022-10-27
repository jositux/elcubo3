import React, { useState, useEffect } from 'react';
import styles from './season2.progress.module.scss';

function Progress({ text, totalTime, onFinish }) {
  const timing = 10;
  let fillInterval;
  let percentage = 100 / (totalTime * timing);
  const [filled, setFilled] = useState(0);

  const handleFill = () => {
    setFilled(filled => {
      if (filled <= 100) {
        return filled + percentage
      } else {
        onFinish();
      }
    });
  };

  useEffect(() => {
    clearInterval(fillInterval);
    fillInterval = setInterval(handleFill, (1000 / timing));
    return () => {
      clearInterval(fillInterval);
    }
  }, []);

  return (
    <div className={styles.progressContainer}>
      <h3>{text}</h3>
      <div className={styles.progressBar}>
        <div className={styles.progressBarLine} style={{ width: `${filled}%` }}></div>
      </div>
    </div>
  );
}

export default Progress;


