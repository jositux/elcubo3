import React, { Fragment } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import styles from './season3.slider.desktop.module.scss';
import Links from 'constants/Links';


export const SlidersDesktop = ({ isLoggedIn }) => {
  return (
    <Fragment>
        <div id={styles.SliderContainer}>
         
          <img className={styles.SliderImage} src="/images/season3/slider/home_slider_01.jpg" />
          
          <div className={ `${styles.textSlider1}` }>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país. 
              <h2>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</h2>
            </h1>
          </div>
        </div>

        <div id={styles.SliderContainer}>
          
          <img className={styles.SliderImage} src="/images/season3/slider/home_slider_02.jpg" />
          
          <div className={ `${styles.textSlider2}` }>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.
              <h2>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</h2>
            </h1>
          </div>
        </div>
        
        <div id={styles.SliderContainer}>
          
          <img className={styles.SliderImage} src="/images/season3/slider/home_slider_03.jpg" />
          
          <div className={ `${styles.textSlider3}` }>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.
              <h2>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</h2>
            </h1>
          </div>
          <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
            }
          </div>
        </div>
    </Fragment>
  )
}
