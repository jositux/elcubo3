import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import Header from 'components/Season3/Header/Header';
import Footer from 'components/Footer/Footer';
import PropTypes from 'prop-types'
import PersonajesModalSlide from 'components/Season3/Modal/Personajes/PersonajesModalSlide';
import { Cards } from 'components/Season3/Shared/Cards/Cards';
import { Pines } from 'components/Season3/Shared/PersonajeSelector/Pines';
import CloseIconCards from 'components/Season3/Svg/CloseIconCards';
import Help from 'components/Season3/Svg/Help';
import { useRouter } from "next/router";
import cx from 'classnames';
import styles from './personajes.module.scss';
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';


const characters = [
  {
    background: '/images/season3/steals/personaje-soledad.jpg',
    name: 'soledad',
    realName: 'Soledad Silva Rico',
    nameButton: 'Soledad',
    description: 'Cuando estamos en medio del huracán es imposible ver. Pero Soledad ha ido redescubriendo su propia fuerza y ahora solo le quedan sueños por cumplir. ¿Sabes de qué es capaz?',
    age: '34 años',
    proof: 'Concejal, Agricultora',
    born: '',
    address: 'Vereda Morros - Jordán Sube',
    icon: '/images/season3/map/popups/popup-soledad.png',
    link: '../temporada-3/interactivo/soledad',
  },
  {
    background: '/images/season3/steals/personaje-diego.jpg',
    name: 'diego',
    realName: 'Diego Sarmiento',
    nameButton: 'Diego',
    description: '¿Has sentido alguna vez que tienes que decidir entre seguir tu pasión y pagar las cuentas? Eso es lo que le pasa precisamente a Diego. Solo quiere que el tiempo y el dinero le alcancen para cumplir su sueño.',
    age: '39 años',
    proof: 'Agricultor, Conductor, Músico',
    born: '',
    address: 'Vereda Suavecito - Jordán Sube',
    icon: '/images/season3/map/popups/popup-diego.png',
    link: '../temporada-3/interactivo/diego',
  },
  {
    background: '/images/season3/steals/personaje-guillermo.jpg',
    name: 'guillermo',
    realName: 'Guillermo Prada Monsalve',
    nameButton: 'Guillermo',
    description: '¿Te ha pasado que un mosquito te quita el sueño? Guillermo se para todas las noches a espantar lo que le asusta. En la historia de este hombre se juntan la belleza, el cuidado y la fragilidad para recordarnos que todo es impermanente. Y que todo sobrevive en la memoria.',
    age: '77 años',
    proof: ' Pescador; Agricultor; Sobandero',
    born: '',
    address: 'Via Jordán - Mesa de los Santos',
    icon: '/images/season3/map/popups/popup-guillermo.png',
    link: '../temporada-3/interactivo/guillermo',
  },
  {
    background: '/images/season3/steals/personaje-juan.jpg',
    name: 'juan',
    realName: 'Juan de Jesús Estévez',
    nameButton: 'Juan de Jesús',
    description: 'Como muchos de nosotros, el párroco Juan de Jesús siente a veces que para hacer lo importante tiene que mover montañas. Se ha propuesto dos misiones muy difíciles. Mira fijamente con él eso que parece ser ingenuidad o locura, y entiende por qué no lo es.',
    age: '35 años',
    proof: 'Sacerdote',
    born: 'Nacido en el municipio de Mogotes - Santander',
    address: 'Casa cural, casco urbano de Jordán Sube',
    icon: '/images/season3/map/popups/popup-juan.png',
    link: '../temporada-3/interactivo/juan',
  },
  {
    background: '/images/season3/steals/personaje-yenny.jpg',
    name: 'yenny',
    realName: 'Yenny Delgado',
    nameButton: 'Yenny',
    description: '¿La vida te ha puesto en una situación de la que parece no haber escapatoria? Yenny es la única hija de un matriarcado compuesto por su mamá y sus 4 tías. Las quiere mucho pero tiene grandes sueños. Descúbrelos y sueña con ella.',
    age: '38 años',
    proof: 'Bachiller; Catequista',
    born: '',
    address: 'Vereda El Pozo - Jordán Sube',
    icon: '/images/season3/map/popups/popup-yenny.png',
    link: '../temporada-3/interactivo/yenny',
  },

];

const Fader = ({ text }) => {

  const [isActive, setIsActive] = useState(false);

  const [texto, setTexto] = useState('');

  const [isShowCards, setIsShowCards] = useState(false);

  const [showPersonajesModal, setShowPersonajesModal] = useState(true);
  const [background, setBackground] = useState('/images/season3/steals/0-home-steal-desktop.jpg');
  const [name, setName] = useState('');
  const [realName, setRealName] = useState('');
  const [nameButton, setNameButton] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [born, setBorn] = useState('');
  const [address, setAdress] = useState('');
  const [proof, setProof] = useState('');
  const [icon, setIcon] = useState('');
  const [link, setLink] = useState('');

  const { query } = useRouter();

  useEffect(() => {

    console.log(query.ref)
    if (!query.ref) {
      handleCards();
    }
    else {
      closeCards();
    }

  }, [query])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsShowCards(false)
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


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

  const toggleCards = () => {
    if (!isShowCards) {
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
    clickear()
  };

  function updatePersonaje(background, name, realName, nameButton, description, age, proof, born, address, icon, link) {
    setBackground(background);
    setName(name);
    setRealName(realName);
    setNameButton(nameButton);
    setDescription(description);
    setAge(age);
    setProof(proof);
    setBorn(born);
    setAdress(address);
    setIcon(icon);
    setLink(link);
  }

  function clickear() {
    setIsActive(!isActive);
  }


  function updateText(pTexto) {
    setTexto(pTexto);
  }


  let srcVideo = UrlUtils.getVideoUrl("488026");
  const [player, setPlayer] = useState(null);

  const handleCloseInteractive = () => {
    return false;
  }



  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <div data-testid="fader" className={`${styles.PersonajesSlide} ${isActive ? styles.open : ''}`}>
        <div className={styles.Slide}>
          <PersonajesModalSlide
            background={background}
            name={name}
            nameButton={nameButton}
            realName={realName}
            description={description}
            age={age}
            proof={proof}
            born={born}
            address={address}
            icon={icon}
            link={link}
            showPersonajesModal={showPersonajesModal}
            onClosePersonajesModal={handleOnClosePersonajesModal}
          />
        </div>
      </div>

      <Header />



      {
        !query.ref &&
        <div className={styles.VideoOverlay}>
          <Video2Level title={''}
            source={srcVideo}
            showPrevButton={false}
            showNextButton={false}
            setPlayer={setPlayer}
            onVideoEnded={() => {
              handleCloseInteractive();
            }}
            fullscreen={false}
            autoPlay={true}
            loop={false}
          />
        </div>
      }
      <div className={styles.overlay} id='overlay'>
        {
          isShowCards ? <Cards closeCards={closeCards} /> : ''
        }
      </div>
      <div className={styles.MapContainer}>
        <div id="LogoSeason" className={styles.LogoSeason}>
          <a href="/el-cubo/temporada-3">
            <img src="/images/season3/logo-caminos-de-jordan.png" />
          </a>
        </div>

        <div className={`${!isShowCards ? cx(styles.HelpIcon) : cx(styles.HelpIcon)}`} onClick={toggleCards}>
          {
            isShowCards ? <CloseIconCards /> : <Help />
          }
        </div>
        <img className={styles.MapImage} src="/images/season3/map/jordan-map-bg.jpg" />

        <div className={styles.CharacterBackground}>

          <Pines characters={characters} onClickPersonajesModal={clickear} updatePersonaje={updatePersonaje} refered={!query.ref ? "first" : "viewed"} />

        </div>
      </div>
      <Footer />
    </Fragment >
  )
}


export default Fader