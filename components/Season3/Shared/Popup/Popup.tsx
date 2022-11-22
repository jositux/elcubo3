import React, { Fragment, useEffect, useRef } from 'react';
import styles from './season3.popup.module.scss';

const ubications = [
  {
    name: 'soledad', 
    top: '320px', 
    left: '790px', 
  },
  {
    name: 'diego', 
    top: '415px', 
    left: '886px',
  },
  {
    name: 'juandejesus', 
    top: '460px', 
    left: '1050px',
  },
  {
    name: 'jenny', 
    top: '-190px', 
    left: '1420px',
  },
  {
    name: 'guillermo', 
    top: '480px', 
    left: '1080px',
  },
]

export const Popup = (props:any) => {

  const {characters} = props;

  useEffect(() => {
    characters.forEach( character => {
      ubications.forEach( ubication => {
        if (ubication.name === character.name || ubication.name === character.realName) {
          const popup = document.querySelector(`#${character.name}`) as HTMLElement;
          popup.style.position = 'relative';
          popup.style.top = ubication.top;
          popup.style.left = ubication.left;
        }
      });
    });
  }, [])
  
  
  return (
    <Fragment>
      {
        characters.map( (c, index) => (
          <div className={styles.PopupContainer } id={`${c.name}`} key={index}>
            <img src={`/images/season3/map/popups/popup-${c.name}.png`} className={styles.Popup}  />
          </div>
        ))
      }
    </Fragment>
  )
}
