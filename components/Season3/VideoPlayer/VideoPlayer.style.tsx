import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto Condensed", sans-serif;

  .back-to-season {
    position: absolute;
    top: 50px;
    left: 80px;
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
      margin-left: 10px;
      opacity: 0;
      transition: opacity 0.5s ease;
      will-change: opacity;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 16px;
      font-weight: 500;

    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }

  .link-to-dashboard, .link-to-dashboard-lineal {
    position: absolute;
    z-index: 100;
    top: 30px;
    right: 30px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .link-to-dashboard-lineal { 
    right: 20px;
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
    font-family: "Roboto Serif", serif;
    font-size: 3rem;
    font-weight: 500;
    position: absolute;
    left: 90px;
    top: 80px;
    z-index: 100;
    margin-top: 0;
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


.marker {
  top: -40px;
  position: absolute;
  z-index: 10;
  img {
    display: none;
  }
}


.marker::before {
  content: "";
  width: 15px;
  height: 15px;
  margin-top: 6px;
  left: -7px;
  border-radius: 50%;
  background: #787878;
  position: absolute;
  opacity: 1;
}



.marker span {
  margin-left: 70px;
  position: absolute;
  animation: fadeIn 5s;
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

.plyr__progress .plyr__tooltip {
  display: none;
}

`;
