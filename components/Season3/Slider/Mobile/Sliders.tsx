import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Links from 'constants/Links';
import React, { Fragment } from 'react';
import styles from './season3.slider.mobile.module.scss';



export const SlidersMobile = ({ isLoggedIn, onGuest }) => {
  return (
    <Fragment>
      <div className={styles.VideoContainer}>
        <div className={styles.LogoTeaser}>
          <img src="/images/season3/logo-test.png" />
        </div>
        <a className={styles.ButtonTeaser} href="#" data-video="">
          <span>Ver teaser</span>
          <img src="/images/season3/icon-play-teaser-mobile.png" />
        </a>
      </div> 

      <div className={styles.SlidersContainer}>
        <div className={styles.Images}>
          <div className={styles.ButtonContainerTop}>
              {isLoggedIn 
                ? <ButtonHome url={Links.register} text="Iniciar experiencia" />
                : <ButtonHome 
                    type="button" 
                    onClick={onGuest} 
                    text="Iniciar experiencia" 
                  />
              }
          </div>
          <div className={styles.TextContent}>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país.</h1>
            <p>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</p>
          </div>
          <div className={styles.IconArrowBottom}>
            <img src="/images/season3/arrow-bottom-mobile.png" />
          </div>
        </div>

        <div className={styles.Images}>
          <div className={styles.TextContent}>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.</h1>
            <p>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</p>
          </div>
          <div className={styles.IconArrowBottom}>
            <img src="/images/season3/arrow-bottom-mobile.png" />
          </div>
        </div>

        <div className={styles.Images}>
          <div className={styles.TextContent}>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.</h1>
            <p>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</p>
          </div>
          <div className={styles.IconArrowBottom}>
            <img src="/images/season3/arrow-bottom-mobile.png" />
          </div>
          <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome 
                  type="button" 
                  onClick={onGuest} 
                  text="Iniciar experiencia" 
                />
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}


