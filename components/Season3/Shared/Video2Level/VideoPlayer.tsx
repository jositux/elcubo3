import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Plyr from 'plyr';
import HLS from 'hls.js';
import { useRouter } from 'next/router';
import 'plyr/dist/plyr.css';
import { VideoPlayerWrapper } from './VideoPlayer.style';

const VideoPlayer = ({
  source,
  poster = null,
  title,
  subtitle,
  fullscreen,
  showBackButton = false,
  backButtonLink = '/',
  backButtonText = 'Volver',
  chapterButtonName = 'Chapters',
  autoPlay,
  loop,
  showDashboard = false,
  showDashboardLineal = false,
  onClickDashboard,
  onClickDashboardLineal,
  showPrevButton = true,
  showNextButton = true,
  onVideoEnded,
  onControlsHidden,
  onControlsShown,
  onVideoPause,
  onVideoPlaying,
  muted,
  setPlayer,
  children,
  seekControls
}) => {
  const wrapperRef = React.useRef();
  const videoRef = React.useRef();
  const playerRef = React.useRef();
  const router = useRouter();

  React.useEffect(() => {
    const video: HTMLMediaElement = videoRef.current;
    const updateQuality = (newQuality) => {
      if (window.hls) {
        window.hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            window.hls.currentLevel = levelIndex;
          }
        });
      }
    }



    playerRef.current = new Plyr(video, {
      enabled: true,
      ratio: '16:9',
      fullscreen: { enabled: fullscreen },
      invertTime: false,
      //quality: {
      //  default: 720,
      //  options: [720, 360, 270],
      //  forced: true,
      //  onChange: (e) => updateQuality(e),
      //},
      i18n: {
        restart: 'Restart',
        rewind: 'Retroceder {seektime} seg',
        play:
          router.locale === "en" ?
            "Play" :
            "Reproducir"
        ,
        pause: router.locale === "en" ?
          "Pause" :
          "Pausar",
        fastForward: 'Adelantar {seektime} seg',
        seek: 'Seek',
        played: 'Played',
        buffered: 'Buffered',
        currentTime: 'Current time',
        duration: 'Duration',
        volume: 'Volumen',
        mute: router.locale === "en" ?
          "Mute" :
          "Silenciar",
        unmute: router.locale === "en" ?
          "Unmute" :
          "Activar Sonido",
        enableCaptions: router.locale === "en" ?
          "Enable Subtitles" :
          "Habilitar Subtítulos",
        disableCaptions: router.locale === "en" ?
          "Disable Subtitles" :
          "Dehabilitar Subtítulos",
        enterFullscreen: 'Enter fullscreen',
        exitFullscreen: 'Exit fullscreen',
        frameTitle: 'Player for {title}',
        captions: 'Subtítulos',
        settings: 'Configuraciones',
        speed: 'Velocidad',
        normal: 'Normal',
        quality: 'Calidad',
        loop: 'Loop',
        start: 'Start',
        end: 'End',
        all: 'All',
        reset: 'Reset',
        disabled: 'Disabled',
        advertisement: 'Ad',
      },
      seekTime: 5,
      tooltips: {
        controls: true,
        seek: true
      },
      controls: [
        'play-large',
        'play',
        seekControls && 'rewind',
        seekControls && 'fast-forward',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'airplay',
        'fullscreen',
      ],
      loop: { active: loop },
      captions: { active: true, update: true, language: 'es' },
      settings: ['quality'],
    });

    setPlayer(playerRef.current);

    if (!HLS.isSupported()) {
      video.src = source;
    } else {
      const hls = new HLS();
      hls.loadSource(source);
      hls.attachMedia(video);
      window.hls = hls;

      const { wrapper, container } = playerRef.current.elements;
      // Tap Support
      if (container) {
        if (!container._clickListener) {
          container._clickListener = (event) => {
            const targets = [container, wrapper];
            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            }
            if (playerRef.current.touch) playerRef.current.togglePlay();
          };
          container.addEventListener('click', container._clickListener);
        }
      }

    }
    const container: HTMLElement = wrapperRef.current;
    const controls = container.getElementsByClassName('plyr__controls')[0];
    controls.insertAdjacentHTML(
      'afterend',
      `
      <div class="plyr__extra_controls">
        <div id="plyr__portal" class="plyr__portal"></div>
      </div>
    `,
    );

    if (showBackButton) {
      router.prefetch(backButtonLink);
      const controls = container.getElementsByClassName('plyr__portal')[0];
      controls.insertAdjacentHTML(
        'afterend',
        `<button class="back-to-season">
          <img src="/images/icon-arrow-back.svg" />
          <span>${backButtonText}</span>
         </button>`,
      );
      const backToButton = container.getElementsByClassName('back-to-season')[0];
      backToButton.addEventListener('click', () => router.push(backButtonLink));
    }


    const handleOnClickDashboard = () => {
      const click = new Audio('/audios/actions/click_1.mp3');
      click.play();
      playerRef.current.pause();
      onClickDashboard()
    }



    if (showDashboard) {
      const controls = container.getElementsByClassName('plyr__portal')[0];
      controls.insertAdjacentHTML(
        'afterend',
        `<div class="link-to-dashboard" title="Ir al dashboard">
        <img src="/images/season2/icon-dashboard2.svg" />
        </div>`,
      );
      const linkToDashboard = container.getElementsByClassName('link-to-dashboard')[0];
      linkToDashboard.addEventListener('click', handleOnClickDashboard);
    }

    const handleOnClickDashboardLineal = () => {
      playerRef.current.pause();
      onClickDashboardLineal()
    }

    if (showDashboardLineal) {
      const controls = container.getElementsByClassName('plyr__portal')[0];
      controls.insertAdjacentHTML(
        'afterend',
        `<div class="link-to-dashboard-lineal" title="Ir al dashboard">
        <img src="/images/season3/icon-dashboard.svg" />
        </div>`,
      );
      const linkToDashboardLineal = container.getElementsByClassName('link-to-dashboard-lineal')[0];
      linkToDashboardLineal.addEventListener('click', handleOnClickDashboardLineal);
    }

    const menuControl = container.querySelector('.plyr__volume');
    menuControl.insertAdjacentHTML(
      'afterend',
      `<button class="plyr__controls__item plyr__control" data-plyr="chapters">${chapterButtonName}</button>`,
    );

    //Add SVG custom to play
    const customIconPlay = container.querySelector('.plyr__control--overlaid svg');
    const newIcons = document.getElementById("play-custom");

    if (!newIcons) {
      customIconPlay.insertAdjacentHTML(
        'afterend',
        `<svg id="play-custom" width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4983_4236)">
      <path d="M34.011 19.4349V97.1736L97.1737 58.3043L34.011 19.4349Z" stroke="white" stroke-width="2.50525" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_4983_4236">
      <rect width="116.608" height="116.608" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
      <svg id="pause-custom" width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6323_5051)">
      <rect x="34" y="19" width="23" height="79" stroke="white" stroke-width="2"/>
      <rect x="34" y="19" width="23" height="79" stroke="white" stroke-width="2"/>
      <rect x="74" y="19" width="23" height="79" stroke="white" stroke-width="2"/>
      </g>
      <defs>
      <clipPath id="clip0_6323_5051">
      <rect width="116.608" height="116.608" fill="white"/>
      </clipPath>
      </defs>
      </svg>`
        ,
      );
    }

  }, []);

  // TAP IOs
  React.useEffect(() => {
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && videoRef && videoRef.current) {
      videoRef.current.addEventListener('click', playerRef.current.togglePlay);
    }
    return () => {
      if (isIOS && videoRef && videoRef.current) {
        videoRef.current.removeEventListener('click', playerRef.current.togglePlay);
      }
    }
  }, [videoRef.current]);

  React.useEffect(() => {
    const portal = document.getElementById('plyr__portal');
    if (portal) {
      ReactDOM.render(children, portal);
    }
  }, [children]);

  React.useEffect(() => {
    if (muted) {
      videoRef.current.muted = true;
    }
    else {
      videoRef.current.muted = false;
    }
  }, [muted, videoRef.current]);





  React.useEffect(() => {
    const container: HTMLElement = wrapperRef.current;
    const playControl = container.querySelector('[data-plyr="play"]');
    playControl.insertAdjacentHTML(
      'afterend',
      `
        ${showPrevButton
        ? `<button class="plyr__controls__item plyr__control back" data-plyr="back" title="Anterior">
            <svg width="23" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m0 8 9.75-6.928v13.856L0 8ZM10 8l9.75-6.928v13.856L10 8Z" fill="#fff"/>
            </svg>        
          </button>`
        : ''
      } 
        ${showNextButton
        ? `<button class="plyr__controls__item plyr__control next" data-plyr="next" title="Siguiente">
            <svg width="23" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m23 8-9.75 6.928V1.072L23 8ZM13 8l-9.75 6.928V1.072L13 8Z" fill="#fff"/>
            </svg>
          </button>`
        : ''
      } 
      `,
    );
  }, [showPrevButton, showNextButton]);

  React.useEffect(() => {
    const container: HTMLElement = wrapperRef.current;
    if (title) {
      const controls = container.getElementsByClassName('plyr__portal')[0];
      controls.insertAdjacentHTML('afterend', `<h2 class="plyr__portal__title">${title}</h2>`);
    }
  }, [title]);

  React.useEffect(() => {
    if (videoRef.current && onVideoEnded) {
      videoRef.current.onended = onVideoEnded;
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.onended = undefined;
      }
    };
  }, [onVideoEnded]);

  React.useEffect(() => {
    if (playerRef.current) {
      playerRef.current.on('controlsshown', onControlsShown);
      playerRef.current.on('controlshidden', onControlsHidden);
      playerRef.current.on('playing', onVideoPlaying);
      playerRef.current.on('pause', onVideoPause);
    }
  }, [onControlsShown, onControlsHidden, onVideoPause, onVideoPlaying]);

  return (
    <VideoPlayerWrapper ref={wrapperRef}>
      <video
        ref={videoRef}
        controls
        crossOrigin="true"
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        playsInline
      >
        <track
          kind="captions"
          label=
          {
            router.locale === "en" ?
              "English" :
              "Spanish"
          }
          srcLang={
            router.locale === "en" ?
              "en" :
              "es"
          }

          src={
            router.locale === "en" ?
              '/subs/' + subtitle + '-en.vtt' :
              '/subs/' + subtitle + '.vtt'
          }
          default>
        </track>

      </video>
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;
