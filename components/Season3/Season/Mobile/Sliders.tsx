import React, { Fragment, useEffect } from 'react';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';
import Links from 'constants/Links';
import Credits from 'components/Season3/Season/Credits/Credits';
import HtmlParser from 'html-react-parser';
import styles from './season3.slider.mobile.module.scss';
import { useRouter } from 'next/router';


export const SlidersMobile = ({ isLoggedIn, onGuest }) => {

  const router = useRouter();

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
              {/*isLoggedIn
                ? <ButtonHome url={Links.register} text="Iniciar experiencia" />
                : <ButtonHome
                  type="button"
                  onClick={onGuest}
                  text="Iniciar experiencia"
                />

              <ButtonHome url={"/el-cubo/temporada-3/personajes?ref=init"} text="Iniciar EL Viaje" />  */}

            </div>
            <div className={styles.TextContent}>
              <article className='fade_test fadeOut_test'>
                <h1> {
                  router.locale === "en" ?
                    "Welcome to Jordan Sube, a town with people who resists  and knows how to live" :
                    "Bienvenido y bienvenida a Jordán Sube, un pueblo con gente que resiste y sabe vivir."
                }
                </h1>  <p></p>
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
                <h1>{
                  router.locale === "en" ?
                    "Jordan was prosperous, but now the town lives with a fragile reality." :
                    "Jordán fue próspero, pero ahora convive en una frágil realidad."
                }</h1>
                <p>{
                  router.locale === "en" ?
                    "Throughout its history, it has been mired in violence, poverty and under the power of a single family. Today, less than 1000 inhabitants are left." :
                    "A lo largo de su historia, ha estado sumido en la violencia, la pobreza y el extenso mandato de una sola familia. Hoy quedan poco más de 1.000 habitantes."
                }</p>
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
                <h1>
                  {
                    router.locale === "en" ?
                      HtmlParser("Travel with us<br /> to this place") :
                      HtmlParser("Viaja con nosotros <br /> a este lugar")
                  }
                </h1>
                <p>{
                  router.locale === "en" ?
                    "Walk through Jordan roads accompanied by dear characters. Explore its stories in the order you want and at your own pace. Finally, complete the picture of the town with information that will be revealed only at the end of this journey." :
                    "Recorre los Caminos de Jordán de la mano de personajes entrañables, explora sus historias en el orden y al ritmo que quieras, y completa la foto del pueblo con información que será revelada al final de esta travesía."
                }</p>
              </article>
            </div>

          </div>

          <div className={styles.ButtonContainerBottom}>
            <article className=''>
              <h2>{
                router.locale === "en" ?
                  HtmlParser("This journey is a way to understand our own reality and recover the strenght.") :
                  HtmlParser("Este viaje es una forma de entender la propia realidad y recobrar la fuerza.")
              }</h2>

              {/*isLoggedIn
                ? <ButtonHome url={Links.registerTemp2} text="Iniciar experiencia" />
                : <ButtonHome
                  type="button"
                  onClick={onGuest}
                  text="Iniciar experiencia"
                />
            */}
              <div className={`${styles.buttonPulse}`}>
                <ButtonHome url={router.locale === "en" ?
                  "/en/el-cubo/temporada-3/personajes?ref=init" :
                  "/el-cubo/temporada-3/personajes?ref=init"}
                  text={
                    router.locale === "en" ?
                      "Begin the journey" :
                      "Iniciar el viaje"
                  } />
              </div>
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


