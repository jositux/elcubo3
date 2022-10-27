import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import { RewardCronoStyles } from 'styles/rewardCrono.style';
import { NavRewardStyles } from 'styles/navReward.style';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Plyr from 'plyr';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';
import fetcher from 'libs/fetcher';
import AuthService from 'services/Auth';
import UserService from 'services/User';
import NamesUtils from 'utils/Names';
import Characters from 'constants/Characters';
import { season1_id } from 'constants/Season';
import UrlUtils from 'utils/Url';

const ChronologicalReward = ({ character, chronology }) => {

  const isLoggedIn = AuthService.isLoggedIn();
  const [chronologyList, setChronologyList] = useState(null);
  const [viewedAll, setViewedAll] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await UserService.getMe();
      const userChronoDataString = data.elcubo_cronologico;
      const userChronoDataJSON = JSON.parse(userChronoDataString);

      if (chronology && chronology.length) {
        let characterChronology;
        let chronologyList = [];
        characterChronology = chronology.find(c => {
          const charName = NamesUtils.getCharacterName(JSON.parse(c.field_ec_character_term_json)[0].character_name)
          return charName === character;
        });
        const characterId = characterChronology.field_ec_character;
        const { field_ec_episodes_items, field_ec_episodes_items_json } = characterChronology;
        const episodesData = JSON.parse(field_ec_episodes_items_json);
        const episodesList = field_ec_episodes_items.split(',').map((i) => i.trim());
        chronologyList = episodesList
          .map((e) => {
            const episode = episodesData.find((ep) => Number(ep.id) === Number(e));
            if (!episode) {
              return;
            }
            const episodeView = JSON.parse(episode.view);
            const viewed = userChronoDataJSON[character].viewedNodes.indexOf(episodeView[0].nid) < 0 ? false : true;
            return {
              id: episodeView[0].nid,
              link: `/el-cubo/temporada-1/cronologico/${episodeView[0].nid}?personaje=${characterId}&modo=cronologico`,
              name: episode.field_ec_title,
              image: episodeView[0].field_ec_video_preview,
              image_320: episodeView[0].field_ec_video_preview_320,
              viewed,
            };
          })
          .filter((i) => i !== undefined);
        setChronologyList(chronologyList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (chronologyList && chronologyList.length) {
      const viewed = chronologyList.filter(item => item.viewed);
      if (viewed.length === chronologyList.length) {
        setViewedAll(true);
      } else {
        setViewedAll(false);
      }
    }
  }, [chronologyList]);

  React.useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, []);

  React.useEffect(() => {
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelectorAll('.close');
    const pane = document.querySelector('.pane');
    let player;

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
        window.hls = hls;
        player.on('ended', () => {
          if (player.fullscreen.active) {
            player.fullscreen.exit();
          }
          pane.classList.add('is-hidden');
          fadeOut(pane, 50);
        });
      }
      return player;
    };

    const fadeOut = (el, pTime) => {
      el.style.opacity = 1;
      const fade = () => {
        if ((el.style.opacity -= .07) < 0) {
          el.style.display = "none";
        } else {
          setTimeout(fade, pTime);
        }
      };
      fade();
    };

    const fadeIn = (el, pTime) => {
      el.style.opacity = 0;
      el.style.display = "block";

      const fade = () => {
        var val = parseFloat(el.style.opacity);
        if (!((val += .07) > 1)) {
          el.style.opacity = val;
          setTimeout(fade, pTime);
        }
        else {
          el.style.opacity = 1;
        }
      };
      fade();
    };

    if (button_open) {
      button_open.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          player = loadPlayer(link.dataset.video);
          fadeIn(pane, 80);
          pane.classList.remove('is-hidden');
          player.play();
        });
      });
    }

    if (button_close) {
      button_close.forEach((link) => {
        link.addEventListener('click', () => {
          pane.classList.toggle('open');
          fadeOut(pane, 40);
          setTimeout(() => {
            player = loadPlayer('test');
          }, 500);
        });
      });
    }
  }, [viewedAll]);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>El Cubo</title>
      </Head>
      <RewardCronoStyles />
      <NavRewardStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />

      <div className="pane pane-bg invisible">
        <a className="close">
          <img src="/images/recompensa/pane-close.svg" />
        </a>
        <div className="pane-video" data-video="429274" data-poster="" data-title="Sales cuenta su historia">
          <video controls crossOrigin="true" playsInline></video>
        </div>
      </div>

      <img src="/images/recompensa/bg.jpg" className="bg-recompensa" />

      <div className="app-elcubo recompensa">

        {viewedAll === null ?
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img className="reward-loading" style={{}} src="/images/recompensa/cube-loading.gif" />
          </div>
          :
          null
        }

        {viewedAll === true ?
          <div className="content-viewed">
            <h1 className="title-recompensa">¡Lo Lograste!</h1>
            <p className="desc-recompensa">
              Ahora sabrás mejor cómo se entretejen estas historias.<br />¡Adelante!
            </p>
            <ul className="table-recompensa">
              <li className="li-characters">
                <div>
                  <p>&nbsp;</p>
                </div>
                <div>
                  <img src="/images/recompensa/marina-thumb.jpg" />
                  <h2>Marina</h2>
                </div>
                <div>
                  <img src="/images/recompensa/elvira-thumb.jpg" />
                  <h2>Elvira</h2>
                </div>
                <div>
                  <img src="/images/recompensa/carey-thumb.jpg" />
                  <h2>José Carey</h2>
                </div>
                <div>
                  <img src="/images/recompensa/alba-thumb.jpg" />
                  <h2>Alba</h2>
                </div>
                <div>
                  <img src="/images/recompensa/mercado-thumb.jpg" />
                  <h2>Félix Mercado</h2>
                </div>
                <div>
                  <img src="/images/recompensa/sales-thumb.jpg" />
                  <h2>Sales</h2>
                </div>
              </li>
              <li className="li-videos odd">
                <div>
                  <span className="date">2010 - ABRIL 2 - 11:30 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424388" data-poster="">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424324">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2010 - ABRIL 1 - Cualquier hora.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424386">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424352">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424324">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424292">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424432">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424404">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2010 - ABRIL 1 - 7:00 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424384">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424350">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424322">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424290">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424430">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424402">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - NOVIEMBRE 13 - 8:00 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424370">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424400">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - MARZO 22 - 10:45 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424442">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 10:55 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424288">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424428">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 9:55 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424382">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424320">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424426">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 9:30 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424348">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424424">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 8:55 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424380">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424472">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424422">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 4:57 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424420">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 4:55 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424378">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424316">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424286">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424410">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - FEBRERO 11 - 9:01 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424376">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424346">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424346">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 31 - 8:01 am.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424284">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 19 - 9:01 am.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424418">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 15 - 5:00 pm</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424368">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424344">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424314">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424282">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424398">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 14 - 7:30 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428435">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428433">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428431">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428429">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424394">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 19 - 9:01 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428435">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428433">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428431">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="428429">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424394">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 14 - 6:01 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424362">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424340">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424307">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="a00391">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 14 - 5:05 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424440">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424274">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 14 - 4:45 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424360">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424272">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 14 - 3:45 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424358">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424264">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424392">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 11 - 6:01 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424416">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 10 - 6:31 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424374">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 10 - 6:01 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424372">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 10 - 4:31 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424480">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424270">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424414">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2003 - ENERO 10 - 4:01 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424338">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424305">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424266">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424412">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2003 - ENERO 3 - 7:30 pm</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424412">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424412">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2002 - DICIEMBRE 31 - 11:00 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424334">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424299">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2002 - NOVIEMBRE 16 - 1:05 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424334">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424301">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">2002 - NOVIEMBRE 15 - 3:31 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424332">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424303">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424390">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">2002 - NOVIEMBRE 14 - 7:31 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424330">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">1989 - NOVIEMBRE 12 - 6:30 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424474">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">1984 - SEPTIEMBRE - 10:45 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424328">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">1979 - MAYO 31 - 8:01 pm.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424356">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424408">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">1979 - MAYO 31 - 7:55 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424408">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos even">
                <div>
                  <span className="date">1979 - MAYO 31 - 7:35 pm.</span>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424326">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424297">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424406">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
              </li>

              <li className="li-videos odd">
                <div>
                  <span className="date">1968 - ABRIL 2 - 9:90 am.</span>
                </div>
                <div>
                  <a className="toggle" href="#" data-video="424354">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                  <a className="toggle" href="#" data-video="424476">
                    <img src="/images/recompensa/icon-play.svg" />
                    <span>Ver video</span>
                  </a>
                </div>
              </li>

            </ul>

            <div className="cover-link">
              <a href={`/el-cubo/temporada-1/personajes`} className="button-cyan">
                <img src="/images/recompensa/icon-arrow-back-blue.svg" />
                <span>Volver a la experiencia</span>
              </a>
            </div>

          </div>
          :
          null
        }
        {viewedAll === false ?
          <div className="content-no-viewed">
            <h1 className="title-recompensa no-viewed">Has llegado al final del personaje!</h1>
            <p className="message no-viewed">
              Para recibir la recompensa aún te quedan videos por ver
              <br />Puedes verlos a continuación ;)
            </p>
            <div className="chrono-list">
              <h2>
                <span>Cronología</span> de {character.toUpperCase()} </h2>
              <img className="line-right" src="/images/line-chrono.png" />
              <ul className={`list-chrono ${character}`}>
                {chronologyList ?
                  chronologyList.map(item => (
                    <li key={`item_${item.id}`}>
                      <a className={item.viewed ? 'active' : ''} href={item.link}>
                        <img src={item.image_320} /> {item.name}
                        <span className="circle"></span>
                      </a>
                    </li>
                  ))
                  :
                  null
                }
              </ul>
            </div>
          </div>
          : null
        }

      </div>
    </AppLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: Characters.map((personaje) => ({ params: { personaje } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  const chronology = await fetcher(`/api/v1/elcubo/season/${season1_id}/chrono`);

  return {
    props: {
      character: context.params.personaje,
      chronology
    }
  };
};

export default ChronologicalReward;
