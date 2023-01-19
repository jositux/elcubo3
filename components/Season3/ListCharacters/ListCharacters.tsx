import React, { Fragment, useState, useRef, useEffect } from 'react';
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Progress from 'components/Season3/Shared/Progress/Progress';
import styles from './listCharacters.module.scss';


const ListCharacters = ({ char, percentParam }) => {

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

          <div className={`${styles.Content} ${styles['Char-' + char]}`}>
            <div className={styles.Characters}>
              <div className={`${styles.row} ${styles.rowJuan}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title="Historia de Juan de Jesús" href="../interactivo/juan">
                      <h2>Juan de Jesús</h2><PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <a title="Historia de Juan de Jesús" href="../interactivo/juan">
                      <Progress percent={juanPercent} />
                    </a>
                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowGuillermo}`}>
                <div className={`${styles.column1} ${styles.full}`}>
                  <div className={styles.avatar}>
                    <a title="Historia de Guillermo" href="../interactivo/guillermo">
                      <h2>Guillermo</h2><PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <a title="Historia de Guillermo" href="../interactivo/guillermo">
                      <Progress percent={guillermoPercent} />
                    </a>
                  </div>
                </div>

              </div>
              <div className={`${styles.row} ${styles.rowYenny}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <a title="Historia de Yenny" href="../interactivo/yenny">
                      <h2>Yenny</h2><PersonajeArrow />
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
                    <a title="Historia de Diego" href="../interactivo/diego">
                      <h2>Diego</h2><PersonajeArrow />
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
                    <a title="Historia de Soledad" href="../interactivo/soledad">
                      <h2>Soledad</h2><PersonajeArrow />
                    </a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={soledadPercent} />
                  </div>
                </div>

              </div>

              <div className={styles.timeline}>
                <span className={styles.line} />
                <p>Fiesta de Santa Rosa</p>
              </div>

              <div className={`${styles.Info}`}>
                {
                  (soledadPercent && juanPercent && guillermoPercent && yennyPercent && diegoPercent) === 100
                    ? <a href="/el-cubo/temporada-3/recompensa/timeline" className={styles.buttonInfo}>
                      VER INFOGRAFIA
                    </a>
                    : <a className={styles.buttonInfoInactive}>
                      VER INFOGRAFIA
                    </a>
                }
              </div>

            </div>

          </div>

        </div>

      </div>

    </Fragment >
  )
};

export default ListCharacters;