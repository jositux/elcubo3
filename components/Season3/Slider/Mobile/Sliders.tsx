import React, { Fragment, useEffect } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Links from 'constants/Links';
import VideoIntro from 'components/Season3/VideoIntro/VideoIntro';

//import SeasonIntroModal from 'components/Season3/Modal/SeasonIntroModal';
import Credits from 'components/Season3/Season/Credits/Credits';
import styles from './season3.slider.mobile.module.scss';
import { useRef } from 'react';



export const SlidersMobile = ({ isLoggedIn, onGuest }) => {



  useEffect(() => {
    const videoContainer = document.querySelector('#VideoContainer') as HTMLElement;
    //const ImgBG0 = document.querySelector('#ImgBG0') as HTMLElement;
    //const Texto0 = document.querySelector('#Texto0') as HTMLElement;
    //const contentResizable = document.querySelector('#ContentResizable') as HTMLElement;
    //const logoTeaser = document.querySelector('#LogoTeaser') as HTMLElement;
    const headerHeigth = 55;
   // const incrementTop = 1.5;

    const slider1 = document.querySelector('#Slider1') as HTMLElement;
    //const ImgBG1 = document.querySelector('#ImgBG1') as HTMLElement;
    //const Texto1 = document.querySelector('#Texto1') as HTMLElement;
    const height1 = videoContainer.offsetHeight + slider1.offsetHeight + headerHeigth;

    const slider2 = document.querySelector('#Slider2') as HTMLElement;
    //const ImgBG2 = document.querySelector('#ImgBG2') as HTMLElement;
    //const Texto2 = document.querySelector('#Texto2') as HTMLElement;
    const height2 = height1 + slider2.offsetHeight;

    //const slider3 = document.querySelector('#slider3') as HTMLElement;
    //const height3 = height2 + slider2.offsetHeight;

    //const credits = document.querySelector('#Credits') as HTMLElement;
    //const height4 = height3 + credits.offsetHeight;

    const whitespace = document.querySelector('#whitespace') as HTMLElement;


    const getPosY = () => {
      console.log('scroll' + window.scrollY);
      console.log(headerHeigth);

      if (window.scrollY <= headerHeigth) {
        /* 100 equivale al 100% del ancho */
        //contentResizable.style.width = 100 - window.scrollY / 5 + '%';
        /* incrementTop es el grado de margen superior mientras se hace scroll */
        //contentResizable.style.top =  window.scrollY * incrementTop + 'px';
      }
      

      if(window.scrollY <= height1) {
        //ImgBG0.style.opacity = '' + (window.scrollY * 2 ) / (height1);
        //Texto0.style.opacity = '' + (window.scrollY * 2 ) / (height1);
      }
     

      //ImgBG1.style.opacity = '' + (window.scrollY ) / (height1);
      //Texto1.style.opacity = '' + (window.scrollY ) / (height1);
      
      //ImgBG2.style.opacity = '' + (window.scrollY ) / (height2);
      //Texto2.style.opacity = '' + (window.scrollY ) / (height2);

      //credits.style.opacity = '' + (window.scrollY ) / (height4);

      /*if(window.scrollY >= height1 ) {
        slider1.style.position = 'relative';
      }
      else {
        slider1.style.position = 'fixed';
      }*/

      if(window.scrollY >= height2 ) {
        slider2.style.position = 'relative';
      }
      else {
        //slider2.style.position = 'fixed';
      }

      /*if(window.scrollY >= height3 ) {
        slider3.style.position = 'relative';
        whitespace.style.display = 'none';
      }
      else {
        slider3.style.position = 'fixed';
        whitespace.style.display = 'block';
      }*/

    }
    
    window.addEventListener('scroll', getPosY);
    return () => {
      window.removeEventListener('scroll', getPosY);
    }



    
  }, [])

  return (
    <Fragment>
      
      <div id="VideoContainer" className={styles.VideoContainer}>
        <div id='LogoTeaser' className={styles.LogoTeaser}>
              <img src="/images/season3/logo-caminos-de-jordan.png" />
        </div>
        <VideoIntro url={"/videos/season3.mp4"} />
      </div> 

      <div className={styles.SlidersContainer}>
        
        <div id="Slider1" className={styles.Images}>
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
            <a href="#slide2">
              <img src="/images/season3/arrow-bottom-mobile.png" />
            </a>
          </div>
        </div>

        <div id="Slider2" className={styles.Images}>
          <div className={styles.TextContent}>
            <h1>Cinco personajes buscan superar los fantasmas que se apoderaron de Jordán Sube.</h1>
            <p>¿Cómo hacerlo cuando el pueblo vive bajo una maldición?</p>
          </div>
          
        </div>

        <div id="Slider3" className={styles.Images}>
          <div className={styles.TextContent}>
            <h1>¿Puede un pueblo sobrevivir estancado en el tiempo?</h1>
            <p>Jordán Sube se encuentra ubicadoen el fondo del Cañón del Chicamocha, pero su aislamiento no impide que su habitantes sigan adelante.</p>
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
        <Credits />
       
      </div>
    </Fragment>
  )
}


