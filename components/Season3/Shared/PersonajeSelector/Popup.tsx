import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './season3.popup.module.scss';
import { useRouter } from "next/router";
import cx from 'classnames';

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
    name: 'juan',
    top: '60%',
    left: '60%',
  },
  {
    name: 'yenny',
    top: '5%',
    left: '83%',
  },
  {
    name: 'guillermo',
    top: '80%',
    left: '61%',
  },
]

export const Popup = ({ ...props }) => {

  const char = props.characters;
  const [popupSizes, setPopupSizes] = useState(false);

  const [isViewed, setViewed] = useState(false);

  const { query } = useRouter();

  useEffect(() => {

    if (query.ref == "view") {
      setViewed(true);
    }
    else {
      setViewed(false);
    }

    char.forEach(character => {
      ubications.forEach(ubication => {
        if (ubication.name === character.name || ubication.name === character.realName) {
          const popup = document.querySelector(`#${character.name}`) as HTMLElement;
          popup.style.position = 'absolute';
          popup.style.top = ubication.top;
          popup.style.left = ubication.left;
        }
      });
    });
  }, [query])


  async function openPersonajesModal() {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (props.onClickPersonajesModal) {
      props.onClickPersonajesModal();
    }
  }

  function updatePersonaje(bg: string, name: string, description: string, icon: string, link: string) {
    if (props.updatePersonaje) {
      props.updatePersonaje(bg, name, description, icon, link);
    }
  }

  return (
    <Fragment>
      {
        props.characters.map((c, index) => (
          <div className={`${styles.PopupContainer} ${styles[c.name + `-g`]} ${!isViewed ? cx(styles.FirstTime) : cx(styles.Viewed)}`} id={`${c.name}`} key={index}>
            <div
              onClick={() => { updatePersonaje(`${c.background}`, `${c.realName}`, `${c.description}`, `${c.icon}`, `${c.link}`); openPersonajesModal(); }}
              className={styles.titleImage}
              style={{ cursor: "pointer" }}
            >
              <img src={c.icon} className={styles.Popup} />
            </div>

          </div>
        ))
      }
    </Fragment>
  )
}

