import React, { Fragment, useEffect } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Links from 'constants/Links';
import VideoIntro from 'components/Season3/VideoIntro/VideoIntro';
import Hero from 'components/Season3/Season/Desktop/Hero';
import Credits from 'components/Season3/Season/Credits/Credits';
import styles from './season3.slider.mobile.module.scss';
import { useRef } from 'react';



export const SlidersMobile = ({ isLoggedIn, onGuest }) => {

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


        <div id="Slider1" className={styles.Images}>

          <img className={styles.imgPortrait} src="/images/season3/slider/mobile/home_mobile_slider_01.png" />
          <img className={styles.imgLandscape} src="/images/season3/slider/0.jpg" />

          <div className={styles.SliderContent}>
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
              <article className='fade_test fadeOut_test'>
                <h1>Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir.</h1>
                <p></p>
              </article>
            </div>

          </div>

        </div>

        <div id="Slider2" className={styles.Images}>
          <img className={styles.imgPortrait} src="/images/season3/slider/mobile/home_mobile_slider_02.png" />
          <img className={styles.imgLandscape} src="/images/season3/slider/1.jpg" />

          <div className={styles.SliderContent}>
            <div className={styles.TextContent}>
              <article className='fade_test fadeOut_test'>
                <h1>Jordán fue próspero pero ahora se mantiene en una frágil realidad.</h1>
                <p>A lo largo de su historia ha estado sumido en la violencia, la pobreza y el larguísimo mandato de una sola familia; y hoy quedan un poco más de 1000 habitantes.</p>
              </article>
            </div>
          </div>

        </div>

        <div id="Slider3" className={styles.Images}>
          <img className={styles.imgPortrait} src="/images/season3/slider/mobile/home_mobile_slider_03.png" />
          <img className={styles.imgLandscape} src="/images/season3/slider/2.jpg" />

          <img className={styles.imgLandscape} src="/images/season3/slider/3.jpg" />


          <div className={styles.SliderContent}>

            <div className={styles.TextContent}>
              <article className='fade_test fadeOut_test'>
                <h1>Viaja con nosotros a este lugar.</h1>
                <p>Recorre sus caminos de la mano de personajes entrañables, explora sus historias al ritmo y en el orden que quieras. Completa la foto de Jordán con información adicional que te será revelada al final.</p>
              </article>
            </div>

          </div>

          <div className={styles.ButtonContainerBottom}>
            <article className='fade_test fadeOut_test'>
              <h2>Este viaje es una forma de entender la propia realidad y recobrar la fuerza.</h2>

              {isLoggedIn
                ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
                : <ButtonHome
                  type="button"
                  onClick={onGuest}
                  text="Iniciar experiencia"
                />
              }
            </article>
          </div>

        </div>
        <div className={styles.Credits}>
          <Credits />
        </div>

      </div>
    </Fragment>
  )
}


