import { createGlobalStyle } from 'styled-components';

export const LabyrinthStyles = createGlobalStyle`

body {
    font-family: Inter;
}

.app-elcubo {
    animation: fadein 3s;
    -moz-animation: fadein 3s;
    /* Firefox */
    -webkit-animation: fadein 3s;
    /* Safari and Chrome */
    -o-animation: fadein 3s;
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

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.header-top {
    width: 100%;
}

.app-elcubo.laberinto {
    height: 100vh;
}

.hero-laberinto .copy {
    z-index: 1;
}

.flex-container.column {
    -webkit-flex-direction: column;
    flex-direction: column;
}

.flex-container.column .flex-item {
    height: 33.33vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Pane Slide */

.pane {
    position: fixed;
    top: 0;
    z-index: 50;
    /* left: -150%; */
    height: 100vh;
    width: 100%;
    background: black;
    /*-webkit-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    -moz-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    transition: 1.5s all ease;
    overflow: hidden;*/
}

.pane.invisible {
    animation-duration: fadeOutDisplay 2s;
    animation-iteration-count: fadeOutDisplay 1;
    /*put the default display and opacity here, the same as "0%"*/
    display: none;
    opacity: 0;
}

@keyframes fadeOutDisplay {
    0% {
        display: block;
        opacity: 1;
    }
    1% {
        display: none;
        opacity: 1;
    }
    100% {
        display: none;
        opacity: 0;
    }
}

.pane-cover {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    /*background: black;*/
    opacity: 0.3;
    z-index: 20;
}

.pane-cover.visible {
    display: flex;
}

.pane a.close {
    cursor: pointer;
    padding: 20px;
    float: right;
    position: absolute;
    right: 0;
    z-index: 100;
}

.bg-video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;
}

.pane-content a:hover {
    cursor: pointer;
}

.pane p {
    font-size: 16px;
    line-height: 1.4;
    padding: 20px 30px 40px 30px;
    margin: 0;
}

.pane.open {
    left: 0vw;
    z-index: 100;
}

/* hide menu */

.fake-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    display: none;
}

.fake-cover.visible {
    display: flex;
    z-index: 10000;
}

/* Onboard */

.pane-video {
    font-family: Inter;
    background: black;
}

.pane.is-hidden .plyr__control--overlaid,
.pane.is-hidden .plyr__controls,
.pane.is-hidden .plyr_title {
    display: none !important;
}

.plyr__menu {
    display: none !important;
}


/*
@media screen and (min-width: 1200px) {
    .pane-video {
        font-family: Inter;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        margin-top: -28.5%;
        /* video height / video width */
        padding-bottom: 56.2%;
        height: 0;
        overflow: hidden;
        background: black;
    }
}
*/

.steal_title.hide {
    display: none;
}

.steal_title,
.plyr_title {
    color: white;
    font-family: Inter;
    font-size: 2.3rem;
    letter-spacing: -1px;
    font-weight: 500;
    position: absolute;
    left: 40px;
    top: 10vh;
    z-index: 100;
    opacity: 1;
    animation: fadein 1s;
    -moz-animation: fadein 1s;
    /* Firefox */
    -webkit-animation: fadein 1s;
    /* Safari and Chrome */
    -o-animation: fadein 1s;
}

.plyr_title.hide {
    opacity: 0;
}


@media (min-width: 1024px) {
    .plyr--video .plyr__controls {
        padding-left: 30px;
        padding-right: 30px;
    }
}

/* Plyr Color */
.pane-video .plyr--full-ui input[type='range'] {
    color: #45b4c1;
  }

  .pane-video .plyr__control--overlaid {
    background: rgba(69, 180, 193, 0.5);
  }

  .pane-video .plyr--video .plyr__control.plyr__tab-focus,
  .pane-video .plyr--video .plyr__control:hover,
  .pane-video .plyr--video .plyr__control[aria-expanded='true'] {
    background: #45b4c1;
  }

  pane-video .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(#45b4c1, 0.5);
  }

  .pane-video .plyr__menu__container .plyr__control[role='menuitemradio'][aria-checked='true']::before {
    background: #45b4c1;
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

.steal.black {
    animation: fadeOut 1s;
    -moz-animation: fadeOut 1s;
    /* Firefox */
    -webkit-animation: fadeOut 1s;
    /* Safari and Chrome */
    -o-animation: fadeOut 1s;
    opacity: 0;
}

.pane-video {
    z-index: 50;
    opacity: 0;
}

.pane-video.visible {
    animation: fadeIn2 ease 5s;
    -moz-animation: fadeIn2 ease 5s;
    /* Firefox */
    -webkit-animation: fadeIn2 ease 5s;
    /* Safari and Chrome */
    -o-animation: fadeIn2 ease 5s;
    opacity: 1;
}

@keyframes fadeIn2 {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.header-top .nav {
    z-index: 20;
}

@media screen and (max-width: 1200px) {
    .header-top .nav {
        left: 15px;
        top: 15px;
    }
    .icon-replay.icon-cover,
    .icon-cover img {
        width: 42px;
    }

    .steal_title,
    .plyr_title {
        font-size: 22px;
        left: 20px;
    }
    .cover-selector .pulse-text {
        font-size: 12px;
        margin-top: 30px;
    }

    .plyr--video .plyr__controls {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 62px;
    }

}

.plyr__control--overlaid {
    background: rgb(69, 180, 193);
}

.pane-video,
.pane-video .plyr {
    height: 100vh;
}

.plyr audio,
.plyr iframe,
.plyr video {
    height: 100vh;
    width: 100vw;
}

.plyr video {
    object-fit: cover;
}

.plyr__video-wrapper {
    height: auto;
}

.icon-replay {
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
}

.icon-replay:hover {
    opacity: 1;
}

.icon-cover {
    width: 82px;
    margin: auto;
}

/* Pulse */

.cover-selector {
    position: absolute;
    width: 130px;
    margin-left: -65px;
}

.cover-pulse {
    position: absolute;
    left: 60px;
    z-index: 10;
}

.cover-selector:hover .pulse-text {
    color: white;
}

.pulse-text {
    position: absolute;
    color: #9CF5FF;
    margin-top: 40px;
    width: 100%;
    text-align: center;
}

.pulse-text.pulse-text-top {
    bottom: 10px;
}

.hero-laberinto {
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
}

.hero-laberinto .copy p {
    display: none;
}

/*
.cover-pulse:nth-child(1) {
    left: 30vw;
    bottom: 15vh;
}

.cover-pulse:nth-child(2) {
    right: 22vw;
    bottom: 15vh;
}*/

#link-next {
    opacity: 0;
    z-index: -1;
}

#link-next.selected {
    opacity: 1;
    animation: fadeInUp 2s ease-in-out 0s forwards;
    z-index: 1;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

.pulse {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 22px;
    background: #9CF5FF;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(156, 245, 255, 30);
    animation: pulse 2s infinite;
}

.cover-pulse {
    transition: transform .2s;
}

.cover-pulse:hover,
.cover-pulse.selected {
    /*animation: none;*/
    /*animation: pulse-white 1s infinite;*/
    -ms-transform: scale(2);
    /* IE 9 */
    -webkit-transform: scale(2);
    /* Safari 3-8 */
    transform: scale(2);
}

.cover-pulse:hover .pulse,
.cover-pulse.selected .pulse {
    animation: pulse-white 1s infinite;
    background: white;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(156, 245, 255, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(156, 245, 255, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(156, 245, 255, 0);
    }
}

@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(156, 245, 255, 0.4);
        box-shadow: 0 0 0 0 rgba(156, 245, 255, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 80px rgba(156, 245, 255, 0);
        box-shadow: 0 0 0 80px rgba(156, 245, 255, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(156, 245, 255, 0);
        box-shadow: 0 0 0 0 rgba(156, 245, 255, 0);
    }
}

@-webkit-keyframes pulse-white {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

@keyframes pulse-white {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 80px rgba(255, 255, 255, 0);
        box-shadow: 0 0 0 80px rgba(255, 255, 255, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

.pane-cover-comments {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: none;
    z-index: -2;
    background: rgba(0, 0, 0, .6);
}

.pane-cover-comments.visible {
    display: flex;
    z-index: 100;
}

.pane-comments {
    position: fixed;
    top: 0;
    right: -125vw;
    padding: 1rem 2rem;
    height: 100vh;
    width: 360px;
    background: white;
    -webkit-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    -moz-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    transition: 1s all ease;
    overflow-y: scroll;
    z-index: 110;
}

.pane-comments.open {
    right: 0vw;
    z-index: 110;
}

.pane-comments a:hover {
    cursor: pointer;
}

.close-comments {
    position: absolute;
    left: 10px;
    top: 10px;
}

.pane-comments .intro {
    margin-top: 32px;
    font-family: Inter;
    font-size: 14px;
    padding: 8px;
}

iframe ._2pi8 {
    padding: 0 !important;
}

.marker {
    width: 5px;
    height: 20px;
    position: absolute;
    background: yellow;
    top: 0;
}

/* Spinner */

.comments-bullet {
    position: absolute;
    right: 80px;
    top: 20vh;
    cursor: pointer;
    opacity: 0;
    z-index: -100;
}

.comments-bullet.visible {
    z-index: 100;
    opacity: 1;
    animation: fadein 1s;
    -moz-animation: fadein 1s;
    /* Firefox */
    -webkit-animation: fadein 1s;
    /* Safari and Chrome */
    -o-animation: fadein 1s;
    /* Opera */
}

.comments-bullet p {
    color: white;
    position: absolute;
    top: 60px;
    left: 20px;
    padding: 0;
}

.spinner {
    position: absolute;
    width: 80px;
    text-align: center;
    right: 18px;
    top: 45px;
}

.spinner>div {
    width: 8px;
    height: 8px;
    margin: 3px;
    background-color: white;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

/* Button Reward */

.cover-reward {
    position: absolute;
    left: 38%;
    bottom: 25%;
}

.button-cyan {
    background-color: rgb(69, 180, 193);
    color: rgb(26, 40, 57);
}

.button-cyan:hover {
    background-color: rgb(83, 235, 253);
}

.cover-link a {
    border: 1px solid rgb(26, 40, 57);
    padding: 3px 10px 3px 18px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    float: left;
}

.cover-link a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
    letter-spacing: 0.3px;
}

.cover-link a img {
    margin-left: 5px;
    margin-top: 3px;
}



@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0)
    }
    40% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

.hide {
    display: none;
}

.copy-cover {
    /* Span the full grid */
    grid-area: var(--fullGrid);
    /* Center Content */
    display: grid;
    justify-content: center;
    align-content: center;
    /*background: rgba(0, 0, 0, 0.6);*/
}


.fb-comments iframe { 
    width: 100% !important; 
}

@media screen and (max-width: 1200px) {
    .header-top .nav {
        left: 15px;
        top: 15px;
    }
    .steal_title, .plyr_title {
        font-size: 22px;
        left: 20px;
    }

    .plyr--video .plyr__controls {
        padding-left: 10px;
        padding-right: 10px;
    }
}

@media only screen and (max-width: 1024px) and (orientation: landscape) {
    .plyr .plyr__video-wrapper  video {
        height: 100vh;
    }
}



@media only screen and (max-width: 480px) and (orientation: portrait) {
    .close-comments {
        left: unset;
        right: 10px;
    }

    .plyr video {
        object-fit: contain;
    }

    .cover-link a span {
        font-size: 14px;
    }

    .cover-link a img {
        width: 25px;
    }

    .cover-reward {
        bottom: 35%;
    }

    .cover-reward .cover-link {
        padding: 0;
    }

    .cover-reward .cover-link a {
        padding-left: 10px;
        padding-right: 3px;
    }

    .plyr--video .plyr__controls {
        padding-bottom: 82px;
    }
}


/* Custom Node End for Characters */

/* Alba */
.node_6438 .cover-reward {
    left: 5%;
}

/* Carey */
.node_6503 .cover-reward {
    left: 55%;
}

/* Marina */
.node_6471  .cover-reward,
.node_6472  .cover-reward {
    left: 49.5%;
}

/* ELvira */
.node_6450 .cover-reward {
    left: 60%;
}

/* Mercado */
.node_6518 .cover-reward {
    left: 20%;
    bottom: 30%;
}

/* Sales */
.node_6481 .cover-reward {
    right: 18%;
    left: unset;
}

/* Labyrinth Custom Node Dots Mobile */ 

@media only screen and (max-width: 1024px) and (orientation: landscape) {
    
    /* Marina 3 dot Mercado */
    .node_6452 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    }

    /* Marina 11 dot Marina */
    .node_6459 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    }

    /* Marina 17 dot Mercado */
    .node_6466 .cover-selector:nth-child(3) {
        bottom: 25vh !important;
    }


    /* Carey 1 dot Marina */
    .node_6488 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    } 

    /* Carey 13 dot Mercado */
    .node_6501 .cover-selector:nth-child(3) {
        bottom: 25vh !important;
    }

    /* Carey 14 text back to characters */
    .node_6502 .back-to-season span {
        display: none;
    }

    /* Elvira 5 dot Elvira */
    .node_6443 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    }

    /* Elvira 9 dot Mercado */
    .node_6447 .cover-selector:nth-child(3) {
        bottom: 25vh !important;
    }

    /* Elvira 10 text back to characters  */
    .node_6448 .back-to-season span {
        display: none;
    }

    /* Mercado 1+2 dot Marina */
    .node_6504 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    } 

    /* Mercado 3 dot Mercado */
    .node_6505 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    } 

    /* Mercado 3 dot Mercado */
    .node_6505 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    } 

    /* Mercado 4 dot Mercado */
    .node_6507 .cover-selector:nth-child(3) {
        bottom: 25vh !important;
    }

    /* Mercado 10 dot Mercado */
    .node_6510 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    }

    /* Mercado 13 dot Marina */
    .node_6513 .cover-selector:nth-child(2) {
        bottom: 25vh !important;
    }

    /* Mercado Reward */
    .node_6518 .cover-reward {
        bottom: 10%;
    }

    /* Sales Reward */
    .node_6481 .cover-reward {
        bottom: 10%;
    }

    /* Text back to characters  */
    .nav a.back-to-season span {
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

/* Hide Fullscreen */
.plyr__controls__item[data-plyr="fullscreen"] {
    display: none;
}

/* Hide cursor */
.plyr--hide-controls {
    cursor:none !important; 
}

`;
