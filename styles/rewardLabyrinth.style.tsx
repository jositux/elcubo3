import { createGlobalStyle } from 'styled-components';

export const RewardLabyrinthStyles = createGlobalStyle`

body {
    font-family: Inter;
}

.header-top {
    -moz-animation: fadein 3s;
    /* Firefox */
    -webkit-animation: fadein 3s;
    /* Safari and Chrome */
    -o-animation: fadein 3s;
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

.left,
.right {
    width: 50%;
    float: left;
}

.right {
    text-align: center;
}

.right img {
    width: 90%;
}

/* button */

.cover-link a {
    padding: 3px 10px 0px 30px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    float: left;
    margin-top: 30px;
    margin-bottom: 30px;
}

.cover-link a span {
    font-size: 20px;
    line-height: 2em;
    float: left;
}

.cover-link a img {
    margin-left: 10px;
    margin-top: 3px;
}

.copy button img {
    float: right;
    margin-left: 10px;
}

.button-cyan {
    background-color: rgb(69, 180, 193);
    color: rgb(26, 40, 57);
}

.button-cyan:hover {
    background-color: #56EBFD;
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

.pane a.close {
    cursor: pointer;
    padding: 20px;
    float: right;
    position: absolute;
    right: 0;
    z-index: 100;
}

/* button back */
.cover-link-back {
    width: 365px;
    margin: auto;
    margin-left: 0;
}
.cover-link-back a {
    padding: 3px 30px 3px 0px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    float: left;
    margin-bottom: 40px;
}

.cover-link-back a:hover {
    background: #56EBFD;
}

.cover-link-back a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
}

.cover-link-back a img {
    margin-left: 10px;
    margin-top: 3px;
    margin-right: 5px;
    float: left;
}




@media (max-width: 860px) {
    .cover-link,
    .cover-link-back {
        width: 100%;
    }

    .cover-link a span,
    .cover-link-back a span {
        font-size: 16px;
    }

    .cover-link a {
        padding: 3px 10px 5px 30px;
        margin-right: 20px;
        margin-top: 0;
    }

    .cover-link a img,
    .cover-link-back a img {
        width: 25px;
    }
}

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
    -webkit-animation: fadein 1s;
    -o-animation: fadein 1s;
}

.pane.is-hidden .plyr__control--overlaid,
.pane.is-hidden .plyr__controls,
.pane.is-hidden .plyr_title {
    display: none !important;
}

.plyr__menu {
    display: none !important;
}

.hide {
    display: none;
}

@media screen and (max-width: 1300px) {
    .app-elcubo.recompensa {
        max-width: 80vw;
    }
    .left,
    .right {
        width: 100%;
    }
    .right img {
        width: 100%;
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

.pane-video .plyr audio,
.pane-video .plyr iframe,
.pane-video .plyr video {
    height: 100vh;
    width: 100%;
}

.pane-video .plyr video {
    object-fit: cover;
}

.pane-video .plyr__video-wrapper {
    height: 100vh;
}

@media (min-width: 1024px) {
    .pane-video .plyr--video .plyr__controls {
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

@media screen and (max-width: 1200px) {
    .steal_title, .plyr_title {
        font-size: 22px;
        left: 20px;
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

.pane-video .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(#45b4c1, 0.5);
}

.pane-video .plyr__menu__container .plyr__control[role='menuitemradio'][aria-checked='true']::before {
    background: #45b4c1;
}
`;
