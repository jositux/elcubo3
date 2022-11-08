import React, { Fragment } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import styles from './season3.slider.desktop.module.scss';
import Links from 'constants/Links';



export const SlidersDesktop = ({ isLoggedIn }) => {

  return (
    <Fragment>
      <div className={styles.SlidersContainer}>

        <div className={styles.images}>
          <div className={styles.content}>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país.</h1>
            <p>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</p>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.content}>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.</h1>
            <p>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</p>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.content}>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.</h1>
            <p>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</p>
          </div>
          <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
            }
          </div>
        </div>

      </div>
    </Fragment>
  )
}
