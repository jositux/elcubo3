import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head';
import HeaderSeason from 'components/Season3/Header/HeaderSeason';
import Footer from 'components/Footer/Footer';
import PersonajesModalSlide from 'components/Season3/Modal/Personajes/PersonajesModalSlide';
import { Cards } from 'components/Season3/Shared/Cards/Cards';
import { Pines } from 'components/Season3/Shared/PersonajeSelector/Pines';
import CloseIconCards from 'components/Season3/Svg/CloseIconCards';
import Help from 'components/Season3/Svg/Help';
import { useRouter } from "next/router";
import cx from 'classnames';
import styles from './personajes.module.scss';
import FadeModal from 'components/Season3/Interactive/FadeModal/FadeModal';
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import UrlUtils from 'utils/Url';
import ListCharacters from 'components/Season3/ListCharacters/ListCharacters';
import disableScroll from 'disable-scroll';

const Personajes = ({ text }) => {

  const router = useRouter();

  const characters = [

    {
      background: '/images/season3/steals/personaje-soledad.jpg',
      name: 'soledad',
      realName: 'Soledad Silva',
      nameButton: 'Soledad',
      description: router.locale === 'en' ?
        'When we are in the middle of the hurricane she is impossible to see, but Soledad has been rediscovering her own strength and now she only has dreams to achieve. Do you want to know what she is capable of?' :
        'Cuando estamos en medio del huracán es imposible ver, pero Soledad ha ido redescubriendo su propia fuerza y ahora solo le quedan sueños por cumplir. ¿Quieres saber de qué es capaz?',
      age: '34',
      proof: router.locale === 'en' ?
        'town councilwoman, farmer' :
        'concejal, agricultora',
      born: '',
      address: 'Vereda Morros - Jordán Sube',
      icon: '/images/season3/map/popups/popup-soledad-yellow.png',
      link: '../temporada-3/interactivo/soledad',
    },
    {
      background: '/images/season3/steals/personaje-diego.jpg',
      name: 'diego',
      realName: 'Diego Sarmiento',
      nameButton: 'Diego',
      description: router.locale === 'en' ?
        'To follow your passion or to pay the bills? This is the story of Diego, a carranga’s descendant who only wants enough time and money to achieve his aspirations in life.' :
        'Esta es la historia de Diego, un descendiente de la carranga que sólo desea que el tiempo y dinero sean suficientes para alcanzar sus aspiraciones en la vida.',
      age: '39',
      proof: router.locale === 'en' ?
        'farmer, driver, musician' :
        'agricultor, conductor, músico',
      born: '',
      address: 'Vereda Suavecito - Jordán Sube',
      icon: '/images/season3/map/popups/popup-diego-yellow.png',
      link: '../temporada-3/interactivo/diego',
    },
    {
      background: '/images/season3/steals/personaje-guillermo.jpg',
      name: 'guillermo',
      realName: 'Guillermo Prada',
      nameButton: 'Guillermo',
      description: router.locale === 'en' ?
        'Has a mosquito ever taken away your sleep? Guillermo wakes up every night to shoo away (scare way) what scares him. His story is made of beauty, carefulness and fragility to remind us that nothing last forever (that everything is impermanent)' :
        '¿Alguna vez un mosquito te ha quitado el sueño? Guillermo se despierta todas las noches a espantar lo que le asusta. Su historia está compuesta de belleza, cuidado y fragilidad para recordarnos que todo es impermanente.',
      age: '77',
      proof: router.locale === 'en' ?
        'Fisherman, farmer, sobandero (massage therapist)' :
        'pescador; agricultor; sobandero',
      born: '',
      address: 'Via Jordán - Mesa de los Santos',
      icon: '/images/season3/map/popups/popup-guillermo-yellow.png',
      link: '../temporada-3/interactivo/guillermo',
    },
    {
      background: '/images/season3/steals/personaje-juan.jpg',
      name: 'juan',
      realName: 'Juan de Jesús Estévez',
      nameButton: 'Juan de Jesús',
      description: router.locale === 'en' ?
        'Like many of us, the parish priest Juan de Jesus sometimes feels that to do important things, he has to move mountains. He is determined to achieve two very difficult missions. Look closely at what seems to be naivety or madness and understand why it is not.' :
        'Como muchos de nosotros, el párroco Juan de Jesús siente a veces que para hacer lo importante tiene que mover montañas. Se ha propuesto dos misiones muy difíciles. Mira fijamente con él eso que parece ser ingenuidad o locura, y entiende por qué no lo es.',
      age: '35',
      proof: router.locale === 'en' ?
        'priest' :
        'sacerdote',
      born: 'Nacido en el municipio de Mogotes - Santander',
      address: 'Casa cural, casco urbano de Jordán Sube',
      icon: '/images/season3/map/popups/popup-juan-yellow.png',
      link: '../temporada-3/interactivo/juan',
    },
    {
      background: '/images/season3/steals/personaje-yenny.jpg',
      name: 'yenny',
      realName: 'Yenny Delgado',
      nameButton: 'Yenny',
      description: router.locale === 'en' ?
        'Has ever life put you in a position where you feel there is no way out? Yenny is the only daughter of a matriarchy made up of her mother and 4 aunts. She loves them, but she has big dreams. Discover them and dream with her.' :
        '¿La vida te ha puesto en una situación de la que parece no haber escapatoria? Yenny es la única hija de un matriarcado compuesto por su mamá y sus 4 tías. Las quiere mucho pero tiene grandes sueños. Descúbrelos y sueña con ella.',
      age: '38',
      proof: router.locale === 'en' ?
        'High school graduate, catechist' :
        'bachiller, catequista',
      born: '',
      address: 'Vereda El Pozo - Jordán Sube',
      icon: '/images/season3/map/popups/popup-yenny-yellow.png',
      link: '../temporada-3/interactivo/yenny',
    },

  ];

  const [isActive, setIsActive] = useState(false);

  const [texto, setTexto] = useState('');

  const [isShowCards, setIsShowCards] = useState(true);

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
    if (!query.ref || query.ref === "init") {
      handleCards();
    }
    else {
      if (query.ref === "view") {
        closeCards();
      }
    }

  }, [query])


  const handleCards = () => {
    //const overlay = document.querySelector('#overlay') as HTMLElement;
    //overlay.style.display = 'block';
    setIsShowCards(true);
  }

  const closeCards = () => {
    //const overlay = document.querySelector('#overlay') as HTMLElement;
    //overlay.style.display = 'none';
    setIsShowCards(false);
  }

  const toggleCards = () => {
    if (!isShowCards) {
      handleCards();
      if (audios?.click) {
        audios.click.play();
      }
    }
    else {
      closeCards();
      if (audios?.click) {
        audios.click.play();
      }
    }
  }


  const handleOnClosePersonajesModal = () => {
    clickear();
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
    if (audios?.click) {
      audios.click.play();
    }
    !isActive ? disableScroll.on() : disableScroll.off();
  }


  function updateText(pTexto) {
    setTexto(pTexto);
  }


  const [player, setPlayer] = useState(null);
  const [isSlideOpen, setIsSlideOpen] = useState(true);
  let srcVideo = UrlUtils.getVideoUrl("a02494");

  const [openVideo, setOpenVideo] = useState(true)


  useEffect(() => {
    if (player) {
      disableScroll.on();
      if (isSlideOpen) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [player, isSlideOpen]);

  const openHandler = () => {
    setOpenVideo(true);
  }

  const stopVideoHandler = () => {
    setOpenVideo(false);
    disableScroll.off();
    const stop = player && (player.stop || player.pause);
    stop && stop();
  }

  const [audios, setAudios] = useState(null);

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
      alert: new Audio('/audios/season2/notifications_alerts/alert_1.mp3'),
      expand: new Audio('/audios/actions/expand.mp3'),
      message: new Audio('/audios/season2/notifications_alerts/notification_6.mp3')
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      {
        query.ref === "init" &&
        <div id="videoContainerIntro">
          <FadeModal
            showModal={openVideo}
            //onOpenModal={handleOpenInteractive}
            onCloseModal={stopVideoHandler}
            setShowModal={openVideo}
          >
            {openVideo &&
              <Video2Level
                title=""
                source={srcVideo}
                showPrevButton={false}
                showNextButton={false}
                setPlayer={setPlayer}
                onVideoEnded={() => {
                  stopVideoHandler();
                }}
                fullscreen={false}
                autoPlay={true}
              />
            }
          </FadeModal>
        </div>
      }

      <div className={styles.CharactersCover}>
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

        <HeaderSeason />

        <div className={query.ref === "init" ? "first" : "viewed"}>
          <ListCharacters
            char="all"
            percentParam={0}
            timeline={true}
          />
        </div>


        {
          isShowCards ? <Cards closeCards={closeCards} /> : ''
        }

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

            <Pines characters={characters} onClickPersonajesModal={clickear} updatePersonaje={updatePersonaje} refered={query.ref === "init" ? "first" : "viewed"} />

          </div>
        </div>
        <Footer />

      </div>
    </Fragment >
  )
}


export default Personajes