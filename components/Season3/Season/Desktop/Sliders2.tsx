import React, { Fragment, useEffect, useRef, useState } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Credits from 'components/Season3/Season/Credits/Credits';
import Links from 'constants/Links';
import Footer from 'components/Footer/Footer';


import styles from './season3.slider2.desktop.module.scss';


export const SlidersDesktop2 = ({ isLoggedIn, onGuest }) => {

  useEffect(() => {

    /* const observerOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.50
     };
 
     function observerCallback(entries, observer) {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           //entry.target.classList.replace('fadeOut_test', 'fadeIn_test');
         }
         else {
           //entry.target.classList.replace('fadeIn_test', 'fadeOut_test');
         }
       });
     }
 
     const fadeElms = document.querySelectorAll('.fade_test');
 
     const observer = new IntersectionObserver(observerCallback, observerOptions);
     fadeElms.forEach(el => observer.observe(el));
 */
  }, [])


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
    // const ImgBG0 = document.querySelector('#ImgBG0') as HTMLElement;
    // const Texto0 = document.querySelector('#Texto0') as HTMLElement;
    const headerHeigth = 90;
    const incrementTop = 1.5;

    const slider0 = document.querySelector('#slider0') as HTMLElement;
    const ImgBG0 = document.querySelector('#ImgBG0') as HTMLElement;
    const Texto0 = document.querySelector('#Texto0') as HTMLElement;
    const height0 = window.innerHeight;//videoContainer.offsetHeight + headerHeigth;

    const slider1 = document.querySelector('#slider1') as HTMLElement;
    const ImgBG1 = document.querySelector('#ImgBG1') as HTMLElement;
    const Texto1 = document.querySelector('#Texto1') as HTMLElement;
    const height1 = height0 + slider1.offsetHeight;

    const slider2 = document.querySelector('#slider2') as HTMLElement;
    const ImgBG2 = document.querySelector('#ImgBG2') as HTMLElement;
    const Texto2 = document.querySelector('#Texto2') as HTMLElement;
    const height2 = height1 + slider2.offsetHeight;

    const slider3 = document.querySelector('#slider3') as HTMLElement;
    const ImgB3 = document.querySelector('#ImgBG3') as HTMLElement;
    const height3 = height2 + slider3.offsetHeight;


    //const credits = document.querySelector('#Credits') as HTMLElement;
    //const height4 = height3 + credits.offsetHeight;

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


      //ImgBG1.style.opacity = '' + (window.scrollY) / (height1);
      // Texto1.style.opacity = '' + (window.scrollY) / (height1);

      //ImgBG2.style.opacity = '' + (window.scrollY) / (height2);
      //Texto2.style.opacity = '' + (window.scrollY) / (height2);

      //credits.style.opacity = '' + (window.scrollY) / (height4);

      if (window.scrollY >= height0) {
        slider0.style.position = 'relative';
      }
      else {
        slider0.style.position = 'fixed';
      }

      if (window.scrollY >= height1) {
        slider1.style.position = 'relative';
      }
      else {
        slider1.style.position = 'fixed';
      }

      if (window.scrollY >= height2) {
        slider2.style.position = 'relative';
        //whitespace.style.display = 'none';
      }
      else {
        slider2.style.position = 'fixed';
        //whitespace.style.display = 'block';
      }

      if (window.scrollY >= height3) {
        slider3.style.position = 'relative';
        whitespace.style.display = 'none';
        slider3.style.zIndex = '10';
      }
      else {
        slider3.style.position = 'fixed';
        slider3.style.zIndex = '-2';
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

      <div className={styles.SlidersContainer}>
        <div id='slider0' className={styles.ImagesDesktop}>
          <img id='ImgBG0' src="/images/season3/slider/0.jpg" className={styles.ImgBG0} />
          <div id='Texto0' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article>
              <h1>Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir</h1>
            </article>
          </div>
        </div>

        <div id='slider1' className={styles.ImagesDesktop}>
          <img id='ImgBG1' src="/images/season3/slider/1.jpg" className={styles.ImgBG1} />
          <div id='Texto1' className={`${styles.TextContent} ${styles.TextContentLeft}`}>
            <article>
              <h1>Jordán fue próspero pero ahora se mantiene en una frágil realidad.</h1>
              <p>A lo largo de su historia ha estado sumido en la violencia, la pobreza y el larguísimo mandato de una sola familia; y hoy quedan un poco más de 1000 habitantes.</p>
            </article>
          </div>
        </div>

        <div id='slider2' className={styles.ImagesDesktop}>
          <img id='ImgBG2' src="/images/season3/slider/2.jpg" className={styles.ImgBG2} />
          <div id='Texto2' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article >
              <h1>Viaja con nosotros <br />a este lugar. </h1>
              <p>Recorre sus caminos de la mano de personajes entrañables, explora sus historias al ritmo y en el orden que quieras. Completa la foto de Jordán con información adicional que te será revelada al final. </p>
            </article>
          </div>
        </div>

        <div id='slider3' className={styles.ImagesDesktop}>
          <img id='ImgBG3' src="/images/season3/slider/3.jpg" className={styles.ImgBG3} />
          <div className={styles.ButtonContainerBottom}>

            <div className={styles.ButtonContainerContent}>
              <article>
                <h2>Este viaje es una forma de entender<br />la propia realidad y recobrar la fuerza.</h2>

                <div className={`${styles.buttonPulse}`}>

                  {isLoggedIn
                    ? <ButtonHome url={Links.registerTemp2} text="Iniciar EL Viaje" />
                    : <ButtonHome type="button" onClick={onGuest} text="Iniciar El Viaje" />
                  }
                </div>
              </article>
            </div>
          </div>
          <div className={styles.Credits} id="Credits">
            <Credits />
          </div>

        </div>

        {/*<div id='slider3' className={styles.ImagesDesktop}>


          <div id="Credits">
            <Credits />
          </div>

          <Footer />
              </div>*/}

        <div id="whitespace" className={styles.WhiteSpace}></div>


      </div>
    </Fragment>
  )
}
