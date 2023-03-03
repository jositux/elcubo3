import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './season3.hero.module.scss';
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import ScrollDown from 'components/Season3/Shared/ScrollDown/ScrollDown';
import SoundActive from "components/Season2/Svg/SoundActive";
import SoundInactive from 'components/Season2/Svg/SoundInactive';

export const Hero = ({ video }) => {
  let srcVideo = UrlUtils.getVideoUrl(video);
  const [player, setPlayer] = useState(null);

  //const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const [scrollTop, setScrollTop] = useState(0);

  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  const handleCloseInteractive = () => {
    return false;
  }

  useEffect(() => {

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75
    };

    function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('fadeBlurOut', 'fadeBlurIn');
        }
        else {
          //entry.target.classList.replace('fadeIn_test', 'fadeOut_test');
        }
      });
    }

    const fadeElms = document.querySelectorAll('.fadeBlur');

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElms.forEach(el => observer.observe(el));

  }, [])



  return (
    <Fragment>
      <div id="section-0" className={`${styles.coverall} ${styles.section0}`}>
        <div className={styles.VideoArea}>
          <div className={styles.ContentResizable}
          /* style={
             {
               width: scrollTop < 90 ? `${100 - scrollTop / 8 + '%'}` : '88%',
               marginTop: scrollTop < 90 ? `${scrollTop + 'px'}` : '90px'
             }
           }*/
          >
            <div className={styles.aspect}>
              {/*<VideoIntro url={"/videos/season3.mp4"} />*/}

              <div className={styles.ButtonMuted}>
                <div onClick={() => setMuted(!muted)} className={`${!muted ? "Active" : ""}`}>
                  {!muted ? <SoundActive /> : <SoundInactive />}
                </div>
              </div>

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
                muted={muted}
                loop={true}
              />
              <div
                className={styles.LogoTeaser}
              /*style={
                {
                  bottom: scrollTop < 90 ? `${180 + scrollTop + 'px'}` : '270px'
                }
              }*/
              >
                <img src="/images/season3/logo-caminos-de-jordan.png" />
              </div>
              <ScrollDown />
            </div>
          </div>
        </div>
        <div className={styles.covertext}>
          <div id='Texto0' className={`${styles.TextContent} ${styles.TextContentRight} fade_test .fadeOut_test`}>
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

export default Hero