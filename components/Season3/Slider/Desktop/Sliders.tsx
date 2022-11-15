import React, { Fragment, useEffect, useRef, useState } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import styles from './season3.slider.desktop.module.scss';
import Links from 'constants/Links';



export const SlidersDesktop = ({ isLoggedIn, onGuest }) => {

  useEffect(() => {
    const videoContainer = document.querySelector('#VideoContainer') as HTMLElement;
    const logoTeaser = document.querySelector('#LogoTeaser') as HTMLElement;

    const slider1 = document.querySelector('#slider1') as HTMLElement;
    const textContent1 = document.querySelector('#textContent1') as HTMLElement;

    const slider2 = document.querySelector('#slider2') as HTMLElement;
    const textContent2 = document.querySelector('#textContent2') as HTMLElement;

    const slider3 = document.querySelector('#slider3') as HTMLElement;
    const textContent3 = document.querySelector('#textContent3') as HTMLElement;
    
    console.log(slider1);
    console.log(slider2);
    console.log(slider3);

    const getPosY = () => {
      console.log(window.scrollY);
      if (window.scrollY <= 56) {
        videoContainer.style.transform = 'scale(1)';
        videoContainer.style.top = '5rem';
        logoTeaser.style.top = '37rem';
      } else {
        //vista chica
        videoContainer.style.transform = 'scale(0.9)';
        videoContainer.style.top = '9.5rem';
        logoTeaser.style.top = '40rem';
      }

      if (window.scrollY < 530) {
        textContent1.style.opacity = '0';
      } else if(window.scrollY === 530 || window.scrollY < 630) {
        textContent1.style.opacity = '0.5';
      } else if(window.scrollY >= 630) {
        textContent1.style.opacity = '1';
      }

      if (window.scrollY < 1854) {
        slider1.style.backgroundAttachment = 'scroll';
        slider2.style.backgroundAttachment = 'fixed';
      } else if(window.scrollY >= 1855 && window.scrollY < 2862) {  
        slider2.style.backgroundAttachment = 'scroll';
        slider3.style.backgroundAttachment = 'fixed';
      } else if(window.scrollY >= 2862) {
        slider3.style.backgroundAttachment = 'scroll';
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
        <div id='LogoTeaser' className={styles.LogoTeaser}>
          <img src="/images/season3/logo-caminos-de-jordan.png" />
        </div>
      </div>

      <div className={styles.SlidersContainer}>
        <div id='slider1' className={styles.Images}>
          <div id='textContent1' className={styles.TextContent}>
            <h1>Jordán Sube es el pueblo Colombiano con la menor cantidad de almas del país.</h1>
            <p>¿Qué sucedió en Jordán para pasar de la prosperidad a ser un pueblo fantasma?</p>
          </div>
        </div>

        <div id='slider2' className={styles.Images}>
          <div id='textContent2' className={styles.TextContent}>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.</h1>
            <p>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</p>
          </div>
        </div>

        <div id='slider3' className={styles.Images}>
          <div id='textContent3' className={styles.TextContent}>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?.</h1>
            <p>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</p>
          </div>
          <div className={styles.ButtonContainerBottom}>
            {isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome type="button" onClick={onGuest} text="Iniciar experiencia" />
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}
