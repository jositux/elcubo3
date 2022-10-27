import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { NavLabyrinthStyles } from 'styles/navlabyrinth.style';
import { LabyrinthStyles } from 'styles/labyrinth.style';
import LabVideoPlayer from 'components/Labyrinth/LabVideoPlayer';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import CommentsBubble from 'components/Labyrinth/CommentsBubble';
import fetcher from 'libs/fetcher';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import ModesUtils from 'utils/Modes';
import { season1_id } from 'constants/Season';
import UrlUtils from 'utils/Url';

const LabyrinthNode = ({ data, character }) => {

  const { query, isReady } = useRouter();
  const { initial } = query;

  const isLoggedIn = AuthService.isLoggedIn();
  const nextNodes = data.field_ec_labyrinth_items_json;
  const nodeId = data.nid;
  const characterId = data.field_ec_character;
  const videoForceEnd = data.field_ec_trigger_end_video;
  const [currentCharacter, setCurrentCharacter] = useState(null);
  let timeout = 0;

  const updateUser = async () => {
    try {
      const { data } = await UserService.getMe();
      const userLabyrinthDataString = data.elcubo_laberinto;
      const userLabyrinthDataJSON = JSON.parse(userLabyrinthDataString);
      if (userLabyrinthDataJSON && userLabyrinthDataJSON.currentCharacter) {
        setCurrentCharacter(userLabyrinthDataJSON.currentCharacter);
      }
      const userLabyrinthData = ModesUtils.setCharacterNodesLabyrinth(userLabyrinthDataJSON, character, nodeId, nextNodes, initial, characterId);
      await UserService.update(data.id, {
        field_ec_labyrinth_data_json: {
          value: JSON.stringify(userLabyrinthData),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };
    if (isLoggedIn && isReady) {
      updateUser();
    }
    return () => abortCtrl.abort();
  }, [initial]);

  React.useEffect(() => {
    let videoAlreadyViewed = false;

    // Video
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');
    const pane = document.querySelector('.pane');
    const video = document.querySelector('.pane-video');
    const time_comments = video.dataset.comments;
    let video_duration = 0;
    let videoForced = false;

    // Facebook Comments
    const button_open_comments = document.querySelectorAll('.open-comments');
    const button_close_comments = document.querySelector('.close-comments');
    const commentsBubble = document.querySelectorAll('.comments-bullet')[0];
    const paneCoverComments = document.querySelectorAll('.pane-cover-comments')[0];
    const paneComments = document.querySelectorAll('.pane-comments')[0];

    // Extra Elements
    const headerTop = document.querySelectorAll('.header-top')[0];
    const paneClose = document.querySelectorAll('.close')[0];

    // Marker Comments
    const createSquare = (pClass) => {
      let percent = calculatePercent(time_comments, video_duration);
      let square = document.createElement('div');
      square.setAttribute('class', pClass);
      square.setAttribute('style', 'left: ' + percent + '%;');
      return square;
    };

    const addMarker = (pClass) => {
      const controls = document.querySelector(pClass);
      if (document.querySelector('.marker') == null) {
        controls.appendChild(createSquare('marker'));
        updateMarker(document.querySelector('.marker'));
      }
      else {
        updateMarker(document.querySelector('.marker'));
      }
    }

    const updateMarker = (square) => {
      let percent = calculatePercent(time_comments, video_duration);
      square.setAttribute('style', 'left: ' + percent + '%;');
    };

    const calculatePercent = (num1, total) => {
      return (num1 / total) * 100;
    };

    const updateQuality = (newQuality) => {
      if (window.hls) {
        window.hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            window.hls.currentLevel = levelIndex;
          }
        });
      }
    };

    const loadPlayer = (sURL) => {
      let source = UrlUtils.getVideoUrl(sURL);
      const video = document.querySelector('video');
      const player = new Plyr(video, {
        captions: {
          active: true,
          update: true,
          language: 'es',
        },
        quality: {
          default: 720,
          options: [720, 360, 270],
          forced: true,
          onChange: (e) => updateQuality(e),
        },
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        settings: ['quality'],
      });
      if (!Hls.isSupported()) {
        video.src = source;
      } else {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        window.hls = hls;
        player.on('play', (event) => {

          setInterval(() => {

            // Add Marker
            video_duration = player.duration;
            if (time_comments && video_duration > 0) {
              setTime(time_comments);
              addMarker('.plyr__progress');
            }

            // Before End
            if (videoForceEnd && videoForceEnd > 0) {
              if (player.duration > 0 && player.currentTime > 0) {
                if (player.duration - player.currentTime < Number(videoForceEnd)) {

                  if (!videoForced) {
                    hideVideoLab(pane);
                    //player.pause();
                    videoForced = true;
                  }
                }
              }
            }

          }, 1000);
          // Add Extra Elements into Player
          addExtraControls();
        });

        player.on('ended', (event) => {
          hideVideoLab(pane);
        });

        player.on('controlsshown', (event) => {
          const plyrTitle = document.getElementsByClassName('plyr_title');
          if (plyrTitle && plyrTitle.length) {
            document.getElementsByClassName('plyr_title')[0].classList.remove('hide');
            headerTop.classList.remove('hide');
            if (videoAlreadyViewed) {
              paneClose.classList.remove('hide');
            }
          }
        });

        player.on('controlshidden', (event) => {
          const plyrTitle = document.getElementsByClassName('plyr_title');
          if (plyrTitle && plyrTitle.length) {
            document.getElementsByClassName('plyr_title')[0].classList.add('hide');

            // Only if video Not forced Close
            if (!videoForced) {
              headerTop.classList.add('hide');
            }

            if (videoAlreadyViewed) {
              paneClose.classList.add('hide');
            }
          }
        });
      }
      return player;
    };

    const addExtraControls = () => {
      // Add Comments Elements into Player
      const controls_extra = document.querySelector('.plyr--video');
      if (time_comments) {
        controls_extra.prepend(commentsBubble);
        controls_extra.prepend(paneCoverComments);
        controls_extra.prepend(paneComments);
      }

      // Add Header and Close button into Player
      controls_extra.prepend(headerTop);
      controls_extra.prepend(paneClose);
    }


    const showVideoLab = (pPane) => {
      videoForced = false;
      pPane.classList.remove('open');
      player.stop();
      fadeIn(pPane, 40);
      pPane.classList.add('open');
      pPane.classList.remove('is-hidden');
    }

    const hideVideoLab = (pPane) => {
      pPane.classList.add('is-hidden');
      document.getElementsByClassName('app-elcubo')[0].append(headerTop);
      document.getElementsByClassName('app-elcubo')[0].append(paneClose);
      headerTop.classList.remove('hide');
      videoAlreadyViewed = true;
      fadeOut(pPane, 40);

      paneClose.classList.add('hide');
      hideComments();
    }

    const fadeIn = (el, pTime) => {
      el.style.opacity = 0;
      el.style.display = 'block';
      const fadeI = () => {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.07) > 1)) {
          el.style.opacity = val;
          setTimeout(fadeI, pTime);
        } else {
          el.style.opacity = 1;
        }
      };
      fadeI();
    };

    const fadeOut = (el, pTime) => {
      el.style.opacity = 1;
      const fadeO = () => {
        if ((el.style.opacity -= 0.07) < 0) {
          el.style.display = 'none';
        } else {
          setTimeout(fadeO, pTime);
        }
      };
      fadeO();
    };

    const showComments = () => {
      document.querySelectorAll('.comments-bullet')[0].classList.add('visible');
    };

    const hideComments = () => {
      document.querySelectorAll('.comments-bullet')[0].classList.remove('visible');
    };

    const setTime = (pTimeComments) => {
      let time_end = parseInt(pTimeComments) + 15;
      if (pTimeComments < player.currentTime && player.currentTime < time_end) {
        showComments();
      } else {
        hideComments();
      }
    };

    const createTitle = (pTitle) => {
      let plyr_title = document.createElement('h2');
      plyr_title.setAttribute('class', 'plyr_title');
      plyr_title.innerHTML = pTitle;
      return plyr_title;
    };

    const player = loadPlayer(video.dataset.video);

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

    // Replay
    if (button_open) {
      button_open.forEach((link) => {
        link.addEventListener('click', () => {
          showVideoLab(pane);
          player.play();
        });
      });
    }

    // Close
    if (button_close) {
      button_close.forEach((link) => {
        link.addEventListener('click', () => {
          hideVideoLab(pane);
          player.stop();
        });
      });
    }

    // Comments Open
    if (button_open_comments) {
      button_open_comments.forEach((link) => {
        link.addEventListener('click', () => {
          paneComments.classList.add('open');
          paneCoverComments.classList.add('visible');
          player.pause();
        });
      });
    }

    // Comments Close
    if (button_close_comments) {
      button_close_comments.addEventListener('click', () => {
        paneComments.classList.remove('open');
        paneCoverComments.classList.remove('visible');
        player.play();
      });
    }

    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(document.querySelectorAll('.steal')[0], 40);
        document.querySelectorAll('.pane-video')[0].classList.add('visible');
        player.play();
        document.getElementsByClassName('steal_title')[0].classList.add('hide');

        // Add title plyr
        const controls_extra = document.querySelector('.plyr--video');
        controls_extra.prepend(createTitle(video.dataset.title));
      }, 3000);
    };
    onLoadFadeout();



    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {

      const videoIOS = document.querySelector('video');

      videoIOS.onplay = (event) => {

        setInterval(() => {
          // Add Marker
          video_duration = player.duration;
          if (time_comments && video_duration > 0) {
            setTime(time_comments);
            addMarker('.plyr__progress');
          }

          // Force close end
          if (videoForceEnd && videoForceEnd > 0) {
            if (player.duration > 0 && player.currentTime > 0) {
              if (player.duration - player.currentTime < Number(videoForceEnd)) {

                if (!videoForced) {
                  hideVideoLab(pane);
                  videoForced = true;
                }
              }
            }
          }


        }, 1000);

        // Add Extra Elements into Player
        addExtraControls();

        headerTop.classList.remove('hide');

        // Only if video Not forced Close
        if (!videoForced) {
          headerTop.classList.add('hide');
        }

        document.getElementsByClassName('plyr_title')[0].classList.add('hide');
        paneClose.classList.add('hide');
      };

      videoIOS.onended = (event) => {
        hideVideoLab(pane);
      };

      videoIOS.onpause = (event) => {
        document.getElementsByClassName('plyr_title')[0].classList.remove('hide');
        headerTop.classList.remove('hide');
        paneClose.classList.remove('hide');
      };
    }

  }, []);

  return (
    <AppLayout onlyContent>
      <NavLabyrinthStyles />
      <LabyrinthStyles />
      <Head>
        <title>Laberinto - El Cubo</title>
      </Head>
      <BackToCharacters text={'Volver a elegir personajes'} />
      <LabVideoPlayer data={data} currentCharacter={currentCharacter} isLoggedIn={isLoggedIn} />
      <CommentsBubble data={data} />
    </AppLayout>
  );
};

export async function getStaticPaths() {
  const nodes = await fetcher(`/api/v1/elcubo/season/${season1_id}/labyrinth/all`);
  const pathsData = nodes.map((node) => ({
    nodeId: node.nid,
    characterName: node.field_ec_character_json[0].character_name
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
  const character = context.params.personaje;
  const nodeData = await fetcher(`/api/v1/elcubo/season/${season1_id}/labyrinth/${nodeId}`);

  return {
    props: {
      data: nodeData[0],
      character,
    },
  };
};

export default LabyrinthNode;
