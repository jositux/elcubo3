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

          <div className={styles.Close}>
            <span className={styles.t_close} onClick={props.onClosePersonajesModal}>
            </span>
          </div>
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
              <div>
                <p><strong>Edad</strong>: {props.age}
                  &nbsp;  &nbsp;<strong>    Profesión</strong>: {props.proof}
                  <br />
                  {`${props.born.trim()}` !== '' ?
                    props.born
                    : ''}

                  <br /><strong>Residencia</strong>: {props.address}
                  <br /><br />
                  {props.description}</p>
                <a href={props.link}>Conoce a {props.nameButton}
                  <PersonajeArrow />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.coverBG}></div>
        </div>
      </div>
    </div >
  );
};

export default PersonajesModal;