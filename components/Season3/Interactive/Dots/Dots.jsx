import React, { useState } from 'react';
import styles from './Dots.module.scss';
import CountDown from 'components/Season2/Shared/Progress/CountDown';
import Pulse from 'components/Season2/Shared/Pulse/Pulse';
import MessageAfterVideo from 'components/Season2/Shared/MessageAfterVideo/MessageAfterVideo';

const Dots = ({ item, onPointClicked, onFinish }) => {
  const [isMobile] = useState(!window.matchMedia('(min-width: 960px)').matches);
  const [message, setMessage] = useState(null);

  const getPoints = () => {
    const data = {
      desktop: [],
      mobile: [],
    };
    if (item?.field_ec_x1_desk && item?.field_ec_y1_desk) {
      data.desktop[0] = {
        x: item.field_ec_x1_desk,
        y: item.field_ec_y1_desk,
      };
    }
    if (item?.field_ec_x2_desk && item?.field_ec_y2_desk) {
      data.desktop[1] = {
        x: item.field_ec_x2_desk,
        y: item.field_ec_y2_desk,
      };
    }
    if (item?.field_ec_x3_desk && item?.field_ec_y3_desk) {
      data.desktop[2] = {
        x: item.field_ec_x3_desk,
        y: item.field_ec_y3_desk,
      };
    }
    if (item?.field_ec_x1_mobile && item?.field_ec_y1_mobile) {
      data.mobile[0] = {
        x: item.field_ec_x1_mobile,
        y: item.field_ec_y1_mobile,
      };
    }
    if (item?.field_ec_x2_mobile && item?.field_ec_y2_mobile) {
      data.mobile[1] = {
        x: item.field_ec_x2_mobile,
        y: item.field_ec_y2_mobile,
      };
    }
    if (item ?.field_ec_x3_mobile && item ?.field_ec_y3_mobile) {
      data.mobile[2] = {
        x: item.field_ec_x3_mobile,
        y: item.field_ec_y3_mobile,
      };
    }
    return data;
  };
  
  const time = parseInt(item.field_ec_duration_action);
  const textProgressBar = item.field_ec_text_progressbar;
  const allPoints = getPoints();
  const currentPoints = isMobile ? allPoints.mobile : allPoints.desktop;

  return (
    <React.Fragment>
      <div className={`${styles.dots} ${styles.fadeIn}`}>
        <div className={styles.coverCountdown}>
          <CountDown totalTime={time} text={textProgressBar} onFinish={onFinish} />
        </div>
        <div className={styles.coverPoints}>
        {currentPoints.map((point, index) => (
          <Pulse
            key={`${index}_`}
            onClick={index === 0 ? onPointClicked : () => setMessage(' ')}
            x={point.x}
            y={point.y}
            xMobile={point.x}
            yMobile={point.y}
            text={''}
          />
        ))}
        </div>
      </div>

      <MessageAfterVideo message={message} onTimeEnd={() => setMessage(null)} />
    </React.Fragment>
  );
};

export default Dots;
