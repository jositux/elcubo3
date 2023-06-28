import React, { Fragment, useEffect, useRef, useState } from 'react';
import VideoIntro from 'components/Season3/VideoIntro/VideoIntro';
import styles from './season3.slider.desktop.module.scss';


export const video = ({ isLoggedIn, onGuest }) => {

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


    const getPosY = () => {
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


    </Fragment>
  )
}

export default video