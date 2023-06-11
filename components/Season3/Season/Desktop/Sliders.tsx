import React, { Fragment, useEffect, useRef, useState } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Credits from 'components/Season3/Season/Credits/Credits';
import Links from 'constants/Links';
import Footer from 'components/Footer/Footer';


import styles from './season3.slider.desktop.module.scss';


export const SlidersDesktop = ({ isLoggedIn, onGuest }) => {

  useEffect(() => {

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.50
    };

    function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('fadeOut_test', 'fadeIn_test');
        }
        else {
          entry.target.classList.replace('fadeIn_test', 'fadeOut_test');
        }
      });
    }

    const fadeElms = document.querySelectorAll('.fade_test');

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElms.forEach(el => observer.observe(el));

  }, [])



  return (
    <Fragment>

      <div className={styles.SlidersContainer}>
        <div id='slider0' className={styles.ImagesDesktop}>
          <img id='ImgBG0' src="/images/season3/slider/0.jpg" className={styles.ImgBG1} />
          <div id='Texto0' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article className='fade_test fadeOut_test'>
              <h1>Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir.</h1>
            </article>
          </div>
        </div>

        <div id='slider1' className={styles.ImagesDesktop}>
          <img id='ImgBG1' src="/images/season3/slider/1.jpg" className={styles.ImgBG1} />
          <div id='Texto1' className={`${styles.TextContent} ${styles.TextContentLeft} fade_test fadeOut_test`}>
            <article className='fade_test fadeOut_test'>
              <h1>Jordán fue próspero pero ahora se mantiene en una frágil realidad.</h1>
              <p>A lo largo de su historia ha estado sumido en la violencia, la pobreza y el larguísimo mandato de una sola familia; y hoy quedan un poco más de 1000 habitantes.</p>
            </article>
          </div>
        </div>
        <div id='slider2' className={styles.ImagesDesktop}>
          <img id='ImgBG2' src="/images/season3/slider/2.jpg" className={styles.ImgBG1} />
          <div id='Texto2' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article className='fade_test fadeOut_test'>
              <h1>Viaja con nosotros <br />a este lugar. </h1>
              <p>Recorre sus caminos de la mano de personajes entrañables, explora sus historias al ritmo y en el orden que quieras. Completa la foto de Jordán con información adicional que te será revelada al final. </p>
            </article>
          </div>

        </div>
        <div className={styles.ButtonContainerBottom}>
          <img id='ImgBG3' src="/images/season3/slider/3.jpg" className={styles.ImgBG3} />

          <div className={styles.ButtonContainerContent}>
            <article className='fade_test fadeOut_test'>
              <h2>Este viaje es una forma de entender<br />la propia realidad y recobrar la fuerza.</h2>

              <div className={`${styles.buttonPulse} fade_test fadeOut_test'`}>

                {/*isLoggedIn
                  ? <ButtonHome url={Links.registerTemp2} text="Iniciar EL Viaje" />
                  : <ButtonHome type="button" onClick={onGuest} text="Iniciar El Viaje" />
  */}

                <ButtonHome url={"/personajes?ref=init"} text="Iniciar EL Viajess" />
              </div>
            </article>
          </div>
        </div>

        <div id='slider3' className={styles.ImagesDesktop}>


          <div id="Credits">
            <Credits />
          </div>

          <Footer />
        </div>

      </div>
    </Fragment>
  )
}
