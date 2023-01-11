import React from "react";
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Back from 'components/Season3/Svg/Back';
import styles from './season3.personajesModal.module.scss';

const PersonajesModal = ({ ...props }) => {

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        props.onClosePersonajesModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        props.onClosePersonajesModal
      }
    });

  });

  return (
    <div id="container" className={`${styles.containerCover} ${props.showPersonajesModal ? styles.open : ""}`}>

      <div className={styles.container}>
        <div className={styles.child}>

          <a className={styles.Back} onClick={props.onClosePersonajesModal}>
            <Back /> <span>Volver</span>
          </a>
          <p className={styles.t_close} onClick={props.onClosePersonajesModal}>
          </p>
          <img className={styles.imgCover} src={props.background} />

          <div className={styles.ContainerCharacter}>
            {/*<div className={styles.column}>
            <img src={props.icon}  />
  </div>*/}
            <div className={styles.column}>
              <h2>{props.name}</h2>
              <p>{props.description}</p>
              <a href={props.link}>INICIAR EXPERIENCIA
                <PersonajeArrow />
              </a>
            </div>
          </div>
          <div className={styles.coverBG}></div>
        </div>
      </div>
    </div>
  );
};

export default PersonajesModal;