import React, { Fragment, useState, useRef } from 'react';
import VideoModal from 'components/Season3/Modal/VideoModal';
import styles from './dashboardLineal.module.scss';

const DashboardLineal = () => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleOnPlayVideo = () => {

    //if (ref && ref.current ) {
      setIsOpen(true)
    //}
  };

  const handleOnDashboardVideoEnd = () => {
    //disableScroll.off();
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.DashboardPageContainer}>

      {/* <HeaderLineal /> */}  

       <img onClick={handleOnPlayVideo} className={styles.ImgSimulate} src="/images/season3/map/grupo.png" />

      </div>

      {isOpen &&
        <div className={styles.fullScreenVideo}>
          <VideoModal
            videoId={"475352"}
            showModal={isOpen}
            setShowModal={setIsOpen}
            onVideoEnded={handleOnDashboardVideoEnd} />
        </div>
      }


    </>
  )
};

export default DashboardLineal;