import React, { Fragment, useState, useEffect } from 'react';
import styles from './season3.cards.module.scss';
import ArrowNext from 'components/Season3/Svg/ArrowNext';
import ArrowPrevious from 'components/Season3/Svg/ArrowPrevious';
import HtmlParser from 'html-react-parser';

import { useRouter } from 'next/router';

export const Cards = ({ closeCards }) => {

  const router = useRouter();

  const [card, setCard] = useState(0)

  const nextButtonChange = () => {
    //fade
    setCard(card + 1);
    if (audios?.click) {
      audios.click.play();
    }
  }

  const prevButtonChange = () => {
    //fade
    setCard(card - 1);
    if (audios?.click) {
      audios.click.play();
    }
  }

  const [audios, setAudios] = useState(null);

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3')
    });
  }, []);

  return (
    <Fragment>
      {/*<div className={styles.CloseIconCards} onClick={closeCards}>
        <CloseIconCards />
  </div>*/}

      <div className={styles.overlay}>

      </div>

      {
        card == 0
          ? (
            <div className={styles.CardContent1}>
              <div className={styles.TextContent}>
                <h1>
                  {
                    router.locale === "en" ?
                      "WELCOME" :
                      "BIENVENIDOS"
                  }
                </h1>
                <p>{
                  router.locale === "en" ?
                    "To discover Jordan, its mysteries, beauty and all it has to say about our lives and our country reality, we recommend you:" :
                    "Para descubrir a Jordán, sus misterios, su belleza y lo que tiene que decir sobre nuestras vidas y la realidad del país, te recomendamos:"
                }
                  <br /><br />
                  {
                    router.locale === "en" ?
                      "- Let curiosity guide you." :
                      "- Dejar que la curiosidad te guíe."
                  }
                  <br />
                  {
                    router.locale === "en" ?
                      "- Keep your senses awake" :
                      "- Mantener tus sentidos despiertos."
                  }
                  <br />
                  {
                    router.locale === "en" ?
                      "- Take advantage of Jordan rythm to go slower" :
                      "- Aprovechar el ritmo de Jordán para ir más lento."
                  }
                </p>
              </div>
              <button className={styles.ButtonNext} onClick={nextButtonChange} >
                <span>
                  {
                    router.locale === "en" ?
                      HtmlParser("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next") :
                      "siguiente"
                  }
                </span>
                <ArrowNext />
              </button>
            </div>
          )
          :
          card == 1
            ? (
              <div className={styles.CardContent1}>
                <div className={styles.TextContent}>
                  <h1>
                    {
                      router.locale === "en" ?
                        "1. Choose a character" :
                        "1. selecciona un personaje"
                    }
                  </h1>
                  <p>
                    {
                      router.locale === "en" ?
                        "You must select a character to begin this experience." :
                        "Debes elegir un personaje para iniciar la experiencia."
                    }
                  </p>
                </div>
                <div className={styles.ButtonsContent}>
                  <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                    <ArrowPrevious />
                    <span>
                      {
                        router.locale === "en" ?
                          "previous" :
                          "anterior"
                      }
                    </span>
                  </button>
                  <button className={styles.ButtonNext} onClick={nextButtonChange} >
                    <span> {
                      router.locale === "en" ?
                        HtmlParser("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next") :
                        "siguiente"
                    }</span>
                    <ArrowNext />
                  </button>
                </div>
              </div>
            )
            :
            card == 2
              ? (
                <div className={styles.CardContent2}>
                  <div className={styles.TextContent}>
                    <h1>
                      {router.locale === "en" ?
                        "2. Change your character" :
                        "2. cambia de personaje"
                      }
                    </h1>



                    <p>
                      {router.locale === "en" ?
                        "You can change the story whenever you want by clicking on each character's timeline" :
                        "Puedes cambiar de historia cuando quieras haciendo clic en la línea de tiempo de cada personaje."
                      }

                    </p>
                  </div>
                  <div className={styles.ButtonsContent}>
                    <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                      <ArrowPrevious />
                      <span>{
                        router.locale === "en" ?
                          "previous" :
                          "anterior"
                      }</span>
                    </button>
                    <button className={styles.ButtonNext} onClick={nextButtonChange} >
                      <span>{
                        router.locale === "en" ?
                          HtmlParser("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next") :
                          "siguiente"
                      }</span>
                      <ArrowNext />
                    </button>
                  </div>
                </div>
              )
              :
              card == 3
                ? (
                  <div className={styles.CardContent3}>
                    <div className={styles.TextContent}>

                      <h1>{
                        router.locale === "en" ?
                          "Get deeper into the story" :
                          "3. Profundiza en la historia"
                      }
                      </h1>
                      <p>
                        {
                          router.locale === "en" ?
                            "Get to know the details in the life of each character through the milestones marked in their timeline." :
                            "Conoce los detalles en la vida de cada personaje a través de los hitos marcados en su línea de tiempo."
                        }
                        <br /><br />
                        {
                          router.locale === "en" ?
                            "Welcome to Jordan Sube. Remember that once you complete all five stories you can access exclusive content." :
                            "¡Bienvenido a Jordán Sube! Recuerda que una vez completes las cinco historias podrás acceder a contenido exclusivo."
                        }
                      </p>
                    </div>


                    <div className={styles.ButtonsContent}>
                      <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                        <ArrowPrevious />
                        <span>{
                          router.locale === "en" ?
                            "previous" :
                            "anterior"
                        }</span>
                      </button>
                      <button className={styles.ButtonNext} onClick={closeCards}>
                        <span>{
                          router.locale === "en" ?
                            "continue" :
                            "continuar"
                        }</span>
                        <ArrowNext />
                      </button>
                    </div>
                  </div>
                )
                : ''
      }
    </Fragment >
  )
}
