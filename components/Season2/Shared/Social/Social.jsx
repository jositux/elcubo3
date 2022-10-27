import React, { useEffect, useState, useRef } from 'react';
import Share from 'components/Season2/Svg/Share';
import Add from 'components/Season2/Svg/Add';
import Twitter from 'components/Season2/Svg/Twitter';
import Facebook from 'components/Season2/Svg/Facebook';
import Wsp from 'components/Season2/Svg/Wsp';
import Mail from 'components/Season2/Svg/Mail';
import styles from './season2.social.module.scss';

const Social = ({ season }) => {

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

    <div ref={ref} className={styles.socialContainer}>
      {season === "1" &&
        <div>
          <button className="socialButton" onClick={ToggleClass}><Share />Compartir</button>
          <div className={`${styles.contentFloatingButtons} ${isActive ? styles.activeButtons : ""}`} >
            <ul>
              <li>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-1" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-1&amp;text=El Poder https://www.elcubo.rtvcplay.co/el-cubo/temporada-1" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="whatsapp://send?text=El Poder https://www.elcubo.rtvcplay.co/el-cubo/temporada-1">
                  <Wsp />
                </a>
              </li>
              <li>
                <a href="mailto:?subject=El Poder&amp;body=El poder, Taxistas, coleccionistas de relatos y tejedores de ciudad, cuentan, sin carreras, sus increíbles historias. https://www.elcubo.rtvcplay.co/el-cubo/temporada-1">
                  <Mail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      }

      {season === "2" &&
        <div>
          <button className="socialButton" onClick={ToggleClass}><Share />Compartir</button>
          <div className={`${styles.contentFloatingButtons} ${isActive ? styles.activeButtons : ""}`} >
            <ul>
              <li>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-2" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-2&amp;text=El Poder https://www.elcubo.rtvcplay.co/el-cubo/temporada-1" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="whatsapp://send?text=El Poder https://www.elcubo.rtvcplay.co/el-cubo/temporada-1">
                  <Wsp />
                </a>
              </li>
              <li>
                <a href="mailto:?subject=El Inquisidor&amp;body=Andrés, un joven escritor es llamado a trabajar en la sección judicial del tabloide “El Inquisidor”. https://www.elcubo.rtvcplay.co/el-cubo/temporada-1">
                  <Mail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      }

    </div >
  );
};

export default Social;
