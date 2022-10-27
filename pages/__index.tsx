import React, { useRef } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../styles/Home';
import AppLayout from '../layouts/AppLayout';
import useOnMouseOutside from 'libs/hooks/useOnMouseOutside';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import { ElcuboGlobalStyles } from 'styles/elcubo.style';

import dynamic from 'next/dynamic';

const MouseCircle = dynamic(() => import('components/MouseCircle/MouseCircle'), { ssr: false });

export default function Home({ data }) {
  const ref = useRef();
  const [bigMouse, setBigMouse] = React.useState(false);

  const handleMouseEnter = () => {
    setBigMouse(true);
  };

  useOnMouseOutside(ref, () => setBigMouse(false));

  React.useEffect(() => {

    /* Sound */
    let track = document.getElementById('track');

    const video0 = document.querySelector("#hero-0 .video-0");
    if (video0) {
      video0.addEventListener('play', hideVideo1, false);

      function hideVideo1(e) {
        video0.classList.add('hide');
      }

      video0.addEventListener('ended', removeVideo0, false);

      function removeVideo0(e) {
        video0.remove();
      }
    }

    /* Observer videos */
    const video1 = document.querySelector("#hero-1 video");
    const video2 = document.querySelector("#hero-2 video");

    if (video1) {
      video1.addEventListener('ended', removeVideo1, false);

      function removeVideo1(e) {
        video1.remove();
      }
    }

    if (video2) {
      video2.addEventListener('ended', removeVideo2, false);

      function removeVideo2(e) {
        video2.remove();
      }
    }



    /* Track play */
    track.loop = true;

    let controlBtn = document.getElementById('play-pause');

    function playPause() {

      document.getElementsByClassName('Sound')[0].classList.toggle('off');
      document.getElementsByClassName('play-text')[0].classList.toggle('hide');
      document.getElementsByClassName('play-text')[1].classList.toggle('hide');

      if (track.paused) {
        track.play();
        controlBtn.className = "pause";
      } else {
        track.pause();
        controlBtn.className = "play";
      }
    }

    controlBtn.addEventListener("click", playPause);
    track.addEventListener("ended", function () {
      controlBtn.className = "play";
    });




    // Check if element is in view
    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true:
      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
      // Partially visible elements return true:
      //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    function getRelationScroll(pObject) {
      let relation = pObject.getBoundingClientRect().top / (main.clientHeight / 2) * 100;
      return relation;
    }


    // Scroll for Hero-0
    const main = window;
    main.focus();


    const scrollEvent = () => {

      let reveal_1 = document.getElementsByClassName('cover-reveal-1')[0];

      if (isScrolledIntoView(reveal_1)) {
        let relation = getRelationScroll(reveal_1);
        if (relation > 79) {
          document.getElementsByClassName('scroll-container')[0].classList.remove('slow');
        }

      }

      let reveal_2 = document.getElementsByClassName('cover-reveal-row-2')[0];

      if (isScrolledIntoView(reveal_2)) {
        let relation = getRelationScroll(reveal_2);
        document.getElementsByClassName('cover-reveal-row-2')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-2')[1].classList.add('active');
      }

      var reveal_3 = document.getElementsByClassName('cover-reveal-row-3')[0];
      if (isScrolledIntoView(reveal_3)) {
        document.getElementsByClassName('cover-reveal-row-3')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-3')[1].classList.add('active');
      }

      var reveal_4 = document.getElementsByClassName('cover-reveal-row-4')[0];
      if (isScrolledIntoView(reveal_4)) {
        document.getElementsByClassName('cover-reveal-row-4')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-4')[1].classList.add('active');
      }


      var someDiv4 = document.getElementsByClassName('cover-reveal-row-5')[0];
      var distanceToTop = someDiv4.getBoundingClientRect().top;

      if (isScrolledIntoView(someDiv4)) {
        if (video1) {
          video1.play();
          video1.classList.add('hide');
        }
        document.getElementById("hero-1").classList.add('playing');
        document.getElementsByClassName('cover-reveal-row-line')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-5')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-5')[1].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-5')[2].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-6')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-6')[1].classList.add('active');



        document.getElementsByClassName('scroll-container')[0].classList.add('slow');

      }


      var someDiv5 = document.getElementsByClassName('cover-reveal-row-7')[0];
      var distanceToTop5 = someDiv5.getBoundingClientRect().top;

      if (isScrolledIntoView(someDiv5)) {
        if (video2) {
          video2.play();
          video2.classList.add('hide');
        }
        document.getElementById("hero-2").classList.add('playing');
        document.getElementsByClassName('cover-reveal-row-7')[0].classList.add('active');
        document.getElementsByClassName('cover-reveal-row-7')[1].classList.add('active');

        document.getElementsByClassName('scroll-container')[0].classList.add('slow');
      }


    }

    main.addEventListener('scroll', scrollEvent);



    // Scroll Fade
    let fadeElement = document.getElementsByClassName('cover-scroll')[0];

    function fadeOutOnScroll(element) {
      if (!element) {
        return;
      }

      var distanceScrollTop = window.pageYOffset + element.getBoundingClientRect().top - 250;
      var elementHeight = element.offsetHeight;
      var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

      var opacity = 1;

      if (scrollTop > distanceScrollTop) {
        opacity = 1 - (scrollTop - distanceScrollTop) / elementHeight;
      }

      if (opacity >= 0) {
        element.style.opacity = opacity;
      }
    }


    function scrollHandler() {
      document.querySelectorAll('.cover-scroll').forEach(function (fadeElement) {
        fadeOutOnScroll(fadeElement);
      });
    }

    main.addEventListener('scroll', scrollHandler);


  }, []);

  return (
    <AppLayout>
      <ElcuboGlobalStyles />

      <Head>
        <title>El Cubo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <MouseCircle href="/el-cubo/temporada-1" text="Ver más" isBig={bigMouse} />

        <div className="header-top header-temporal">
          <div className="header-top-inner">
            <div className="logo-elcubo" onMouseEnter={() => setBigMouse(false)}>
              <a href="/" className="logo--link no-link">
                <img className="logo--image" src="/images/logo2021.png" />
              </a>
            </div>
          </div>

          <div className="component-sound">
            <audio id="track" /*autoPlay*/>
              <source src="/audios/loop.mp3" type="audio/mpeg" />
            </audio>

            <div id="audio-player-container">
              <div id="play-pause" className="play no-link">
                <div className="column-1">
                  <span className="mute hide play-text">
                    silenciar</span>
                  <span className="listen play-text">
                    escuchar</span>
                </div>
                <div className="column-2">
                  <div className="Sound off">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="hero-0" className="hero hero-0 no-link hero-pc">
          <video className="video-bg video-0" autoPlay muted>
            <source src="/images/home/video-0B.mp4" type="video/mp4" />
          </video>
          <img className="img-bg-pc" src="/images/home/SITILLVideo IN 0.jpeg"
          />

          <div className="video-overlay">
            <main className="scroll-container">

              <section className="section-0">
                <div className="copy-cover">
                  <div className="cover-scroll">
                    <h1 className="cover-reveal cover-reveal-1 active">
                      <span className="cyan-strong reveal-first">¿De qué están hechas</span>
                    </h1>

                    <h1 className="cover-reveal cover-reveal-1 active">
                      <span className="white reveal-second"> las relaciones humanas?</span>
                    </h1>
                  </div>
                </div>
              </section>

              <section className="section-2">
                <div className="copy-cover">
                  <div className="cover-scroll">
                    <h1 className="cover-reveal-row cover-reveal-row-2">
                      <span className="first cyan-strong first">¿Con cuántos hilos</span>
                    </h1>
                    <h1 className="cover-reveal-row cover-reveal-row-2">
                      <span className="second white second"> se teje una historia?</span>
                    </h1>
                  </div>
                </div>
              </section>

              <section>
                <div className="copy-cover">
                  <div className="cover-scroll">
                    <h1 className="cover-reveal-row cover-reveal-row-3">
                      <span className="first cyan-strong">¿Cuántas verdades pueden contenerse</span>
                    </h1>
                    <h1 className="cover-reveal-row cover-reveal-row-3">
                      <span className="second white"> en una misma realidad?</span>
                    </h1>
                  </div>
                </div>
              </section>

              <section>
                <div className="copy-cover">
                  <div className="cover-scroll">
                    <h1 className="cover-reveal-row cover-reveal-row-4">
                      <span className="first cyan-strong">Descúbrelo en El Cubo, una experiencia</span>
                    </h1>
                    <h1 className="cover-reveal-row cover-reveal-row-4">
                      <span className="second white"> digital en la que serás Arte y Parte.</span>
                    </h1>
                  </div>
                </div>
              </section>


              <section className="section-1">
                <div className="hero-cover hero-cover-1">
                  <div id="hero-1" className="hero hero-1 no-link" onMouseEnter={handleMouseEnter} >
                    <div className="scrolldown">
                      <div className="line"></div>
                    </div>
                    <video className="video-bg" muted>
                      <source src="/images/home/video-1B.mp4" type="video/mp4" />
                    </video>
                    <img className="img-bg-pc" src="/images/home/SITILLVideo%20IN%202.jpeg" />
                    <img className="img-bg-mobile" src="/images/home/SITILLVideo%20IN%202.jpeg" />
                    <div className="video-overlay ">
                      <div className="paragraph-message cover-scroll">

                        <div className="cover-reveal-row cover-reveal-row-line">
                          <span className="first">
                            <hr />
                          </span>
                        </div>
                        <p className="cover-reveal-row cover-reveal-row-5">
                          <span className="first">
                            Navega cualquiera de nuestras historias a</span>
                        </p>
                        <p className="cover-reveal-row cover-reveal-row-5">
                          <span className="second"> partir de varios modos narrativos y comprueba</span>
                        </p>
                        <p className="cover-reveal-row cover-reveal-row-5">
                          <span className="third"> así que la verdad …</span>
                        </p>

                      </div>

                      <div className="copy-cover cover-scroll">
                        <h1 className="cover-reveal-row cover-reveal-row-6">
                          <span className="first">...La verdad</span>
                        </h1>
                        <h1 className="cover-reveal-row cover-reveal-row-6">
                          <span className="second">NUNCA ES UNA SOLA</span>
                        </h1>
                      </div>
                    </div>

                  </div>
                </div>

              </section>

              <section>

                <div id="hero-2" className="hero hero-2 no-link" onMouseEnter={handleMouseEnter} >
                  <video className="video-bg" muted>
                    <source src="/images/home/Video%20IN%203_0.mp4" type="video/mp4"
                    />
                  </video>
                  <img className="img-bg-pc" src="/images/home/SITILLVideo%20IN%203.jpeg" />

                  <div className="video-overlay cover-scroll">
                    <div className="copy-cover">

                      <h1 className="cover-reveal-row cover-reveal-row-7">
                        <span className="first">Entra ya</span>
                      </h1>

                      <h1 className="cover-reveal-row cover-reveal-row-7">
                        <span className="second">a la dimensión de El CUBO</span>
                      </h1>


                      <p>
                        <a className="button-mobile" href="/el-cubo/temporada-1">Ver más </a>
                      </p>
                    </div>
                  </div>
                </div>

              </section>


            </main>

          </div>

        </div>



        <div className="wrapper-mobile">




          <div id="hero-0-mobile" className="hero hero-mobile">

            <div className="scrolldown">
              <div className="line"></div>
            </div>

            <img className="img-bg-deg" src="/images/bg-deg.png" />

            <img className="img-bg-mobile" src="/images/home/el_cubo_mobile_01.jpeg" />

            <div className="copy copy-1">
              <h1>
                <span className="cyan-strong">¿De qué están hechas</span>
              </h1>

              <h1>
                <span className="white"> las relaciones<br />humanas?</span>
              </h1>
            </div>

            <div className="copy copy-2">
              <h1>
                <span className="cyan-strong">¿Con cuántos hilos</span>
              </h1>
              <h1>
                <span className="white"> se teje una <br />historia?</span>
              </h1>
            </div>

            <div className="copy copy-3">
              <h1>
                <span className="cyan-strong">¿Cuántas verdades pueden contenerse</span>
              </h1>
              <h1>
                <span className="white"> en una misma<br />realidad?</span>
              </h1>
            </div>

            <div className="copy-final">
              <h1>
                <span className="white">Descúbrelo en El Cubo, una experiencia</span>
              </h1>
              <h1>
                <span className="white"> digital en la que serás Arte y Parte.</span>
              </h1>
            </div>

          </div>
          <div id="hero-1-mobile" className="hero">

            <img className="img-bg-mobile" src="/images/home/el_cubo_mobile_02.jpeg" />
            <div className="paragraph-overlay">
              <div className="paragraph-message">
                <hr />
                <p>
                  Navega cualquiera de nuestras historias a partir de varios modos narrativos y comprueba
                así que la verdad …
                </p>

              </div>

              <div className="copy">
                <h1>
                  <span className="white">...La verdad</span>
                </h1>
                <h1>
                  <span className="white">NUNCA ES UNA SOLA</span>
                </h1>
                <a className="button-mobile" href="/el-cubo/temporada-1">Ver más </a>

              </div>
            </div>
          </div>

          <div id="hero-2-mobile" className="hero no-link">
            <img className="img-bg-mobile" src="/images/home/el_cubo_mobile_03.jpeg" />

            <div className="copy">

              <h1>
                <span className="white">Entra ya a la dimensión</span>
              </h1>

              <h1>
                <span className="white">de El CUBO</span>
              </h1>

              <a className="button-mobile" href="/el-cubo/temporada-1">Ver más </a>

            </div>




          </div>
        </div>

      </Container>
    </AppLayout >
  );


}







