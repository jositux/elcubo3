import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Header from 'components/Header/Header';
import SeasonIntroModal from 'components/Season2/Shared/Modal/SeasonIntroModal';
import HeaderSeason from 'components/Season2/Season/HeaderSeason/HeaderSeason';
import DescriptionSeason from 'components/Season2/Season/DescriptionSeason/DescriptionSeason';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import Credits from 'components/Season2/Season/Credits/Credits';
import Footer from 'components/Footer/Footer';
import PaneLogin from 'components/Season2/Shared/PaneLogin/PaneLogin';
import styles from './season2.module.scss';
import disableScroll from 'disable-scroll';
import UserService from 'services/User';
import { useRouter } from 'next/router';
import Links from 'constants/Links';
import AuthService from 'services/Auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/actions/user';

const Season2 = () => {

  const router = useRouter();
  const { isReady } = router;
  const isLoggedIn = AuthService.isLoggedIn();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [audios, setAudios] = useState(null);

  const childRef = useRef();

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
      expand: new Audio('/audios/season2/buttons_navigation/Expand.mp3'),
      collapse: new Audio('/audios/season2/buttons_navigation/Collapse.mp3')
    });
  }, []);

  const getMe = async () => {
    try {
      const { data } = await UserService.getMe();
      if (data) {
        dispatch(setUser(data));
      }
    } catch (error) {
      router.push(Links.registerTemp2)
    }
  };

  useEffect(() => {
    if (isLoggedIn && isReady) {
      getMe();
    }
  }, []);

  const onGuest = () => {
    setShowLogin(true);
    disableScroll.on();
    if (audios ?.click) {
      audios.click.play();
    }
  };

  const closePanelLogin = () => {
    setShowLogin(false);
    disableScroll.off();
    if (audios ?.click) {
      audios.click.play();
    }
  }

  const clickTrigger = () => {
    childRef.current?.showAlert();
    if (audios ?.click) {
      audios.click.play();
    }
  };



  return (
    <React.Fragment>
      <Head>
        <title>Temporada 2 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 2 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="/images/season2/season2-teaser.jpg" />
      </Head>
      <PaneLogin
        isActive={showLogin}
        onClose={() => closePanelLogin()}
      />
      <SeasonIntroModal ref={childRef} />
      
      <Header />
      <div className={`${styles.homePageContainer} ${styles.fadeIn}`}>
        <div className={styles.homePageHeader}>
          <section id="hero-section" className={styles.Hero}>
            <HeaderSeason />

            <img className={styles.CharactersImg} src="/images/season2/personajes.png" />

            <footer className={styles.HeroFooter}>
              <ul>
                <li>
                  <img className={styles.ButtonArrow} src="/images/season2/arrow-here.svg" />
                  {isLoggedIn ?
                    <ButtonBig url="/el-cubo/temporada-2/selector" text="Iniciar experiencia" />
                    :
                    <ButtonBig
                      type="button"
                      onClick={onGuest} text="Iniciar experiencia" />
                  }
                </li>
                <li>
                  <button id="trigger" className={styles.trigger} onClick={clickTrigger} >Ver Teaser</button>
                </li>
              </ul>
            </footer>


          </section>
        </div>
        <DescriptionSeason />
        <div className={styles.ButtonContainer}>
          {isLoggedIn ?
            <ButtonBig url="/el-cubo/temporada-2/selector" text="Iniciar experiencia" />
            :
            <ButtonBig
              type="button"
              onClick={onGuest} text="Iniciar experiencia" />
          }
        </div>

        <Credits />

      </div>
      <Footer />
    </React.Fragment>
  )
};

export default Season2;