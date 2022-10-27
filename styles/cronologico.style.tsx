import { createGlobalStyle } from 'styled-components';

export const ElcuboGlobalStyles = createGlobalStyle`

body {
    opacity: 1;
    transition: 0.7s opacity;
    font-family: Inter;
}

body.fade {
    opacity: 0;
    transition: none;
}

a ol li {
    color: white;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Bitter';
}

h1 {
    font-size: calc(1.4em + 2.5vw);
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #fff;
    text-shadow: 0.05em 0.05em 0.05em rgba(0, 0, 0, 0.4);
}

h2 {
    font-size: calc(3em + 0.2vw);
    font-weight: 600;
    text-align: center;
    margin: 1.2em 0;
    color: #111;
}

.app-elcubo p {
    font-family: 'Inter';
    font-size: calc(2em + 0.2vw);
    font-weight: 400;
    line-height: 2;
    color: white;
}

::-moz-selection {
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
}

::selection {
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
}

/* Custom */

.app-elcubo nav a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    margin-left: 30px;
}


.steal {
    position: absolute;
    z-index: 10;
    height: 100vh;
    width: 100%;
}

.steal img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.steal_title {
    color: white;
    font-family: Inter;
    font-size: 2.3rem;
    letter-spacing: -1px;
    font-weight: 500;
    position: absolute;
    left: 20px;
    top: 10vh;
    z-index: 100;
    // display: none;
    margin: 0;
}

.plyr__menu {
    display: none !important;
}

  /* Cronologia */

  /*
  .app-elcubo {
      height: 100vh;
      overflow: hidden;
  }
  */


  @media (max-width: 540px) {

    .plyr__controls__item.plyr__menu {
        display: none;
    }

    .plyr__portal__title {
        top: 10vh !important;
    }

    .pane-chrono-mobile.open {
        width: 85% !important;
    }

  }

  @media (max-width: 1200px) {
    .back-to-season {
        left: 15px !important;
    }

    .pane.pane-chrono-mobile {
        -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
    }
  }
  

  .plyr__control--overlaid.hide;
  .plyr__controls.hide,
  .plyr__extra_controls.hide {
      display: none;
  }


  .plyr__video-wrapper,
  .plyr video {
      padding: 0;
      height: 100vh;
  }


  @media (min-width: 1024px) {
    .plyr--video .plyr__controls {
        padding-left: 30px;
        padding-right: 30px;
    }

    .plyr__video-wrapper,
    .plyr video {
        padding: 0;
        height: 100vh;
    }

  }


  @media (max-width: 1024px) {

    #nav-login {
        right: 30px;
        top: 50px;
    }

    .back-to-season {
        padding: 0 !important;
    }

    #audio-player-container.audio-season {
        top: 120px;
    }

    .plyr__portal__title, .steal_title {
        font-size: 18px !important;
    }

    .pane-chrono-mobile {
        padding-top: 0 !important;
    }

    .pane-chrono-mobile.open {
        width: 45%;
    }

    .close-chrono-mobile {
        position: absolute;
        z-index: 100;
    }
    .close-chrono-mobile img {
        margin-top: 20px;
    }
  
    .chrono-list {
        display: none;
    }

    .pane-chrono-mobile .chrono-list {
        display: block;
        margin-top: -
    }

    .pane-chrono-mobile ul {
        height: 72vh;
        overflow-y: scroll;
    }

    .plyr__portal__title {
        top: 20vh !important;
    }

    .plyr__video-wrapper,
    .plyr video {
        padding: 0;
        height: unset;
    }

    .pane-chrono-mobile h2, 
    .pane-chrono-mobile ul {
        width: 280px !important;
    }

    .pane-chrono-mobile .line-right {
        right: 24px;
    }


    .plyr--video .plyr__controls {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 62px;
    }
  }


  @media (max-width: 480px) and (orientation: portrait){

    .plyr--video .plyr__controls {
        padding-bottom: 82px;
    }

    .back-to-season span {
        display: none;
    }

  }


  /* FadeIn Chrono */
  .app-elcubo {
    animation: fadein 3s;
    -moz-animation: fadein 3s;
    /* Firefox */
    -webkit-animation: fadein 3s;
    /* Safari and Chrome */
    -o-animation: fadein 3s;
    /* Opera */
  }
  
  
  .plyr__extra_controls,  .plyr__control--overlaid {
    animation: fadein 4s;
    -moz-animation: fadein 4s;
    /* Firefox */
    -webkit-animation: fadein 4s;
    /* Safari and Chrome */
    -o-animation: fadein 4s;
    /* Opera */
  }
  
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }

  @media only screen and (min-width: 1024px) {
    .toggle-chrono-mobile {
    display: none;
    }
  }

  // Only for iOS
  @supports (-webkit-overflow-scrolling: touch) {
    .plyr__controls__item[data-plyr="airplay"],
    .plyr__controls__item[data-plyr="captions"],
    .plyr__controls__item[data-plyr="fullscreen"] {
        display: none;
    } 
  }

  /* Hide cursor */
  .plyr--hide-controls {
      cursor:none !important;
    }
  

`;
