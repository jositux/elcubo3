import React from 'react';
import HeaderLineal from 'components/Season2/Dashboard/HeaderLineal';
import Slider from 'components/Season2/Slider/Slider';
import styles from './dashboardLineal.module.scss';

const DashboardLineal = () => {

  const slides = [
    {
      title: 'Slide 0',
      image: '/images/season2/gallery/lineal/0.jpg'
    },
    {
      title: 'Slide 1',
      image: '/images/season2/gallery/lineal/1.jpg'
    },
    {
      title: 'Slide 2',
      image: '/images/season2/gallery/lineal/2.jpg'
    },
    {
      title: 'Slide 3',
      image: '/images/season2/gallery/lineal/3.jpg'
    },
    {
      title: 'Slide 4',
      image: '/images/season2/gallery/lineal/4.jpg'
    },
    {
      title: 'Slide 5',
      image: '/images/season2/gallery/lineal/5.jpg'
    },
    {
      title: 'Slide 6',
      image: '/images/season2/gallery/lineal/6.jpg'
    },
    {
      title: 'Slide 7',
      image: '/images/season2/gallery/lineal/7.jpg'
    },
    {
      title: 'Slide 8',
      image: '/images/season2/gallery/lineal/8.jpg'
    },
    {
      title: 'Slide 9',
      image: '/images/season2/gallery/lineal/9.jpg'
    },
    {
      title: 'Slide 10',
      image: '/images/season2/gallery/lineal/10.jpg'
    },
    {
      title: 'Slide 11',
      image: '/images/season2/gallery/lineal/11.jpg'
    },
    {
      title: 'Slide 12',
      image: '/images/season2/gallery/lineal/12.jpg'
    },
    {
      title: 'Slide 13',
      image: '/images/season2/gallery/lineal/13.jpg'
    },
    {
      title: 'Slide 14',
      image: '/images/season2/gallery/lineal/14.jpg'
    },
    {
      title: 'Slide 15',
      image: '/images/season2/gallery/lineal/15.jpg'
    }
  ];

  return (
    <>
      <div className={styles.DashboardPageContainer}>

        <HeaderLineal />

        <div className={styles.TitleSlides}>
          <h2>Galería</h2>
        </div>

        <section className={styles.SlidesContainer}>
          <Slider slides={slides} />
        </section>

      </div>



    </>
  )
};

export default DashboardLineal;