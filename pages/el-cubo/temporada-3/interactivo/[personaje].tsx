import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Dashboard from 'components/Season3/Modal/DashboardSlideModal';
import GalleryModal from 'components/Season3/Interactive/Gallery/GalleryModal';
import AudioModal from 'components/Season3/Interactive/Audio/AudioModal';
import VideoModal from 'components/Season3/Interactive/Video/VideoModal';
import Ending from 'components/Season3/Interactive/Ending/Ending';
import UrlUtils from 'utils/Url';
import styles from './lineal.module.scss';
import { rawFetch } from 'libs/fetcher';

const Personaje = (props) => {
  const {
    personaje,
    episodio,
    interactivos,
    confesionario
  } = props;

  let srcVideo = UrlUtils.getVideoUrl(episodio?.field_ec_asset_id);
  let duration = episodio?.field_ec_video_duration;
  let title = personaje?.field_ec_real_name;
  let name = personaje?.name.split(" ")[0].toLowerCase();

  let intervalLocalStorage = null;
  const dataProgressVideo = [];
  //console.log(personaje);

  const [isActiveInteractive, setIsActiveInteractive] = useState(false);
  const [interactiveData, setInteractiveData] = useState(null);
  const [interactiveType, setInteractiveType] = useState('')
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [player, setPlayer] = useState(null);
  const steal = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const markers = interactivos.map(i => {
    return {
      time: parseInt(i?.field_ec_time_action),
      url: i?.field_ec_thumb,
      text: i?.field_ec_title
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

  const handlePlayVideo = (playVideo) => {
    if (playVideo) {
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
              if (parseInt(player.currentTime, 10) > data.seenTime && !data.ended) {
                localStorage.setItem(`'${name}'`, JSON.stringify({ 
                  character: name, 
                  duration, 
                  seenTime: parseInt(player.currentTime + 1), 
                  ended: false, 
                  percent: Math.round(( parseInt(player.currentTime) / duration ) * 100) 
                }));
              }
              if (parseInt(player.currentTime, 10) >= (data.duration - 6) && !data.ended) {
                localStorage.setItem(`'${name}'`, JSON.stringify({ 
                  character: name, 
                  duration, 
                  seenTime: duration, 
                  ended: true, 
                  percent: Math.round(( parseInt(player.currentTime) / duration ) * 100) 
                }));
              }
            } else {
              localStorage.setItem(`'${name}'`, JSON.stringify({ 
                character: name, 
                duration, 
                seenTime: parseInt(player.currentTime + 1), 
                ended: false,
                percent: Math.round(( parseInt(player.currentTime) / duration ) * 100) 
              }));
            }
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

  const handleOnClickDashboard = () => {
    setShowDashboardModal(true);
  };

  const handleOnCloseDashboard = () => {
    setShowDashboardModal(false);
    handlePlayVideo(true);
  };

  const handleOnCloseGalleryModal = () => {
    handlePlayVideo(true);
  };

  const handleOnOpenSlideModal = () => {
    handlePlayVideo(false);
  };

  const handleOnCloseSlideModal = () => {
    setIsActiveInteractive(false);
    setInteractiveData(null);
    handlePlayVideo(true);
  };

  const openActiveInteractive = () => {
    setIsActiveInteractive(true);
  };

  const closeActiveInteractive = () => {
    setIsActiveInteractive(false);
  };


  return (
    <div className={styles.NodeContainer}>
      <Dashboard
        char={name}
        showModal={showDashboardModal}
        onCloseDashboard={handleOnCloseDashboard}
      />
      <div ref={steal} className={styles.steal}>
        <img className={styles.stealDesktop} src={`/images/season3/steals/${name}.jpg`} />
        <img className={styles.stealMobile} src={`/images/season3/steals/${name}-mobile.jpg`} />
      </div>
      <div className={`${styles.coverVideo} ${isActiveInteractive ? styles.activeInteractive : ""}`}>
        <VideoPlayer
          showBackButton
          backButtonLink={"/el-cubo/temporada-3/personajes/map?ref=view"}
          backButtonText={"Elegir otro personaje"}
          title={title}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          fullscreen={false}
          showDashboardLineal
          openActiveInteractive={openActiveInteractive}
          closeActiveInteractive={closeActiveInteractive}
          markers={markers}
          duration={duration}
          onClickDashboardLineal={handleOnClickDashboard}
        />
      </div>

      {interactiveType === 'video' && interactiveData && <VideoModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        data={interactiveData}
      />}

      {interactiveType === 'gallery' && interactiveData && <GalleryModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        onCloseGalleryModal={handleOnCloseGalleryModal}
        data={interactiveData}
      />}

      {interactiveType === 'audio' && interactiveData && <AudioModal
        isActive={isActiveInteractive}
        handleOpenInteractive={handleOnOpenSlideModal}
        handleCloseInteractive={handleOnCloseSlideModal}
        data={interactiveData}
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
  const dataRaw = await rawFetch('/api/v1/elcubo3/season/6679/interactive/all');
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