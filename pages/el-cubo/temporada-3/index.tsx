import React, { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from 'components/Footer/Footer';
import styles from './season3.module.scss';
import useDetectDevice from 'hooks/useDetectDevice';
import AuthService from 'services/Auth';
import disableScroll from 'disable-scroll';
import { SlidersDesktop } from 'components/Season3/Season/Desktop/Sliders';
import { SlidersDesktop2 } from 'components/Season3/Season/Desktop/Sliders2';

import { SlidersMobile } from 'components/Season3/Season/Mobile/Sliders';
import HeaderSeason from 'components/Season3/Header/HeaderSeason';
import PaneLogin from 'components/Season3/Shared/PaneLogin/PaneLogin';
import Hero from 'components/Season3/Season/Desktop/Hero';

const Season3 = () => {


  const [audios, setAudios] = useState(null);

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
      alert: new Audio('/audios/season2/notifications_alerts/alert_1.mp3'),
      collapse: new Audio('/audios/season2/buttons_navigation/Collapse.mp3'),
      message: new Audio('/audios/season2/notifications_alerts/notification_6.mp3')
    });
  }, []);

  const isLoggedIn = AuthService.isLoggedIn();
  const { isMobile } = useDetectDevice();
  const [showLogin, setShowLogin] = useState(false);

  const onGuest = () => {
    setShowLogin(true);
    disableScroll.on();
    if (audios?.click) {
      audios.click.play();
    }
  };

  const closePanelLogin = () => {
    setShowLogin(false);
    disableScroll.off();
    if (audios?.click) {
      audios.click.play();
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="El Cubo: serie online interactiva por los Caminos de Jordán" key="title" />
        <meta name="description" content="Descubre la nueva temporada de El Cubo, la fascinante serie online gratis e interactiva. Entra ahora y explora los Caminos de Jordán y sus historias.

La imagen sería la misma que tenemos para seleccionar la temporada." />
        <meta property="og:image" content="" />
      </Head>

      <PaneLogin
        isActive={showLogin}
        onClose={() => closePanelLogin()}
        isMobile={isMobile}
      />

      <div className={styles.Home}>
        <HeaderSeason />
        <div className="videoContainer" id="videoContainer">
          <Hero video="496712" />
        </div>
        <div className={styles.HomeMobile}><SlidersMobile isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>
        <div className={styles.HomeDesktop}><SlidersDesktop2 isLoggedIn={isLoggedIn} onGuest={onGuest} /></div>

      </div>
    </Fragment>
  )
}

export default Season3