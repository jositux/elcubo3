import React, { Fragment, useEffect, useRef, useState } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import VideoIntro from 'components/Season3/VideoIntro/VideoIntro';
import styles from './season3.slider.desktop.module.scss';
import Credits from 'components/Season3/Season/Credits/Credits';
import Links from 'constants/Links';
import Footer from 'components/Footer/Footer';
import { isAbsolute } from 'path';

export const SlidersDesktop = ({ isLoggedIn, onGuest }) => {

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const videoContainer = document.querySelector('#VideoContainer') as HTMLElement;
    const ImgBG0 = document.querySelector('#ImgBG0') as HTMLElement;
    const Texto0 = document.querySelector('#Texto0') as HTMLElement;
    const contentResizable = document.querySelector('#ContentResizable') as HTMLElement;
    const logoTeaser = document.querySelector('#LogoTeaser') as HTMLElement;
    const headerHeigth = 90;
    const incrementTop = 1.5;

    const slider1 = document.querySelector('#slider1') as HTMLElement;
    const ImgBG1 = document.querySelector('#ImgBG1') as HTMLElement;
    const Texto1 = document.querySelector('#Texto1') as HTMLElement;
    const height1 = videoContainer.offsetHeight + headerHeigth;

    const slider2 = document.querySelector('#slider2') as HTMLElement;
    const ImgBG2 = document.querySelector('#ImgBG2') as HTMLElement;
    const Texto2 = document.querySelector('#Texto2') as HTMLElement;
    const height2 = height1 + slider1.offsetHeight;

    const slider3 = document.querySelector('#slider3') as HTMLElement;
    const height3 = height2 + slider2.offsetHeight;

    const credits = document.querySelector('#Credits') as HTMLElement;
    const height4 = height3 + credits.offsetHeight;

    const whitespace = document.querySelector('#whitespace') as HTMLElement;


    const getPosY = () => {
      console.log('scroll' + window.scrollY);
      //console.log(height1);

      if (window.scrollY <= headerHeigth) {
        /* 100 equivale al 100% del ancho */
        //contentResizable.style.transform = "scale(" + (100 - window.scrollY / 5) / 100 + ")";
        /* incrementTop es el grado de margen superior mientras se hace scroll */
        //contentResizable.style.top = window.scrollY * incrementTop + 'px';
      }

      if (window.scrollY > headerHeigth) {
        //contentResizable.classList.add('active');
      }
      else {
        //contentResizable.classList.remove('active');
      }


      if (window.scrollY <= height1) {
        //ImgBG0.style.opacity = '' + (window.scrollY * 2 ) / (height1);
        //Texto0.style.opacity = '' + (window.scrollY * 2 ) / (height1);
      }


      ImgBG1.style.opacity = '' + (window.scrollY) / (height1);
      Texto1.style.opacity = '' + (window.scrollY) / (height1);

      ImgBG2.style.opacity = '' + (window.scrollY) / (height2);
      Texto2.style.opacity = '' + (window.scrollY) / (height2);

      credits.style.opacity = '' + (window.scrollY) / (height4);

      if (window.scrollY >= height1) {
        slider1.style.position = 'relative';
      }
      else {
        slider1.style.position = 'fixed';
      }

      if (window.scrollY >= height2) {
        slider2.style.position = 'relative';
      }
      else {
        slider2.style.position = 'fixed';
      }

      if (window.scrollY >= height3) {
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
      <div id='VideoContainer' className={styles.VideoContainer}>
        <div id='VideoContent' className={styles.VideoContent}>
          <div id="ContentResizable" className={`${styles.ContentResizable} ${scrollTop >= 90 ? styles.active : ''}`}>
            <VideoIntro url={"/videos/season3.mp4"} />
            <img src="/images/season3/steals/0-home-steal-desktop.jpg" className={styles.StealTeaser} />
            <div id='LogoTeaser' className={styles.LogoTeaser}>
              <img src="/images/season3/logo-caminos-de-jordan.png" />
            </div>

            {/*isLoggedIn 
              ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
              : <ButtonHome type="button" onClick={onGuest} text="Iniciar experiencia" />
  */}
          </div>
        </div>
        <img id='ImgBG0' src="/images/season3/slider/home_slider_01.jpg" className={styles.ImgBG0} />
        <div id='Texto0' className={`${styles.TextContent} ${styles.TextContentRight}`}>
          <article>
            <h1>Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir</h1>
            <p></p>
          </article>
        </div>

      </div>

      <div className={styles.SlidersContainer}>
        <div id='slider1' className={styles.ImagesDesktop}>
          <img id='ImgBG1' src="/images/season3/slider/home_slider_02.jpg" className={styles.ImgBG1} />
          <div id='Texto1' className={`${styles.TextContent} ${styles.TextContentLeft}`}>
            <article>
              <h1>Jordán fue próspero pero ahora se mantiene en una frágil realidad.</h1>
              <p>A lo largo de su historia ha estado sumido en la violencia, la pobreza y el larguísimo mandato de una sola familia; y hoy quedan un poco más de 1000 habitantes.</p>
            </article>
          </div>
        </div>
        <div id='slider2' className={styles.ImagesDesktop}>
          <img id='ImgBG2' src="/images/season3/slider/home_slider_03.jpg" className={styles.ImgBG1} />
          <div id='Texto2' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article>
              <h1>Viaja con nosotros <br />a este lugar. </h1>
              <p>Recorre sus caminos de la mano de personajes entrañables, explora sus historias al ritmo y en el orden que quieras. Completa la foto de Jordán con información adicional que te será revelada al final. </p>
            </article>
          </div>
          <div className={styles.ButtonContainerBottom}>
            <div className={styles.ButtonContainerContent}>
              <h2>Este viaje es una forma de entender<br />la propia realidad y recobrar la fuerza.</h2>

              {isLoggedIn
                ? <ButtonHome url={Links.registerTemp2} text="Iniciar EL Viaje" />
                : <ButtonHome type="button" onClick={onGuest} text="Iniciar El Viaje" />
              }
            </div>
          </div>
        </div>
        <div id='slider3' className={styles.ImagesDesktop}>

          <div id="Credits">
            <Credits />
          </div>

          <Footer />
        </div>

        <div id="whitespace" className={styles.WhiteSpace}></div>
      </div>
    </Fragment>
  )
}