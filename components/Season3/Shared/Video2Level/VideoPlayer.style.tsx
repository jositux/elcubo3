import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial;

  .back-to-season {
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: 10;
    opacity: 1;
    transition: all 0.3s ease;
    will-change: opacity;
    outline: none;

    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    & span {
      color: white;
      margin-left: 5px;
      opacity: 0;
      transition: opacity 0.5s ease;
      will-change: opacity;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
  
  &.in-fullscreen {
    .back-to-season {
      top: 30px;
    }
  }

  .plyr--video {
    overflow: hidden !important;

    &.plyr--hide-controls {
      .plyr__extra_controls {
        opacity: 0;
      }
    }

    .plyr__control[data-plyr='chapters'] {
      display: none;
    }
  }

  .plyr--full-ui input[type='range'] {
    color: #E2B857;
  }

  /* Custom play */
  
  .hide-controls .plyr--video .plyr__controls {
    opacity: 0 !important;
  }

  .plyr__control--overlaid {
    background: transparent;
    width: 116px;
    height: 116px;
  }

  .plyr__control--overlaid svg:first-child {
    display: none;
  }

  .plyr__control--overlaid svg {
    color: transparent;
    width: 86px;
    height: 86px;
    -webkit-tap-highlight-color: transparent;
  }

  .plyr__control--overlaid svg:hover {
    color: white;
  }

  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded='true'] {
    background: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(#45b4c1, 0.5);
  }

  .plyr__portal__title {
    color: white;
    text-shadow: 1px 1px 20px black;
    font-family: "Roboto Serif", serif;
    font-size: 2.3rem;
    letter-spacing: -1px;
    font-weight: 500;
    position: absolute;
    left: 35px;
    top: 20px;
    z-index: 100;
    margin: 0;
  }

  .plyr {
    height: 100vh;
}

.plyr video {
    object-fit: cover;
}

.plyr__video-wrapper {
    height: 100vh !important;
}

/* Hide cursor */
.plyr--hide-controls {
  cursor:none !important;
}

.plyr--video .plyr__controls {
  padding: 35px 30px;
}

@media screen and (max-width: 1200px) {
  .plyr--video .plyr__controls {
    padding-bottom: 62px;
  }
}


.plyr--paused {
  .plyr__control--overlaid {
    opacity: 0;
    -webkit-animation: fadeout 1.5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadeout 1.5s; /* Firefox < 16 */
        -ms-animation: fadeout 1.5s; /* Internet Explorer */
         -o-animation: fadeout 1.5s; /* Opera < 12.1 */
            animation: fadeout 1.5s;
  }

  #play-custom {
    display: none;
  }
}

.plyr--playing {
  .plyr__control--overlaid {
    opacity: 1;
  }

  #pause-custom {
    display: none;
  }
  #play-custom {
    display: block;
  }
}

/* Rewind Forward Icons */
.plyr__controls__item[data-plyr='rewind'],
.plyr__controls__item[data-plyr='rewind']:hover {
  background: url(/images/season2/icon-rewind.svg) no-repeat center;
  background-size: 80%;
}

.plyr__controls__item[data-plyr='fast-forward'],
.plyr__controls__item[data-plyr='fast-forward']:hover {
  background: url(/images/season2/icon-forward.svg) no-repeat center;
  background-size: 80%;
}

.plyr__controls__item[data-plyr='rewind'] svg,
.plyr__controls__item[data-plyr='fast-forward'] svg {
  opacity: 0;
}

@keyframes fadeout {
  from { opacity: 1; }
  to   { opacity: 0; }
}


.interactive-video .plyr {
  height: calc(100vh - 50px);
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.marker:hover span {
  opacity: 1;
}

/*
.plyr__progress input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  opacity: 0; 
}*/

.plyr__progress__buffer {
  z-index: 0 ;
}

.plyr__captions {
  font-size: 2.3vw;
  font-family: Arial;
  padding-bottom: 5%;
  max-width: 90vw;
  left: auto;
  right: auto;
  line-height: 1.3;
  background: transparent;
}

.plyr__captions .plyr__caption {
  line-height: 1.3;
  background: transparent;
  text-shadow: rgba(0, 0, 0, 1) 0em 0em .2em !important;
}

`;
