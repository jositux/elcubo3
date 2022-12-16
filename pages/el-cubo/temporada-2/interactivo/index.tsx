import React, { useState, useEffect, useRef } from 'react';
import VideoPlayer from 'components/Season2/VideoPlayer/VideoPlayer';
import UrlUtils from 'utils/Url';
import styles from './interactive.module.scss'
import { useRouter } from 'next/router';
import { rawFetch } from 'libs/fetcher';
import DashboardModal from 'components/Season2/Shared/Modal/DashboardModal';

import Spot from 'components/Season2/Interactive/Spot/Spot';
import Dots from 'components/Season2/Interactive/Dots/Dots';
import Translate from 'components/Season2/Interactive/Translate/Translate';
import Trivia from 'components/Season2/Interactive/Trivia/Trivia';
import Memory from 'components/Season2/Interactive/Memory/Memory';

import Ending from 'components/Season2/Interactive/Ending/Ending';

import disableScroll from 'disable-scroll';

import Toast from 'components/Season2/Shared/Toast/Toast';
import VideoModal from 'components/Season2/Shared/Modal/VideoModal';
import Message from 'components/Season2/Shared/Message/Message';
import MessageAfterVideo from 'components/Season2/Shared/MessageAfterVideo/MessageAfterVideo';
import RotateAdvice from 'components/Season2/Shared/RotateAdvice/RotateAdvice';

import { getToastInfo } from 'utils/GetToastInfo';

import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSpot,
  setCurrentTranslate,
  setCurrentTrivia,
  setCurrentTriviaVideo,
  setCurrentDots,
  setCurrentMemory,
  setAnswerClicked,
  setMessageAfterVideo,
  onMessageAfterVideoEnded,
  resetItems,
  setToast,
  setLevel2Video,
  setContinueExperience,
} from "redux/actions/interactive";
import AuthService from 'services/Auth';
import UserService from 'services/User';
import ApiService from 'services/Api';
import ModesUtils from 'utils/Modes';
import { setUsersRanking } from 'redux/actions/dashboard';
import { setUser } from 'redux/actions/user';
import Help from 'components/Season2/Interactive/Help/Help';


const Interactive = ({ episodeJson, interactiveItemsJson, ranking }) => {

  const isLoggedIn = AuthService.isLoggedIn();
  const [continueOnTime, setContinueOnTime] = useState(0);
  const interactiveActive = useRef<boolean>(false);
  const interactiveItem = useRef();
  const lastItem = useRef();
  const lastToast = useRef();
  const user = useRef(null);
  const router = useRouter();
  const { isReady, query } = router;
  const { interactive } = useSelector(state => state);
  const dispatch = useDispatch();

  const [player, setPlayer] = useState(null);
  const [showInitialVideo, setShowInitialVideo] = useState(true);

  const steal = useRef(null);

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
    };

    const onLoadFadeout = () => {
      window.setTimeout(() => {
        fadeOut(steal.current, 40);
        fixLoad();
      }, 4000);
    };

    if (steal?.current && player && !query.hasOwnProperty('continuar')) {
      onLoadFadeout();
    }
  }, [steal.current, player]);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/el-cubo/temporada-2')
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (continueOnTime && continueOnTime > 0) {
      player.forward(continueOnTime);
      player.play();
    }
  }, [continueOnTime]);

  const updateInteractiveViewed = async () => {
    if (isLoggedIn && user?.current && lastItem.current) {
      try {
        const userInteractiveDataString = user?.current?.elcubo_interactive_data_json;
        const userInteractiveDataJSON = Object.getOwnPropertyNames(userInteractiveDataString).length === 0 ? {} : JSON.parse(userInteractiveDataString);
        const userInteractiveData = ModesUtils.setInteractiveViewed(
          userInteractiveDataJSON,
          lastItem?.current?.field_ec_coleccionable_order
        );
        await UserService.update(user.current.id, {
          field_ec2_interactive_data_json: {
            value: JSON.stringify({ ...userInteractiveData }),
          },
        });
        user.current.elcubo_interactive_data_json = JSON.stringify({ ...userInteractiveData });
        dispatch(setUser(user.current));
        lastItem.current = null;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateLastViewedMinute = async () => {
    if (isLoggedIn && user?.current) {
      try {
        const userInteractiveDataString = user?.current?.elcubo_interactive_data_json;
        const userInteractiveDataJSON = Object.getOwnPropertyNames(userInteractiveDataString).length === 0 ? {} : JSON.parse(userInteractiveDataString);
        const { currentTime } = player;
        const userInteractiveData = ModesUtils.setInteractiveLastMinuteViewed(
          userInteractiveDataJSON,
          currentTime
        );
        await UserService.update(user.current.id, {
          field_ec2_interactive_data_json: {
            value: JSON.stringify({ ...userInteractiveData }),
          },
        });
        user.current.elcubo_interactive_data_json = JSON.stringify({ ...userInteractiveData });
        dispatch(setUser(user.current));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateUser = async (colOrder, score) => {
    if (isLoggedIn && user) {
      try {
        const userInteractiveDataString = user?.current?.elcubo_interactive_data_json;
        const userInteractiveDataJSON = Object.getOwnPropertyNames(userInteractiveDataString).length === 0 ? {} : JSON.parse(userInteractiveDataString);
        const videoViewed = getVideoId(interactiveItem);
        const characterId = interactiveItem?.current?.field_ec_character_success;
        const { interactiveData, toastData, newConfessionalUnlocked } = ModesUtils.updateInteractive(userInteractiveDataJSON, colOrder, score, videoViewed, characterId);
        lastToast.current = toastData;
        await UserService.update(user?.current?.id, {
          field_ec2_interactive_data_json: {
            value: JSON.stringify({ ...interactiveData }),
          },
          field_ec2_interactive_score: {
            value: interactiveData?.points
          }
        });
        user.current.elcubo_interactive_data_json = JSON.stringify({ ...interactiveData });
        if (newConfessionalUnlocked && interactiveItem?.current?.type !== 'ec2_interactive_translate') {
          dispatch(setMessageAfterVideo(`¡Felicitaciones! Has liberado el <br />confesionario de ${newConfessionalUnlocked}.`));
        }
        dispatch(setUser(user.current));
        await getRankingData();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getMe = async () => {
    try {
      const { data } = await UserService.getMe();
      if (data) {
        dispatch(setUser(data));
        user.current = data;
        if (query.hasOwnProperty('continuar')) {
          const userInteractiveDataString = user?.current?.elcubo_interactive_data_json;
          const userInteractiveDataJSON = userInteractiveDataString ? JSON.parse(userInteractiveDataString) : {};
          const time = userInteractiveDataJSON?.continueOnTime || 0;
          setContinueOnTime(time);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn && isReady) {
      getMe();
      dispatch(setUsersRanking(ranking));
    }
  }, []);

  const [audios, setAudios] = useState(null);
  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
      alert: new Audio('/audios/season2/notifications_alerts/alert_1.mp3'),
      collapse: new Audio('/audios/season2/buttons_navigation/Collapse.mp3'),
      message: new Audio('/audios/season2/notifications_alerts/notification_6.mp3')
    });
  }, []);

  useEffect(() => {
    if (!showInitialVideo && player) {
      player.play();
    }
  }, [showInitialVideo]);

  let interactiveInterval;
  let interactiveLastViewedMinute;

  const { field_ec_asset_id } = episodeJson && episodeJson.length ? episodeJson[0] : null;
  let srcVideo = UrlUtils.getVideoUrl(field_ec_asset_id);

  const [showLevel2VideoModal, setShowLevel2VideoModal] = useState(false);
  const [interactiveViewed, setInteractiveViewed] = useState(false);

  // Interactive Types
  const [showMessage, setShowMessage] = useState(null);

  // FIXME: Remove/refactor
  const [showDashboardModal, setShowDashboardModal] = useState(false);

  const [showHelp, setShowHelp] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  const handlePlayVideo = (playVideo) => {
    if (playVideo) {
      player.play();
    } else {
      player.pause();
    }
  };

  const getRankingData = async () => {
    const { data: ranking } = await ApiService.get('https://cms.rtvcplay.co/api/v1/elcubo/season/6599/interactive/top-users');
    // const { data: ranking } = await ApiService.get('https://play-cms.rtvc.dev/api/v1/elcubo/season/6201/interactive/top-users');
    dispatch(setUsersRanking(ranking));
  };

  const handleOnClickDashboard = () => {
    setShowDashboardModal(true);
    disableScroll.off();
  };

  const handleOnCloseDashboard = () => {
    setShowDashboardModal(false);
    handlePlayVideo(true);
    if (audios?.click) {
      audios.click.play();
    }
  };

  const getVideoId = (item) => {
    if (item.current || item) {
      const { field_ec_episode_success_json } = item.current || item;
      const firstItem = field_ec_episode_success_json ? JSON.parse(field_ec_episode_success_json)[0] : null;
      return firstItem?.field_ec_asset_id || null;
    }
    return null;
  };

  const getDuration = (dur) => {
    const parsed = parseInt(dur);
    if (typeof parsed !== 'number' || isNaN(parsed)) {
      return 10;
    }
    return parsed
  };

  let videoIsPaused = false;

  const checkTime = () => {
    const { currentTime } = player;
    interactiveItem.current = null;
    interactiveItemsJson.forEach(item => {
      if (!item?.type) return;
      const initialTime = parseInt(item.field_ec_time_action);
      const interactiveDuration = getDuration(item.field_ec_duration_action);
      const endTime = initialTime + parseInt(interactiveDuration);
      const descDuration = parseInt(item.field_ec_description_duration)
      if (initialTime < currentTime && endTime > currentTime) {
        interactiveItem.current = item;
        lastItem.current = item;
        updateInteractiveActive(true);
      }
      if (initialTime - descDuration < currentTime && initialTime - 1 > currentTime) {
        if (!showMessage) {
          if (item?.field_ec_description.trim() !== '') {
            /* if (audios?.message) {
               audios.message.play();
             }*/
          }
          setShowMessage(item?.field_ec_description);
        }
      }
      if (currentTime >= 64 && currentTime <= 65) {
        interactiveItem.current = { type: 'help' };
      }
      if (currentTime >= player.duration - 84 && currentTime <= player.duration - 83) {
        interactiveItem.current = { type: 'ending' };
      }
    });
    if (interactiveItem.current) {
      setShowMessage(null);
      switch (interactiveItem.current.type) {
        case 'ec2_interactive_spot':
          if (!interactive.currentSpot) {
            const videoId = getVideoId(interactiveItem);
            dispatch(setLevel2Video(videoId));
            dispatch(setCurrentSpot(interactiveItem.current));
          }
          if (!videoIsPaused && interactiveItem.current?.field_ec_pause_video_action === 'Sí') {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'ec2_interactive_dots':
          if (!interactive.currentDots) {
            const videoId = getVideoId(interactiveItem);
            dispatch(setLevel2Video(videoId));
            dispatch(setCurrentDots(interactiveItem.current));
          }
          if (!videoIsPaused && interactiveItem.current?.field_ec_pause_video_action === 'Sí') {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'ec2_interactive_trivia':
          if (!interactive.currentTrivia) {
            dispatch(setCurrentTrivia(interactiveItem.current));
          }
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'ec2_interactive_trivia_video':
          if (!interactive.currentTriviaVideo) {
            dispatch(setCurrentTriviaVideo(interactiveItem.current));
          }
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'ec2_interactive_translate':
          if (!interactive.currentTranslate) {
            dispatch(setCurrentTranslate(interactiveItem.current));
          }
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'ec2_interactive_memory':
          if (!interactive.currentMemory) {
            dispatch(setCurrentMemory(interactiveItem.current));
          }
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
          }
          break;

        case 'help':
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
            setShowHelp(true);
          }
          break;

        case 'ending':
          if (!videoIsPaused) {
            videoIsPaused = true;
            handlePlayVideo(false);
            setShowEnding(true);
          }
          break;


        default:
          break;
      }
    } else {
      updateInteractiveActive(false);
      videoIsPaused = false;
      dispatch(resetItems());
      setShowLevel2VideoModal(false);
      setInteractiveViewed(false);
    }
  };

  const updateInteractiveActive = (value: boolean) => {
    if (interactiveActive.current && !value) {
      interactiveActive.current = value;
      updateInteractiveViewed();
    }
    if (!interactiveActive.current && value) {
      interactiveActive.current = value;
    }
  };

  useEffect(() => {
    clearInterval(interactiveLastViewedMinute);
    if (player) {
      interactiveLastViewedMinute = setInterval(updateLastViewedMinute, 300000);
    }
    return () => clearInterval(interactiveLastViewedMinute);
  }, [player]);

  useEffect(() => {
    clearInterval(interactiveInterval);
    if (player) {
      interactiveInterval = setInterval(checkTime, 500);
    }
    return () => clearInterval(interactiveInterval);
  }, [player]);

  const handleContinueExperience = () => {
    dispatch(setContinueExperience(true));
    handlePlayVideo(true);
    if (lastItem?.current?.type === 'ec2_interactive_translate') {
      createToast();
    }
  };

  const handleOnLevel2VideoEnd = (field_ec_description) => {
    setShowLevel2VideoModal(false);
    handleContinueExperience();
    setInteractiveViewed(true);
    createToast();
  };

  const createToast = () => {
    const current = interactive?.currentItem ||
      interactive?.currentSpot ||
      interactive?.currentTrivia ||
      interactive?.currentTriviaVideo ||
      interactive?.currentTranslate ||
      interactive?.currentDots;
    if (current && lastToast.current) {
      const toastData = getToastInfo(current, lastToast.current);
      dispatch(setToast(toastData));
      if (audios?.alert) {
        audios.alert.play();
      }
    }
    lastToast.current = null;
  };

  const handleOnPointClicked = () => {
    const {
      field_ec_coleccionable_order,
      field_ec_score_success
    } = interactiveItem.current;
    updateUser(
      parseInt(field_ec_coleccionable_order),
      parseInt(field_ec_score_success)
    );
    handlePlayVideo(false);
    setShowLevel2VideoModal(true);
    setCurrentSpot(null);
    setInteractiveViewed(true);
    dispatch(setAnswerClicked(true));
    if (audios?.click) {
      audios.click.play();
    }
  };

  const handleOnCloseToast = () => {
    dispatch(setToast(null));
  };

  const handleTriviaAnswerSelected = async (score) => {
    if (parseInt(score) > 0) {
      const current = interactive?.currentItem || interactive?.currentTriviaVideo;
      if (current.type === 'ec2_interactive_trivia_video') {
        const itemData = JSON.parse(current.field_ec_episode_success_json);
        const videoId = itemData[0].field_ec_asset_id;
        dispatch(setLevel2Video(videoId));
        setShowLevel2VideoModal(true);
        await updateUser(
          parseInt(current?.field_ec_coleccionable_order),
          parseInt(score)
        );
      }
      if (current.type === 'ec2_interactive_trivia') {
        handlePlayVideo(true);
        await updateUser(
          parseInt(current?.field_ec_coleccionable_order),
          parseInt(score)
        );
        createToast();
      }
    } else {
      handlePlayVideo(true);
    }
  };

  const handleOnAfterVideoMessageEnd = () => {
    dispatch(onMessageAfterVideoEnded());
  };

  const handleEndingButtonPressed = () => {
    setShowDashboardModal(true);
    dispatch(setContinueExperience(true));
    setShowEnding(false);
  };

  const handleEndingContinueClick = () => {
    dispatch(setContinueExperience(true));
    setShowHelp(false);
    setShowEnding(false);
    handlePlayVideo(true);
  };

  const handleTranslateClicked = (score) => {
    const {
      field_ec_coleccionable_order
    } = interactive?.currentTranslate;
    updateUser(
      parseInt(field_ec_coleccionable_order),
      score ? score : 10
    );

    if (audios?.message) {
      audios.message.play();
    }
  };

  const handleCountFinished = () => {
    setInteractiveViewed(true);
    handlePlayVideo(true);
  };

  const handleDontPlay = () => {
    dispatch(setAnswerClicked(false));
    setInteractiveViewed(true);
    handlePlayVideo(true);
  };

  const handleGameWin = async () => {
    dispatch(setAnswerClicked(true));
    const {
      field_ec_coleccionable_order,
      field_ec_score_success
    } = interactiveItem.current;
    handlePlayVideo(true);
    setInteractiveViewed(true);
    await updateUser(
      parseInt(field_ec_coleccionable_order),
      parseInt(field_ec_score_success)
    );
    createToast();
  };


  return isLoggedIn && (

    <div className={`${styles.interactiveCover} ${styles.fadeIn}`}>

      {/*<RoundCursor />*/}

      <DashboardModal
        showModal={showDashboardModal}
        onCloseDashboard={handleOnCloseDashboard}
      />
      <RotateAdvice />
      {showMessage ? <Message message={showMessage} /> : null}
      {interactive?.messageAfterVideo ? <MessageAfterVideo message={interactive.messageAfterVideo} onTimeEnd={handleOnAfterVideoMessageEnd} /> : null}
      {interactive?.toast ?
        <Toast
          title={interactive?.toast?.title}
          img={interactive?.toast?.img}
          onClose={handleOnCloseToast}
        />
        :
        null
      }

      {interactive?.currentSpot && !interactiveViewed ?
        <Spot
          item={interactive?.currentSpot}
          onPointClicked={handleOnPointClicked}
          onFinish={handleCountFinished}
        />
        :
        null
      }

      {interactive?.currentDots && !interactiveViewed ?
        <Dots
          item={interactive?.currentDots}
          onPointClicked={handleOnPointClicked}
          onFinish={handleCountFinished}
        />
        :
        null
      }
      {interactive?.currentTranslate && !interactive?.continueExperience ?
        <Translate
          item={lastItem.current}
          onTranslate={handleTranslateClicked}
          onClick={handleContinueExperience}
        />
        :
        null
      }
      {interactive?.currentTrivia ?
        <Trivia
          question={interactive?.currentTrivia?.field_ec_question}
          paragraph={''}
          answers={JSON.parse(interactive?.currentTrivia?.field_ec_answers_items_json)}
          onAnswerSelected={handleTriviaAnswerSelected}
        /> :
        null
      }
      {interactive?.currentTriviaVideo ?
        <Trivia
          question={interactive?.currentTriviaVideo?.field_ec_question}
          paragraph={''}
          answers={JSON.parse(interactive?.currentTriviaVideo?.field_ec_answers_items_json)}
          onAnswerSelected={handleTriviaAnswerSelected}
        /> :
        null
      }
      {interactive?.currentMemory && !interactiveViewed ?
        <Memory dontPlay={handleDontPlay} wonTheGame={handleGameWin} /> :
        null
      }
      {showHelp && !interactive?.continueExperience ?
        <Help
          duration={20000}
          text={'Aquí podrás acceder a tus avances y premios de la experiencia. ¡Que lo disfrutes!'}
          onClose={handleEndingContinueClick}
        /> :
        null
      }
      {showEnding && !interactive?.continueExperience ?
        <Ending
          onContinue={handleEndingContinueClick}
          onButtonClicked={handleEndingButtonPressed}
        /> :
        null
      }

      {!query.hasOwnProperty('continuar') &&
        <div ref={steal} className={styles.steal}>
          <img className={styles.stealDesktop} src="/images/season2/preview.jpg" />
          <img className={styles.stealMobile} src="/images/season2/preview_mobile.jpg" />
        </div>
      }

      <div className={interactiveActive.current ? 'hide-controls' : ''}>
        <VideoPlayer
          showBackButton
          backButtonLink={"/el-cubo/temporada-2/selector"}
          backButtonText={"Volver"}
          autoPlay={false}
          showDashboard
          onClickDashboard={handleOnClickDashboard}
          title={""}
          source={srcVideo}
          showPrevButton={false}
          showNextButton={false}
          setPlayer={setPlayer}
          fullscreen={false}
          seekControls
        />
      </div>

      {interactive?.level2Video && showLevel2VideoModal &&
        <VideoModal
          videoId={interactive?.level2Video}
          showModal={showLevel2VideoModal}
          setShowModal={setShowLevel2VideoModal}
          onVideoEnded={handleOnLevel2VideoEnd}
          autoPlay={true}
        />
      }

      {showInitialVideo && !query.hasOwnProperty('continuar') &&
        <VideoModal
          videoId={"a02329"}
          showModal={showInitialVideo}
          setShowModal={setShowLevel2VideoModal}
          onVideoEnded={() => setShowInitialVideo(false)}
          autoPlay={false}
        />
      }
    </div>
  );
};

export const getServerSideProps = async (context) => {
  //const dataRaw = await rawFetch('/api/v1/elcubo/season/6201/interactive');
  const dataRaw = await rawFetch('/api/v1/elcubo/season/6599/interactive');

  const data = await dataRaw.json();
  //const { data: ranking } = await ApiService.get('/api/v1/elcubo/season/6201/interactive/top-users');
  const { data: ranking } = await ApiService.get('/api/v1/elcubo/season/6599/interactive/top-users');

  const {
    field_ec_episode_json,
    field_ec_interactives_items_json
  } = data[0];
  const episodeJson = JSON.parse(field_ec_episode_json);
  const interactiveItemsJson = JSON.parse(field_ec_interactives_items_json);

  return {
    props: {
      episodeJson,
      interactiveItemsJson,
      ranking,
      data
    },
  };
};

export default Interactive;