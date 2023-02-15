import React, { Fragment, useState } from 'react';
import styles from './season3.cards.module.scss';
import ArrowNext from 'components/Season3/Svg/ArrowNext';
import ArrowPrevious from 'components/Season3/Svg/ArrowPrevious';
import CloseIconCards from 'components/Season3/Svg/CloseIconCards';

export const Cards = ({ closeCards }) => {

  const [card, setCard] = useState(1)

  const nextButtonChange = () => {
    //fade
    setCard(card + 1);
  }

  const prevButtonChange = () => {
    //fade
    setCard(card - 1);
  }

  return (
    <Fragment>
      {/*<div className={styles.CloseIconCards} onClick={closeCards}>
        <CloseIconCards />
  </div>*/}

      {
        card == 1
          ? (
            <div className={styles.CardContent1}>
              <div className={styles.TextContent}>
                <h1>1. selecciona un personaje</h1>
                <p>Debes elegir un personaje para iniciar la experiencia</p>
              </div>
              <button className={styles.ButtonNext} onClick={nextButtonChange} >
                <span>siguiente</span>
                <ArrowNext />
              </button>
            </div>
          )
          :
          card == 2
            ? (
              <div className={styles.CardContent2}>
                <div className={styles.TextContent}>
                  <h1>2. cambia de personaje</h1>
                  <p>En determinados momentos puedes cambiar de personaje y de historia</p>
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
                    <p>Puedes profundizar en la historia de cada personaje a través de los hitos marcados en su línea de tiempo.</p>
                  </div>

                  <div className={styles.TextContent}>
                    <p>¡Bienvenido a Jordán Sube!</p>
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
    </Fragment>
  )
}
