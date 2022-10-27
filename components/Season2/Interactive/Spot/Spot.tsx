import React, { useEffect, useState, useRef } from 'react';
import styles from './spotlight.module.scss';
import CountDown from 'components/Season2/Shared/Progress/CountDown';
import Ribble from 'components/Season2/Shared/Ribble/Ribble';

const InteractivoSpot = ({ item, onPointClicked, onFinish }) => {

  const [isMobile] = useState(!window.matchMedia('(min-width: 960px)').matches);

  const getPoints = () => {
    const data = {
      desktop: [],
      mobile: []
    };
    if (item ?.field_ec_x1_desk && item ?.field_ec_y1_desk) {
      data.desktop[0] = {
        x: item.field_ec_x1_desk,
        y: item.field_ec_y1_desk
      }
    }
    if (item ?.field_ec_x1_mobile && item ?.field_ec_y1_mobile) {
      data.mobile[0] = {
        x: item.field_ec_x1_mobile,
        y: item.field_ec_y1_mobile
      }
    }
    return data;
  };
  const time = parseInt(item.field_ec_duration_action);
  const rel = parseInt(item.field_ec_time_action);
  const textProgressBar = item.field_ec_text_progressbar;
  const allPoints = getPoints();
  const currentPoints = isMobile ? allPoints.mobile : allPoints.desktop;

  useEffect(() => {

    if (!isMobile) {
      const spotlight = document.querySelector('#spotlight');
      const spotlightSize = 'transparent 10px, rgba(0, 0, 0, 0.9) 260px)';
      const updateSpotlight = (spotlight, spotlightSize, e) => {
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
      }
      window.addEventListener('mousemove', e => updateSpotlight(spotlight, spotlightSize, e));
      return () =>
        window.removeEventListener('mousemove', e => updateSpotlight(spotlight, spotlightSize, e));
    }
  }, []);

  return (
    <div id="spotlight" className={`${styles.spotlight} ${styles.fadeIn}`} >
      <div className={styles.coverCountdown}>
        <CountDown
          onFinish={onFinish}
          totalTime={time}
          text={textProgressBar}
        />
      </div>
      {currentPoints.map((point, index) => <Ribble key={`${index}_`} onClick={onPointClicked} x={point.x} y={point.y} xMobile={point.x} yMobile={point.y} text={''} rel={rel} />)}
    </div>
  );
};

export default InteractivoSpot;