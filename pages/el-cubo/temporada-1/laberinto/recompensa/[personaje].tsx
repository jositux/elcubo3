import React, { useState } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import fetcher from 'libs/fetcher';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { RewardLabyrinthStyles } from 'styles/rewardLabyrinth.style';
import { NavRewardStyles } from 'styles/navReward.style';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Characters from 'constants/Characters';;
import AuthService from 'services/Auth';
import UserService from 'services/User';
import { season1_id } from 'constants/Season';
import UrlUtils from 'utils/Url';

const CharacterReward = ({ character }) => {

  const isLoggedIn = AuthService.isLoggedIn();
  const [characterData, setCharacterData] = useState(null);

  const updateUser = async () => {
    try {
      const { data } = await UserService.getMe();
      const userLabyrinthDataString = data.elcubo_laberinto;
      const userLabyrinthDataJSON = JSON.parse(userLabyrinthDataString);
      const result = await fetcher(`/api/v1/elcubo/season/${season1_id}/character/${userLabyrinthDataJSON.currentCharacter.id}`);
      setCharacterData(result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      updateUser();
    }
  }, []);

  React.useEffect(() => {
    if (characterData) {
      // Pane Slide VIDEO
      const paneVideo = document.querySelector('.pane-video');
      const button_open = document.querySelectorAll('.toggle');
      const button_close = document.querySelectorAll('.close');
      const pane = document.querySelector('.pane');

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
        const controls_extra = document.querySelector('.plyr--video');

        if (document.querySelector('.plyr_title') === null) {
          controls_extra.prepend(createTitle(paneVideo.dataset.title));
        }

        if (!Hls.isSupported()) {
          video.src = source;
        } else {
          const hls = new Hls();
          hls.loadSource(source);
          hls.attachMedia(video);
          window.hls = hls;
          player.on('play', () => {
          });
          player.on('ended', () => {
            pane.classList.add('is-hidden');
            fadeOut(pane, 50);
          });
          player.on('controlsshown', () => {
            document.getElementsByClassName('plyr_title')[0].classList.remove('hide');
          });
          player.on('controlshidden', () => {
            document.getElementsByClassName('plyr_title')[0].classList.add('hide');
          });
        }
        window.player = player;
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
          } else {
            el.style.opacity = 1;
          }
        };
        fade();
      };

      function createTitle(pTitle) {
        let plyr_title = document.createElement('h2');
        plyr_title.setAttribute("class", 'plyr_title');
        plyr_title.innerHTML = pTitle;
        return plyr_title;
      };

      if (button_open) {
        button_open.forEach(function (link) {
          link.addEventListener('click', () => {
            loadPlayer(paneVideo.dataset.video);
            fadeIn(pane, 40);
            pane.classList.remove('is-hidden');
            player.play();
          });
        });
      }

      if (button_close) {
        button_close.forEach(function (link) {
          link.addEventListener('click', () => {
            pane.classList.toggle('open');
            fadeOut(pane, 40);
            setTimeout(() => {
              loadPlayer('test', 'test');
            }, 500);
          });
        });
      }
    }
  }, [characterData]);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Laberinto - El Cubo</title>
      </Head>
      <RewardLabyrinthStyles />
      <NavRewardStyles />

      <BackToCharacters text={'Volver a elegir personajes'} />

      <img src="/images/recompensa/bg.jpg" className="bg-recompensa" />

      <div className="pane pane-bg invisible">
        <a className="close">
          <img src="/images/pane-close.svg" />
        </a>
        <div className="pane-video" data-video={characterData ? characterData.field_ec_reward_lab : null} data-poster="" data-title={`Confesionario de ${character.toUpperCase()}`}>
          <video className="hide" controls crossOrigin="true" ></video>
        </div>
      </div>

      <div className="app-elcubo recompensa">
        <div className="left">
          <h1 className="title-recompensa">¡Lo Lograste!</h1>
          <p className="desc-recompensa">Ahora tienes acceso al confesionario de {character.toUpperCase()}.
            <br /> Es tu recompensa</p>
          <div className="cover-link">
            <a href="#" className="button-cyan toggle">
              <span>Ver confesionario</span>
              <img src="/images/icon-arrow-init.svg" />
            </a>
          </div>

          <div className="cover-link-back">
            <a href={`/el-cubo/temporada-1/personajes`} className="button-cyan">
              <img src="/images/recompensa/icon-arrow-back-blue.svg" />
              <span>Volver a iniciar la experiencia</span>
            </a>
          </div>

        </div>
        <div className="right">
          <img src="/images/recompensa/rubiano.png" />
        </div>



      </div>

    </AppLayout >
  );
};

export async function getStaticPaths() {
  return {
    paths: Characters.map((personaje) => ({ params: { personaje } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      character: context.params.personaje,
    },
  };
};

export default CharacterReward;
