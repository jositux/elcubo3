import { createGlobalStyle } from 'styled-components';

export const PersonajesGlobalStyle = createGlobalStyle`

body {
    font-family: Inter;
}

footer {
    font-family: 'Dosis';
}

.header-top {
    width: 100%;
}

.logo-elcubo {
    margin: auto;
    z-index: 13;
}

.logo--image {
    width: 60px;
    height: auto;
    position: absolute;
    top: 120px;
    left: 40px;
    z-index: 13;
}

.characters .parent {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    float: left;
    display: flex;
}

.characters.hide {
    display: none;
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

/* Page characters */

.characters-wrapper {
    height: 100vh;
    position: relative;
    z-index: 1;
}

.characters-wrapper .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.characters-wrapper .row.row-first {
    height: 100vh;
}

.characters .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    width: 16.67%;
}

.characters .parent .child {
    background-color: black;
    cursor: pointer;
}

.characters .parent .child img.img-bn {
    position: absolute;
    top: 10vh;
    width: 100%;
    z-index: 1;
}

.characters .parent .child img.img-color {
    position: absolute;
    top: 10vh;
    width: 100%;
    z-index: 0;
}

.characters .parent:hover .child img.img-color,
.characters .parent:focus .child img.img-color,
.characters .parent .child.is-selected img.img-color {
    z-index: 1;
}

.characters .icon-selected {
    display: none;
    width: 30px;
    height: auto;
    position: absolute;
    z-index: 2;
    bottom: 400px;
    left: 45%;
}

.characters .is-selected .icon-selected {
    display: block;
}

.characters .name {
    display: none;
    font-size: 30px;
    font-family: 'Inter';
    color: #45B4C1;
    text-align: center;
    margin: auto;
    position: absolute;
    left: 0;
    bottom: 350px;
    right: 0;
    text-decoration: none;
    z-index: 2;
}

.characters .is-selected .name {
    display: block;
    color: white;
}

.characters .projectButton {
    display: none;
    font-family: 'Inter';
    font-size: 13px;
    color: #45B4C1;
    text-align: center;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 300px;
    cursor: pointer;
    border: 2px solid #45B4C1;
    padding: 5px;
    width: 130px;
    border-radius: 30px;
    text-decoration: none;
    z-index: 2;
}

.characters .parent:hover .child,
.characters .parent:focus .child {
    -ms-transform: scale(1.06);
    -moz-transform: scale(1.06);
    -webkit-transform: scale(1.06);
    -o-transform: scale(1.06);
    transform: scale(1.06);
}

.characters .parent .child.is-selected {
    -ms-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);
}

.characters .parent .child.is-selected .name {
    font-size: 1.5em;
}

.characters .parent:hover a,
.characters .parent:focus a {
    display: block;
}

.characters .parent:hover .name,
.characters .parent:focus .playButton {
    display: block;
}

/* Pane Slide */

.characters .pane {
    position: fixed;
    top: 0;
    z-index: 10001;
    right: -50%;
    height: 100vh;
    width: 30%;
    background: black;
    -webkit-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    -moz-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
    transition: 0.5s all ease;
    overflow: hidden;
}

.characters .pane-cover {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    background: black;
    opacity: 0.3;
}

.characters .pane-cover.visible {
    display: flex;
    z-index: 10000;
}

.fake-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
}

.fake-cover.visible {
    display: flex;
    z-index: 10000;
}

.characters .pane video {
    width: 100%;
    margin-top: -80px;
}

.characters .pane-content {
    text-align: center;
    font-family: 'Inter';
    color: white;
    position: absolute;
    top: 50vh;
    z-index: 99;
    width: 100%;
}

.characters .pane h2 {
    font-family: 'Inter';
    font-size: 30px;
    text-transform: capitalize;
    color: #45B4C1 !important;
    margin: 0;
}

.characters .pane-content a {
    width: 60px;
    border-radius: 30px;
    line-height: 1.2;
    padding: 10px 20px 12px 20px;
    background: #45B4C1;
    color: #1A2839;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.3;
    font-size: 18px;
}

.characters .pane-content a:hover {
    background: #56EBFD;
}

.characters .pane a.close {
    cursor: pointer;
    padding: 20px;
    float: left;
}

.characters .pane-video {
    overflow: hidden;
    clear: both;
}

.characters .bg-video {
    position: absolute;
    width: 100%;
    height: 90vh;
    z-index: 20;
}

.characters .pane-content a:hover {
    cursor: pointer;
}

.characters .pane p {
    font-size: 16px;
    line-height: 1.4;
    padding: 10px 40px 20px 40px;
    margin: 0;
}

.characters .pane.open {
    right: 0vw;
    z-index: 10001;
}

/* hide menu */

.characters .selector-mode {
    width: 100%;
    position: absolute;
    bottom: 0px;
    z-index: 10;
    transition: 2s all ease;
    opacity: 1;
}

.characters .selector-mode.is-hidden {
    display: block;
    opacity: 0;
    z-index: 0;
}

.characters .selector-cover {
    width: 600px;
    margin: auto;
}

.characters .selector-cover img,
.characters .selector-cover ul {
    float: left;
}

.characters .selector-cover ul {
    /*opacity: 0;*/
    color: #45B4C1;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    list-style-type: none;
    transition: 0.5s all ease;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    width: 100%;
}

/*
.characters .selector-cover:hover ul {
    opacity: 1;
}*/

.characters .selector-cover ul li {
    font-size: 20px;
    line-height: 1.3em;
    margin-bottom: 10px;
    float: left;
    text-align: center;
    width: 33.33%;
}

.characters .selector-cover ul li a {
    color: #45B4C1;
    text-decoration: none;
    font-size: 20px;
}

.characters .selector-cover ul li:hover,
.characters .selector-cover ul li:hover a {
    color: white;
}

.characters .selector-cover ul li:nth-child(1) img {
    margin-top: 7px;
    margin-right: 10px;
}

.characters .selector-cover ul li:nth-child(2) img {
    margin-top: 3px;
    margin-right: 10px;
}

.characters .selector-cover ul li:nth-child(3) img {
    margin-top: 3px;
    margin-right: 10px;
    margin-left: 8px;
}

.characters .selector-cover img {
    margin-left: 0px;
    margin-top: 20px;
}

.characters .selector-mode.selector-mobile {
    display: none;
}

/* Cube */
#mainDiv {
    width: 60px;
    height: 60px;
    margin: 0px auto 40px auto;
    perspective: 150px;
}

#left img {
    width: 100%;
    height: 100%;
    margin: auto;
}

#boxDiv {
    width: 60px;   
    transform-style: preserve-3d; 
    animation: rotate 5s linear infinite;
}

#boxDiv div {
    position: absolute;
    width: 59px;
    height: 59px;
    opacity: 0.8;
    color: white;
}

#front {
    transform: translateZ(30px);
    background:#45B4C1;
    /*background-image: url(http://i72.photobucket.com/albums/i189/MrMagic13/a_logo_white2.png);*/
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid black;
}


#back {
    transform: rotateY(180deg) translateZ(30px);
    background: #45B4C1;
    /*background-image: url(http://i72.photobucket.com/albums/i189/MrMagic13/a_logo_white2.png);
    background-position: center;*/
    background-repeat: no-repeat;  
    border: 1px solid black;
}

#left {
    transform: rotateY(-90deg) translateX(-30px);
    transform-origin: left;
    background: #45B4C1;
    /*background-image: url(http://i72.photobucket.com/albums/i189/MrMagic13/a_logo_white2.png);*/
    background-position: center;
    background-repeat: no-repeat;  
    border: 1px solid black;
    opacity: 1;
}

#right {
    transform: rotateY(90deg) translateX(30px);
    transform-origin: right;
    background: black;  
    background-image: url('https://elcubo.vercel.app/images/logo-elcubo.png');
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat; 
    border: 1px solid black;
}

#top {
    transform: rotateX(-90deg) translateY(-30px);
    transform-origin: top;
    background: #45B4C1;
    background-image: /*url(http://i72.photobucket.com/albums/i189/MrMagic13/a_logo_white2.png);*/
    background-position: center;
    background-repeat: no-repeat;  
    border: 1px solid black;
}

#bottom {
    transform: rotateX(90deg) translateY(30px);
    transform-origin: bottom;
    background: #45B4C1; 
    /*background-image: url(http://i72.photobucket.com/albums/i189/MrMagic13/a_logo_white2.png);*/
    background-position: center;
    background-repeat: no-repeat; 
    border: 1px solid black;
}

@keyframes rotate {
    0% { transform: rotateY(0); }
    100% { transform: rotateY(360deg); }
}


.shadow {
    width:100px;
    height:100px;
    background: rgba(69,180,193,0.2);
    box-shadow: 0 0 50px 50px rgba(69,180,193,0.2);
    -webkit-transform: rotateX(90deg) translateZ(-60px) rotateY(180deg) translateX(0px);
}

/* Onboard TEMP */

#hero-onboarding.is-hidden {
    opacity: 0;
    height: 0;
}

#hero-onboarding {
    height: 100vh;
    display: 1;
-webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    opacity: 1;
    background-size: cover;
}

.hero {
    /* Create grid spanning viewport width & height */
    display: grid;
    grid-template-rows: 100vh;
    overflow: hidden;
    box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.5);
}

.video-bg {
    /* Span the full grid */
    grid-area: var(--fullGrid);
    /* Re-size video to cover full screen while maintaining aspect ratio */
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    /* Display video below overlay */
    z-index: -1;
}

.video-bg::-webkit-media-controls {
    display: none !important;
}

.video-overlay {
    /* Span the full grid */
    grid-area: var(--fullGrid);
    /* Center Content */
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: left;
    background: rgba(0,0,0,.6);
}

.image-bg {
    position: absolute;
    z-index: -2;
    width: 100%;
    height: 100vh;
}

.copy-cover {
    width: 100vw;
}

.hero .copy {
    margin: 0;
    z-index: 100;
    width: 60vw;
    margin: auto;
    text-align: center;
}

.hero .copy p {
    color: white;
    font-family: Inter;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.3;
    margin-top: 35vh;
    margin-bottom: 80px;
}

.hero .copy p strong {
    font-size: 24px;
    font-weight: 600;
}

.hero-onboarding .copy .cover-link {
    width: 230px;
    margin: auto;
}
.hero-onboarding a {
    border: 1px solid #1A2839;
    color: #1A2839;
    background-color: #45B4C1;
    padding: 3px 10px 3px 30px;
    border-radius: 25px;
    font-weight: 500;
    font-family:'Inter';
    text-decoration: none;
    float: left;
}

.hero-onboarding .copy a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
}

.hero-onboarding .copy a img {
    margin-left: 10px;
    margin-top: 3px;
}



/* Reset Highlights */

button,
textarea,
input,
select,
a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media only screen and (max-width: 1024px) and (orientation: portrait) {
    body {
        width: 100vw;
        overflow: hidden;
    }

    .characters-wrapper .row.row-first {
        height: 90vh;
        margin-top: 10vh;
    }

    .characters-wrapper .row.row-first .column {
        width: 33.33%;
        flex: none;
        float: left;
        height: 42vh;
        z-index: 11;
    }
    .characters-wrapper .row.row-first .column .parent {
        height: 40vh;
        overflow: hidden;
    }

    .characters .bg-video {
        bottom: 0;
        height: 100vh;
    }
    .characters .pane a.close {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
    }
    .characters .pane-video {
        margin-top: 60px;
    }

    .characters .pane video {
        margin-top: -60px;
    }

    .characters .parent .child img.img-bn {
        top: 0px;
        position: static;
    }

    .is-selected.child img.img-bn {
        display: none;
    }

    .characters .parent .child img.img-color {
        top: 0px;
        position: static;
    }
    .characters-wrapper .row {
        display: block;
    }

    .characters .selector-cover {
        width: 100% !important;
    }
    
    .characters .selector-mode.is-hidden {
        z-index: -2;
        transition: 1s all ease;
        opacity: 0;
    }


    .characters .selector-cover ul {
        width: 92%;
        margin: auto;
        float: none;
        margin-bottom: 10px;
    }

    .characters .selector-cover ul li {
        margin-bottom: 20px;
    }

    #mainDiv {
        margin: 0px auto 20px auto;
    }

    .characters .parent:hover .child,
    .characters .parent:focus .child {
    -ms-transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    }

    .characters .parent .child.is-selected {
        -ms-transform: scale(1);
        -moz-transform: scale(1);
        -webkit-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }

    .characters .projectButton {
        display: none;
    }

    .characters .parent:hover a,
    .characters .parent:focus a {
        display: none;
    }

    .characters .icon-selected {
        bottom: 130px;
        width: 20px;
    }


    .characters .parent .child.char-alba .name,
    .characters .parent .child.char-carey .name,
    .characters .parent .child.char-marina .name {
        bottom: 80px;
    }

    .characters .parent .child.char-alba .icon-selected,
    .characters .parent .child.char-carey .icon-selected,
    .characters .parent .child.char-marina .icon-selected {
        bottom: 60px;
    }

    .characters .parent .child.char-mercado img.img-bn,
    .characters .parent .child.char-elvira img.img-bn,
    .characters .parent .child.char-sales img.img-bn,
    .characters .parent .child.char-mercado img.img-color,
    .characters .parent .child.char-elvira img.img-color,
    .characters .parent .child.char-sales img.img-color {
        margin-top: -50px;
    }
  
    .characters .parent .child.char-elvira .name,
    .characters .parent .child.char-sales .name {
        bottom: 140px;
    }

    .characters .parent .child.char-mercado .name {
        font-size: 19px;
        bottom: 110px;
    }

    .characters .parent .child.char-elvira .icon-selected,
    .characters .parent .child.char-sales .icon-selected {
        bottom: 120px;
    }

    .characters .parent .child.char-mercado .icon-selected {
        bottom: 90px;
    }

    .input-search, #menu-mobile-button {
        display: none;
    }

    .fake-cover {
        display: none;
    }

    #hero-onboarding .copy p {
        font-size: 14px;
        margin-top: 0vh;
        margin-bottom: 40px;
    }

    .characters .selector-cover #boxDiv {
        display: none;
    }

    .characters .selector-cover ul li {
        line-height: 1.1; 
    }

    .characters .selector-cover ul li a {
        font-size: 18px; 
    }

    .selector-help-pc {
        display: none;
    }
}



@media only screen and (max-width: 1025px) and (orientation: landscape) {

    .characters .parent .child.is-selected .name {
        font-size: 16px;
    }

    .characters .parent .child img.img-bn,
    .characters .parent .child img.img-color {
        top: 20vh;
    }

    .characters .pane video {
        margin: auto;
    }

    .characters .selector-cover #mainDiv {
        display: none;
    }

    .characters .projectButton {
        display: none !important;
    }

    footer {
        display: none !important;
    }
  
}

@media only screen and (max-width: 1025px) {
    .app-elcubo #nav-login {
        right: 30px;
        top: 56px;
    }
    
}



@media only screen and (max-width: 768px) and (orientation: portrait) {
    #mainDiv {
        display: none;
    }

    .characters .pane.open {
        width: 320px;
    }
        
    .app-elcubo .help-wrapper .modal.step-l .modal__content {
        top: 160px; 
    }

}

@media only screen and (max-width: 1024px) {
    .toggle-help span {
        display: none;
    }

    .help-wrapper .nav ul {
        width: auto;
    }

    .help-wrapper .nav {
        left: 80px;
    }

    .characters .parent .child .name,
    .characters .parent .child.is-selected .name {
        font-size: 19px;
        width: 100px;
    }
}


@media only screen and (max-height: 380px) and (orientation: landscape) {
    .characters .name {
        top: 150px;  
        bottom: auto !important;
    }

    .characters .icon-selected {
        bottom: auto;
        top: 170px;  
        width: 15px;
    }
}



@media only screen and (max-height: 500px) and (orientation: landscape),
@media only screen and (max-width: 768px) and (orientation: landscape) {

    #mainDiv {
        display: none;
    }

    .characters-wrapper .row.row-first .column {
        margin-top: 25px;
    }

    .characters .parent .child img.img-bn,
    .characters .parent .child img.img-color {
        top: 10vh;
    }

    .characters .selector-mode {
        bottom: 0px;
    }

    .characters .selector-cover ul {
        margin-bottom: 10px;
    }

    .characters .pane.open {
        width: 320px;
    }

    .characters .pane-content {
        top: auto;
        bottom: 40px;
    }

    .characters .pane p {
        padding: 5px 10px 20px 10px;
        font-size: 12px;
    }

    .characters .pane video {
        margin-top: -65px;
    }

    .characters .pane h2 {
        font-size: 18px;
    }

    .characters .name {
        bottom: 34vh;
        font-size: 12px;
    }

    .characters .parent .child.is-selected .name {
        font-size: 12px;
    }
      
    .characters .projectButton {
        bottom: 45vh;
    }
  
      
    .characters .icon-selected {
        bottom: 38vh;  
        width: 15px;
    }

    .selector-help-pc,
    .projectButton {
        display: none;
    }
}

@media only screen and (max-width: 380px) and (orientation: portrait) {

    .characters .pane.open {
        width: 100%;
    }

}




/* Input search */

#cover-search {
    display: flex;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    opacity: 1;
}

#cover-search.hidden {
    display: none;
    opacity: 0;
}

#inputsearch {
    box-shadow: rgb(18, 18, 18) 0px 0px 30px 15px;
    color: rgb(255, 255, 255);
    border-radius: 30px;
    height: 3vw;
    border: 1px solid rgb(71, 70, 70);
    line-height: 34px;
    width: 40vw;
    padding: 5px 50px 10px 55px;
    outline: none;
    margin-left: 5px;
    box-sizing: border-box;
    transition: all 0.5s ease 0s;
    position: relative;
    font-family: Dosis, sans-serif;
    font-size: 2rem;
    background-color: rgb(71, 70, 70) !important;
    font-weight: 100 !important;
}

.AtSearchFocus__ContentCloseModal {
    position: absolute;
    z-index: 1;
    right: -7vw;
    top: -5vw;
    color: rgb(255, 255, 255);
    font-family: Dosis, sans-serif;
    font-size: 2rem;
    font-weight: 200 !important;
}

.AtSearchFocus__AtIconButtonCloseModal {
    position: absolute;
    left: 80px;
    top: -10px;
}

.AtSearchFocus__AtIconButtonSearchclose {
    position: absolute;
    left: 16px;
    top: 0;
    z-index: 1;
    border: none;
    background: rgba(0, 0, 0, 0);
    outline: none;
    padding: 6px;
    margin: 0px;
    cursor: pointer;
}

.AtSearchFocus__AtIconButtonSearch {
    position: absolute;
    right: 10px;
    top: 0;
    padding: 6px;
}

/* sub menu */

.visible {
    display: flex;
}

.submenu-items {
    display: block;
    position: relative;
    box-sizing: border-box;
    margin-top: 20px;
    margin-left: -10px;
    width: auto;
}

/* mobile menu */

.metismenu-container {
    list-style: none;
}

.metismenu-container .metismenu-container .metismenu-link {
    padding-left: 1em;
}

.gYZXrR {
    width: 75vw;
    height: 34px;
    border-radius: 17px;
    transition: all 1s ease 0s;
    box-shadow: rgb(0, 0, 0) 0px 0px 15px;
    margin-left: 20px;
}

.hgCave {
    display: block;
    background-color: rgb(66, 66, 66);
    width: 190px;
    height: 34px;
    border-radius: 17px;
    border: 5px solid rgb(66, 66, 66);
    box-sizing: border-box;
    overflow: hidden;
    float: left;
}

.iXlDQC {
    font-family: Dosis, sans-serif;
    color: rgb(255, 255, 255);
    display: block;
    line-height: 24px;
    font-weight: 300;
    font-size: 0.875rem;
}

.fDRKxi {
    display: block;
    background-color: rgb(66, 66, 66);
    height: 34px;
    border-radius: 17px;
    box-sizing: border-box;
    overflow: hidden;
    border: 5px solid rgb(0, 0, 0);
    width: 123px;
    float: right;
    transform: translateY(-34px);
}

.gypvI {
    position: relative;
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    border: 1px solid rgb(66, 66, 66);
    border-radius: 13px;
    box-sizing: border-box;
}

.fnsUvw {
    position: absolute;
    top: 2.5px;
    left: 8px;
    border-radius: 50%;
    border: 2px solid rgba(164, 16, 41, 0.7);
    background-color: rgba(236, 41, 75, 0.7);
    width: 17px;
    height: 17px;
    box-sizing: border-box;
}

.UGRSu {
    font-family: Dosis, sans-serif;
    color: rgb(255, 255, 255);
    display: block;
    font-weight: 300;
    line-height: 22px;
    font-size: 0.65rem;
    text-align: right;
    margin-right: 1rem;
    text-transform: uppercase;
}


@media (max-width: 1024px) and (orientation: landscape){

    #hero-onboarding .copy p {
        font-size: 18px;
    }


}

@media (max-width: 1024px) {

    #nav-login {
        right: 30px;
        top: 50px;
    }
}


@media screen and ( max-height: 700px ){

    .characters .name {
      bottom: 30vh;
    }
    .characters .projectButton {
      bottom: 42vh;
    }

    .characters .icon-selected {
        bottom: 36vh;
    }

    #boxDiv {
        display: none;
    }

  }


  @media (max-width: 540px) {

    #hero-onboarding {
        background-position: 54%;
    }
  
    .hero-onboarding .copy .cover-link {
        width: 186px;
        margin: auto;
    }

    #hero-onboarding .copy p {
        font-size: 18px;
    }
  
  }

  #nav-login {
    position: absolute;
    top: 80px;
    right: 60px;
    font-weight: 500;
    z-index: 100;
    height: 60px;
    padding-top: 30px;
    color: white;
    font-family: Inter;
  }

  #nav-login a {
    margin-left: 10px;
    color: #45B4C1;
    text-decoration: none;
  }

  #nav-login a.user-profile {
    color: white;
    text-decoration: underline;
    margin-left: 0;
  }

  // Footer
  @supports (-webkit-overflow-scrolling: touch) {
    footer ul, .gwLyLi {
    margin: 0;
  }

    footer a {
    color: white;
    }
  }
`;
