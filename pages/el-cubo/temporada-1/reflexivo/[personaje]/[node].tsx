import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { ReflexiveStyles } from 'styles/reflexive.style';
import { NavReflexiveStyles } from 'styles/navreflexive.style';
import VideoItem from 'components/Reflexive/VideoItem';
import BackToCharacters from 'components/Reflexive/BackToCharacters';
import fetcher from 'libs/fetcher';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import ModesUtils from 'utils/Modes';
import Links from 'constants/Links';
import { season1_id } from 'constants/Season';
import UrlUtils from 'utils/Url';
import { useRouter } from 'next/router';

const ReflexiveNode = ({ character, data, nodeId }) => {
  const isLoggedIn = AuthService.isLoggedIn();
  const { query, isReady } = useRouter();
  const [user, setUser] = useState(null);
  const {
    field_ec_final_question,
    field_ec_order_reflex_items_json_episode_json,
    children_answer_json,
  } = data;
  const answers = JSON.parse(children_answer_json);
  const [rewardLink, setRewardLink] = useState(Links.guest);
  const reflexItemsEpisode = JSON.parse(field_ec_order_reflex_items_json_episode_json);

  const updateUser = async (id, data) => {
    await UserService.update(id, data);
  };

  React.useEffect(() => {
    if (isLoggedIn && isReady) {
      setRewardLink(`/el-cubo/temporada-1/reflexivo/${character.toLowerCase()}/recompensa`)
    }
  }, [isReady]);

  React.useEffect(() => {
    if (isLoggedIn && user) {
      try {
        const userReflexiveDataString = user.elcubo_reflexivo;
        const userReflexiveDataJSON = JSON.parse(userReflexiveDataString);
        const userReflexiveData = ModesUtils.setCharacterNodesReflexive(userReflexiveDataJSON, character, nodeId, answers);

        updateUser(user.id, {
          field_ec_reflexive_data_json: {
            value: JSON.stringify(userReflexiveData),
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
    [user],
  );

  const getMe = async () => {
    try {
      const me = await UserService.getMe();
      setUser(me.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatText = (str) => {
    if (str === null || str === '') return false;
    str = str.toString();
    str = str.replace(/(<([^>]+)>)/gi, '');
    str = str.replace(/  +/g, ' ');
    return str;
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      getMe();
    }
  }, []);

  React.useEffect(() => {
    // Pane Slide
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');
    const pane = document.querySelector('.pane');
    const pane_video = document.querySelector('.pane-video');
    let player;

    const headerTop = document.querySelectorAll('.header-top')[0];
    const paneClose = document.querySelectorAll('.close')[0];


    const fadeOut = (el, pTime) => {
      el.style.opacity = 1;
      (function fadeO() {
        if ((el.style.opacity -= 0.07) < 0) {
          el.style.display = 'none';
        } else {
          setTimeout(fadeO, pTime);
        }
      })();
    };

    const fadeIn = (el, pTime) => {
      el.style.opacity = 0;
      el.style.display = 'block';
      (function fadeI() {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.07) > 1)) {
          el.style.opacity = val;
          setTimeout(fadeI, pTime);
        } else {
          el.style.opacity = 1;
        }
      })();
    };

    const createTitle = (pTitle) => {
      let plyr_title = document.createElement('h2');
      plyr_title.setAttribute('class', 'plyr_title');
      plyr_title.innerHTML = pTitle;
      return plyr_title;
    };

    const removeTitleVideo = () => {
      let elms = document.querySelectorAll('.plyr_title');
      elms.forEach((el) => el.remove());
    };

    const closeVideoReflex = () => {
      document.getElementsByClassName(pane.dataset.relation)[0].classList.add('selected');
      document.getElementsByClassName('app-elcubo')[0].append(headerTop);

      paneClose.classList.add('hide');

      if (viewedAll()) {
        document.getElementsByClassName('row-second')[0].classList.add('visible');
        document.getElementsByClassName('characters')[0].classList.add('is-viewed');
      }
    };

    const addExtraControls = () => {
      // Add Comments Elements into Player
      const controls_extra = document.querySelector('.plyr--video');
      controls_extra.prepend(headerTop);
      controls_extra.prepend(paneClose);
    }

    const onShowControls = () => {
      document.getElementsByClassName('plyr_title')[0].classList.remove('hide');
      headerTop.classList.remove('hide');
      paneClose.classList.remove('hide');
    }

    const onHideControls = () => {
      document.getElementsByClassName('plyr_title')[0].classList.add('hide');
      headerTop.classList.add('hide');
      paneClose.classList.add('hide');
    }

    const loadPlayer = (sURL) => {
      let source = UrlUtils.getVideoUrl(sURL);
      const video = document.querySelector('video');
      const player = new Plyr(video, {
        captions: {
          active: true,
          update: true,
          language: 'en',
        },
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
      });
      if (!Hls.isSupported()) {
        video.src = source;
      } else {
        // For more Hls.js options, see https://github.com/dailymotion/hls.js
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        window.hls = hls;
        window.player = player;

        // Mobile Tap play/pause
        const { wrapper, container } = player.elements;
        if (container) {
          if (!container._clickListener) {
            container._clickListener = (event) => {
              const targets = [container, wrapper];

              // Ignore if click if not container or in video wrapper
              if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
                return;
              }

              if (player.touch) player.togglePlay();
            };
            container.addEventListener('click', container._clickListener);
          }
        }

        player.on('play', () => {
          addExtraControls();
        });

        player.on('ended', () => {
          button_close[0].click();
          closeVideoReflex();
        });

        player.on('controlsshown', () => {
          onShowControls();
        });

        player.on('controlshidden', () => {
          onHideControls();
        });
      }
      return player;
    };

    if (button_open) {
      button_open.forEach((link) => {
        link.addEventListener('click', () => {
          player = loadPlayer(link.dataset.video);
          pane.classList.add('open');
          pane.dataset.relation = link.dataset.relation;
          pane_video.classList.toggle('visible');
          fadeIn(pane, 40);
          removeTitleVideo();
          const controls_extra = document.querySelector('.plyr--video');
          controls_extra.prepend(createTitle(link.dataset.title));
          player.play();
          document.querySelectorAll('.progress-0')[0].classList.add('hide');

        });
      });
    }

    if (button_close) {
      button_close.forEach((link) => {
        link.addEventListener('click', () => {
          pane.classList.toggle('open');
          fadeOut(pane, 40);
          pane_video.classList.toggle('visible');
          document.getElementsByClassName('app-elcubo')[0].append(headerTop);
          player = loadPlayer(pane.dataset.relation);
          player.stop();
        });
      });
    }

    // Check Viewed All
    const viewedAll = () => {
      let all_videos = document.querySelectorAll('.toggle').length;
      let viewed_videos = document.querySelectorAll('.toggle.selected').length;
      if (all_videos === viewed_videos) {
        return true;
      } else {
        return false;
      }
    };

    // Fake Cover
    const fake_cover = document.querySelector('.fake-cover');

    const loadProgress = (sPar, sVelocity) => {
      // Timer
      let timer = 0;
      let limit = sVelocity; //ms
      let timerEnd = limit / 10;
      let blockWidth = 100 / timerEnd;
      const progress = document.querySelectorAll('.' + sPar + ' .progress');

      let countdown = setInterval(() => {
        timer++;
        for (let i = 0; i < progress.length; ++i) {
          progress[i].style.width = timer * blockWidth + '%';
          if (document.querySelector('.pane').classList.contains('open')) {
            clearInterval(countdown);
          }
        }

        if (timer >= timerEnd) {
          clearInterval(countdown);
          document.getElementsByClassName('toggle')[0].click();
        }
      }, 10);
    };

    // Load Progress
    const progress_direct = document.getElementsByClassName('progress-direct')[0];
    if (progress_direct) {
      let velocity = document.getElementsByClassName('progress-0')[0].dataset.velocity;
      if (velocity !== undefined) {
        loadProgress('progress-0', velocity);
      } else {
        loadProgress('progress-0', 12000);
      }
    }

    // Hover 
    let select_scene = document.querySelectorAll('.parent');
    if (select_scene) {
      [].forEach.call(select_scene, (el) => {
        el.addEventListener(
          'mouseenter',
          () => {
            // Highlight the mouseenter target
            el.classList.add('focus');
          },
          false,
        );
        el.addEventListener(
          'mouseleave',
          () => {
            // Highlight the leave target
            setTimeout(() => {
              el.classList.remove('focus');
            }, 0);
          },
          false,
        );
      });
    }

    /* IOS support */
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      const videoIOS = document.querySelector('video');

      videoIOS.onplay = (event) => {
        addExtraControls();
        onHideControls();
      };

      videoIOS.onended = (event) => {
        button_close[0].click();
        closeVideoReflex();
      };

      videoIOS.onpause = (event) => {
        onShowControls();
      };

    }

  }, []);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Reflexivo - El cubo</title>
      </Head>
      <ReflexiveStyles />
      <NavReflexiveStyles />

      <BackToCharacters text={'Volver a elegir personajes'} />

      <div
        className="app-elcubo reflexivo"
        style={{ background: 'url("/images/reflexivo_bg.jpg") no-repeat' }}
      >
        <div className="pane" data-relation="alba">
          <a className="close">
            <img src="/images/pane-close.svg" />
          </a>
          <div className="pane-video" data-video="" data-poster="" data-title="">
            <video crossOrigin="true" poster="" />
          </div>
        </div>
        <div className={`characters columns-${reflexItemsEpisode.length} is-hidden`}>
          <div className="characters-wrapper">
            <div className="fake-cover visible" />
            <div className="row row-cero">
              <div className="column answers-copy">
                Si ves todos los videos completos, tendrás una pregunta para contestar
              </div>
            </div>
            <div className="row row-first">
              {reflexItemsEpisode
                ? reflexItemsEpisode.map((episodeData, index) => {
                  const order = index;
                  return <VideoItem key={index} order={order} data={episodeData} />;
                })
                : null}
            </div>
            <div
              className={`row row-second questions ${answers && answers.length ? '' : 'last-node'}`}
            >
              <div className="column">
                <div className="video-overlay">
                  <div className="copy-cover">
                    <h1 className="copy">
                      <p>{formatText(field_ec_final_question)}</p>
                      <ul
                        className={`li-questions ${answers && answers.length ? `li-${answers.length}` : ''
                          }`}
                      >
                        {answers && answers.length ? (
                          answers.map((answer) => {
                            const nextPageLink = `/el-cubo/temporada-1/reflexivo/${character}/${answer.nid
                              }`;
                            return (
                              <li key={`key_${answer.nid}`}>
                                <a href={nextPageLink}>{answer.field_ec_answer_title}</a>
                              </li>
                            );
                          })
                        ) : (
                          <div>
                            <h1>
                              ¡Has llegado al final del modo reflexivo de {character.toUpperCase()}!
                            </h1>
                            <p>
                              Puedes ver tu perfil según las respuetas que diste en el recorrido.
                              ¡Esa es tu recompensa!
                            </p>
                            <div className="cover-link">
                              <a
                                href={rewardLink}
                                className="button-cyan"
                              >
                                <span>Ver recompensa</span>
                                <img src="/images/icon-arrow-init.svg" />
                              </a>
                            </div>
                          </div>
                        )}
                      </ul>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export async function getStaticPaths() {
  const nodes = await fetcher(`/api/v1/elcubo/season/${season1_id}/reflexive/paths`);
  const pathsData = nodes.map((node) => ({
    nodeId: node.nid,
    characterName: node.field_ec_character
      .split(' ')
      .slice(-1)
      .join(' ')
      .trim()
      .toLowerCase(),
  }));

  return {
    paths: pathsData.map((data) => ({
      params: { personaje: data.characterName, node: String(data.nodeId) },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const nodeId = context.params.node;
  const nodeData = await fetcher(`/api/v1/elcubo/season/${season1_id}/reflexive/${nodeId}`);

  return {
    props: {
      character: context.params.personaje,
      data: nodeData[0],
      nodeId,
    },
  };
};

export default ReflexiveNode;
