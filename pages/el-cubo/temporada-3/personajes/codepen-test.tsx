import React, { Fragment, useEffect, useRef, useState } from 'react';
import VideoIntro from 'components/Season3/VideoIntro/VideoIntro';
import styles from './season3.codepen.module.scss';
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import ScrollDown from 'components/Season3/Shared/ScrollDown/ScrollDown';


export const codepenTest = ({ isLoggedIn, onGuest }) => {

  let srcVideo = UrlUtils.getVideoUrl("482811");
  const [player, setPlayer] = useState(null);


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

      if (window.scrollY < 90) {
        document.getElementById('test').style.width = 100 - window.scrollY / 5 + '%';
        document.getElementById('test').style.marginTop = window.scrollY * 1.5 + 'px';
        logoTeaser.style.bottom = window.scrollY * 1.5 + 180 + 'px';
      }

    }

    window.addEventListener('scroll', getPosY);
    return () => {
      window.removeEventListener('scroll', getPosY);
    }




  }, [])


  const handleCloseInteractive = () => {
    return false;
  }

  return (
    <Fragment>
      <div id="section-0" className={`${styles.coverall} ${styles.section0}`}>

        <div className={styles.imgArea}>
          <div className={styles.Test} id="test">
            <div className={styles.aspect}>
              {/*<VideoIntro url={"/videos/season3.mp4"} />*/}
              <Video2Level
                title={''}
                source={srcVideo}
                showPrevButton={false}
                showNextButton={false}
                setPlayer={setPlayer}
                onVideoEnded={() => {
                  handleCloseInteractive();
                }}
                fullscreen={false}
                autoPlay={true}
                loop={true}
              />
              <div id='LogoTeaser' className={styles.LogoTeaser}>
                <img src="/images/season3/logo-caminos-de-jordan.png" />
              </div>
              <ScrollDown />
            </div>
          </div>
        </div>
        <div className={styles.covertext}>
          <div id='Texto0' className={`${styles.TextContent} ${styles.TextContentRight}`}>
            <article>
              <h1>Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir</h1>
              <p></p>
            </article>
          </div>
        </div>
      </div>






    </Fragment>
  )
}

export default codepenTest