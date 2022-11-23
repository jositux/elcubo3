import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Season3/Header/Header';
import Footer from 'components/Footer/Footer';
import useDetectDevice from 'hooks/useDetectDevice';
import styles from './map.module.scss';
import { Cards } from 'components/Season3/Shared/Cards/Cards';
import { Popup } from 'components/Season3/Shared/Popup/Popup';

const characters = [
  {
    name:'soledad', 
    realName: 'Soledad', 
    description: '“Los cambios siempre dan miedo, pero hay que hacerlos con miedos y todo“',
  },
  {
    name:'diego', 
    realName: 'Diego', 
    description: '“Para lograr las cosas primero hay que soñarlas“',
  },
  {
    name:'juandejesus', 
    realName: 'Juan de Jesús', 
    description: '“Uno busca su misión en la vida, pero a veces es la propia misión la que a uno lo encuentra“',
  },
  {
    name:'jenny', 
    realName: 'Jenny', 
    description: '“Viajando se conoce la libertad“',
  },
  {
    name:'guillermo', 
    realName: 'Guillermo', 
    description: '“Y si algún día me separo de María, espero encontrarla del otro lado“',
  },
];

const map = () => {

  const { isMobile } = useDetectDevice();
  const [isShowCards, setIsShowCards] = useState(true);

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

      <div className={styles.overlay} id='overlay'>
        {
          isShowCards ? <Cards closeCards={closeCards} /> : ''
        }
      </div>
      <div className={styles.MapContainer}>
        <img className={styles.MapImage} src="/images/season3/map/jordan-map-bg.png" />
        <div className={styles.CharacterBackground}>
          
          <Popup characters={characters} />

        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default map