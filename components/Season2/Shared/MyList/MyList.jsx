import React, { useEffect, useState, useRef } from 'react';
import Add from 'components/Season2/Svg/Add';
import styles from './season2.mylist.module.scss';

const MyList = ({ season }) => {

  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const ref = useRef(null);

  useEffect(() => {
    // Detect OutSide Click
    const checkIfClickedOutside = e => {
      if (!ref.current || !ref.current.contains(e.target)) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isActive])


  return (

    <div ref={ref} className={styles.addContainer}>
      {season === "1" &&
        <div>
          <button className={styles.addButton} onClick={ToggleClass}>
            <Add />Mi Lista
          </button>
          <div className={`${styles.myListToolTip} ${isActive ? `${styles.ActiveList}` : ""}`}>
            <div className={styles.tooltipInner} role="tooltip">
              <div className={styles.tooltipMessage}>
                Regístrate gratis y accede a esta función</div>
              <button className={styles.tooltipButton}>REGISTRATE</button>
              <div className={styles.tooltipLogin}>
                <a className="lnk-login" href="">INICIA SESIÓN</a>
              </div>
            </div>
            <span className="arrow"></span>
          </div>
        </div>
      }

      {season === "2" &&
        <div>
          <button className={styles.addButton} onClick={ToggleClass}>
            <Add />Mi Lista
       </button>
          <div className={`${styles.myListToolTip} ${isActive ? `${styles.ActiveList}` : ""}`}>
            <div className={styles.tooltipInner} role="tooltip">
              <div className={styles.tooltipMessage}>
                Regístrate gratis y accede a esta función</div>
              <button className={styles.tooltipButton}>REGISTRATE</button>
              <div className={styles.tooltipLogin}>
                <a className="lnk-login" href="">INICIA SESIÓN</a>
              </div>
            </div>
            <span className="arrow"></span>
          </div>
        </div>
      }

    </div >
  );
};

export default MyList;
