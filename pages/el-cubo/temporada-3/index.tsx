import React, { Fragment } from 'react';
import Head from 'next/head';
import Footer from 'components/Footer/Footer';
import styles from './season3.module.scss';
import useDetectDevice from 'hooks/useDetectDevice';
import AuthService from 'services/Auth';
import Credits from 'components/Season3/Season/Credits/Credits';
import { SlidersDesktop } from 'components/Season3/Slider/Desktop/Sliders';
import { SlidersMobile } from 'components/Season3/Slider/Mobile/Sliders';
import Header from 'components/Season3/Header/Header';



const Season3 = () => {

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

        {
          isMobile 
            ? <SlidersMobile isLoggedIn={isLoggedIn} />
            : <SlidersDesktop isLoggedIn={isLoggedIn} />
        }
                
        <Credits />
      </div>

      <Footer />
      
    </Fragment>
  )
}

export default Season3