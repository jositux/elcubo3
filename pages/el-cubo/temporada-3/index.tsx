import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './season3.module.scss';
import useDetectDevice from 'hooks/useDetectDevice';
import AuthService from 'services/Auth';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Links from 'constants/Links';
import Credits from 'components/Season3/Season/Credits/Credits';



const Season3: NextPage = () => {

  const isLoggedIn = AuthService.isLoggedIn();
  const { isMobile } = useDetectDevice();

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <Header />

      <div className={styles.homePageContainer}>

        {/* <SubeComponent /> */}

        <div id={styles.SliderContainer}>
          {
            isMobile 
              ? <img className={styles.SliderImage} src="/images/season3/slider/mobile/home_mobile_slider_01.png" />
              : <img className={styles.SliderImage} src="/images/season3/slider/home_slider_01.jpg" />
          }
          <div className={ `${styles.textSlider1}` }>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país. 
              <h2>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</h2>
            </h1>
          </div>
        </div>

        <div id={styles.SliderContainer}>
          {
            isMobile 
              ? <img className={styles.SliderImage} src="/images/season3/slider/mobile/home_mobile_slider_02.png" />
              : <img className={styles.SliderImage} src="/images/season3/slider/home_slider_02.jpg" />
          }
          <div className={ `${styles.textSlider2}` }>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.
              <h2>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</h2>
            </h1>
          </div>
        </div>
        
        <div id={styles.SliderContainer}>
          {
            isMobile 
              ? <img className={styles.SliderImage} src="/images/season3/slider/mobile/home_mobile_slider_03.png" />
              : <img className={styles.SliderImage} src="/images/season3/slider/home_slider_03.jpg" />
          }
          <div className={ `${styles.textSlider3}` }>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.
              <h2>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</h2>
            </h1>
          </div>
        </div>

        <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
            }
        </div>

      </div>

      {/* <Credits /> */}

      <Footer />
    </Fragment>
  )
}

export default Season3