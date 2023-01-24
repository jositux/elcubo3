import React from "react";
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import styles from './season3.personajesModalSlide.module.scss';

const PersonajesModal = ({ ...props }) => {

  console.log(props)

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        props.onClosePersonajesModal();
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        props.onClosePersonajesModal();
      }
    });

  });

  return (
    <div id="container" className={`${styles.containerCover} ${props.showPersonajesModal ? styles.open : ""}`}>

      <div className={styles.container}>
        <div className={styles.child}>

          <p className={styles.t_close} onClick={props.onClosePersonajesModal}>
          </p>
          {/*<img className={styles.imgCover} src={props.background} />*/}
          <div className={`${styles.coverImg} ${styles[props?.name.split(" ")[0].toLowerCase()]}`}>
            <img className={styles.imgCover} src='/images/season3/selector/personaje-juan.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-guillermo.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-yenny.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-diego.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-soledad.jpg' />
          </div>

          <div className={styles.ContainerCharacter}>
            {/*<div className={styles.column}>
            <img src={props.icon}  />
  </div>*/}
            <div className={styles.column}>
              <h2>{props.realName}</h2>
              <p>
                <span><strong>Edad</strong>: {props.age}<br /></span>
                <span><strong>Profesión</strong>: {props.proof}</span>
                {`${props.born.trim()}` !== '' ?
                  props.born
                  : ''}
                <span><strong>Residencia</strong>: {props.address}</span>
                <p>{props.description}</p>
                <a href={props.link}>Conoce a {props.nameButton}
                  <PersonajeArrow />
                </a>
              </p>
            </div>
          </div>
          <div className={styles.coverBG}></div>
        </div>
      </div>
    </div>
  );
};

export default PersonajesModal;