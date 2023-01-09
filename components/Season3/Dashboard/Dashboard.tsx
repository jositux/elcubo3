import React, { Fragment, useState, useRef, useEffect } from 'react';
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Progress from 'components/Season3/Shared/Progress/Progress';
import Characters from './Characters';
import VideoFadeModal from 'components/Season3/Modal/VideoFadeModal';
import disableScroll from 'disable-scroll';
import styles from './dashboard.module.scss';


const Dashboard = ({ char,showModal }) => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState('482203');

  const [soledadPercent, setSoledadPercent] = useState(0);
  const [diegoPercent, setDiegoPercent] = useState(0);
  const [juanPercent, setJuanPercent] = useState(0);
  const [yennyPercent, setYennyPercent] = useState(0);
  const [guillermoPercent, setGuillermoPercent] = useState(0);

  const handleOnPlayVideo = () => {
    setIsOpen(true);
    disableScroll.on();
  };

  const handleOnVideoEnd = () => {
    setIsOpen(false);
    disableScroll.off();
  };

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
          case 'soledad':
            setSoledadPercent(data.percent);
            break;
          case 'diego':
            setDiegoPercent(data.percent);
            break;
          case 'juan':
            setJuanPercent(data.percent);
            break;
          case 'yenny':
            setYennyPercent(data.percent);
            break;
          case 'guillermo':
            setGuillermoPercent(data.percent);
            break;
          default:
            break;
        } 
      }
    });
   
  }, [showModal])

  return (
    <Fragment>
      <div className={styles.DashboardPageContainer}>

        <div className={styles.CharacterBackground}>

          <div className={`${styles.Content} ${styles['Char-' + char]}`}>
            <h2>Dashboard</h2>
            <p>Completa la historia de cada personaje y desbloquea su <strong>confesionario</strong>.<br />
              Completa todas las historias y desbloquea la <strong>infografía</strong>.</p>

            <div className={styles.Characters}>
              <div className={`${styles.row} ${styles.rowJuan}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <img src="/images/season3/dashboard/juan.png" />
                  </div>
                  <div className={styles.name}>
                    <h6>Juan de Jesús</h6>
                    <a href="../interactivo/juan">Ver historia</a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={juanPercent} />
                  </div>
                </div>
                <div className={styles.column2}>
                  {
                    juanPercent === 100 
                      ? <a onClick={() => { setVideo('485843'); handleOnPlayVideo(); }} className={styles.buttonConfesionario}>
                          VER CONFESIONARIO
                        </a>
                      : ''
                  }
                </div>
              </div>
              <div className={`${styles.row} ${styles.rowGuillermo}`}>
                <div className={`${styles.column1} ${styles.full}`}>
                  <div className={styles.avatar}>
                    <img src="/images/season3/dashboard/guillermo.png" />
                  </div>
                  <div className={styles.name}>
                    <h6>Guillermo</h6>
                    <a href="../interactivo/guillermo">Ver historia</a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={guillermoPercent} />
                  </div>
                </div>
                <div className={styles.column2}>
                  {
                    guillermoPercent === 100
                      ? <a onClick={() => { setVideo('485841'); handleOnPlayVideo(); }} className={styles.buttonConfesionario}>
                          VER CONFESIONARIO
                        </a>
                      : ''
                  }
                </div>
              </div>
              <div className={`${styles.row} ${styles.rowYenny}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <img src="/images/season3/dashboard/yenny.png" />
                  </div>
                  <div className={styles.name}>
                    <h6>Yenny</h6>
                    <a href="../interactivo/yenny">Ver historia</a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={yennyPercent} />
                  </div>
                </div>
                <div className={styles.column2}>
                  {
                    yennyPercent === 100
                      ? <a onClick={() => { setVideo('485847'); handleOnPlayVideo(); }} className={styles.buttonConfesionario} className={styles.buttonConfesionario}>
                          VER CONFESIONARIO
                        </a>
                      : ''
                  }
                </div>
              </div>
              <div className={`${styles.row} ${styles.rowDiego}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <img src="/images/season3/dashboard/diego.png" />
                  </div>
                  <div className={styles.name}>
                    <h6>Diego</h6>
                    <a href="../interactivo/diego">Ver historia</a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={diegoPercent} />
                  </div>
                </div>
                <div className={styles.column2}>
                  {
                    diegoPercent === 100
                      ? <a onClick={() => { setVideo('485839'); handleOnPlayVideo(); }} className={styles.buttonConfesionario}>
                          VER CONFESIONARIO
                        </a>
                      : ''
                  }
                </div>
              </div>
              <div className={`${styles.row} ${styles.rowSoledad}`}>
                <div className={styles.column1}>
                  <div className={styles.avatar}>
                    <img src="/images/season3/dashboard/soledad.png" />
                  </div>
                  <div className={styles.name}>
                    <h6>Soledad</h6>
                    <a href="../interactivo/soledad">Ver historia</a>
                  </div>
                  <div className={styles.progress}>
                    <Progress percent={soledadPercent} />
                  </div>
                </div>
                <div className={styles.column2}>
                  {
                    soledadPercent === 100
                      ? <a onClick={() => { setVideo('485845'); handleOnPlayVideo(); }} className={styles.buttonConfesionario}>
                          VER CONFESIONARIO
                        </a>
                      : ''
                  }
                  
                </div>
              </div>

              <div className={`${styles.Info}`}>
                {
                  (soledadPercent && juanPercent && guillermoPercent && yennyPercent && diegoPercent ) === 100
                    ? <a href="/el-cubo/temporada-3/recompensa/timeline" className={styles.buttonInfo}>
                        VER INFOGRAFIA
                      </a>
                    : ''
                }
              </div>

            </div>

          </div>
          <div className={`${styles['Popup-' + char]}`}>
            <Characters characters={characters} />
          </div>
          {
            characters.map((c, index) => (
              c.name == char ?
                <div key={index} className={`${styles.ContainerCharacter} ${styles[c.name]} `}>

                  <div className={styles.column}>
                    <img src={c.icon2} />
                  </div>
                  <div className={styles.column}>
                    <h2>{c.realName}</h2>
                    <p>{c.description}</p>
                    {/*<a>Ver Confesionario
              <PersonajeArrow />
          </a>*/}
                  </div>

                </div> : ''


            ))
          }

          {/*<div className={styles.coverBG}></div>*/}
        </div>

      </div>

      <div className={styles.fullScreenVideo}>
        {isOpen &&
          <VideoFadeModal
            videoId={video}
            showModal={isOpen}
            setShowModal={setIsOpen}
            onVideoEnded={handleOnVideoEnd}
            autoPlay={true}
          />
        }
      </div>

    </Fragment>
  )
};

export default Dashboard;