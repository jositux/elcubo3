import React, { Fragment, useState, useEffect } from 'react';
import styles from './season3.cards.module.scss';
import ArrowNext from 'components/Season3/Svg/ArrowNext';
import ArrowPrevious from 'components/Season3/Svg/ArrowPrevious';

export const Cards = ({ closeCards }) => {

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
                <h1>BIENVENIDOS</h1>
                <p>Para descubrir a Jordán, sus misterios, su belleza y lo que tiene que decir sobre nuestras vidas y la realidad del país, te recomendamos:
                  <br /><br />
                  - Dejar que la curiosidad te guíe.<br />
                  - Mantener tus sentidos despiertos.<br />
                  - Aprovechar el ritmo de Jordán para ir más lento.</p>
              </div>
              <button className={styles.ButtonNext} onClick={nextButtonChange} >
                <span>siguiente</span>
                <ArrowNext />
              </button>
            </div>
          )
          :
          card == 1
            ? (
              <div className={styles.CardContent1}>
                <div className={styles.TextContent}>
                  <h1>1. selecciona un personaje</h1>
                  <p>Debes elegir un personaje para iniciar la experiencia.</p>
                </div>
                <div className={styles.ButtonsContent}>
                  <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                    <ArrowPrevious />
                    <span>anterior</span>
                  </button>
                  <button className={styles.ButtonNext} onClick={nextButtonChange} >
                    <span>siguiente</span>
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
                    <h1>2. cambia de personaje</h1>
                    <p>Puedes cambiar de historia cuando quieras haciendo clic en la línea de tiempo de cada personaje.</p>
                  </div>
                  <div className={styles.ButtonsContent}>
                    <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                      <ArrowPrevious />
                      <span>anterior</span>
                    </button>
                    <button className={styles.ButtonNext} onClick={nextButtonChange} >
                      <span>siguiente</span>
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
                      <h1>3. Profundiza en la historia</h1>
                      <p>Conoce los detalles en la vida de cada personaje a través de los hitos marcados en su línea de tiempo.<br /><br />
                        ¡Bienvenido a Jordán Sube! Recuerda que una vez completes las cinco historias podrás acceder a contenido exclusivo.</p>
                    </div>


                    <div className={styles.ButtonsContent}>
                      <button className={styles.ButtonPrevious} onClick={prevButtonChange} >
                        <ArrowPrevious />
                        <span>anterior</span>
                      </button>
                      <button className={styles.ButtonNext} onClick={closeCards}>
                        <span>continuar</span>
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
