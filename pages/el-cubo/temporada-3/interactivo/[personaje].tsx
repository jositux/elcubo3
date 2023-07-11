import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import GalleryModal from 'components/Season3/Interactive/Fade/Gallery/GalleryModal';
import AudioModal from 'components/Season3/Interactive/Fade/Audio/AudioModal';
import VideoModal from 'components/Season3/Interactive/Fade/Video/VideoModal';
import Ending from 'components/Season3/Interactive/Ending/Ending';
import ListCharacters from 'components/Season3/ListCharacters/ListCharacters';
import RotateAdvice from 'components/Season3/Shared/RotateAdvice/RotateAdvice';
import UrlUtils from 'utils/Url';
import styles from './lineal.module.scss';
import { rawFetch } from 'libs/fetcher';
import HtmlParser from 'html-react-parser';
import { useRouter } from "next/router";


const Personaje = (props) => {
  const {
    personaje,
    episodio,
    interactivos,
    confesionario
  } = props;

  const [audios, setAudios] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
      alert: new Audio('/audios/season2/complete_success/Success2.mp3'),
    });
  }, []);

  let srcVideo = UrlUtils.getVideoUrl(episodio?.field_ec_asset_id);
  let duration = episodio?.field_ec_video_duration;
  let title = personaje?.field_ec_real_name;
  let name = personaje?.name.split(" ")[0].toLowerCase();
  let srcConfessional = UrlUtils.getVideoUrl(episodio?.field_ec_asset_id);

  let intervalLocalStorage = null;
  const dataProgressVideo = [];

  const [isActiveInteractive, setIsActiveInteractive] = useState(false);
  const [interactiveData, setInteractiveData] = useState(null);
  const [interactiveType, setInteractiveType] = useState('')
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const steal = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const [percentParam, setPercentParam] = useState(0);

  let titleCustom = ''

  const markers = interactivos.map(i => {

    titleCustom = i?.field_ec_title;
    if (router.locale === 'en') {
      // Yenny
      if (i?.id === '1687') { titleCustom = 'The patriarchal as the origin of matriarchal' }
      if (i?.id === '1690') { titleCustom = '"Las señoritas"' }
      if (i?.id === '1688') { titleCustom = 'the first dream come true' }
      if (i?.id === '1689') { titleCustom = 'First Time in town' }

      // Juan
      if (i?.id === '1684') { titleCustom = 'The curse of the cemetery' }
      if (i?.id === '1683') { titleCustom = 'A vocation is born from violence' }
      if (i?.id === '1685') { titleCustom = 'A shepherd without herd' }
      if (i?.id === '1686') { titleCustom = 'Santa Rosa de Lima, Jordan´s caretaker' }

      // Diego
      if (i?.id === '1695') { titleCustom = 'And the inheritance continues' }
      if (i?.id === '1696') { titleCustom = 'No road, out of the map' }
      if (i?.id === '1697') { titleCustom = 'Rural artist´s dream' }

      // Guillermo
      if (i?.id === '1691') { titleCustom = 'Guillermo Prada, a child of violence' }
      if (i?.id === '1692') { titleCustom = 'Escaping from violence' }
      if (i?.id === '1693') { titleCustom = 'The complexities of not owning land' }
      if (i?.id === '1694') { titleCustom = 'Guillermo y Saint Rosa meet in Jordán' }

      // Soledad
      if (i?.id === '1698') { titleCustom = 'Conditions of rural women' }
      if (i?.id === '1699') { titleCustom = 'The heiress to a place on the council' }
      if (i?.id === '1700') { titleCustom = 'The councilor' }

    }
    else {
      titleCustom = i?.field_ec_title;
    }
    //console.log(i?.id);


    return {
      time: parseInt(i?.field_ec_time_action),
      url: i?.field_ec_thumb,
      text: HtmlParser(titleCustom)
    }
  });

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

  useEffect(() => {
    const fixLoad = () => {
      //player.forward(5);
      //player.rewind(5);
      player.play();
    };
    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(steal.current, 40);
        fixLoad();
      }, 4000);

    };
    if (steal?.current && player) {
      onLoadFadeout();
    }
  }, [steal.current, player]);

  const handlePlayVideo = (playVideo) => {

    if (playVideo && !videoEnded) {
      player.play();
    } else {
      player.pause();
    }

  };

  useEffect(() => {
    if (player) {
      player.on('play', () => {
        setInterval(() => {
          interactivos.map((i, index) => {
            if (parseInt(player.currentTime, 10) == i.field_ec_time_action) {
              if (!isActiveInteractive) {
                openActiveInteractive();
                if (audios?.alert) {
                  audios.alert.play();
                }
                setInteractiveData(i);
                switch (i.type) {
                  case 'ec3_interactive_audio':
                    setInteractiveType('audio');
                    break;
                  case 'ec3_interactive_video':
                    setInteractiveType('video');
                    break;
                  case 'ec3_interactive_gallery':
                    setInteractiveType('gallery');
                    break;
                  default:
                    setInteractiveType(null);
                    break;
                }
              }
            }

            let timeEndActive = parseInt(i.field_ec_time_action, 10) + 12;
            if (parseInt(player.currentTime, 10) == timeEndActive) {
              setInteractiveData(null);
              closeActiveInteractive();
            }
          })
        }, 1000);

        intervalLocalStorage = setInterval(() => {
          if (player.playing) {
            let data = JSON.parse(localStorage.getItem(`'${name}'`));
            if (data) {
              if (/*parseInt(player.currentTime, 10) > data.seenTime* &&*/ !data.ended) {
                localStorage.setItem(`'${name}'`, JSON.stringify({
                  character: name,
                  duration,
                  seenTime: parseInt(player.currentTime + 1),
                  ended: false,
                  percent: Math.round((parseInt(player.currentTime) / duration) * 100)
                }));
              }
              if (parseInt(player.currentTime, 10) >= (data.duration - 6) && !data.ended) {
                localStorage.setItem(`'${name}'`, JSON.stringify({
                  character: name,
                  duration,
                  seenTime: duration,
                  ended: true,
                  percent: 100
                }));
              }
            } else {
              localStorage.setItem(`'${name}'`, JSON.stringify({
                character: name,
                duration,
                seenTime: parseInt(player.currentTime + 1),
                ended: false,
                percent: Math.round((parseInt(player.currentTime) / duration) * 100)
              }));
            }

            let porcentaje = JSON.parse(localStorage.getItem(`'${name}'`)).percent;
            setPercentParam(porcentaje);

          }
        }, 5000);
      });

      player.on('ended', () => {
        setVideoEnded(true);
      });

      player.on('pause', () => {
        if (!player.playing) {
          clearInterval(intervalLocalStorage);
        }
      });


    }
  }, [player]);

  useEffect(() => {
    const fixLoad = () => {
      player.forward(5);
      player.rewind(5);
      player.play();
    };
    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(steal.current, 40);
        fixLoad();
      }, 4000);

    };
    if (steal?.current && player) {
      onLoadFadeout();
    }
  }, [steal.current, player]);


  useEffect(() => {
    const loadSeenTime = (data) => {
      window.setTimeout(() => {
        player.forward(data.seenTime);
      }, 1000);
    };

    let data = JSON.parse(localStorage.getItem(`'${name}'`));
    if (data && player) {
      if (!data.ended) {
        loadSeenTime(data);
      }
    }
  }, [player])

  const handleOnCloseGalleryModal = () => {
    handlePlayVideo(true);
    if (audios?.click) {
      audios.click.play();
    }
  };

  const handleOnOpenSlideModal = () => {
    if (audios?.click) {
      audios.click.play();
    }
    handlePlayVideo(false);
  };

  const handleOnCloseSlideModal = () => {
    setIsActiveInteractive(false);
    setInteractiveData(null);
    handlePlayVideo(true);
    if (audios?.click) {
      audios.click.play();
    }
  };

  const openActiveInteractive = () => {
    setIsActiveInteractive(true);
  };

  const closeActiveInteractive = () => {
    setIsActiveInteractive(false);
  };


  return (
    <div className={styles.NodeContainer}>

      <div ref={steal} className={styles.steal}>
        <img className={styles.stealDesktop} src={`/images/season3/steals/${name}.jpg`} />
        <img className={styles.stealMobile} src={`/images/season3/steals/${name}-mobile.jpg`} />
      </div>

      <RotateAdvice router={router} />
      <div className={`${styles.coverVideo} ${isActiveInteractive ? styles.activeInteractive : ""}`}>
        <VideoPlayer
          showBackButton
          backButtonLink={router.locale === 'en' ?
            '/en/el-cubo/temporada-3/personajes?ref=view' :
            '/el-cubo/temporada-3/personajes?ref=view'}
          backButtonText={router.locale === 'en' ?
            'Choose another character' :
            'Elige otro personaje'}
          title={title}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          fullscreen={false}
          showDashboardLineal={true}
          openActiveInteractive={openActiveInteractive}
          closeActiveInteractive={closeActiveInteractive}
          markers={markers}
          duration={duration}
          router={router}
        >
          <ListCharacters
            char={name}
            percentParam={percentParam}
            timeline={false}
            router={router}
          />
        </VideoPlayer>
      </div>

      {interactiveType === 'video' && interactiveData && <VideoModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        data={interactiveData}
        duration={duration}
      />}

      {interactiveType === 'gallery' && interactiveData && <GalleryModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        onCloseGalleryModal={handleOnCloseGalleryModal}
        data={interactiveData}
        duration={duration}
      />}

      {interactiveType === 'audio' && interactiveData && <AudioModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        data={interactiveData}
        duration={duration}
      />}

      {videoEnded && <Ending name={title} />}

    </div>
  );
};

// export async function getStaticPaths() {
//   const paths = [
//     'juan'
//   ]

//   return {
//     paths,
//     fallback: false,
//   };
// }

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { personaje } = params;
  const dataRaw = await rawFetch('/api/v1/elcubo3/season/6743/interactive/all');

  const dataJson = await dataRaw.json();
  const filtteredData = dataJson.filter(d => personaje === d.field_ec_title);

  if (!filtteredData || !filtteredData.length) {
    return {
      props: {
        personaje: null
      },
    };
  }

  const dataPersonaje = filtteredData[0];
  const {
    field_ec_episode_json,
    field_ec3_interactives_items_json,
    field_ec_confessional_episode_json,
    field_ec_characters,
    field_ec_video_duration
  } = dataPersonaje;

  const episodeJson = JSON.parse(field_ec_episode_json)?.[0];
  const itemsInteractivo = JSON.parse(field_ec3_interactives_items_json).sort((a, b) => {
    const durA = parseInt(a.field_ec_time_action);
    const durB = parseInt(b.field_ec_time_action);
    if (durA > durB) {
      return 1;
    } else if (durA < durB) {
      return -1;
    }
    return 0;
  });

  const confesionario = JSON.parse(field_ec_confessional_episode_json)?.[0];
  const persona = JSON.parse(field_ec_characters)?.[0];

  return {
    props: {
      personaje: persona,
      episodio: {
        ...episodeJson,
        field_ec_video_duration
      },
      interactivos: itemsInteractivo,
      confesionario,
    },
  };
};

export default Personaje;