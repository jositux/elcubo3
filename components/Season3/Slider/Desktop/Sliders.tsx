import React, { Fragment, useEffect, useRef, useState } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import styles from './season3.slider.desktop.module.scss';
import Credits from 'components/Season3/Season/Credits/Credits';
import Links from 'constants/Links';
import Footer from 'components/Footer/Footer';

export const SlidersDesktop = ({ isLoggedIn, onGuest }) => {

  useEffect(() => {
    const videoContainer = document.querySelector('#VideoContainer') as HTMLElement;
    const contentResizable = document.querySelector('#ContentResizable') as HTMLElement;
    const logoTeaser = document.querySelector('#LogoTeaser') as HTMLElement;
    const headerHeigth = 90;
    const incrementTop = 1;

    const slider1 = document.querySelector('#slider1') as HTMLElement;
    const textContent1 = document.querySelector('#textContent1') as HTMLElement;
    const height1 = videoContainer.offsetHeight + headerHeigth;

    const slider2 = document.querySelector('#slider2') as HTMLElement;
    const textContent2 = document.querySelector('#textContent2') as HTMLElement;
    const height2 = height1 + slider1.offsetHeight;

    const slider3 = document.querySelector('#slider3') as HTMLElement;
    const height3 = height2 + slider2.offsetHeight;

    const whitespace = document.querySelector('#whitespace') as HTMLElement;

    console.log(window.scrollY);
    const getPosY = () => {

      if (window.scrollY <= headerHeigth) {
        /* 100 equivale al 100% del ancho */
        contentResizable.style.width = 100 - window.scrollY / 5 + '%';
        /* incrementTop es el grado de margen superior mientras se hace scroll */
        contentResizable.style.top =  window.scrollY * incrementTop + 'px';
      }

      
      if(window.scrollY >= height1 ) {
        slider1.style.position = 'relative';
      }
      else {
        slider1.style.position = 'fixed';
      }

      if(window.scrollY >= height2 ) {
        slider2.style.position = 'relative';
      }
      else {
        slider2.style.position = 'fixed';
      }

      if(window.scrollY >= height3 ) {
        slider3.style.position = 'relative';
        whitespace.style.display = 'none';
      }
      else {
        slider3.style.position = 'fixed';
        whitespace.style.display = 'block';
      }

    }
    
    window.addEventListener('scroll', getPosY);
    return () => {
      window.removeEventListener('scroll', getPosY);
    }
  }, [])



  return (
    <Fragment>
      <div id='VideoContainer' className={ styles.VideoContainer }>
        <div id='VideoContent' className={ styles.VideoContent }>
          <div id="ContentResizable" className={ styles.ContentResizable }>
          <img src="/images/season3/steals/0-home-steal-desktop.jpg" className={styles.StealTeaser} />
          <div id='LogoTeaser' className={styles.LogoTeaser}>
            <img src="/images/season3/logo-caminos-de-jordan.png" />
          </div>
          </div>
        </div>
        <div className={`${styles.TextContent } ${styles.TextContentRight}`}>
          <article>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país.</h1>
            <p>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</p>
          </article>
        </div>
      </div>

      <div className={styles.SlidersContainer}>
        <div id='slider1' className={styles.Images}>
          <div id='textContent1' className={`${styles.TextContent } ${styles.TextContentLeft}`}>
            <article>
              <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.</h1>
              <p>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</p>
            </article>
          </div>
        </div>
        <div id='slider2' className={styles.Images}>
          <div id='textContent2' className={`${styles.TextContent } ${styles.TextContentRight}`}>
            <article>
              <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.</h1>
              <p>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</p>
            </article>
          </div>
          <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome type="button" onClick={onGuest} text="Iniciar experiencia" />
            }
          </div>
        </div>
        <div id='slider3' className={styles.Images}>
          <Credits />
          <Footer />
        </div>
        
        <div id="whitespace" className={styles.WhiteSpace}></div>
      </div>
    </Fragment>
  )
}
