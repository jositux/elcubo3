import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './season3.popup.module.scss';

const ubications = [
  {
    name: 'soledad', 
    top: '365px', 
    left: '790px', 
  },
  {
    name: 'diego', 
    top: '540px', 
    left: '886px',
  },
  {
    name: 'juandejesus', 
    top: '690px', 
    left: '1050px',
  },
  {
    name: 'jenny', 
    top: '135px', 
    left: '1420px',
  },
  {
    name: 'guillermo', 
    top: '895px', 
    left: '1080px',
  },
]

export const Popup = (props:any) => {

  const {characters} = props;
  const [popupSizes, setPopupSizes] = useState(false);

  useEffect(() => {
    characters.forEach( character => {
      ubications.forEach( ubication => {
        if (ubication.name === character.name || ubication.name === character.realName) {
          const popup = document.querySelector(`#${character.name}`) as HTMLElement;
          popup.style.position = 'absolute';
          popup.style.top = ubication.top;
          popup.style.left = ubication.left;
        }
      });
    });
  }, [])

  
  const clickPopupCharacter = () => {

  }

  return (
    <Fragment>
      {
        characters.map( (c, index) => (
          <div className={`${styles.PopupContainer} ${styles[c.name+`-g`]}`} id={`${c.name}`} key={index}>
            <div className={styles.titleImage}>
              <h2>{c.realName}</h2>
              <img src={`/images/season3/map/popups/popup-${c.name}.png`} className={styles.Popup}  />
            </div>
            <div className={styles.textContent }>
              <h1>{c.realName}</h1>
              <p>{c.description}</p>
              <button>
                <span>iniciar experiencia</span>
              </button>
            </div>
          </div>
        ))
      }
    </Fragment>
  )
}
