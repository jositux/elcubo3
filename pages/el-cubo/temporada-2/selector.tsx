import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from 'components/Header/Header';
import HeaderSelector from 'components/Season2/Season/HeaderSelector/HeaderSelector';
import SignatureModal from 'components/Season2/Shared/Modal/Signature';
import Footer from 'components/Footer/Footer';
import styles from './selector.module.scss';
import Confirm from 'components/Season2/Shared/Modal/Confirm';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import UserService from 'services/User';
import AuthService from 'services/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'redux/actions/user';
import { defaultInteractive } from 'utils/Modes';
import Links from '../../../constants/Links';

const Selector = () => {

  const router = useRouter();
  const { isReady } = router;
  const isLoggedIn = AuthService.isLoggedIn();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const [userHasData, setUserHasData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  const childRef = useRef();

  const getMe = async () => {
    try {
      const { data } = await UserService.getMe();
      if (data) {
        dispatch(setUser(data));
        const userInteractiveDataString = data?.elcubo_interactive_data_json;
        const userInteractiveDataJSON = Object.getOwnPropertyNames(userInteractiveDataString).length === 0 ? {} : JSON.parse(userInteractiveDataString);
        const { continueOnTime, points } = userInteractiveDataJSON;
        if (parseInt(continueOnTime) > 0 || parseInt(points) > 0) {
          setUserHasData(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn && isReady) {
      getMe();
    }
  }, []);

  const handleInitExperience = async () => {
    setShowSignature(true);
  };

  const confirmTrigger = () => {
    childRef?.current?.showConfirm();
  };

  const handleOnConfirm = async () => {
    setIsLoading(true);
    try {
      await UserService.resetInteractive(user.id, defaultInteractive);
      router.push('/el-cubo/temporada-2/interactivo');
    } catch (error) {
      console.log('ERROR', error);
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Temporada 2 - El Cubo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {showSignature &&
        <SignatureModal
          isLoading={isLoading}
          name={user ? user.full_name.split(' ')[0] : null}
          onConfirm={handleOnConfirm}
          setShowSignature = {setShowSignature}
        />
      }

      {isLoggedIn && userHasData &&
        <Confirm
          ref={childRef}
          isLoading={isLoading}
          onConfirm={handleOnConfirm}
        />
      }

      <div className={styles.selectorPageContainer}>
        <HeaderSelector />
        <div className={`${styles.selectorContent} ${styles.fadeIn}`}>
          <div className={styles.cardsCover}>
            <section className={styles.cardsContainer}>
              <article className={styles.Cards}>
                <div className={styles.imageText}>
                  <div className={styles.cardContent}>
                    <h1>Modo Interactivo</h1>
                    <p>Supera varios retos y juegos para almacenar pistas, objetos e información clave, y así resolver el misterio. ¿Serás capaz?
                    </p>
                    {!user &&
                      <div className={styles.buttons1columns}>
                        <div className={styles.buttonBig}>
                          <ButtonBig type="a" url={Links.registerSelector} text={'Registrarme'} />
                        </div>
                      </div>
                    }
                    {!userHasData && user &&
                      <div className={styles.buttons1columns}>
                        <div className={styles.buttonBig}>
                          <ButtonBig type="button" onClick={handleInitExperience} text={isLoading ? 'Iniciando...' : 'Ir a la Experiencia'} />
                        </div>
                      </div>
                    }
                    {userHasData &&
                      <div className={styles.buttons2Columns}>
                        <div className={styles.buttonBig}>
                          <ButtonBig type="button" onClick={confirmTrigger} text={isLoading ? 'Iniciando...' : 'Volver a Iniciar'} />
                        </div>
                        <div className={styles.buttonBig}>
                          <ButtonBig url={'/el-cubo/temporada-2/interactivo?continuar'} text="Continuar..." />
                        </div>
                      </div>
                    }

                  </div>
                </div>
              </article>
              <article className={styles.Cards}>
                <div className={styles.imageText}>
                  <div className={styles.cardContent}>
                    <h1>Modo Lineal</h1>
                    <p>Disfruta de El Inquisidor II como una película completa con inicio, nudo y desenlace en donde se develará el misterio.</p>
                    <div className={styles.buttons1columns}>
                      <div className={styles.buttonBig}>
                        <ButtonBig url={'/el-cubo/temporada-2/lineal'} text="    Ver Película    " />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  )
};

export default Selector;