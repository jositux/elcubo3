import React, { useState } from 'react';
import Head from 'next/head';
import HeaderInteractive from 'components/Season2/Dashboard/HeaderInteractive';
import Ranking from 'components/Season2/Dashboard/Ranking';
import Slider from 'components/Season2/Slider/Slider';
import CardImage from 'components/Season2/Shared/Card/CardImage';
import CardVideo from 'components/Season2/Shared/Card/CardVideo';
import styles from './dashboard.module.scss';

const Dashboard = () => {

  const slides = [
    {
      title: 'Slide 1',
      image: '/images/season2/season2-1.jpg',
    },
    {
      title: 'Slide 2',
      image: '/images/season2/season2-2.jpg'
    },
    {
      title: 'Slide 3',
      image: '/images/season2/season2-3.jpg'
    },
    {
      title: 'Slide 4',
      image: '/images/season2/season2-4.jpg'
    },
    {
      title: 'Slide 5',
      image: '/images/season2/season2-5.jpg'
    }
  ];


  const cardVideos = [
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: true },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: false },
  ];

  const cardImages = [
    { url: '/images/season2/season2-4.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: true },
    { url: '/images/season2/season2-1.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: true },
    { url: '/images/season2/season2-2.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: true },
    { url: '/images/season2/season2-3.jpg', title: 'Lorem Ipsum', paragraph: 'Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum', isEnabled: true },
  ];

  return (
    <>
      <Head>
        <title>Temporada 2 - El Cubo - Modo Interactivo Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.DashboardPageContainer}>

        <HeaderInteractive />

        <Ranking />

        <div className={styles.DashboardBody}>

          <div className={styles.SectionCenterCards}>
            <img className={styles.LineTop} src="/images/season2/line-top.svg" />
            <h2>Confesionarios</h2>
            <p className={styles.SectionCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo sit amet ante congue convallis id nec purus. </p>
            <section className={styles.CardsContainer}>
              {cardVideos && cardVideos.map((cardData, index) => {
                const { url, title, paragraph, isEnabled } = cardData;
                const key = `${index}_${url.replace(/[^a-zA-Z ]/g, "")}`;
                return <CardVideo key={key} url={url} title={title} paragraph={paragraph} isEnabled={isEnabled} />
              })}
            </section>
          </div>

          <div className={styles.SectionCenterCards}>
            <h2>Dossier de personajes</h2>
            <p className={styles.SectionCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo sit amet ante congue convallis id nec purus. </p>

            <section className={styles.CardsContainer}>
              {cardImages && cardImages.map((cardData, index) => {
                const { url, title, paragraph, isEnabled } = cardData;
                const key = `${index}_${url.replace(/[^a-zA-Z ]/g, "")}`;
                return <CardImage key={key} url={url} title={title} paragraph={paragraph} isEnabled={isEnabled} />
              })}
            </section>
          </div>


          <div className={styles.TitleSlides}>
            <h2>Detras de cámaras</h2>
          </div>
          <section className={styles.SlidesContainer}>
            <Slider slides={slides} />
          </section>

        </div>

      </div>


    </>
  )
};

export default Dashboard;