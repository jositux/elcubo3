import React from 'react';
import ProgressCircular from 'components/Season2/Shared/Progress/ProgressCircular';
import ProgressBar from "@ramonak/react-progress-bar";
import styles from './season2.headerInteractive.module.scss';

const HeaderInteractive = ({
  currentPoints = 0,
  totalPoints = 0,
  ownedCollectibles = 0,
  totalCollectibles = 0,
  ownedConfessionalCount = 0,
  confessionalTotal = 0,
  viewedCollectibles = 0,
}) => {

  const getPercentage = (current, total) => {
    const percentage = (current * 100) / total;
    const rounded = Math.ceil(percentage);
    return isNaN(rounded) ? 0 : rounded;
  };
  const points = getPercentage(currentPoints, totalPoints);
  const collectibles = getPercentage(ownedCollectibles, totalCollectibles);
  const explored = getPercentage(viewedCollectibles, totalCollectibles);
  const confessional = getPercentage(ownedConfessionalCount, confessionalTotal);

  return (
    <div className={styles.HeaderInteractive}>
      <section>
        <div className={styles.progressCircular}>
          <div className={styles.itemCircular}>
            <img className={styles.bgProgress1} src="/images/season2/bg-progress-circular1.png" />
            <ProgressCircular percentage={explored} />
            <span>Porcentaje explorado</span>
          </div>
          <div className={styles.itemCircular}>
            <img className={styles.bgProgress2} src="/images/season2/bg-progress-circular2.png" />
            <ProgressCircular percentage={collectibles} />
            <span>Pistas coleccionables</span>
          </div>
        </div>
        <div className={styles.progressNormal}>
          <div className={styles.itemNormal}>
            <p>Tienes {currentPoints} puntos <span>de {totalPoints} puntos disponibles</span></p>
            <ProgressBar bgColor="#640D0D" labelColor="transparent" baseBgColor="#C2C2C2" borderRadius="4px" completed={points} />
          </div>
          <div className={styles.itemNormal}>
            <p>Tienes {ownedConfessionalCount} <span>de {confessionalTotal} confesionarios disponibles</span></p>
            <ProgressBar bgColor="#640D0D" labelColor="transparent" baseBgColor="#C2C2C2" borderRadius="4px" completed={confessional} />
          </div>
        </div>
      </section>
    </div >
  );
};

export default HeaderInteractive;