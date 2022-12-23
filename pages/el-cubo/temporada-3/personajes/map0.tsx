import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Season3/Header/Header';
import Footer from 'components/Footer/Footer';
import useDetectDevice from 'hooks/useDetectDevice';
import styles from './map.module.scss';
//import PersonajesModal from 'components/Season3/Modal/Personajes/PersonajesModal';
import PersonajesModalFade from 'components/Season3/Modal/Personajes/PersonajesModalFade';
import { Cards } from 'components/Season3/Shared/Cards/Cards';
import { Popup } from 'components/Season3/Shared/PersonajeSelector/Popup';
import CloseIconCards from 'components/Season3/Svg/CloseIconCards';
import Help from 'components/Season3/Svg/Help';
import { useRouter } from "next/router";
import cx from 'classnames';

const characters = [
  {
    name:'soledad', 
    realName: 'Soledad', 
    description: '“Los cambios siempre dan miedo, pero hay que hacerlos con miedos y todo“',
    background: '/images/season3/steals/personaje-soledad.jpg',
    icon :'/images/season3/map/popups/popup-soledad.png',
    link: '../soledad',
  },
  {
    name:'diego', 
    realName: 'Diego', 
    description: '“Para lograr las cosas primero hay que soñarlas“',
    background: '/images/season3/steals/personaje-diego.jpg',
    icon :'/images/season3/map/popups/popup-diego.png',
    link: '../diego',
  },
  {
    name:'juandejesus', 
    realName: 'Juan de Jesús', 
    description: '“Uno busca su misión en la vida, pero a veces es la propia misión la que a uno lo encuentra“',
    background: '/images/season3/steals/personaje-juan.jpg',
    icon :'/images/season3/map/popups/popup-juandejesus.png',
    link: '../juan-de-jesus',
  },
  {
    name:'jenny', 
    realName: 'Jenny', 
    description: '“Viajando se conoce la libertad“',
    background: '/images/season3/steals/personaje-jenny.jpg',
    icon :'/images/season3/map/popups/popup-jenny.png',
    link: '../jenny',
  },
  {
    name:'guillermo', 
    realName: 'Don Guillermo', 
    description: '“Y si algún día me separo de María, espero encontrarla del otro lado“',
    background: '/images/season3/steals/personaje-guillermo.jpg',
    icon :'/images/season3/map/popups/popup-guillermo.png',
    link: '../guillermo',
  },
];

const map = () => {

  const { isMobile } = useDetectDevice();
  const [isShowCards, setIsShowCards] = useState(false);

  const [showPersonajesModal, setShowPersonajesModal] = useState(false);
  const [background, setBackground] = useState('/images/season3/steals/0-home-steal-desktop.jpg');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [link, setLink] = useState('');

  const { query } = useRouter(); 

  useEffect(() => {

    if (isShowCards) {
      handleCards();
    };
    
  }, [])
  
  const handleCards = () => {
    const overlay = document.querySelector('#overlay') as HTMLElement;
    overlay.style.display = 'block';
    setIsShowCards(true);
  }

  const closeCards = () => {
    const overlay = document.querySelector('#overlay') as HTMLElement;
    overlay.style.display = 'none';
    
    setIsShowCards(false);
    fadeOutEffect(overlay);
  }

  const toggleCards = () => { 
    if(!isShowCards) {
      handleCards();
    }
    else {
      closeCards();
    }
  }

  const handleOnClickPersonajesModal = () => {
    setShowPersonajesModal(true);
  };

  const handleOnClosePersonajesModal = () => {
    setShowPersonajesModal(false);
  };

  function updatePersonaje(background, name, description, icon, link) {
    setBackground(background);
    setName(name);
    setDescription(description);
    setIcon(icon);
    setLink(link);
  }


  function fadeOutEffect(el) {
    var fadeEffect = setInterval(function () {
        if (!el.style.opacity) {
            el.style.opacity = 1;
        }
        if (el.style.opacity > 0) {
            el.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 2000);
}


  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <Header />
      <PersonajesModal
            background={background}
            name = {name}
            description = {description}
            icon = {icon}
            link = {link}
            showPersonajesModal={showPersonajesModal}
            onClosePersonajesModal={handleOnClosePersonajesModal}
      />
      
      { 
      !query.ref && 
      <video className={styles.VideoOverlay} autoPlay loop playsInline muted>
          <source src="/videos/intro_season3c.mp4" type="video/mp4" />
      </video>
      }
      <div className={styles.overlay} id='overlay'>
        {
          isShowCards ? <Cards closeCards={closeCards} /> : ''
        }
      </div>
      <div className={styles.MapContainer}>
      <div id="LogoSeason" className={styles.LogoSeason}>
        <img src="/images/season3/logo-caminos-de-jordan.png" />
      </div>
      
      <div className={`${!isShowCards ? cx(styles.HelpIcon) : cx(styles.HelpIcon)}` } onClick={toggleCards}>
      {
      isShowCards ? <CloseIconCards /> : <Help />
      }
      </div>
        <img className={styles.MapImage} src="/images/season3/map/jordan-map-bg.jpg" />
      
        <div className={styles.CharacterBackground}>
          
          <Popup characters={characters} onClickPersonajesModal={ handleOnClickPersonajesModal } updatePersonaje={ updatePersonaje } refered={!query.ref ? "first" : "viewed" } />

        </div>
      </div>  

      <Footer />
    </Fragment>
  )
}

export default map