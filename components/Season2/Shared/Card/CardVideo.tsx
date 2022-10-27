import React, { Fragment, useState, useRef } from 'react';
import PlayButton from 'components/Season2/Svg/Play'
import VideoModal from 'components/Season2/Shared/Modal/VideoModal';
import styles from './season2.cardVideo.module.scss';
import disableScroll from 'disable-scroll';

const CardVideo = ({ url, title, paragraph, isEnabled, source }) => {

  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleOnPlayVideo = () => {
    if (ref && ref.current && isEnabled) {
      setIsOpen(true)
    }
  };

  const handleOnDashboardVideoEnd = () => {
    disableScroll.off();
    setIsOpen(false);
  };

  return (
    <article ref={ref} className={styles.Card} >
      <div className={`${styles.CardContent} ${isEnabled ? styles.card_hover : null}`} onClick={handleOnPlayVideo} >
        {isEnabled &&
          <Fragment>
            <PlayButton />
            <img src={url} /><span>{title}</span>
          </Fragment>
        }
      </div>
      <p className={styles.paragraph}>
        {isEnabled ?
          paragraph
          :
          <Fragment>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
          </Fragment>
        }
      </p>
      {isOpen &&
        <div className={styles.fullScreenVideo}>
          <VideoModal
            videoId={source}
            showModal={isOpen}
            setShowModal={setIsOpen}
            onVideoEnded={handleOnDashboardVideoEnd} />
        </div>
      }
    </article>
  );
};

export default CardVideo;

