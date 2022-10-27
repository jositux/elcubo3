import { createGlobalStyle } from 'styled-components';

export const RootReflexiveStyles = createGlobalStyle`

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
    color: #636363;
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
    top: 180px;
    right: 0;
    text-decoration: none;
    z-index: 2;
}

.actions h2 {
    font-size: 22px;
    letter-spacing: -1px;
    font-weight: 500;
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
    width: 80vw;
    margin: auto;
    text-align: center;
    font-family: 'Inter';
    color: white;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: -1px;
}

.row-second ul {
    opacity: 0;
    color: #45B4C1;
    font-family: 'Inter';
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 18px;
    list-style-type: none;
    transition: 0.5s all ease;
}

.row-second ul {
    opacity: 1;
}
.row-second ul li {
    line-height: 1.3em;
    margin-bottom: 10px;
    border-bottom: 2px solid rgba(148, 151, 152, 0.2);
    padding-bottom: 10px;
    text-align: center;
}

.li-questions li:hover,
.li-questions li.selected {
    border-bottom: 2px solid rgb(69, 180, 193);
    cursor: pointer;
}

.row-second ul li a {
    color: #45B4C1;
    text-decoration: none;
    width: 100%;
    font-weight: normal;
    text-align: center;
}

.row-second ul li:hover,
.row-second ul li:hover a {
    color: white;
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

.row-second .cover-link {
    display: none;
}


.questions-2 ul {
    width: 60%;
    margin: auto;
}

.questions-2 li {
    width: 50%;
    float: left;
    text-align: center;
}


/* Pane video */
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
    height: auto !important;
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

@media (max-width: 1024px) {
    .plyr--video .plyr__controls {
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 62px;
    }
}

.steal {
    position: absolute;
    z-index: 10;
    left: -15%;
    width: 130%;
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



@media screen and (max-width: 1024px) {

    .columns-1 .row.row-first {
        width: 60%;
        margin-top: 5vh;
    }

    .columns-1 .row.row-first .parent {
        height: 250px;
    }

    .questions-2 ul {
        width: 100%;
    }
}

`;
