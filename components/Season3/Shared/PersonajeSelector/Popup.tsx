import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './season3.popup.module.scss';

const ubications = [
  {
    name: 'soledad', 
    top: '30%', 
    left: '40%', 
  },
  {
    name: 'diego', 
    top: '44%', 
    left: '47%',
  },
  {
    name: 'juandejesus', 
    top: '60%', 
    left: '60%',
  },
  {
    name: 'jenny', 
    top: '5%', 
    left: '83%',
  },
  {
    name: 'guillermo', 
    top: '80%', 
    left: '61%',
  },
]

export const Popup = ({...props}) => {

  const char = props.characters;
  const [popupSizes, setPopupSizes] = useState(false);

  useEffect(() => {
    char.forEach( character => {
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

  function openPersonajesModal() {
    props.onClickPersonajesModal();
  }

  function updatePersonaje(bg: string, name: string, description: string, icon: string) {
    props.updatePersonaje(bg, name, description, icon);
  }

  return (
    <Fragment>
      { 
        props.characters.map( (c, index) => (
          <div className={`${styles.PopupContainer} ${styles[c.name+`-g`]}`} id={`${c.name}`} key={index}>
            <div 
            onMouseEnter={ () => { updatePersonaje(`${c.background}`, `${c.realName}`, `${c.description}`, `${c.icon}`); openPersonajesModal(); }} 
            onClick={ () => { updatePersonaje(`${c.background}`, `${c.realName}`, `${c.description}`, `${c.icon}`); openPersonajesModal(); } } 
            className={styles.titleImage}
            style={{cursor:"pointer"}}
            >
              <img src={c.icon}   className={styles.Popup}  />
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
