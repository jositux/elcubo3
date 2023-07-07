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
    top: 30px;
    left: 30px;
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

    @media screen and (max-width: 1024px) {
      top: 20px;
      left: 20px;
    }

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
    right: 35px;

    @media screen and (max-width: 1024px) {
      top: 0px;
      right: 30px;
    }

    img, .internall {
      width: 40px;
      height: 40px;
    }
    .internall {
      img:first-child {
        display: block;
      }
      img:nth-child(2) {
        display: none;
      }
    }

    .internall.active, .internall:hover {
      img:first-child {
        display: none;
      }
      img:nth-child(2) {
        display: block;
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
    font-size: 3rem;
    font-weight: 500;
    position: absolute;
    left: 40px;
    top: 70px;
    z-index: 100;
    margin-top: 0;

    @media screen and (max-width: 1024px) {
      font-size: 2rem;
      top: 60px;
      left: 30px;
    }
  }

  .plyr {
    height: 100vh;
}

.plyr video {
    object-fit: cover;
}

.plyr--video .plyr__controls {
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 30px;
}

.plyr__video-wrapper {
    height: 100vh !important;
}

/* Hide cursor */
.plyr--hide-controls {
  cursor:none !important;
}

@media screen and (max-width: 1024px) {
  .plyr--video .plyr__controls {
    padding-bottom: 62px;
    padding-left: 30px;
    padding-right: 30px;
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
  cursor: pointer;
  top: -20px;
  position: absolute;
  z-index: 10;
  img {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    top: -12px;
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

.marker:hover::before {
  background: white;
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


.coverBG {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,.3);
}

.plyr--hide-controls {
  .coverBG {
   display: none;
  }
}


.tooltip {
  background: white;
  &:hover {
    background: #E2B857;
  }
  padding: 7px;
  height: 0;
  border-radius: 100%;
  cursor: pointer;
  float: left;
  margin-left: -6px;
  @media screen and (max-width: 1024px) {
    padding: 5px;
    margin-left: -4px;
  }
}

.tooltip:after, .tooltip:before {
  opacity: 0;
  pointer-events: none;
  bottom: 100%;
  left: 50%;
  position: absolute;
  z-index: 10;
  transform: translate(-50%, 10px);
  transform-origin: top;
  transition: all 0.18s ease-out 0.18s; }

.tooltip:after {
width: 280px;
//background-color: rgba(0,0,0,.5);
//box-shadow: 0 0 0px #ddd;
content: attr(data-tooltip);
padding: 5px;
white-space: wrap;
margin-bottom: 11px; 
line-height: 1.2rem;
font-weight: 400;
text-shadow: 1px 1px 2px black;
}

.tooltip:before {
width: 0;
height: 0;
content: "";
margin-bottom: 6px; }

.tooltip:hover:before,
.tooltip:hover:after {
opacity: 1;
pointer-events: auto;
transform: translate(-50%, 0); }

/*
[data-tooltip-pos="up"]:before {
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 6px solid #f5f5f5;
margin-bottom: 6px; }*/

[data-tooltip-pos="down"]:before {
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-bottom: 6px solid #f5f5f5;
margin-top: 6px; }

[data-tooltip-pos="right"]:before {
border-top: 6px solid transparent;
border-right: 6px solid #f5f5f5;
border-bottom: 6px solid transparent;
margin-left: 6px; }

[data-tooltip-pos="left"]:before {
border-top: 6px solid transparent;
border-left: 6px solid #f5f5f5;
border-bottom: 6px solid transparent;
margin-right: 6px; }

[data-tooltip-pos="down"]:before,
[data-tooltip-pos="down"]:after {
bottom: auto;
left: 50%;
top: 100%;
transform: translate(-50%, -10px); }

[data-tooltip-pos="down"]:after {
margin-top: 11px; }

[data-tooltip-pos="down"]:hover:before,
[data-tooltip-pos="down"]:hover:after {
transform: translate(-50%, 0); }

[data-tooltip-pos="left"]:before,
[data-tooltip-pos="left"]:after {
bottom: auto;
left: auto;
right: 100%;
top: 50%;
transform: translate(10px, -50%); }

[data-tooltip-pos="left"]:after {
margin-right: 11px; }

[data-tooltip-pos="left"]:hover:before,
[data-tooltip-pos="left"]:hover:after {
transform: translate(0, -50%); }

[data-tooltip-pos="right"]:before,
[data-tooltip-pos="right"]:after {
bottom: auto;
left: 100%;
top: 50%;
transform: translate(-10px, -50%); }

[data-tooltip-pos="right"]:after {
margin-left: 11px; }

[data-tooltip-pos="right"]:hover:before,
[data-tooltip-pos="right"]:hover:after {
transform: translate(0, -50%); }

[data-tooltip-length]:after {
white-space: normal; }

[data-tooltip-length="small"]:after {
width: 80px; }

[data-tooltip-length="medium"]:after {
width: 150px; }

[data-tooltip-length="large"]:after {
width: 260px; }

[data-tooltip-length="fit"]:after {
width: 100%; }

.plyr__captions {
  font-size: 2.3vw;
  font-family: Arial;
  padding-bottom: 4.5%;
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

#plyr__portal {
  background: rgba(0,0,0,.5);
  width: 380px;
  height: 240px;
  position: absolute;
  right: 35px;
  top: 80px;
  direction: unset;
  float: left;
  z-index: 100;
  padding-top: 30px;
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s linear, visibility 0s linear .4s;

  @media screen and (max-width: 1024px) {
    top: 80px;
    right: 35px;
    padding-top: 15px;
    height: 200px;
  }
}

#plyr__portal.active {
  opacity: 1;
  visibility: visible;
  transition: opacity .4s linear, visibility 0s linear;
}

`;
