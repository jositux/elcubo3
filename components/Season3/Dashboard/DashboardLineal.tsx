import React from 'react';
import HeaderLineal from 'components/Season3/Dashboard/HeaderLineal';
import Slider from 'components/Season3/SlickSlider/SlickSlider';
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

  return (
    <>
      <div className={styles.DashboardPageContainer}>

      {/* <HeaderLineal /> */}

        <div className={styles.TitleSlides}>
          <h2>Audio</h2>
          <audio>
            <source src="/images/season3/hitos/2/hito2.mp3" type="audio/mpeg" />
          </audio>
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