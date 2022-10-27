import { createGlobalStyle } from 'styled-components';

export const RewardCronoStyles = createGlobalStyle`

body {
    font-family: Inter;
}

.header-top {
display: block !important;
}

.app-elcubo.recompensa {
    max-width: 75vw;
    margin: auto;
    margin-top: 30vh;
    position: relative;
    z-index: 1;
    animation: fadein 3s;
    -moz-animation: fadein 3s;
    /* Firefox */
    -webkit-animation: fadein 3s;
    /* Safari and Chrome */
    -o-animation: fadein 3s;
    /* Opera */
}

@media screen and (min-width: 1600px) {
    .app-elcubo.recompensa {
        max-width: 60vw;
    }
}

.bg-recompensa {
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    animation: fadein 2s;
    -moz-animation: fadein 2s;
    /* Firefox */
    -webkit-animation: fadein 2s;
    /* Safari and Chrome */
    -o-animation: fadein 2s;
    /* Opera */
}

.title-recompensa {
    color: white;
    font-family: Inter;
    font-size: 2.3rem;
    letter-spacing: -1px;
    font-weight: 600;
    opacity: 1;
    animation: fadein 1s;
    -moz-animation: fadein 1s;
    /* Firefox */
    -webkit-animation: fadein 1s;
    /* Safari and Chrome */
    -o-animation: fadein 1s;
}

.desc-recompensa {
    letter-spacing: -0.3px;
    font-size: 18px;
    line-height: 26px;
}

.recompensa ul {
    margin: 0;
    padding: 0;
    float: left;
    list-style-type: none;
    margin-bottom: 40px;
    margin-top: 80px;
}

.recompensa ul li div {
    width: 12.5%;
    float: left;
    text-align: center;
}

.recompensa ul li div:first-child {
    width: 25%;
    text-align: left;
}

.recompensa ul li p {
    color: white;
    margin-left: 15px;
}

.li-characters img {
    width: 80%;
    margin: auto;
    border-radius: 20px;
}

.li-characters p {
    font-size: 20px;
    letter-spacing: -1px;
}

.date {
    font-size: 14px;
}

.li-characters h2 {
    font-size: 20px;
    letter-spacing: -1px;
    font-weight: 300;
    margin-top: 5px;
    margin-bottom: 30px;
}

.li-videos {
    float: left;
    width: 100%;
}

.li-videos div {
    padding-top: 10px;
    padding-bottom: 8px;
}

.li-videos.odd {
    background: rgba(60, 82, 92, .3);
}

.li-videos div:first-child span {
    margin-left: 15px;
}

/* Hover */

.li-videos div {
    position: relative;
}

.li-videos div:not(:first-child) {
    height: 22px;
    overflow: hidden;
}

.li-videos div:not(:first-child):hover {
    cursor: pointer;
}

.li-videos div:not(:first-child):hover span {
    opacity: 1;
    transform: translate(-50%, -100%);
}

.li-videos div:not(:first-child) span {
    position: absolute;
    width: 100%;
    color: #131B1E;
    text-align: center;
    left: 50%;
    top: 100%;
    opacity: 0;
    padding: .95em;
    background-color: #45B4C1;
    font-size: 14px;
    line-height: 1;
    white-space: nowrap;
    transform: translate(-50%, 1em);
    transition: all .2s ease-in-out;
}

@media screen and (max-width: 1300px) {
    .app-elcubo.recompensa {
        max-width: 80vw;
    }
    .li-videos div:first-child span {
        font-size: 12px;
    }
}

@media screen and (max-width: 960px) {
    .li-characters img {
        border-radius: 50%;
    }
    .li-characters h2 {
        font-size: 13px;
    }
    .app-elcubo.recompensa {
        max-width: 80vw;
        overflow: hidden;
    }
    .recompensa ul li div:first-child {
        width: 100%;
        text-align: center;
    }

    .recompensa ul li p,
    .li-videos div:first-child span {
        margin-left: 0;
    }
    .recompensa ul li div:not(:first-child) {
        width: 16.66%;
    }
    .li-videos.odd {
        margin-bottom: 0px;
    }

    .title-recompensa {
        font-size: 24px;
    }

    .chrono-list h2 {
        font-size: 20px;
    }
}

@media screen and (max-width: 380px) {

    ul.list-chrono a span.circle {
        margin-right: 10px;
    }

    ul.list-chrono li {
        line-height: 1.8;
        font-size: 14px;
    }

}

/* Animation */

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-moz-keyframes fadein {
    /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-o-keyframes fadein {
    /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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

.pane-video {
    font-family: Inter;
    background: black;
}

.pane.is-hidden .plyr__control--overlaid,
.pane.is-hidden .plyr__controls,
.pane.is-hidden .plyr_title {
    display: none !important;
}


.steal_title.hide,
.plyr_title.hide {
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

.plyr__menu {
    display: none !important;
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

.pane-video {
    z-index: 50;
    /*opacity: 0;*/
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
    z-index: 999;
}

@media screen and (max-width: 1200px) {
    .header-top .nav {
        left: 15px;
    }
    .icon-replay.icon-cover,
    .icon-cover img {
        width: 42px;
    }
    .steal {
        position: absolute;
        left: -15%;
        width: 130%;
    }
    .steal_title,
    .plyr_title {
        font-size: 22px;
        left: 20px;
    }
    .pulse-text {
        font-size: 12px;
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
    width: 100%;
}

.plyr video {
    object-fit: cover;
}

.plyr__video-wrapper {
    height: auto !important;
}

.icon-replay {
    cursor: pointer;
    opacity: 0.3;
}

.icon-replay:hover {
    opacity: 1;
}

.icon-cover {
    width: 82px;
    margin: auto;
}

.hide {
    display: none;
}

/* List videos */

.content-no-viewed,
.content-viewed {
    width: 100%;
    float: left;
    margin-bottom: 40px;
}

.chrono-list {
    float: left;
    position: relative;
}

.line-right {
    position: absolute;
    width: 1px;
    opacity: 0.4;
    height: 100%;
    left: 4px;
}

/* Menu Cronologia */

ul.list-chrono {
    list-style-type: none;
    margin: 0;
    margin: 20px 0 80px 0;
}

ul.list-chrono li {
    line-height: 1.5;
    font-size: 16px;
    text-align: left;
}

ul.list-chrono a img {
    width: 170px;
    border-radius: 8px;
    position: absolute;
    right: -190px;
    top: -35px;
    z-index: 2;
    opacity: 0;
    transition: .2s;
}

ul.list-chrono a {
    color: #45B4C1;
    text-decoration: none;
    position: relative;
    font-weight: 500;
}

ul.list-chrono a span {
    position: relative;
    z-index: 5;
    transition: .2s;
}

ul.list-chrono a:hover img {
    transition: .2s;
    opacity: 1;
}

ul.list-chrono a:hover,
ul.list-chrono a.active {
    color: white;
}

ul.list-chrono a img:hover {
    opacity: 0;
}

ul.list-chrono a span.circle {
    width: 10px;
    height: 10px;
    float: left;
    margin-right: 30px;
    margin-top: 8px;
    border-radius: 50%;
    background: #45B4C1;
}

ul.list-chrono a:hover span.circle,
ul.list-chrono a.active span.circle {
    background: white;
}

ul.list-chrono.height-big li {
    line-height: 6;
}

ul.list-chrono.height-big li span.circle {
    margin-top: 42px;
}

ul.list-chrono.height-medium li {
    line-height: 4;
}

ul.list-chrono.height-medium li span.circle {
    margin-top: 26px;
}

/* button */
.cover-link {
    width: 365px;
    margin: auto;
}
.cover-link a {
    padding: 3px 30px 3px 0px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    float: left;
    margin-top: 30px;
    margin-bottom: 30px;
}

.cover-link a:hover {
    background: #56EBFD;
}

.cover-link a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
}

.cover-link a img {
    margin-left: 10px;
    margin-top: 3px;
    margin-right: 5px;
    float: left;
}

.copy button img {
    float: right;
    margin-left: 10px;
}

.button-cyan {
    background-color: rgb(69, 180, 193);
    color: rgb(26, 40, 57);
}

@media (max-width: 860px) {

    .cover-link {
        width: 250px;
        text-align: center;
    }
    .cover-link a span {
        font-size: 16px;
    }

    .cover-link a img {
        width: 25px;
    }
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

@media (min-width: 1024px) {
    .plyr--video .plyr__controls {
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media (max-width: 1024px) {
    .app-elcubo.recompensa {
        margin-top: 20vh;
    }

    .recompensa ul {
        margin-top: 0;
    }

}


@media only screen and (max-width: 1024px) and (orientation: landscape) {
    .plyr .plyr__video-wrapper  video {
        height: 100vh;
    }

    
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

.reward-loading {
    opacity: .5;
}

@media only screen and (max-width: 480px) and (orientation: portrait) {
    .close-comments {
        left: unset;
        right: 10px;
    }

    ul.list-chrono a span.circle {
        margin-right: 10px;
    }

    .plyr video {
        object-fit: contain;
    }

    .plyr--video .plyr__controls {
        padding-bottom: 82px;
    }

    .reward-loading {
        width: 100%;
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


`;
