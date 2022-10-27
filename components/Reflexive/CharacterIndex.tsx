import React, { useState } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import UrlUtils from 'utils/Url';

const CharacterIndex = ({ character, node, bgImage, episodeData, onViewedAll }) => {
  const {
    field_ec_video_title,
    field_ec_final_question,
    children_answer_json,
    field_ec_image_bw,
    field_ec_image_color,
  } = node;

  const {
    field_ec_asset_id,
    field_ec_video_preview,
    field_ec_video_preview_980,
  } = episodeData;

  const nextNodes = JSON.parse(children_answer_json);

  const formatText = (str) => {
    if (str === null || str === '') return false;
    str = str.toString();
    str = str.replace(/(<([^>]+)>)/gi, '');
    str = str.replace(/  +/g, ' ');
    return str;
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  React.useEffect(() => {
    const video = document.querySelector('.pane-video');
    const pane = document.querySelector('.pane');
    const pane_video = document.querySelector('.pane-video');
    const headerTop = document.querySelectorAll('.header-top')[0];
    const paneClose = document.querySelectorAll('.close')[0];

    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);

    const closeVideoReflex = () => {
      document.getElementsByClassName(pane.dataset.relation)[0].classList.add('selected');
      document.getElementsByClassName('app-elcubo')[0].append(headerTop);
      if (viewedAll()) {
        document.getElementsByClassName('row-second')[0].classList.add('visible');
        document.getElementsByClassName('characters')[0].classList.add('is-viewed');
      }
    };

    const addExtraControls = () => {
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
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        window.player = player;
        window.hls = hls;

        player.on('play', () => {
          addExtraControls();
        })

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

    const player = loadPlayer(field_ec_asset_id);

    // Mobile Tap play/pause
    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
    }


    const createTitle = (pTitle) => {
      let plyr_title = document.createElement('h2');
      plyr_title.setAttribute('class', 'plyr_title');
      plyr_title.innerHTML = pTitle;
      return plyr_title;
    };

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

    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');

    if (button_open) {
      button_open.forEach(function (link) {
        link.addEventListener('click', () => {
          player.currentTime = 0;
          pane.classList.add('open');
          pane_video.classList.toggle('visible');
          pane.dataset.relation = link.dataset.relation;
          fadeIn(pane, 80);
          player.play();
        });
      });
    }

    if (button_close) {
      button_close.forEach(function (link) {
        link.addEventListener('click', () => {
          pane.classList.toggle('open');
          player.pause();
          fadeOut(pane, 40);
          pane_video.classList.toggle('visible');
          document.getElementsByClassName('app-elcubo')[0].append(headerTop);

          player.stop();
        });
      });
    }

    const button_select = document.getElementById('select-personaje');
    let character = 'unselect';
    if (button_select) {
      button_select.addEventListener('click', () => {
        character = button_select.dataset.personaje;
        pane.classList.toggle('open');
        pane_video.classList.toggle('visible');
        var personaje_child = document.querySelectorAll('.child');
        [].forEach.call(personaje_child, function (el) {
          el.classList.remove('is-selected');
        });
        document
          .getElementsByClassName(button_select.dataset.personaje)[0]
          .classList.add('is-selected');
        var selector = document.querySelectorAll('.selector-mode');
        [].forEach.call(selector, function (el) {
          el.classList.remove('is-hidden');
        });
      });
    }

    const viewedAll = () => {
      let all_videos = document.querySelectorAll('.toggle').length;
      let viewed_videos = document.querySelectorAll('.toggle.selected').length;
      if (all_videos === viewed_videos) {
        return true;
      } else {
        return false;
      }
    };

    setTimeout(() => {
      fadeOut(document.querySelectorAll('.steal')[0], 60);
      player.play();
      document.getElementsByClassName('steal_title')[0].classList.add('hide');
      document.querySelectorAll('.close')[0].classList.remove('hide');
      // Add title plyr
      const controls_extra = document.querySelector('.plyr--video');
      controls_extra.prepend(createTitle(video.dataset.title));
    }, 3000);


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
      }

    }

  }, []);



  return (
    <div className="app-elcubo reflexivo" style={{ background: 'url("/images/reflexivo_bg.jpg") no-repeat' }} >
      <h2 className="steal_title">{field_ec_video_title}</h2>
      <div className="steal">
        <img src={isSmallScreen ? field_ec_video_preview_980 : field_ec_video_preview} />
      </div>
      <div className="pane open" data-relation="alba">
        <a className="close hide">
          <img src="/images/pane-close.svg" />
        </a>
        <div
          className="pane-video visible"
          data-video={field_ec_asset_id}
          data-poster=""
          data-title={field_ec_video_title}
        >
          <video crossOrigin={'true'} poster="" />
        </div>
      </div>
      <div className="characters columns-1 is-hidden">
        <div className="characters-wrapper">
          <div className="row row-cero">
            <div className="column answers-copy">
              Si ves todo el video completo, tendrás una pregunta para contestar
            </div>
          </div>
          <div className="row row-first">
            <div className="column">
              <div className="parent">
                <div
                  className="child bg-one alba toggle"
                  data-video="424264"
                  data-poster=""
                  data-relation="bg-one"
                >
                  <img className="icon-selected" src="/images/is-selected.svg" />
                  <div className="actions">
                    <img className="icon-selected" src="/images/is-selected.svg" />
                    <div className="icon-cover icon-play">
                      <img src="/images/play-reflexivo.svg" />
                    </div>
                    <div className="icon-cover icon-replay">
                      <img src="/images/replay-reflexivo.svg" />
                    </div>
                    <h2>{formatText(field_ec_video_title)}</h2>
                  </div>
                  <img className="img-bn" src={field_ec_image_bw} />
                  <img className="img-color" src={field_ec_image_color} />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-second questions questions-2">
            <div className="column">
              <div className="video-overlay">
                <div className="copy-cover">
                  <h1 className="copy">
                    <p>{formatText(field_ec_final_question)}</p>
                    <ul className={`li-questions li-${nextNodes.length}`}>
                      {nextNodes && nextNodes.length
                        ? nextNodes.map((nextNode) => {
                          const nextPageLink = `/el-cubo/temporada-1/reflexivo/${character}/${nextNode.nid
                            }`;
                          return (
                            <li key={nextNode.nid}>
                              <a href={nextPageLink}> {nextNode.field_ec_answer_title}</a>
                            </li>
                          );
                        })
                        : null}
                    </ul>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterIndex;
