import React, { useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Social from 'components/Season2/Shared/Social/Social';
//import MyList from 'components/Season2/Shared/MyList/MyList';
import YoutubeModal from 'components/Season2/Shared/Modal/YoutubeModal';
import styles from './home.module.scss';

const Home = () => {

  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const [isActiveList, setActiveList] = useState(false);
  const ToggleClassList = () => {
    setActiveList(!isActiveList);
  };

  return (
    <React.Fragment>
      <Head>
        <title>EL CUBO - La Serie Online Interactiva</title>
        <meta property="og:title" content="▶️【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="/images/season2/season2-teaser.jpg" />
      </Head>
      <Header />
      <div className={styles.homePageContainer}>
        <div className={`${styles.homeLogo} ${styles.fadeIn}`}>
          <img className={styles.elcuboLogo} src="/images/logo2021.png" />
          <img className={`${styles.elcuboPhrase} ${styles.elcuboPhrase_1}`} src="/images/season2/phrase1.svg" />
          <img className={`${styles.elcuboPhrase} ${styles.elcuboPhrase_2}`} src="/images/season2/phrase2.svg" />
          <img className={`${styles.elcuboPhrase} ${styles.elcuboPhrase_3}`} src="/images/season2/phrase3.svg" />
          <img className={`${styles.elcuboPhrase} ${styles.elcuboPhrase_4}`} src="/images/season2/phrase4.svg" />
        </div>


        <section className={`${styles.cardsContainer} ${styles.fadeIn}`}>
          <article className={styles.Cards}>
            <div className={styles.imageText}>
              <a title="Ir a la temporada 1" href="/el-cubo/temporada-1">
                <img src="/images/season2/season1-teaser-india.jpg" />
                <div>
                  <h3>+14 - TEMPORADA 1</h3>
                  <h1>EL PODER</h1>
                  <span>Interactividad, Teatro, Tridimesional</span>
                  <a href="/el-cubo/temporada-1" className={styles.buttonBig}>INICIAR EXPERIENCIA</a>
                </div>
              </a>
            </div>
            <div className={styles.description}>
              <p>Seis personajes en sus universos cotidianos se enfrentan con dolores, inquietudes y problemas de los que son víctimas o en algunos casos la causa.</p>
              <ul>
                <li>
                  {<YoutubeModal videoId="2oxfBiKm-II" />}
                </li>
                <li>
                  <Social season="1" />
                </li>
              </ul>
            </div>
          </article>

          <article className={styles.Cards}>
            <div className={styles.imageText}>
              <a title="Ir a la temporada 2" href="/el-cubo/temporada-2">
                <img src="/images/season2/season2-teaser.jpg" />
                <div>
                  <h3>ADULTOS - TEMPORADA 2</h3>
                  <h1>EL INQUISIDOR</h1>
                  <span>Periodismo, Crónica roja, Asesinatos</span>
                  <a href="/el-cubo/temporada-2" className={styles.buttonBig}>INICIAR EXPERIENCIA</a>
                </div>
              </a>
            </div>
            <div className={styles.description}>
              <p>Andrés, un joven escritor es llamado a trabajar en la sección judicial del tabloide “El Inquisidor”.</p>
              <ul>
                <li>
                  {<YoutubeModal videoId="jRzlj8WMM-g" />}
                </li>
                <li className={styles.linkShare}>
                  <Social season="2" />
                </li>
              </ul>
            </div>
          </article>


        </section>

      </div>
      <Footer />
    </React.Fragment>
  )
};

export default Home;