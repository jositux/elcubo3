import React, { Fragment, useEffect, useState } from 'react';
import styles from './season3.characters.module.scss';
import { useRouter } from "next/router";
import cx from 'classnames';

const ubications = [
  {
    name: 'soledad',
    top: '30%',
    left: '45%',
  },
  {
    name: 'diego',
    top: '44%',
    left: '52%',
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

export const Characters = ({ ...props }) => {

  const char = props.characters;

  useEffect(() => {

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
  })

  function updatePersonaje(bg: string, name: string, description: string, icon: string, link: string) {
    if (props.updatePersonaje) {
      props.updatePersonaje(bg, name, description, icon, link);
    }
  }

  return (
    <Fragment>
      {
        props.characters.map((c, index) => (
          <div className={`${styles.PopupContainer} ${styles[c.name + `-g`]}`} id={`${c.name}`} key={index}>
            <a
              href={c.link}
              className={styles.titleImage}
              style={{ cursor: "pointer" }}
            >
              <img src={c.icon} className={styles.Popup} />
            </a>

          </div>
        ))
      }
    </Fragment>
  )

}

export default Characters;

