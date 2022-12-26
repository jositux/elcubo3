import React, { useState, useEffect } from 'react';
import styles from './season3.progress.module.scss';

function Progress({ percent }) {

  return (
    <div className={styles.progress}>
      <div className={styles.progressValue} style={{ width: `${percent}%` }}>

      </div>
    </div>
  );
}

export default Progress;


