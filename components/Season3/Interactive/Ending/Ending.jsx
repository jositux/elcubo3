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


  return (
    <React.Fragment>
      <div className={`${styles.containerCover} ${styles.containerVideoModal} ${styles.open}`}>

        {/*<span className={styles.iconDashboard} onClick={onButtonClicked}>
          <IconDashboard />
  </span>*/}
        <div className={`${styles.container} ${styles.fadeIn}`}>

          <img className={styles.imgCharacter} src={imgUrl} />
          <div className={styles.child}>
            <a href="/el-cubo/temporada-3/personajes?ref=view" className={styles.Back} >
              <Back /> <span>Elige otro personaje</span>
            </a>

            <div className={`${styles.EndingCover} ${styles.fadeIn}`}>
              <div className={styles.Ending}>
                <h1>¡Has desbloqueado el confesionario de {name}!</h1>
                <div className={styles.EndingContent}>

                  <a onClick={handleOnPlayVideo}>Ver confesionario <PersonajeArrow /></a>

                </div>
              </div>
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
