import React, { Fragment, useState, useRef, useEffect } from 'react';
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Progress from 'components/Season3/Shared/Progress/Progress';
import styles from './listCharacters.module.scss';

const ListCharacters = ({ char, percentParam, timeline, router }) => {

  const [juanPercent, setJuanPercent] = useState(0);
  const [guillermoPercent, setGuillermoPercent] = useState(0);
  const [yennyPercent, setYennyPercent] = useState(0);
  const [soledadPercent, setSoledadPercent] = useState(0);
  const [diegoPercent, setDiegoPercent] = useState(0);

  const characters = [
    {
      name: 'soledad',
      realName: 'Soledad',
      description: '“Los cambios siempre dan miedo, pero hay que hacerlos con miedos y todo“',
      background: '/images/season3/steals/personaje-soledad.jpg',
      icon: '/images/season3/map/popups/popup-soledad-yellow.png',
      icon2: '/images/season3/map/popups/popup-soledad.png',
      link: '../interactivo/soledad',
    },
    {
      name: 'diego',
      realName: 'Diego',
      description: '“Para lograr las cosas primero hay que soñarlas“',
      background: '/images/season3/steals/personaje-diego.jpg',
      icon: '/images/season3/map/popups/popup-diego-yellow.png',
      icon2: '/images/season3/map/popups/popup-diego.png',
      link: '../interactivo/diego',
    },
    {
      name: 'juan',
      realName: 'Juan de Jesús',
      description: '“Uno busca su misión en la vida, pero a veces es la propia misión la que a uno lo encuentra“',
      background: '/images/season3/steals/personaje-juan.jpg',
      icon: '/images/season3/map/popups/popup-juan-yellow.png',
      icon2: '/images/season3/map/popups/popup-juan.png',
      link: '../interactivo/juan',
    },
    {
      name: 'yenny',
      realName: 'Yenny',
      description: '“Viajando se conoce la libertad“',
      background: '/images/season3/steals/personaje-yenny.jpg',
      icon: '/images/season3/map/popups/popup-yenny-yellow.png',
      icon2: '/images/season3/map/popups/popup-yenny.png',
      link: '../interactivo/yenny',
    },
    {
      name: 'guillermo',
      realName: 'Guillermo',
      description: '“Y si algún día me separo de María, espero encontrarla del otro lado“',
      background: '/images/season3/steals/personaje-guillermo.jpg',
      icon: '/images/season3/map/popups/popup-guillermo-yellow.png',
      icon2: '/images/season3/map/popups/popup-guillermo.png',
      link: '../interactivo/guillermo',
    },
  ];

  useEffect(() => {
    characters.forEach(c => {
      let data = JSON.parse(localStorage.getItem(`'${c.name}'`));

      if (data) {
        switch (c.name) {
          case 'juan':
            setJuanPercent(data.percent);
            break;
          case 'guillermo':
            setGuillermoPercent(data.percent);
            break;
          case 'yenny':
            setYennyPercent(data.percent);
            break;
          case 'diego':
            setDiegoPercent(data.percent);
            break;
          case 'soledad':
            setSoledadPercent(data.percent);
            break;
          default:
            break;
        }
      }
    });

  }, [percentParam])

  return (
    <Fragment>
      <div className={styles.DashboardPageContainer}>

        <div className={styles.CharacterBackground}>

          <div className={`${styles.Content} ${styles['Char-' + char]} ${!timeline ? styles.isInteractive : ''}`}>
            <div className={styles.Characters}>
              <div className={`${styles.row} ${styles.rowJuan}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title={
                      router.locale === "en" ?
                        "History of Juan de Jesús" :
                        "Historia de Juan de Jesús"
                    }
                      href={
                        router.locale === "en" ?
                          "/en/el-cubo/temporada-3/interactivo/juan" :
                          "/el-cubo/temporada-3/interactivo/juan"
                      }>
                      Juan de Jesús<PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>

                    <Progress percent={juanPercent} />

                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowGuillermo}`}>
                <div className={`${styles.column1} ${styles.full}`}>
                  <div className={styles.avatar}>
                    <a title={
                      router.locale === "en" ?
                        "History of Guillermo" :
                        "Historia de Guillermo"
                    } href={
                      router.locale === "en" ?
                        "/en/el-cubo/temporada-3/interactivo/guillermo" :
                        "/el-cubo/temporada-3/interactivo/guillermo"
                    }>
                      Guillermo<PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>

                    <Progress percent={guillermoPercent} />

                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowYenny}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title={
                      router.locale === "en" ?
                        "History of Yenny" :
                        "Historia de Yenny"
                    } href={
                      router.locale === "en" ?
                        "/en/el-cubo/temporada-3/interactivo/yenny" :
                        "/el-cubo/temporada-3/interactivo/yenny"
                    }>
                      Yenny<PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={yennyPercent} />
                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowDiego}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title={
                      router.locale === "en" ?
                        "History of Diego" :
                        "Historia de Diego"
                    } href={
                      router.locale === "en" ?
                        "/en/el-cubo/temporada-3/interactivo/diego" :
                        "/el-cubo/temporada-3/interactivo/diego"
                    }>
                      Diego<PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={diegoPercent} />
                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowSoledad}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title={
                      router.locale === "en" ?
                        "History of Soledad" :
                        "Historia de Soledad"
                    } href={
                      router.locale === "en" ?
                        "/en/el-cubo/temporada-3/interactivo/soledad" :
                        "/el-cubo/temporada-3/interactivo/soledad"
                    }>
                      Soledad <PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={soledadPercent} />
                  </div>
                </div>

              </div>

              <div className={styles.timeline}>
                <span className={styles.line} />
                <p>{
                  router?.locale === "en" ?
                    "Saint Rosa's day" :
                    "Fiesta de Santa Rosa"
                }
                  <br />
                  {
                    router?.locale === "en" ?
                      "(Jordan Sube patron saint)" :
                      "(Patrona de Jordán Sube)"
                  }
                </p>
              </div>


              {

                (juanPercent === 100 && guillermoPercent === 100 && yennyPercent === 100 && soledadPercent === 100 && diegoPercent === 100 && timeline)
                  ? <div className={`${styles.Info}`}>
                    <a href=
                      {
                        router.locale === "en" ?
                          "/en/el-cubo/temporada-3/recompensa" :
                          "/el-cubo/temporada-3/recompensa"
                      }
                      className={styles.buttonInfo}>
                      {
                        router.locale === "en" ?
                          "VIEW INFOGRAPHIC" :
                          "VER INFOGRAFIA"
                      }
                    </a></div>
                  : ''
              }


            </div>

          </div>

        </div>

      </div>

    </Fragment >
  )
};

export default ListCharacters;