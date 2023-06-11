import React from "react";
import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import styles from './season3.personajesModalSlide.module.scss';
import { useRouter } from 'next/router';

const PersonajesModal = ({ ...props }) => {

  const router = useRouter();

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        props.onClosePersonajesModal();
      }
    };


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
            <img className={styles.imgCover} src='/images/season3/selector/personaje-juan0.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-guillermo0.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-yenny0.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-diego0.jpg' />
            <img className={styles.imgCover} src='/images/season3/selector/personaje-soledad0.jpg' />
          </div>

          <div className={styles.ContainerCharacter}>
            {/*<div className={styles.column}>
            <img src={props.icon}  />
  </div>*/}
            <div className={styles.column}>
              <h2>{props.realName}</h2>
              <div>
                <p>
                  <strong>
                    {
                      router.locale === "en" ?
                        "Age" :
                        "Edad"
                    }
                  </strong>: {props.age}
                  &nbsp;  &nbsp;<strong>     {
                    router.locale === "en" ?
                      "Proof" :
                      "Profesión"
                  }</strong>: {props.proof}
                  <br />

                  <br />
                  {props.description}</p>
                <a href={props.link}>{
                  router.locale === "en" ?
                    "Meet " :
                    "Conoce a "}
                  {props.nameButton}
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