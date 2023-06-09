import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container } from 'styles/Home';
import AppLayout from 'layouts/AppLayout';
import PaneLogin from 'components/Season/PaneLogin';
import useOnMouseOutside from 'libs/hooks/useOnMouseOutside';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import { ElcuboGlobalStyles } from 'styles/elcuboSeason.style';
import dynamic from 'next/dynamic';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import Links from 'constants/Links';

const MouseCircle = dynamic(() => import('components/MouseCircle/MouseCircle'), { ssr: false });

export default function SeasonPage({ data }) {
  const isLoggedIn = AuthService.isLoggedIn();
  const [user, setUser] = useState(null);
  const ref = useRef();
  const refHeader = useRef();
  const refPlayer = useRef();
  const [bigMouse, setBigMouse] = React.useState(false);
  const [showMouse, setShowMouse] = React.useState(true);
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const [auth, setAuth] = useState(null);

  const getMe = async () => {
    try {
      const me = await UserService.getMe();
      setUser(me.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setBigMouse(true);
    setShowMouse(true);
  };
  useOnMouseOutside(ref, (event) => {
    setShowMouse(false);
  });
  useOnMouseOutside(refHeader, (event) => {
    setBigMouse(true);
  });

  useOnMouseOutside(refPlayer, (event) => {
    setBigMouse(true);
  });

  React.useEffect(() => {
    const authenticated = () => {
      return (
        <div id="nav-login">
          <span className="user-logged">
            ¡Hola!  <a className="user-profile" key={'profile'} href={Links.profile}>{user ? user.full_name.split(' ')[0] : null}</a>
          </span>
          <a key={'logout'} href={Links.logout} className="link-logout">
            Salir
          </a>
        </div>
      );
    };
    const guest = () => {
      return (
        <div id="nav-login">
          <a key={'register'} href={Links.registerCharacters} className="link-login">
            Ingresar
          </a>
        </div>
      );
    };
    setAuth(isLoggedIn ? authenticated : guest);
  }, [isLoggedIn, user]);

  React.useEffect(() => {
    if (showLoginPanel) {
      document.getElementsByClassName('pane-login')[0].classList.add('open');
    } else {
      document.getElementsByClassName('pane-login')[0].classList.remove('open');
    }
  }, [showLoginPanel]);

  React.useEffect(() => {
    getMe();

    // Pane Login
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');
    const pane = document.querySelector('.pane-login');

    setTimeout(() => {
      document.getElementsByClassName('cover-reveal-row-1')[0].classList.add('active');
      document.getElementsByClassName('cover-reveal-row-1')[1].classList.add('active');
      document.getElementsByClassName('cover-reveal-row-1')[2].classList.add('active');
    }, 1000);

    /* Sound * /
    
    /* Track play */
    track.loop = true;

    let controlBtn = document.getElementById('play-pause');

    const playPause = () => {
      document.getElementsByClassName('Sound')[0].classList.toggle('off');
      document.getElementsByClassName('play-text')[0].classList.toggle('hide');
      document.getElementsByClassName('play-text')[1].classList.toggle('hide');

      if (track.paused) {
        track.play();
        controlBtn.className = 'pause';
      } else {
        track.pause();
        controlBtn.className = 'play';
      }
    }

    controlBtn.addEventListener('click', playPause);
    track.addEventListener('ended', function () {
      controlBtn.className = 'play';
    });

    const getRelationScroll = (pObject) => {
      let relation = (pObject.getBoundingClientRect().top / (main.clientHeight / 2)) * 100;
      return relation;
    }

    // Scroll for Hero-0
    const scrollEvent = () => {
      document.getElementsByClassName('cover-reveal-row-2')[0].classList.add('active');
      document.getElementsByClassName('paragraph-message-1')[0].classList.add('active-fadein');
      document.getElementsByClassName('paragraph-message-2')[0].classList.add('active-fadein');
      document.getElementsByClassName('credits')[0].classList.add('active-fadein');
    };
    document.addEventListener('scroll', scrollEvent);

    const fadeOut = (el, pTime) => {
      el.style.opacity = 1;
      const fade = () => {
        if ((el.style.opacity -= 0.07) < 0) {
          el.style.display = 'none';
        } else {
          setTimeout(fade, pTime);
        }
      };
      fade();
    };

    const fadeIn = (el, pTime) => {
      el.style.opacity = 0;
      el.style.display = 'block';
      const fade = () => {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.07) > 1)) {
          el.style.opacity = val;
          setTimeout(fade, pTime);
        } else {
          el.style.opacity = 1;
        }
      };
      fade();
    };

    if (button_open) {
      button_open.forEach((link) => {
        if (!isLoggedIn) {
          link.addEventListener('click', () => {
            setShowLoginPanel(true);
          });
        }
      });
    }

    if (button_close) {
      button_close.forEach((link) => {
        link.addEventListener('click', () => {
          setShowLoginPanel(false);
        });
      });
    }
  }, []);

  const handleMobileOnClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      window.location.href = '/el-cubo/temporada-1/personajes';

    } else {
      setShowLoginPanel(true);
    }
  }

  return (
    <AppLayout>
      <ElcuboGlobalStyles />
      <Head>
        <title>Temporada 1 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 1 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="/images/season2/season1-teaser.jpg" />
      </Head>
      <PaneLogin />
      <Container onMouseEnter={handleMouseEnter} ref={ref}>
        <MouseCircle
          showLoginPanel={setShowLoginPanel}
          href={isLoggedIn ? '/el-cubo/temporada-1/personajes' : '#'}
          text="Empezar"
          isBig={bigMouse}
          show={showMouse}
          className="circle-temp"
        />

        <div className="logo-season" ref={refHeader} onMouseEnter={() => setBigMouse(false)}>
          <HeaderTop />
          {auth}

          <div>
            <audio id="track" loop="">
              <source src="/audios/loop.mp3" type="audio/mpeg" />
            </audio>
            <div id="audio-player-container" className="audio-season">
              <div id="play-pause" className="play no-link">
                <div className="column-1">
                  <span className="mute hide play-text">silenciar</span>
                  <span className="listen play-text">escuchar</span>
                </div>
                <div className="column-2">
                  <div className="Sound off">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scrolldown">
          <div className="line" />
        </div>

        <div id="hero-3" className="hero hero-3">
          <img className="img-bg-deg" src="/images/bg-deg.png" />

          <video className="video-bg hide" autoPlay muted>
            <source
              src="/images/home/Video%20IN%204A.mp4"
              type="video/mp4"
            />
          </video>
          <img
            className="img-bg-pc"
            src="/images/home/SITILLVideo%20IN%204_0.jpeg"
          />
          <img
            className="img-bg-mobile"
            src="/images/home/SITILLVideo%20IN%204_0.jpeg"
          />
          <div className="video-overlay">
            <div className="copy-cover-2 cover-first">
              <div className="copy">
                <div className="cover-scroll">
                  <h1 className="cover-reveal-row cover-reveal-row-1">
                    <span className="third cyan-strong">Temporada 1</span>
                  </h1>
                  <h1 className="cover-reveal-row cover-reveal-row-1">
                    <span className="first cyan-strong first">Quien tiene</span>
                  </h1>
                  <h1 className="cover-reveal-row cover-reveal-row-1">
                    <span className="second white second">el poder...</span>
                  </h1>
                </div>
              </div>

              <p className="p-button">
                <a className="button-mobile toggle"
                  onClick={handleMobileOnClick}
                  href={'#'}>
                  Empieza tu experiencia{' '}
                </a>
              </p>

              <div className="cover-scroll">
                <h1 className="cover-reveal-row cover-reveal-row-2">
                  <span className="first fourth cyan-strong">
                    poder
                    <sup>1</sup>
                  </span>
                </h1>
              </div>

              <div className="paragraph-message paragraph-message-1">
                <p>
                  Del lat. vulg.
                  <em>*potēre</em>, creado sobre ciertas formas del verbo lat. posse 'poder1',
                  como potes 'puedes',
                  <em> potĕram</em> 'podía',
                  <em> potuisti</em> 'pudiste', etc.
                  <br /> Conjug. modelo. ◆ U. solo en 3.ª pers. en acep. 6.
                </p>

                <ol>
                  <li>Tener expedita la facultad o potencia de hacer algo.</li>
                  <li>Tener facilidad, tiempo o lugar de hacer algo. U. m. con neg.</li>
                  <li>
                    tr. coloq. Tener más fuerza que alguien, vencerlo luchando cuerpo a cuerpo.
                    <strong>
                      <em> Puedo a Roberto</em>
                    </strong>
                    .
                  </li>
                  <li>
                    Ser más fuerte que alguien, ser capaz de vencerlo.
                    <strong>
                      <em> No pudo CON su rival</em>
                    </strong>
                    .
                  </li>
                  <li>
                    Aguantar o soportar algo o a alguien que producen rechazo. U. con el verbo en
                    forma negativa.
                    <strong>
                      <em> No puedo CON sus impertinencias</em>
                    </strong>
                    .
                  </li>
                  <li>
                    intr. Ser contingente o posible que suceda algo.
                    <strong>
                      <em> Puede que llueva mañana</em>
                    </strong>
                    .
                  </li>
                </ol>

              </div>

              <div className="paragraph-message paragraph-message-2">
                <a href="https://elcubo.vercel.app/el-cubo/temporada-1/personajes">
                  <p>
                    Explora esta historia escrita y dirigida por <strong>Fabio Rubiano</strong> en
                    la que el abuso, la manipulación, la doble vida y los secretos de seis
                    personajes cuyos destinos se entrecruzan te llevarán a cuestionar tu percepción
                    sobre el <strong> PODER</strong>, la honestidad, los valores y la moral.
                  </p>
                </a>
              </div>

              <div className="credits">
                <p className="intro">
                  <strong>Un concepto original de</strong><br />
                  Juan Baquero Romero – Director De RTVCplay<br />
                  <br />
                  <img className="logo_india" src="/images/premio-india.png" />
                </p>
                <div className="credits-row credits-row-1">
                  <div className="column-left">
                    <strong>Diseño y Desarrollo El Cubo</strong><br />
                    Juan Baquero Romero - Director Creativo de Proyecto<br />
                    Fabio Rubiano - Guion Literario y Dirección Escénica y Audiovisual<br />
                    Arnau Gifreu - Diseño, Guion y Dirección de Interactividad<br />
                    Carolina Aponte Rodríguez - Productora de Proyecto<br />
                    María Margarita Herrera - Productora Ejecutiva <br />
                    Margarita Posada - Textos Modo Reflexivo<br />
                  </div>
                  <div className="column-right">
                    <strong>Una producción de Eva Producciones Artísticas en alianza con El Teatro Petra</strong>
                    <img src="/images/teatro.png" />
                  </div>
                </div>
                <div className="credits-row credits-row-2">

                  <div className="column-left">
                    <p>
                      <strong>Actores Principales</strong><br />
                      Marcela Valencia - Marina<br />
                      Liliana Escobar - Elvira<br />
                      Juanita Cetina - Alba<br />
                      Mauro Santos - Mercado<br />
                      Javier Riveros - Sales<br />
                      Bernardo García - Carey

                      <strong>Secundarios</strong><br />
                      Fredy Torres - El Capo<br />
                      Judith Segura - Leryn<br />
                      Santiago Gómez - Hijo De Mercado<br />
                      Ana María Cuéllar - Hija De Elvira<br />
                      Mario Escobar - Papá De Elvira<br />
                      Ana Sofia Téllez - Mamá De Elvira<br />
                      Oscar Garzón - Amante De Elvira<br />
                      Jenny Lara - Esposa De Sales<br />
                      Daniel Diaza - Hijo Falso De Sales<br />
                      Ariel Merchán - Joven O <br />
                      Jaques Toukhmanian - Fiscal <br />
                      Angélica García - Compañera Infancia Albav
                      Carlos Valencia - Papá Carey<br />
                      Cristina Umaña - Mamá Carey

                      <strong>Figurantes</strong><br />
                      Carolina Pose - Enfermera<br />
                      Esteban Torres - Médico

                      <strong>Producción Administrativa	</strong><br />
                      Jhon Sanabria – Contaduría -  Js Pinzon<br />
                      Julián Gutiérrez – Asistencia Contable<br />
                      Diego Mora – Asesoría Legal<br />
                      Sergio Romero - Asistencia De Producción Y Campo

                      <strong>Medios Digitales</strong><br />
                      Manuela Uribe - Foto Fija<br />
                      Sandra Suarez - Comunity Manager

                      <strong>Realización Audiovisual</strong><br />
                      Manuel Ponce - Realizador<br />
                      José Lucio - Director De Fotografía <br />
                      Adelio Leiva - Jefe Técnico E Iluminador Escénico<br />
                      Federico Vergara - Gaffer Y Asistente Fotografía <br />
                      Diego Tiriart - Asistencia De Iluminación<br />
                      Alberto Madera - Asistencia De Iluminación<br />
                      Daniel Santoyo - Steadycam  <br />
                      Alvaro Caviedes - Foco Y Asistencia De Cámara<br />
                      Alejandro Mora - Asistencia Steadycam<br />
                      Laura Reyes - Dit Manager <br />
                      Alejandro Mora - Dit Manager <br />
                      Ana Sofía Téllez - Maquillaje Y Asistencia De Actores<br /><br />

                      Camilo Galvis Guerra - Detrás De Cámaras Y Piezas Promocionales

                      <strong>Sonido - Hilo Studio</strong><br />
                      Yesid Vásquez – Sonido Directo Y Supervisión De Postproducción De Sonido<br />
                      Cristian Vargas – Microfonista<br />
                      Daniel Gómez	- Edición Y Mezcla De Sonido<br />
                      Stephanie Betancourt- Laura Portilla – Fernanda Cortés – Edición De Sonido<br />
                      Carlos Humberto Motta - Interpretación Músical - Trompeta

                      <strong>Diseño y Producción de Arte - I´ts A Wrap</strong><br />
                      Hernán García - Diseñador de Producción<br />
                      Juan Carlos Acevedo - Productor De Arte<br />
                      Diego García	- Director De Arte<br />
                      Melissa Villegas - Decoradora<br />
                      Andres Gurisatti - Prop Master
                    </p>


                  </div>

                  <div className="column-right">
                    <p>
                      <strong>Pin.It Estudios - Diseño De Vestuario</strong><br />
                      Camila Olarte - Diseñadora De Vestuario<br />
                      Melissa Cancino - Vestuarista

                      <strong>Los Niños Films - Postproducción Video</strong> <br />
                      Antonio Ponce - Músico<br />
                      Cesar Jaimes	- Editor<br />
                      Felipe Caceres - Editor<br />
                      Luis Fernando Rojas - Colorización<br />
                      Sebastián Cáceres	Traducción Trailer<br />
                      Diego Ricardo - Asistencia De Edición Promos

                      <strong>Interfaz.co - Estudio Multimedia</strong><br />
                      Juan Marín - Director Creativo<br />
                      Andrés Cano - Diseño Gráfico - Video y Animación<br />
                      José María Guaimas - It Director  <br />
                      Marcos Henning - Drupal Api<br />
                      Guillermo Colotti  - React Developer<br />
                      Santiago Semhan - Javascript Developer

                      <strong>Acrobacia - Golpe De Gracia</strong><br />
                      Juan Carlos García	- Stunt Coordinador<br />
                      David Herrera - Técnico Fx<br />
                      Nayiver Castaño Técnico Fx<br />
                      Camilo Rodríguez - Técnico Fx<br />
                      Fabián Bustamante - Tcnico Fx<br />
                      Ivan Orjuela	- Técnico Fx

                      <strong>Alimentación	 - El Vientre De La Ballena</strong><br />
                      Mariela Rubiano - Jefa De Alimentación <br />
                      Amparo Lasso - Chef 1<br />
                      Santiago Villegas - Chef 2<br />
                      Esteban Torres - Chef 2<br />
                      Carolina Pose - Asistente De Servicio Alimentación<br />
                      Sergio Hernández - Chef Y Servicio

                      <strong>Logística Teatro Petra</strong>	<br />
                      Sandra Suárez - Jefa De Sala<br />
                      Martha Isabel Espinosa - Servicios Generales<br />
                      July Niño - Auxiliar De Enfermería

                      <strong>Transporte</strong><br />
                      Fabio Enrique Guayara - Transporte Van<br />
                      Martin Fonseca - Transportes Fonseca

                      <strong>Rtvc - Rtvcplay</strong><br />
                      Álvaro García Jiménez - Gerente Rtvc<br />
                      Juan Carlos Baquero - Director De Rtvcplay<br />
                      María Del Pilar Cubillos - Productora Ejecutiva <br />
                      Carolina Aponte Rodríguez - Productora Delegada De Contenidos Originales <br />
                      Juliana García Mutis - Productora Ejecutiva De Contenidos Originales <br />
                      Lina Acosta Góngora - Productora De Proyectos <br />
                      Luisa Fernanda Mayorga - Productora General <br />
                      Camilo Galvis Guerra - Realizador Audiovisual <br />
                      César Peralta Pérez - Estratega Digital <br />
                      Luis Guayana Garzón - Editor Web <br />
                      Fabián Melo Hernández - Diseñador Web <br />
                      Fernando Cruz Quintero - Asistente De Producción<br />
                      Mariana Mosquera Gutiérrez - Periodista Web

                      <strong>Dirección De Tecnologías Convergentes RTVC</strong><br />
                      Orlando Bernal Díaz - Director de Tecnologías<br />
                      Gerardo Andrés Penagos - Dueño de Producto<br />
                      Juan Jorge Hernández - Desarrollador de Sitios Web y Aplicaciones Móviles<br />
                      Iván Darío Roldán - Administrador Infraestructura Nube<br />

                      <img className="credits-rtvc" src="/images/logo-RTVCPlay-Header.png" />
                      <strong className="credits-year">Año de producción: 2020 - 2021
                        MCMXXI, reservados todos los derechos</strong><br />


                      <h3 className="credits-mintic-p">Este contenido fue financiado con recursos del Fondo Único de Tecnologías de la Información y las Comunicaciones de</h3>
                      <img className="credits-mintic" src="/images/rtvc/mintic.png" />
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}