import React, { useEffect, useState } from 'react';
import styles from './Ending.module.scss';
import IconDashboard from 'components/Season3/Svg/Dashboard';
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Back from 'components/Season3/Svg/Back';
import VideoFadeModal from 'components/Season3/Modal/VideoFadeModal';

import { useRouter } from 'next/router';

const Ending = ({ name }) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState('482203');

  const handleOnPlayVideo = () => {
    setIsOpen(true);
  };

  const handleOnVideoEnd = () => {
    setIsOpen(false);
  };

  const paramName = name.split(" ")[0].toLowerCase();
  const imgUrl = `/images/season3/steals/${paramName}.jpg`;

  useEffect(() => {
    switch (paramName) {
      case 'juan':
        setVideo('485843')
        break;
      case 'guillermo':
        setVideo('485841');
        break;
      case 'yenny':
        setVideo('485847');
        break;
      case 'diego':
        setVideo('485839');
        break;
      case 'soledad':
        setVideo('485845');
        break;
      default:
        break;
    }

  }, []);


  const [juanPercent, setJuanPercent] = useState(0);
  const [guillermoPercent, setGuillermoPercent] = useState(0);
  const [yennyPercent, setYennyPercent] = useState(0);
  const [soledadPercent, setSoledadPercent] = useState(0);
  const [diegoPercent, setDiegoPercent] = useState(0);

  const [countFull, setCountFull] = useState(0);

  useEffect(() => {

    const dataJuan = JSON.parse(localStorage.getItem(`'juan'`));
    if (dataJuan) {
      setJuanPercent(dataJuan.percent);
    }

    const dataGuillermo = JSON.parse(localStorage.getItem(`'guillermo'`));
    if (dataGuillermo) {
      setGuillermoPercent(dataGuillermo.percent);
    }

    const dataDiego = JSON.parse(localStorage.getItem(`'diego'`));
    if (dataDiego) {
      setDiegoPercent(dataDiego.percent);
    }

    const dataYenny = JSON.parse(localStorage.getItem(`'yenny'`));
    if (dataYenny) {
      setYennyPercent(dataYenny.percent);
    }

    const dataSoledad = JSON.parse(localStorage.getItem(`'soledad'`));
    if (dataSoledad) {
      setSoledadPercent(dataSoledad.percent);
    }


    setCountFull([juanPercent, guillermoPercent, yennyPercent, soledadPercent, diegoPercent].filter(element => element === 100).length);


    // console.log('los que tienen 100 son / ' + countFull);

  }, [])


  return (
    <React.Fragment>
      <div className={`${styles.containerCover} ${styles.open}`}>

        {/*<span className={styles.iconDashboard} onClick={onButtonClicked}>
          <IconDashboard />
  </span>*/}
        <div className={`${styles.container} ${styles.fadeIn}`}>

          <img className={styles.imgCharacter} src={imgUrl} />
          <div className={styles.child}>
            <a
              href=
              {
                router.locale === 'en' ?
                  "/en/el-cubo/temporada-3/personajes?ref=view"
                  :
                  "/el-cubo/temporada-3/personajes?ref=view"
              }
              className={styles.Back} >
              <Back />
              <span>
                {
                  router.locale === 'en' ?
                    "Choose another Character"
                    :
                    "Elige otro personaje"
                }
              </span>
            </a>

            <div className={`${styles.EndingCover} ${styles.EndingFinal} ${styles.fadeIn}`}>

              {(
                [juanPercent,
                  guillermoPercent,
                  yennyPercent,
                  soledadPercent,
                  diegoPercent].
                  filter(element => element === 100).length === 1
              ) ?
                <div className={styles.Ending}>
                  <h1>
                    {
                      router.locale === 'en' ?
                        'You made it!' :
                        '¡Lo lograste!'
                    }
                  </h1>
                  <h2>
                    {
                      router.locale === 'en' ?
                        'You have finished your journey with ' :
                        '¡Has terminado tu camino con '
                    }
                    {name}!</h2>
                  <p>
                    {
                      router.locale === 'en' ?
                        'Do you want to continue exploring? Join another character and complete the story' :
                        '¿Quieres seguir recorriendo los caminos de Jordán? Acompaña a otro personaje y completa la historia.'
                    }

                  </p>
                  <div className={styles.EndingContent}>

                    {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                    <a
                      href=
                      {
                        router.locale === 'en' ?
                          "/en/el-cubo/temporada-3/personajes?ref=view"
                          :
                          "/el-cubo/temporada-3/personajes?ref=view"

                      }>
                      {
                        router.locale === 'en' ?
                          'Choose another character'
                          :
                          'Elige otro personaje'
                      }
                      <PersonajeArrow />
                    </a>
                  </div>
                </div>
                :
                (
                  [juanPercent,
                    guillermoPercent,
                    yennyPercent,
                    soledadPercent,
                    diegoPercent].
                    filter(element => element === 100).length === 2
                ) ?
                  <div className={styles.Ending}>
                    <h1>
                      {
                        router.locale === 'en' ?
                          'You made it!' :
                          '¡Lo lograste!'
                      }
                    </h1>
                    <h2>
                      {
                        router.locale === 'en' ?
                          'You have finished your journey with ' :
                          '¡Has terminado tu camino con '
                      }
                      {name}!
                    </h2>
                    <p>

                      {
                        router.locale === 'en' ?
                          'Remember, when you complete all the five stories, you will get the final award.' :
                          'Recuerda que una vez completes las cinco historias, abrirás la recompensa final.'
                      }

                    </p>
                    <div className={styles.EndingContent}>

                      {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                      <a
                        href=
                        {
                          router.locale === 'en' ?
                            "/en/el-cubo/temporada-3/personajes?ref=view"
                            :
                            "/el-cubo/temporada-3/personajes?ref=view"

                        }>
                        {
                          router.locale === 'en' ?
                            'Choose another character'
                            :
                            'Elige otro personaje'
                        }
                        <PersonajeArrow />
                      </a>
                    </div>
                  </div>
                  :
                  (
                    [juanPercent,
                      guillermoPercent,
                      yennyPercent,
                      soledadPercent,
                      diegoPercent].
                      filter(element => element === 100).length === 3
                  ) ?
                    <div className={styles.Ending}>
                      <h1>
                        {
                          router.locale === 'en' ?
                            'You made it!' :
                            '¡Lo lograste!'
                        }
                      </h1>
                      <h2>
                        {
                          router.locale === 'en' ?
                            'You have finished your journey with ' :
                            '¡Has terminado tu camino con '
                        }
                        {name}!</h2>
                      <p>
                        {
                          router.locale === 'en' ?
                            'By unlocking another story, you will be closer to revealing the picture of Jordán.' :
                            'Al desbloquear otra historia, estarás más cerca de revelar la foto de Jordán.'
                        }
                      </p>
                      <div className={styles.EndingContent}>

                        {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                        <a
                          href=
                          {
                            router.locale === 'en' ?
                              "/en/el-cubo/temporada-3/personajes?ref=view"
                              :
                              "/el-cubo/temporada-3/personajes?ref=view"

                          }>
                          {
                            router.locale === 'en' ?
                              'Choose another character'
                              :
                              'Elige otro personaje'
                          }
                          <PersonajeArrow />
                        </a>
                      </div>
                    </div>
                    :
                    (
                      [juanPercent,
                        guillermoPercent,
                        yennyPercent,
                        soledadPercent,
                        diegoPercent].
                        filter(element => element === 100).length === 4
                    ) ?
                      <div className={styles.Ending}>
                        <h1>
                          {
                            router.locale === 'en' ?
                              'You made it!' :
                              '¡Lo lograste!'
                          }
                        </h1>
                        <h2>
                          {
                            router.locale === 'en' ?
                              'You have finished your journey with ' :
                              '¡Has terminado tu camino con '
                          }
                          {name}!
                        </h2>  <div className={styles.EndingContent}>

                          {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                          <a
                            href=
                            {
                              router.locale === 'en' ?
                                "/en/el-cubo/temporada-3/personajes?ref=view"
                                :
                                "/el-cubo/temporada-3/personajes?ref=view"

                            }>
                            {
                              router.locale === 'en' ?
                                'Choose another character'
                                :
                                'Elige otro personaje'
                            }
                            <PersonajeArrow />
                          </a>
                        </div>
                      </div>
                      :
                      (
                        [juanPercent,
                          guillermoPercent,
                          yennyPercent,
                          soledadPercent,
                          diegoPercent].
                          filter(element => element === 100).length === 5
                      ) ?
                        <div className={styles.Ending}>
                          <h2>
                            {
                              router.locale === 'en' ?
                                'You have finished your journey with ' :
                                '¡Has terminado tu camino con '
                            }
                            {name}!
                          </h2>
                          <p>
                            {
                              router.locale === 'en' ?
                                "You've reached the end! However, the journey is not yet finished. Now, you will be able to access the reward: a timeline featuring articles, research, and photos that will provide all the details about Jordán. Thank you for exploring the beautiful and challenging paths of the Colombian mountains." :
                                '¡Llegaste al final! Sin embargo, aún no termina el camino. Ahora podrás acceder a la recompensa: una línea de tiempo con artículos, investigaciones y fotos que te contarán todos los detalles de Jordán. Gracias por recorrer los hermosos y difíciles caminos de la cordillera colombiana.'
                            }
                          </p>

                          <div className={styles.EndingContent}>

                            {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                            <a href=
                              {
                                router.locale === 'en' ?
                                  "/en/el-cubo/temporada-3/recompensa"
                                  :
                                  "/el-cubo/temporada-3/recompensa"
                              }
                            >
                              {
                                router.locale === 'en' ?
                                  "View infographic"
                                  :
                                  "Ver infografía"
                              } <PersonajeArrow />
                            </a>
                          </div>
                        </div>
                        :
                        ''
              }

              {/*(juanPercent === 100 && guillermoPercent === 100 && yennyPercent === 100 && soledadPercent === 100 && diegoPercent === 100)
                ?
                <div className={styles.Ending}>
                  <h2>¡Has terminado tu camino con {name} y desbloqueado la infografía
                    del final de la Experiencia!</h2>

                  <div className={styles.EndingContent}>

                    {<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>}

                    <a href="/el-cubo/temporada-3/recompensa/timeline">
                      Ver infografía <PersonajeArrow />
                    </a>
                  </div>
                </div>
                :
                <div className={styles.Ending}>
                  <h1>¡Lo lograste!</h1>
                  <h2>¡Has terminado tu camino con {name}!</h2>
                  <div className={styles.EndingContent}>

                    {<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>}

                    <a href="/el-cubo/temporada-3/personajes?ref=view">
                      Elige otro personaje <PersonajeArrow />
                    </a>
                  </div>
            </div>*/}
            </div>
          </div>
        </div>

        <div className={styles.fullScreenVideo}>
          {//isOpen &&
            <VideoFadeModal
              videoId={video}
              showModal={isOpen}
              setShowModal={setIsOpen}
              closeVideo={handleOnVideoEnd}
              autoPlay={true}
            />
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ending;
