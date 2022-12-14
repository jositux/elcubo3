import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Footer from 'components/Footer/Footer';
import styles from './season3.module.scss';
import useDetectDevice from 'hooks/useDetectDevice';
import AuthService from 'services/Auth';
import disableScroll from 'disable-scroll';
import { SlidersDesktop } from 'components/Season3/Season/Desktop/Sliders';
import { SlidersMobile } from 'components/Season3/Season/Mobile/Sliders';
import Header from 'components/Season3/Header/Header';
import PaneLogin from 'components/Season3/Shared/PaneLogin/PaneLogin';


const Season3 = () => {

  const isLoggedIn = AuthService.isLoggedIn();
  const { isMobile } = useDetectDevice();
  const [showLogin, setShowLogin] = useState(false);


  const onGuest = () => {
    setShowLogin(true);
    disableScroll.on();
  };

  const closePanelLogin = () => {
    setShowLogin(false);
    disableScroll.off();
  }

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <PaneLogin
        isActive={showLogin}
        onClose={() => closePanelLogin()}
        isMobile={isMobile}
      />

      <div className={styles.Home}>
        <Header />


        {/*
        isMobile 
            ? <div className={styles.HomeMobile}><SlidersMobile isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>
            : <div className={styles.HomeDesktop}><SlidersDesktop isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>
        */}


        <div className={styles.HomeMobile}><SlidersMobile isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>
        <div className={styles.HomeDesktop}><SlidersDesktop isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>

      </div>
    </Fragment>
  )
}

export default Season3