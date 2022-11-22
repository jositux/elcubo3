import React, { Fragment, useState, useRef } from 'react';
import HeaderLineal from 'components/Season3/Dashboard/HeaderLineal';
import Slider from 'components/Season3/SlickSlider/SlickSlider';
import VideoModal from 'components/Season2/Shared/Modal/VideoModal';
import ReactAudioPlayer from 'react-audio-player';
import styles from './dashboardLineal.module.scss';

const DashboardLineal = () => {

  const slides = [
    {
      title: 'Slide 0',
      image: '/images/season3/hitos/2/0.jpg'
    },
    {
      title: 'Slide 1',
      image: '/images/season3/hitos/2/1.jpg'
    },
    {
      title: 'Slide 2',
      image: '/images/season3/hitos/2/2.jpg'
    },
    {
      title: 'Slide 3',
      image: '/images/season3/hitos/2/3.jpg'
    }
  ];

  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleOnPlayVideo = () => {
    if (ref && ref.current ) {
      setIsOpen(true)
    }
  };

  const handleOnDashboardVideoEnd = () => {
    //disableScroll.off();
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.DashboardPageContainer}>

      {/* <HeaderLineal /> */}  

        <div className={styles.TitleSlides}>
          <h2>Audio</h2>
          <audio>
            <source src="/images/season3/hitos/2/hito2.mp3" type="audio/mpeg" />
          </audio>
        
        <div className={styles.fullScreenVideo}>

      <a href="/el-cubo/temporada-3/test-2do-nivel">
        <span>ABRIR Video 2do nivel</span>
      </a>

       
        </div>
      
          <ReactAudioPlayer
  src="/images/season3/hitos/2/hito2.mp3"
  controls
/>
        </div>

        <section className={styles.SlidesContainer}>
          <Slider slides={slides} />
        </section>

      </div>



    </>
  )
};

export default DashboardLineal;