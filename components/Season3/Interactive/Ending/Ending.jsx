import React, { useEffect, useState } from 'react';
import styles from './Ending.module.scss';
import IconDashboard from 'components/Season3/Svg/Dashboard';
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Back from 'components/Season3/Svg/Back';
import VideoFadeModal from 'components/Season3/Modal/VideoFadeModal';

const Ending = ({ name, onButtonClicked }) => {

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


    console.log('los que tienen 100 son / ' + countFull);

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
            <a href="/el-cubo/temporada-3/personajes?ref=view" className={styles.Back} >
              <Back /> <span>Elige otro personaje</span>
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
                  <h1>¡Lo lograste!</h1>
                  <h2>¡Has terminado tu camino con {name}!</h2>
                  <p>¿Quieres seguir recorriendo los caminos de Jordán? Acompaña a otro personaje y completa la historia del pueblo al final. </p>
                  <div className={styles.EndingContent}>

                    {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                    <a href="/el-cubo/temporada-3/personajes?ref=view">
                      Elige otro personaje <PersonajeArrow />
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
                    <h1>¡Lo lograste!</h1>
                    <h2>¡Has terminado tu camino con {name}!</h2>
                    <p>Recuerda que una vez completes las cinco historias, abrirás la recompensa final. </p>
                    <div className={styles.EndingContent}>

                      {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                      <a href="/el-cubo/temporada-3/personajes?ref=view">
                        Elige otro personaje <PersonajeArrow />
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
                      <h1>¡Lo lograste!</h1>
                      <h2>¡Has terminado tu camino con {name}!</h2>
                      <p>Al desbloquear otra historia, estarás más cerca de revelar la foto de Jordán.</p>
                      <div className={styles.EndingContent}>

                        {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                        <a href="/el-cubo/temporada-3/personajes?ref=view">
                          Elige otro personaje <PersonajeArrow />
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
                        <h1>¡Lo lograste!</h1>
                        <h2>¡Has terminado tu camino con {name}!</h2>
                        <div className={styles.EndingContent}>

                          {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                          <a href="/el-cubo/temporada-3/personajes?ref=view">
                            Elige otro personaje <PersonajeArrow />
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
                          <h2>¡Has terminado tu camino con {name}!</h2>
                          <p>
                            ¡Llegaste al final! Sin embargo, este no es el verdadero final. Ahora podrás acceder a la recompensa. Una línea del tiempo que te contará todos los detalles de la historia de Jordán, artículos, investigaciones, fotos… gracias por recorrer los caminos hermosos y difíciles de la cordillera colombiana.
                          </p>

                          <div className={styles.EndingContent}>

                            {/*<a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>*/}

                            <a href="/el-cubo/temporada-3/recompensa/timeline">
                              Ver infografía <PersonajeArrow />
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
