import { createGlobalStyle } from 'styled-components';

export const ReflexiveStyles = createGlobalStyle`

body {
    font-family: Inter;
}

#body {
    height: 100vh;
    background-image: linear-gradient(to bottom, #1C1C1C 0px, #1C1C1C 20%, #1C1C1C 20%, #1C1C1C 30%, #000000 100%);
    background-position: 0px 0px;
    background-repeat: no-repeat;
}

.app-elcubo.reflexivo {
    height: 100vh;
}

:root {
    /* Full grid area variable */
    --fullGrid: 1 / 1 / -1 / -1;
}

.app-elcubo {
    animation: fadein 2s;
    -moz-animation: fadein 2s;
    /* Firefox */
    -webkit-animation: fadein 2s;
    /* Safari and Chrome */
    -o-animation: fadein 2s;
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



.characters {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    float: left;
    display: flex;
}

.characters-wrapper {
    width: 100%;
    height: 450px;
    margin: auto;
    transition: all 1s ease;
}

.characters .child {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all 1.5s;
    -moz-transition: all 1.5s;
    -o-transition: all 1.5s;
    transition: all 1.5s;
}

/* Selectors Scenes */
.is-viewed .characters-wrapper {
    height: 650px;
}

.characters-wrapper .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.row.row-cero {
    color: white;
    width: 100%;
    text-align: center;
    letter-spacing: -0.8px;
}

.is-viewed .row.row-cero {
    opacity: 0;
}


/* 1 Column */
.columns-1 .row.row-first {
    width: 341px;
    margin: auto;
    z-index: 2;
    position: relative;
}


/* 2 Column */
.columns-2 .row.row-first {
    width: 682px;
    margin: auto;
}

.columns-2 .row-first .column {
    width: 50%;
}


/* 3 Column */
.columns-3 .row.row-first {
    width: 1024px;
    margin: auto;
}

.columns-3 .row-first .column {
    width: 33.33%;
}


.row.row-first .parent {
    height: 463px;
    position: relative;
    z-index: 0;
}

.row.row-first .parent.focus {
    z-index: 10;
}

.characters-wrapper .row.row-second {
    height: 30vh;
}

.characters .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
}

.child {
    /*background-color: black;*/
    cursor: pointer;
}

img.img-bn {
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: 0;
}

img.img-bn,
.parent:hover .child.selected img.img-bn {
    z-index: 1;
}

.child.selected img.img-color,
.parent:hover .child.selected img.img-color {
    z-index: 0;
}

img.img-color {
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: 1;
}

.parent:hover .child img.img-color,
.parent:focus .child img.img-color {
    z-index: 1;
}

.icon-selected {
    display: none;
    width: 30px;
    height: auto;
    position: absolute;
    z-index: 2;
    top: 45%;
    left: 48%;
}

.selected .icon-selected {
    display: block;
}

.parent:hover .child.selected .icon-selected {
    display: none;
}

.actions {
    display: none;
    font-size: 22px;
    font-family: 'Inter';
    font-weight: 200;
    color: white;
    text-align: center;
    margin: auto;
    position: absolute;
    left: 0;
    top: 40%;
    right: 0;
    text-decoration: none;
    z-index: 2;
}

.actions h2 {
    font-size: 22px;
    letter-spacing: -1px;
    font-weight: 500;
    padding: 0 20px;
}

.is-selected .actions {
    display: block;
    color: white;
}

.icon-cover img {
    width: 70px;
}

.icon-replay,
.parent:hover .child.selected .icon-play {
    display: none;
}

.parent:hover .child.selected .icon-replay {
    display: block;
}

.parent:hover .child,
.parent:focus .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.child.is-selected {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}

.parent:hover a,
.parent:focus a {
    display: block;
}

.parent:hover .actions,
.parent:focus .playButton {
    display: block;
}

/* Pane Slide */

.pane {
    position: fixed;
    top: 0;
    z-index: 50;
    height: 100vh;
    width: 100%;
    background: black;
    display: none;
}

/*
.pane-cover {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
   
    opacity: 0.3;
    z-index: 20;
}*/

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

.pane.open {
    z-index: 100;
    display: flex;
}

.hide {
    display: none;
}

/* hide menu */

.fake-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    display: none;
}

/*
.fake-cover.visible {
    display: flex;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.6);
}

.columns-1 .fake-cover {
    display: flex;
    z-index: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 1;
    position: absolute;
    top: 0;
}*/

.questions .copy {
    margin: 0;
    z-index: 100;
    width: 65vw;
    margin: auto;
    text-align: center;
    font-family: 'Inter';
    color: white;
    font-weight: normal;
    font-size: 26px;
    letter-spacing: -1px;
}

.row-second ul {
    opacity: 0;
    color: #45B4C1;
    font-family: 'Inter';
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 20px;
    list-style-type: none;
    transition: 0.5s all ease;
}

.row-second ul {
    opacity: 1;
}
.row-second ul li {
    line-height: 1.3em;
    margin-bottom: 10px;
    border-top: 2px solid rgba(148, 151, 152, 0.2);
    padding-top: 10px;
    text-align: center;
}

.li-questions li:hover,
.li-questions li.selected {
    border-top: 2px solid rgb(69, 180, 193);
    cursor: pointer;
}

.row-second ul li a {
    color: #45B4C1;
    text-decoration: none;
    width: 100%;
    font-weight: normal;
    text-align: center;
}

.row-second ul li:nth-child(1) img {
    margin-top: 7px;
    margin-right: 10px;
}

.row-second ul li:nth-child(2) img {
    margin-top: 3px;
    margin-right: 10px;
}

.row-second ul li:nth-child(3) img {
    margin-top: 3px;
    margin-right: 10px;
    margin-left: 8px;
}

.row-second img {
    margin-left: 0px;
    margin-top: 20px;
}

.row-second {
    opacity: 0;
    z-index: -100;
}

.row-second.visible {
    z-index: 1;
}

.row-second.visible {
    opacity: 1;
    animation: fadeInUp 2s ease-in-out 0s forwards;
    z-index: 1;
}

.li-questions.li-2 {
    width: 600px;
    margin: auto;
}

.questions-2.li-2 li {
    width: 50%;
    float: left;
    text-align: center;
}


/* Pane video */
.pane-video {
    width: 100%;
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

.plyr audio,
.plyr iframe,
.plyr video {
    height: 100vh;
    width: 100%;
}

.plyr video {
    object-fit: cover;
}

.plyr__video-wrapper {
    height: 100vh;
}

@media (min-width: 1024px) {
    .plyr--video .plyr__controls {
        padding-left: 30px;
        padding-right: 30px;
    }
}

/* Plyr Color */

.plyr--full-ui input[type='range'] {
    color: #45b4c1;
  }

  .plyr__control--overlaid {
    background: rgba(69, 180, 193, 0.5);
  }

  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded='true'] {
    background: #45b4c1;
  }

  .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(#45b4c1, 0.5);
  }

  .plyr__menu__container .plyr__control[role='menuitemradio'][aria-checked='true']::before {
    background: #45b4c1;
  }

  .plyr__menu {
      display: none !important;
  }


.steal {
    position: absolute;
    z-index: 160;
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
    z-index: 161;
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

/* progress */
.center {
    text-align: center;
    display: block;
    margin: 40px 0 40px 0;
    margin-top: -62px;
    z-index: 1;
}

.center.hide {
    display: none;
}

.center.progress-1,
.center.progress-2 {
    display: none;
}

.columns-1 .progress-bar {
    margin-top: 40px;
    display: block;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    height: 2px;
    background: gray;
    overflow: hidden;
    float: none;
}

.progress-bar {
    margin-top: 40px;
    display: block;
    width: 100%;
    margin-right: 1%;
    float: left;
    height: 2px;
    background: gray;
    overflow: hidden;
}

.progress-bar .progress {
    width: 0;
    background: #A6E276;
    height: 100%;
}

.li-2 li {
    width: 50%;
    float: left;
}

.li-3 li {
    width: 33.33%;
    float: left;
}

.li-4 li {
    width: 25%;
    float: left;
}

.li-5 li {
    width: 20%;
    float: left;
}

.li-6 li {
    width: 16.66%;
    float: left;
}

/* Last Node */

.last-node h1.copy {
    padding: 0 20px;
    width: 100%;
}

.last-node h1 {
    font-size: 38px;
    line-height: 1.2;
    font-weight: 400;
    width: 100%;
    color: white;
    margin-bottom: 10px;
}

.last-node p {
    margin: 0;
}

.last-node .li-questions {
    color: white;
}

.copy .cover-link {
    width: 240px;
    margin: auto;
    margin-top: 20px;
}

.cover-link a {
    border: 1px solid rgb(26,40,57);
    padding: 3px 10px 3px 18px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    -webkit-text-decoration: none;
    text-decoration: none;
    float: left;
}

.button-cyan {
    background-color: rgb(69,180,193);
    color: rgb(26,40,57);
}

.button-cyan:hover {
    background: #56EBFD;    
}

.cover-link a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
    -webkit-letter-spacing: 0.3px;
    -moz-letter-spacing: 0.3px;
    -ms-letter-spacing: 0.3px;
    letter-spacing: 0.3px;
}

.cover-link a img {
    margin-left: 10px;
    margin-top: 3px;
}

/* mobile */

@media screen and (max-width: 1200px) {
    .header-top .nav, .nav {
        left: 15px;
        top: 15px;
        position: fixed;
    }
    .steal_title, .plyr_title {
        font-size: 22px;
        left: 20px;
        padding-right: 20px;
        line-height: 1.4;
    }

    .plyr--video .plyr__controls {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 62px;
    }

}

@media screen and (max-width: 1025px) and (orientation: landscape) {

    .app-elcubo.reflexivo {
        min-height: 110vh;
        height: auto;
        background-size: cover !important;
    }

    .characters {
        height: auto;
    }

    .columns-3 .characters-wrapper .row.row-first {
        width: 600px;
        margin-top: 5vh;
    }

    .columns-3 .characters-wrapper .row.row-first .parent {
        height: 270px;
    }

    .questions .copy-cover .copy {
        font-size: 16px;
    }

    .characters-wrapper,
    .is-viewed .characters-wrapper {
        min-height: 110vh;
        height: auto;
    }

}


@media screen and (max-height: 650px) and (min-width: 860px) {
    .columns-3 .characters-wrapper .row.row-first {
        width: 700px;
    }
    .columns-3 .characters-wrapper .row.row-first .parent {
        height: 310px;
    }

    .columns-2 .characters-wrapper .row.row-first {
        width: 466px;
        margin-top: 5vh;
    }

    .columns-2 .characters-wrapper .row.row-first .parent {
        height: 310px;
        margin-top: 5vh;
    }

    .columns-1 .characters-wrapper .row.row-first {
        width: 233px;
    }

    .columns-1 .characters-wrapper .row.row-first .parent {
        height: 310px;
        margin-top: 5vh;
    }

    .actions {
        top: 45%;
    }  

    .actions h2 {
        font-size: 20px;
    }

    .icon-cover img {
        width: 50px;
    }

    .icon-selected {
        left: 45%;
    }
}

@media screen and (max-width: 860px) and (orientation: landscape) {

    .row.row-cero {
        margin-top: 20px;
    }

    .columns-3 .characters-wrapper .row.row-first {
        width: 400px;
        margin-top: 0vh;
    }

    .columns-2 .characters-wrapper .row.row-first {
        width: 266px;
        height: 200px;
        margin-top: 0vh;
    }

    .columns-2 .center {
        margin-top: -44px;
    }

    .columns-1 .characters-wrapper .row.row-first {
        width: 133px;
        margin-top: 0vh;
    }

    .columns-1  .characters-wrapper .row.row-first .parent,
    .columns-2  .characters-wrapper .row.row-first .parent,
    .columns-3  .characters-wrapper .row.row-first .parent {
        height: 190px;
    }

    .columns-3 .center {
        margin-top: -46px;
    }

    .icon-selected {
        width: 18px;
        top: 50%;
        left: 45%;
    }

    .row-second ul {
        font-size: 16px;
    }

    .last-node h1 {
        font-size: 20px;
    }

    .characters-wrapper .actions h2 {
        font-size: 10px;
    }

    .characters-wrapper .actions .icon-cover img {
        width: 40px;
    }

}

@media screen and (max-width: 1025px) and (orientation: portrait) {

    .plyr video {
        object-fit: contain;
    }

    .characters-wrapper {
        padding: 0 20px;
    }

    .columns-2 .row.row-first,
    .columns-3 .row.row-first {
        width: 100%;
    }


    .columns-1 .characters-wrapper .row.row-first .parent {
        height: 440px;
    }

    .last-node h1 {
        font-size: 20px;
    }

    .last-node h1.copy {
        padding: 0;
    }

}

@media screen and (max-width: 480px) and (orientation: portrait) {

    .characters-wrapper {
        padding: 0 20px;
        height: 250px;
    }
    
    .is-viewed .characters-wrapper {
        height: unset;
    }

    .row.row-cero {
        font-size: 12px;
    }

    .columns-1 .characters-wrapper .row.row-first {
        width: 166px;
    }

    .columns-1 .characters-wrapper .row.row-first .parent {
        height: 230px;
    }

    .columns-3 .characters-wrapper .row.row-first .parent {
        height: 175px;
    }

    .columns-2 .characters-wrapper .row.row-first {
        width: 280px;
    }

    .columns-2 .characters-wrapper .row.row-first .parent {
        height: 200px;
    }

    .columns-2 .center {
        margin-top: -46px;
    }

    .row-second ul {
        width: 100%;
    }

    .icon-selected {
        width: 20px;
        top: 50%;
        left: 45%;
    }

    .characters-wrapper .actions {
        top: 40%;
    }

    .characters-wrapper .actions .icon-cover img {
        width: 40px;
    }

    .characters-wrapper .actions h2 {
        margin-top: 0;
        font-size: 9px;
    }

    .characters-wrapper .li-questions.li-2 {
        width: 94%;
    }

    .characters-wrapper .row-second ul {
        font-size: 14px;
    }

    .plyr--video .plyr__controls {
        padding-bottom: 82px;
    }

}


@media screen and (max-width: 1025px) {

    .questions .copy {
        font-size: 18px;
        width: 98%;
    }

    .columns-3 .row.row-first {
        width: 100%;
        margin-top: 0;
    }

    .columns-3 .row.row-first .parent {
        height: 200px;
    }
    .columns-2  .row.row-firs {
        width: 100%;
    }

    .actions {
        display: block;
        top: 45%;
    }

    .actions h2 {
        font-size: 14px;
        padding: 0 10px;
    }

    .actions .icon-cover img {
        width: 50px;
    }

    .selected .actions {
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
