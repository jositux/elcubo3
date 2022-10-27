import React from 'react';
import { Cursor } from 'custom-pointer-react'
import { MouseContextProvider } from 'custom-pointer-react'
import styles from './season2.roundCursor.module.scss';

const roundCursor = () => {
  return (
    <div className={styles.coverCursor}>
    <MouseContextProvider>
      <Cursor
      showRing={true}
      color="orange"
      ringSize={28}
      cursorSize={20}
      ringBorder={2}
      />
    </MouseContextProvider>
   </div>
  )
};

export default roundCursor;
