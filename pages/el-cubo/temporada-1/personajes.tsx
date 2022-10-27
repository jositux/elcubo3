import React, { useState } from 'react';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import AppLayout from 'layouts/AppLayout';
import Help from 'components/CharacterSelector/Help';
import fetcher from 'libs/fetcher';
import { GetStaticProps } from 'next';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'styles/Home';
import { PersonajesGlobalStyle } from 'styles/personajes.style';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import Links from 'constants/Links';
import Names from 'utils/Names';
import { season1_id } from 'constants/Season';

const CharactersPage = ({ data = {} }) => {

  const { isFallback } = useRouter();

  if (!isFallback && !data) {
    return <Error statusCode={404} title="Page could not be found" />;
  }

  const isLoggedIn = AuthService.isLoggedIn();
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);
  const [videoLink, setVideoLink] = React.useState('/');
  const { chronology, field_ec_characters, field_ec_characters_terms_json } = data;

  const getMe = async () => {
    try {
      const me = await UserService.getMe();
      setUser(me.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const authenticated = () => {
      return (
        <div id="nav-login">
          <span className="user-logged">
            ¡Hola! <a className="user-profile" key={'profile'} href={Links.profile}>{user ? user.full_name.split(' ')[0] : null}</a>
          </span>
          <a key={'logout'} href={Links.logoutCharacters} className="link-logout">
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
    getMe();

    // Pane Slide
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');
    const pane = document.querySelector('.pane');
    const pane_cover = document.querySelector('.pane-cover');
    const fake_cover = document.querySelector('.fake-cover');

    // Help Wizard
    const openModalTriggerEl = document.querySelector('.open-modal');
    const closeModalTriggerEl = document.querySelector('.close-modal');
    const modalEl = document.querySelector('.modal');

    // Character select
    const button_select = document.getElementById('select-personaje');
    let character = 'unselect';
    let selector = document.querySelectorAll('.selector-mode');

    // Enable Disable Scroll
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    // Video popup
    let myVideo = document.getElementById('video1');

    // Disable Scroll
    const disableScroll = () => {
      if (window) {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
      }
    }

    // Enable Scroll
    const enableScroll = () => {
      if (window) {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
      }
    }

    const setLink = (character, mode, url) => {
      const name = Names.getCharacterName(character);
      document
        .getElementsByClassName(mode)[0]
        .setAttribute('href', url + name);
    };

    // Disabled fake cover
    fake_cover.addEventListener('mousemove', () => {
      fake_cover.classList.remove('visible');
    });

    // Modal Help Wizard
    const modal = () => {
      if (openModalTriggerEl) {
        openModalTriggerEl.addEventListener('click', () => {
          const click = new Audio('/audios/actions/click_1.mp3');
          click.play();

          modalEl.classList.toggle('open');
          disableScroll();
          openModalTriggerEl.classList.toggle('is-active');

          // Show Hide selector
          if (selector[0].classList.contains('active')) {
            if (openModalTriggerEl.classList.contains('is-active')) {
              selector[0].classList.add('is-hidden');
            }
            else {
              selector[0].classList.remove('is-hidden');
            }
          }

          // Set local storage 1 help
          localStorage.setItem('help', '1');

        });
      }

      if (closeModalTriggerEl) {
        closeModalTriggerEl.addEventListener('click', () => {
          goToStep(1);
          enableScroll();
          openModalTriggerEl.classList.toggle('is-active');
          fake_cover.classList.toggle('visible');
          modalEl.classList.remove('open');

          // Set local storage 1 help
          localStorage.setItem('help', '1');

          // Show selector
          if (selector[0].classList.contains('active')) {
            selector[0].classList.remove('is-hidden');
          }
        });
      }

      if (window) {
        window.addEventListener('click', () => {
          if (event.target === modalEl) {
            goToStep(1);
            enableScroll();
            openModalTriggerEl.classList.toggle('is-active');
            modalEl.classList.remove('open');

            // Set local storage 1 help
            localStorage.setItem('help', '1');

            if (selector[0].classList.contains('active')) {
              selector[0].classList.remove('is-hidden');
            }
          }
        });
      }
    }

    /* Wizard Help */
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('validate');
    const dots = document.getElementsByClassName('progress-bar__dot');
    const numberOfSteps = 3;
    let currentStep = 1;

    const goNext = (e) => {
      e.preventDefault();
      currentStep += 1;
      goToStep(currentStep);
    }

    const goPrevious = (e) => {
      e.preventDefault();
      currentStep -= 1;
      goToStep(currentStep);
    }

    const goToStep = (stepNumber) => {

      let click0 = new Audio('/audios/actions/click_1.mp3');
      click0.play();


      currentStep = stepNumber;

      let inputsToHide = document.getElementsByClassName('step');
      let inputs = document.getElementsByClassName(`step${currentStep}`);

      //hide all input
      for (let i = 0; i < inputsToHide.length; ++i) {
        hide(inputsToHide[i]);
      }

      //only show the right one
      for (let i = 0; i < inputs.length; ++i) {
        show(inputs[i]);
      }

      //if we reached final step
      if (currentStep === numberOfSteps) {
        enable(previousButton);
        show(submitButton);
      }
      //else if first step
      else if (currentStep === 1) {
        hide(submitButton);
      } else {
        enable(previousButton);
        hide(submitButton);
      }
    }

    const enable = (elem) => {
      if (elem) {
        elem.disabled = false;
      }
    }

    const disable = (elem) => {
      if (elem) {
        elem.classList.add('disabled');
        elem.disabled = true;
      }
    }

    const show = (elem) => {
      if (elem) {
        elem.classList.remove('hidden');

        let str = elem.className;
        let res = str.charAt(str.length - 1);
        modalEl.className = 'modal open step-' + res;
      }
    }

    const hide = (elem) => {
      if (elem) {
        elem.classList.add('hidden');
      }
    }

    const preventDefault = (e) => {
      e.preventDefault();
    }

    const preventDefaultForScrollKeys = (e) => {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

    // Esc (Pane video and Help Wizard)
    document.onkeydown = (evt) => {
      if (window) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
          pane.classList.remove('open');
          pane_cover.classList.remove('visible');
          modalEl.classList.remove('open');
          if (modalEl.classList.contains('open')) {
            openModalTriggerEl.classList.toggle('is-active');
          }
        }
      }
    };

    for (let i = 0; i < dots.length; ++i) {
      dots[i].addEventListener('click', () => {
        goToStep(i + 1);
      });
    }

    previousButton.onclick = goPrevious;
    nextButton.onclick = goNext;
    modal();

    if (window) {
      try {
        window.addEventListener(
          'test',
          null,
          Object.defineProperty({}, 'passive', {
            get: () => {
              supportsPassive = true;
            },
          }),
        );
      } catch (e) { }
    }

    if (window) {
      disableScroll();
      // Local Storage Help Wizard
      let data_help = localStorage.getItem('help');
      if (data_help !== '1') {
        modalEl.classList.add('open');
        openModalTriggerEl.classList.toggle('is-active');
      }
    }

    if (button_open) {
      button_open.forEach(function (link) {
        link.addEventListener('click', () => {
          pane.classList.add('open');
          disableScroll();

          let click = new Audio('/audios/actions/close.mp3');
          click.play();

          pane_cover.classList.toggle('visible');
          document.getElementById('video1').src = link.dataset.video;
          document.getElementById('select-personaje').dataset.personaje = link.dataset.personaje;
          document.getElementById('select-personaje').dataset.linkreflexivo = link.dataset.nombre;
          document.getElementById('select-personaje').dataset.linklaberinto = link.dataset.nombre;
          document.getElementById('name-personaje').innerHTML = link.dataset.nombre;
          document.getElementById('desc-personaje').innerHTML = link.dataset.desc;
          myVideo.play();
        });
      });
    }

    if (button_close) {
      button_close.forEach(function (link) {
        link.addEventListener('click', () => {
          let click1 = new Audio('/audios/actions/close.mp3');
          click1.play();
          pane.classList.remove('open');
          enableScroll();
          pane_cover.classList.toggle('visible');
          fake_cover.classList.add('visible');
          myVideo.pause();
          myVideo.currentTime = 0;
        });
      });
    }

    if (button_select) {
      button_select.addEventListener('click', () => {
        character = button_select.dataset.personaje;

        let click2 = new Audio('/audios/actions/click_1.mp3');
        click2.play();

        pane.classList.remove('open');
        enableScroll();

        pane_cover.classList.toggle('visible');
        fake_cover.classList.add('visible');

        myVideo.pause();
        myVideo.currentTime = 0;


        let personaje_child = document.querySelectorAll('.child');
        [].forEach.call(personaje_child, function (el) {
          el.classList.remove('is-selected');
        });

        document
          .getElementsByClassName(button_select.dataset.personaje)[0]
          .classList.add('is-selected');

        // Show selector mode
        selector[0].classList.remove('is-hidden');
        if (!selector[0].classList.contains('active')) {
          selector[0].classList.add('active');
        }

        // Set image cube
        document.querySelector('#left img').src =
          '/images/thumbs/' + Names.getCharacterName(button_select.dataset.linkreflexivo) + '.jpg';

        const chrono = chronology.find((cr) => cr.field_ec_character === character);
        const episodes = chrono.field_ec_episodes_items.split(',').map((ep) => ep.trim());
        const episodesItems = JSON.parse(chrono.field_ec_episodes_items_json);
        const episode = episodesItems.find((ep) => ep.id === episodes[0]);
        const episodeView = JSON.parse(episode.view);

        const charName = button_select.dataset.linkreflexivo;
        // Set link cronologico
        setLink(charName, 'cronologico', '/el-cubo/temporada-1/cronologico/onboarding/');
        // Set link laberinto
        setLink(charName, 'laberinto', '/el-cubo/temporada-1/laberinto/');
        // Set link reflexivo
        setLink(charName, 'reflexivo', '/el-cubo/temporada-1/reflexivo/onboarding/');
      });
    }

    // Sound hover links Mode
    const linkModes = document.querySelectorAll(".mode");
    let playMode = new Audio('/audios/actions/click_1.mp3');
    linkModes.forEach(link => {
      link.addEventListener("mouseover", function () {
        playMode.play();
      })
    })

    const linkChar = document.querySelectorAll(".child");
    let playChar = new Audio('/audios/actions/click_1.mp3');
    linkChar.forEach(link => {
      link.addEventListener("mouseenter", function (ev) {
        ev.stopPropagation();
        playChar.play();
      })
    })
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>Personajes - El Cubo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonajesGlobalStyle />
      <Container>
        {isFallback ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="help-wrapper">
              <HeaderTop
                nav={
                  <nav className="nav">
                    <a href="/el-cubo/temporada-1/personajes" className="back-to-season">
                      <img src="/images/icon-arrow-back.svg" />
                      <span>Volver al inicio</span>
                    </a>
                    <ul>
                      <li>
                        <a href="#" className="toggle-help open-modal">
                          <div className="icon-help">
                            <img className="icon-help-open" src="/images/icon-help-open.svg" />
                            <img className="icon-help-close" src="/images/icon-help-close.svg" />
                          </div>
                          <span>Ayuda</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                }
              />

              <Help />

            </div>
            <div className="characters is-hidden">
              <div className="pane-cover close" />

              <div className="pane">
                <a className="close">
                  <img src="/images/pane-close.svg" />
                </a>
                <div className="pane-content">
                  <h2 id="name-personaje" />
                  <p id="desc-personaje" />
                  <a id="select-personaje" href="#" data-personaje="" className="cyan-dark">
                    Elegir
                  </a>
                </div>
                <div className="pane-video">
                  <img className="bg-video" src="/images/bg-video.png" />
                  <video id="video1" width="420" playsInline>
                    <source src="" type="video/mp4" data-personaje="" /> Your browser does not
                    support HTML video.
                  </video>
                </div>
              </div>

              <div className="characters-wrapper">
                <div className="fake-cover"></div>
                <div className="row row-first">
                  {field_ec_characters.map((c) => {
                    const character = field_ec_characters_terms_json.find(
                      (ch) => Number(ch.tid) === Number(c),
                    );
                    return (
                      <div
                        className="column" key={character.tid}>
                        <div className="parent">
                          <div
                            className={`child bg-six toggle char-${Names.getCharacterName(character.character_name)} ${character.tid}`}
                            data-video={character.field_ec_avatar_video}
                            data-personaje={character.tid}
                            data-thumb={character.tid}
                            data-nombre={character.character_name}
                            data-desc={character.description_value}
                          >
                            <img className="icon-selected" src="/images/is-selected.svg" />
                            <h2 className="name">{character.character_name}</h2>
                            <img
                              className="img-bn"
                              width="100%"
                              src={character.field_ec_avatar_gray}
                            />
                            <img
                              className="img-color"
                              width="100%"
                              src={character.field_ec_avatar_color}
                            />
                            <a className="projectButton">Conóceme más</a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="selector-mode is-hidden selector-desktop">
                <div className="selector-cover">
                  <div id="mainDiv">
                    <div id="boxDiv">
                      <div id="front" />
                      <div id="back" />
                      <div id="left">
                        <img src="" />
                      </div>
                      <div id="right" />
                      <div id="top" />
                      <div id="bottom" />

                      <div className="shadow" />
                    </div>
                  </div>
                  <ul>
                    <li>
                      <a href="#"
                        className="cronologico mode">
                        Modo Cronológico
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="laberinto mode">
                        Modo Laberinto
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="reflexivo mode">
                        Modo Reflexivo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
        {auth}
      </Container>
    </AppLayout >
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const [data, chronology] = await Promise.all([
    fetcher(`/api/v1/elcubo/season/${season1_id}`),
    fetcher(`/api/v1/elcubo/season/${season1_id}/chrono`),
  ]);

  if (!data || !data.length) {
    return { props: { data: {} } };
  }

  const { field_ec_characters, field_ec_characters_terms_json } = data[0];
  return {
    props: {
      data: {
        field_ec_characters: field_ec_characters.split(',').map((c) => c.trim()),
        field_ec_characters_terms_json: JSON.parse(field_ec_characters_terms_json),
        chronology: chronology || null,
      },
    },
    revalidate: 900,
  };
};

export default CharactersPage;
