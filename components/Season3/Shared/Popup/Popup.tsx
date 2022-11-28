import React, { Fragment, useEffect, useRef, useState } from 'react';
import Links from 'constants/Links';
import styles from './season3.popup.module.scss';
import CloseIconBgCharacter from 'components/Season3/Svg/CloseIconBgCharacter';

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

export const Popup = ({ characters, handleCharacterBackground }) => {

  const [popupBig, setPopupBig] = useState(false);
  const [idPopupRef, setIdPopupRef] = useState('');

  useEffect(() => {
    characters.forEach( character => {
      ubications.forEach( ubication => {
        if (ubication.name === character.name || ubication.name === character.realName) {
          let popup = document.querySelector(`#${character.name}`) as HTMLElement;
          popup.style.position = 'absolute';
          popup.style.top = ubication.top;
          popup.style.left = ubication.left;
          popup.style.zIndex = '1'
        }
      });
    });
  }, [])

  
  const clickPopupCharacter = (e) => {
    let id = '';
    if (e.currentTarget.id === 'btnCloseBackgroundCharacter') {
      id = idPopupRef;
    } else {
      id = e.currentTarget.id;
    }
 
    const popupSelected = document.querySelector(`#${id}`) as HTMLElement;
    const popupImageSelected = document.querySelector(`#${id}Popup`) as HTMLImageElement;
    const btnCloseBackgroundCharacter = document.querySelector('#btnCloseBackgroundCharacter') as HTMLElement;
    let pathBgCharacter = '';

    if (!popupBig) {
      //show description character
      const contentText = document.querySelector(`#${id}TextContent `) as HTMLElement;
      contentText.style.display = 'block';
      pathBgCharacter = `"/images/season3/map/backgroundCharacter/${id}.png"`; //change background character
      popupImageSelected.src = `/images/season3/map/popups/popup-b-${id}.png`;
      btnCloseBackgroundCharacter.style.display = 'flex';

      switch (e.currentTarget.id) {
        case 'soledad':
          popupSelected.className += ` ${styles.soledadPopupBig}`; //change size popup
          break;
        
        case 'diego':
          popupSelected.className += ` ${styles.diegoPopupBig}`;
          break;
        
        case 'juandejesus':
          popupSelected.className += ` ${styles.juandejesusPopupBig}`;
          break;

        case 'guillermo':
          popupSelected.className += ` ${styles.guillermoPopupBig}`;
          break;

        case 'jenny':
          popupSelected.className += ` ${styles.jennyPopupBig}`;
          break;
      }

      popupSelected.style.zIndex = '5';//change z-index background
      setIdPopupRef(id);
    } else {
      popupSelected.className = styles.PopupContainer;
      const contentText = document.querySelector(`#${id}TextContent `) as HTMLElement;
      contentText.style.display = 'none';
      popupImageSelected.src = `/images/season3/map/popups/popup-m-${id}.png`
      popupSelected.style.zIndex = '1';//change z-index background
      btnCloseBackgroundCharacter.style.display = 'none';

      setIdPopupRef('');
    }

    setPopupBig(!popupBig);
    handleCharacterBackground(pathBgCharacter);
  }


  return (
    <Fragment>
      <div className={styles.btnCloseBackgroundCharacter} id='btnCloseBackgroundCharacter' onClick={clickPopupCharacter}>
        <CloseIconBgCharacter />
        <p>Cerrar</p>
      </div>
      {
        characters.map( (c, index) => (
          <div className= { styles.PopupContainer } id={`${c.name}`} key={index} onClick={clickPopupCharacter}>
            <div className={styles.titleImage}>
              <h2>{c.realName}</h2>
              <img src={`/images/season3/map/popups/popup-m-${c.name}.png`} className={styles.Popup} id={`${c.name}Popup`} />
            </div>
            <div className={styles.textContent } id={`${c.name}TextContent`}>
              <h1>{c.realName}</h1>
              <p>{c.description}</p>
              <a href={Links.testVideo}>
                <span>iniciar experiencia</span>
              </a>
            </div>
          </div>
        ))
      }
    </Fragment>
  )
}
