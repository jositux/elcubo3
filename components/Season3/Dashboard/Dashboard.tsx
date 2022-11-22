import React from 'react';
import Head from 'next/head';
import HeaderInteractive from 'components/Season2/Dashboard/HeaderInteractive';
import Ranking from 'components/Season2/Dashboard/Ranking';
import Slider from 'components/Season2/Slider/Slider';
import CardVideo from 'components/Season2/Shared/Card/CardVideo';
import styles from './dashboard.module.scss';
import { useInteractive } from 'hooks/useInteractive';

const Dashboard = () => {
  const {
    defaultConfessional,
    interactiveData,
    currentPoints,
    confessionalTotal,
    totalPoints,
    totalCollectibles,
    ownedCollectibles,
    viewedCollectibles,
    ownedConfessionalCount,
    isEnabled
  } = useInteractive();

  const slides = [
    {
      title: 'Slide 1',
      image: '/images/season2/gallery/interactive/1.jpg',
      rel: true
    },
    {
      title: 'Slide 2',
      image: '/images/season2/gallery/interactive/2.jpg',
      rel: true
    },
    {
      title: 'Slide 3',
      image: '/images/season2/gallery/interactive/3.jpg',
      rel: true
    },
    {
      title: 'Slide 4',
      image: '/images/season2/gallery/interactive/4.jpg',
      rel: true
    },
    {
      title: 'Slide 5',
      image: '/images/season2/gallery/interactive/5.jpg',
      rel: 6600
      //rel: 6202
      //Almanza
    },
    {
      title: 'Slide 6',
      image: '/images/season2/gallery/interactive/6.jpg',
      rel: 6600
      //rel: 6202
      //Almanza
    },
    {
      title: 'Slide 7',
      image: '/images/season2/gallery/interactive/7.jpg',
      rel:  6602
      //rel: 6189
      //Aura
    },
    {
      title: 'Slide 8',
      image: '/images/season2/gallery/interactive/8.jpg',
      rel:  6602
      //rel: 6189
      //Aura
    },
    {
      title: 'Slide 9',
      image: '/images/season2/gallery/interactive/9.jpg',
      rel: 6604
      //rel: 6200
      //El Gato
    },
    {
      title: 'Slide 10',
      image: '/images/season2/gallery/interactive/10.jpg',
      rel: 6604
      //rel: 6200
      //El Gato
    },
    {
      title: 'Slide 11',
      image: '/images/season2/gallery/interactive/11.jpg',
      rel: 6604
      //rel: 6200
      //El Gato
    },
    {
      title: 'Slide 12',
      image: '/images/season2/gallery/interactive/12.jpg',
      rel: 6603
      //rel: 6199
      //Kodak
    },
    {
      title: 'Slide 13',
      image: '/images/season2/gallery/interactive/13.jpg',
      rel: 6603
      //rel: 6199
      //Kodak
    },
    {
      title: 'Slide 14',
      image: '/images/season2/gallery/interactive/14.jpg',
      rel: 6603
      //rel: 6199
      //Kodak
    },
    {
      title: 'Slide 15',
      image: '/images/season2/gallery/interactive/15.jpg',
      rel: 6613
      //rel: 6198
      // Simon Restrepo
    },
    {
      title: 'Slide 16',
      image: '/images/season2/gallery/interactive/16.jpg',
      rel: 6613
      //rel: 6198
      // Simon Restrepo
    },
    {
      title: 'Slide 17',
      image: '/images/season2/gallery/interactive/17.jpg',
      rel: 6613
      //rel: 6198
      // Simon Restrepo
    },
    {
      title: 'Slide 18',
      image: '/images/season2/gallery/interactive/18.jpg',
      rel: 6605
      //rel: 6193
      //Héctor Fabio Rugeles
    },
    {
      title: 'Slide 19',
      image: '/images/season2/gallery/interactive/19.jpg',
      rel: 6605
      //rel: 6193
      //Héctor Fabio Rugeles
    },
    {
      title: 'Slide 20',
      image: '/images/season2/gallery/interactive/20.jpg',
      rel: 6605
      //rel: 6193
      //Héctor Fabio Rugeles
    },
    {
      title: 'Slide 21',
      image: '/images/season2/gallery/interactive/21.jpg',
      rel: 6601
      //rel: 6188
      //Andrés Erazo
    },
    {
      title: 'Slide 22',
      image: '/images/season2/gallery/interactive/22.jpg',
      rel: 6601
      //rel: 6188
      //Andrés Erazo
    },
    {
      title: 'Slide 23',
      image: '/images/season2/gallery/interactive/23.jpg',
      rel: 6601
      //rel: 6188
      //Andrés Erazo
    },
    {
      title: 'Slide 24',
      image: '/images/season2/gallery/interactive/24.jpg',
      rel: 6611
      //rel: 6196
      //Lucía Román
    },
    {
      title: 'Slide 25',
      image: '/images/season2/gallery/interactive/25.jpg',
      rel: 6611
      //rel: 6196
      //Lucía Román
    },
    {
      title: 'Slide 26',
      image: '/images/season2/gallery/interactive/26.jpg',
      rel: 6611
      //rel: 6196
      //Lucía Román
    }
  ];

  return (
    <>
      <Head>
        <title>Temporada 2 - El Cubo - Modo Interactivo Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.DashboardPageContainer}>

        <HeaderInteractive
          currentPoints={currentPoints}
          totalPoints={totalPoints}
          totalCollectibles={totalCollectibles}
          ownedCollectibles={ownedCollectibles}
          ownedConfessionalCount={ownedConfessionalCount}
          confessionalTotal={confessionalTotal}
          viewedCollectibles={viewedCollectibles}
        />
        <img className={styles.LineTop} src="/images/season2/line-top.svg" />

        <Ranking collectibles={interactiveData?.collectibles} />

        <div className={styles.DashboardBody}>

          <div className={styles.SectionCenterCards}>
            <img className={styles.LineTop} src="/images/season2/line-top.svg" />
            <h2>Confesionarios</h2>
            <p className={styles.SectionCopy}>Suma pistas, desbloquea y accede a los confesionarios, que te darán información privilegiada de cada personaje. </p>
            <section className={styles.CardsContainer}>
              {defaultConfessional && defaultConfessional.map((item, index) => {
                const { image, characterName, description, videoId } = item;
                const key = `${index}_${image.replace(/[^a-zA-Z ]/g, "")}`;
                return <CardVideo
                  key={key}
                  url={image}
                  title={characterName}
                  paragraph={description}
                  isEnabled={isEnabled(item)}
                  source={videoId}
                />
              })}
            </section>
          </div>

          <div className={styles.TitleSlides}>
            <h2>Galería</h2>
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