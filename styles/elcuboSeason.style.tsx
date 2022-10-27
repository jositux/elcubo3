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

.header-top {
    width: 100%;
}

.logo-elcubo {
    margin: auto;
    z-index: 11;
}

.nav {
    position: absolute;
    right: 50px;
    z-index: 10;
}

.logo--image {
    width: 150px;
    height: auto;
    position: fixed;
    top: 120px;
    left: 40px;
    z-index: 14;
}

.header-temporal.scrolled .logo--image {
    z-index: 11;
}

.logo-season .logo--image {
    /*width: 60px;*/
    height: auto;
    position: absolute;
    top: 120px;
    left: 40px;
    z-index: 13;
}

.hero {
    /* Create grid spanning viewport width & height */
    display: grid;
    grid-template-rows: 100vh;
    overflow: hidden;
}

.row-description {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.video-bg {
    /* Span the full grid */
    grid-area: var(--fullGrid);
    /* Re-size video to cover full screen while maintaining aspect ratio */
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
    /* Display video below overlay */
    z-index: 1;
}

.video-bg-mobile {
    grid-area: var(--fullGrid);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: 0;
    position: absolute;
}

#hero-3 .video-bg {
    width: 100%;
    height: auto;
    min-height: auto;
    object-fit: contain;
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

.copy,
.copy-final {
    font-weight: 400;
    text-align: left;
    line-height: 0.8;
}

.cyan-light {
    color: #45b4c1;
}

.cyan-strong {
    color: #3b99a6;
}

.copy-cover {
    position: relative;
    width: 950px;
    margin: auto;
    /* height: 200px;*/
}


.paragraph-message {
    width: 500px;
}

.paragraph-message hr {
    float: left;
    width: 125px;
    height: 7px;
    background: #45b4c1;
    border: 0;
    margin-bottom: 20px;
}

.paragraph-message p {
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 1px;
    float: left;
    clear: both;
    width: 100%;
}


/* Hide Cookies */
.app__CookieAlert {
    color: #ffffff;
    text-align: center;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -ms-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    opacity: 1;
    display: none;
}

.app__CookieAlert.hidden {
    opacity: 0;
    display: none;
}


/* Logo animation */
.logo--image {
    opacity: 0;
    animation: fadeInLogo 1s ease-in both;
}

.logo--image {
    animation-delay: 0s;
}

@keyframes fadeInLogo {
    from {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

/* video hide animation */
@keyframes hideVideo {
    0% {
        opacity: 1;
    }
    66% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes hideVideo {
    0% {
        opacity: 1;
    }
    66% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

#hero-3 video.hide {
    -webkit-animation: 11s ease 0s normal forwards 1 hideVideo;
    animation: 11s ease 0s normal forwards 1 hideVideo;
}


/* Animation Hero Season */
#hero-3 .cover-first {
    width: 800px;
    margin-left: 0;
}

#hero-3 .img-bg-pc {
    opacity: 1;
}

#hero-3 .img-bg-pc {
    animation-delay: 10s;
}

.cover-second h1 {
    margin-bottom: 20px;
}

.hero-3 .third {
    font-size: 1.8rem;
    font-style: italic;
    font-weight: normal;
}

#hero-3 .cover-second {
    opacity: 0;
    margin-left: 30px;
}

#hero-3 h1 span.second {
    margin-top: 20px;
}

#hero-3 .paragraph-message {
    opacity: 0;
    margin-left: 30px;
}

#hero-3 .paragraph-message {
    width: 780px;
}

.paragraph-message a {
    text-decoration: none;
}

.button-mobile {
    animation: fadeInPhrase 1.5s ease-in both;
    animation-delay: 2s;
}

#hero-3 .paragraph-message-1.active-fadein {
    animation: fadeInPhrase 1.5s ease-in both;
    animation-delay: 1s;
}

#hero-3 .paragraph-message-2.active-fadein {
    animation: fadeInPhrase 1.5s ease-in both;
    animation-delay: 2s;
}

#hero-3 .credits.active-fadein {
    animation: fadeInPhrase 1.5s ease-in both;
    animation-delay: 2s;
}

/* Credits */

#hero-3 .credits {
    width: 780px;
    float: left;
    margin-left: 30px;
    font-family: 'Bitter';
    letter-spacing: .79px;
}

.credits .intro {
    font-size: 16px;
    font-family: 'Bitter';
    width: 100%;
    text-align: center;
    line-height: 2;
    margin-top: 40px;
}

.credits .intro strong {
    font-size: 18px;
    width: 100%;
}

.credits .credits-row-1 img {
    margin-top: 15px;
}

.credits-row {
    width: 100%;
    float: left;
    font-size: 13px;
    line-height: 1.8;
    font-weight: 300;
}

.credits-row .column-left,
.credits-row .column-right {
    width: 50%;
    float: left;
    font-size: 13px;
}

.credits-row strong {
    width: 100%;
    float: left;
    font-size: 14px;
    margin-top: 40px;
}

.credits-row-2 strong {
    margin-top: 40px;
}

.credits-row-2 p {
    font-size: 13px;
    font-family: 'Bitter';
}

.credits-row-2 .column-left p {
    padding-right: 10px;
}

.credits-rtvc {
    margin-top: 40px;
}

.credits-rtvc {
    width: 100px;
}

.credits-row-2 strong.credits-year {
    margin-top: 0;
}

.logo_india {
    width: 200px;
}

.credits-mintic-p {
    font-family: 'Dosis';
    line-height: 1.2em;
    font-size: 15px;
    font-weight: 400;
    float: left;
    margin-top: 40px;
}
img.credits-mintic {
    width: 240px;
}


/* Cursor */

#mouse-circle {
    position: absolute;
    width: 18px;
    height: 18px;
    margin: -9px 0px 0px -9px;
    border-radius: 0%;
    background: cyan;
    box-shadow: 0 0 16px rgba(255, 255, 255, 0);
    transition: width 0.5s, height 0.5s, margin 0.5s;
    overflow: hidden;
    z-index: 14;
}


#mouse-circle span {
    display: none;
}

#mouse-circle.big {
    width: 90px;
    height: 90px;
    margin: -3rem 0px 0px -3rem;
    cursor: pointer !important;
}

#mouse-circle.big span {
    display: block;
    text-align: center;
    transition: display 0.5s;
}

#mouse-circle.big span a {
    color: #1a2839;
    font-weight: 500;
    padding-top: 30px;
    padding-bottom: 30px;
    float: left;
    text-decoration: none;
    font-size: 12px;
}

.is-hidden {
    display: none;
    transition: display 0.5s;
}

/* Page 2 */
.hero-3 {
    grid-template-rows: auto;
    padding-bottom: 200px;
}

.hero-3 .first {
    font-size: 3rem;
    margin-bottom: 20px;
    float: left;
    clear: both;
    width: 100%;
}

.hero-3 .arrow-down {
    display: none;
}

.hero-3 .paragraph-message {
    width: 640px;
}

.hero-3 .paragraph-message p {
    font-family: 'Bitter';
    font-weight: 100;
    font-size: 18px;
}

.paragraph-message strong {
    font-weight: 600;
}


.hero-3 .paragraph-message em {
    color: white;
}

.hero-3 ol {
    font-family: 'Bitter';
    font-weight: 100;
    font-size: 18px;
    margin-top: 20px;
    padding-left: 18px;
    margin-bottom: 50px;
}

.hero-3 ol li {
    line-height: 1.6em;
    font-size: 18px;
}

.hero-3 .paragraph-message p {
    line-height: 1.6;
}

.hero-3 .paragraph-message strong em {
    color: white;
}

.hero-3 .copy-cover-2.cover-first {
    margin-top: 340px;
}

.hero-3 .copy-cover-2 h1 {
    margin: 0;
    float: left;
    width: 100%;
}

.hero-3 .copy-cover-2 h1 span {
    margin-bottom: 0;
}

.hero-3 .copy-cover-2 .cover-reveal-row-1:nth-child(3) {
    margin-top: -20px;
    font-weight: 300;
}

.hero-3 .copy-cover-2 .cover-reveal-row-3 span {
    margin-bottom: 0;
}

.temporada-1 #mouse-circle.big span {
    line-height: 1;
}

.temporada-1 #mouse-circle.big span a {
    padding-top: 34px;
    float: left;
}



/* Mobile */

.button-mobile {
    display: none;
    border: 1px solid #1a2839;
    color: #1a2839;
    background-color: #45b4c1;
    font-size: 14px;
    border-radius: 25px;
    line-height: 2em;
    padding: 10px 30px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
}

.nav {
    display: none;
}

.img-bg-pc {
    position: absolute;
    width: 100%;
    z-index: 0;
}

.img-bg-mobile {
    display: none;
}

/* Sound */

#audio-player-container #play-pause {
    cursor: pointer;
}

#audio-player-container {
    width: 145px;
    position: fixed;
    top: 130px;
    right: 30px;
    z-index: 100;
}

#audio-player-container .column-1,
#audio-player-container .column-2 {
    width: 50%;
    float: left;
}

.listen.hide,
.mute.hide {
    display: none;
    font-size: 11px;
}

.listen,
.mute {
    color: #3b99a6;
    padding-bottom: 20px;
}

.Sound {
    width: 40px;
    heigth: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
}

.Sound:hover span {
    background-color: cyan;
}

.Sound span {
    display: block;
    width: 2px;
    margin-right: 1px;
    background-color: cyan;
    animation: sound 0ms -.8s linear infinite alternate;
    transition: height .8s, background .3s;
}

.Sound span:nth-child(1) {
    height: 1px;
    animation-duration: 474ms;
}

.Sound span:nth-child(2) {
    height: 3px;
    animation-duration: 433ms;
}

.Sound span:nth-child(3) {
    height: 5px;
    animation-duration: 407ms;
}

.Sound span:nth-child(4) {
    height: 7px;
    animation-duration: 458ms;
}

.Sound span:nth-child(5) {
    height: 8px;
    animation-duration: .4s;
}

.Sound.off span {
    animation: none;
}

.Sound.off span:nth-child(1) {
    height: 8px;
    animation-duration: 474ms;
}

.Sound.off span:nth-child(2) {
    height: 3px;
    animation-duration: 433ms;
}

.Sound.off span:nth-child(3) {
    height: 5px;
    animation-duration: 407ms;
}

.Sound.off span:nth-child(4) {
    height: 4px;
    animation-duration: 458ms;
}

.Sound.off span:nth-child(5) {
    height: 8px;
    animation-duration: .4s;
}

.Sound.off {
    margin-top: 7px;
}

@keyframes sound {
    0% {
        opacity: .35;
        height: 6px
    }
    100% {
        opacity: 1;
        height: 23px
    }
}



#hero-0 .video-overlay {
    align-content: flex-start;
}

h1.cover-reveal {
    margin: 0;
    text-align: left;
    overflow: hidden;
    color: white;
    line-height: 1.2;
}

h1.cover-reveal-1 span.reveal-first {
    margin-top: 0px;
}

h1.active span.reveal-first {
    opacity: 1;
    animation: reveal 1.3s cubic-bezier(.5, 0, 0, 1) 0.2s;
}

h1.active span.reveal-second {
    opacity: 1;
    animation: reveal 1.6s cubic-bezier(.5, 0, 0, 1) 0.2s;
}

@keyframes reveal {
    0% {
        transform: translate(0, 100%);
        opacity: 0;
    }
    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes fadeInPhrase {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

section:nth-child(1) .cover-scroll {
    margin-top: 40vh;
    float: left;
    margin-left: 40px;
}

h1 span.reveal-first {
    display: block;
    font-size: 3rem;
    float: left;
    clear: both;
    width: 100%;
    color: #3b99a6;
    font-weight: 300;
    margin-bottom: 0;
    opacity: 0;
}

h1.cover-reveal-row {
    overflow: hidden;
    color: white;
    line-height: 1.2;
    margin: 0;
}

p.cover-reveal-row {
    overflow: hidden;
    color: white;
}

div.cover-reveal-row {
    overflow: hidden;
}

h1 span.first {
    display: block;
    font-size: 3rem;
    float: left;
    clear: both;
    width: 100%;
    color: #3b99a6;
    font-weight: 300;
    margin-bottom: 0;
}

span.first {
    position: relative;
    top: 100px;
    transition: all .7s ease;
}

h1 span.reveal-second {
    display: block;
    font-size: 4.5rem;
    font-weight: 500;
    margin-top: 0px;
    margin-left: 30px;
    font-family: Bitter;
    opacity: 0;
}

h1 span.second {
    display: block;
    font-size: 4.5rem;
    font-weight: 500;
    margin-top: 0px;
    margin-left: 30px;
    font-family: Bitter;
}

span.second {
    position: relative;
    top: 100px;
    transition: all .7s ease;
    transition-delay: .2s;
}

span.third {
    position: relative;
    top: 100px;
    transition: all .7s ease;
    transition-delay: .4s;
}

.cover-reveal-row-6 span.first {
    transition-delay: 1s;
}

.cover-reveal-row-6 span.second {
    transition-delay: 1.3s;
}


.cover-reveal-row.active .first {
    top: 0;
}

.cover-reveal-row.active .second {
    top: 0;
}

.cover-reveal-row.active .third {
    top: 0;
}

h1.cover-reveal-row-4 span {
    font-size: 2.9rem;
    color: white;
}

.cover-reveal-row-4 span.second {
    margin-left: 0;
}

p span.reveal-first {
    opacity: 0;
}

.scrolldown {
    width: 2px;
    height: 60px;
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    background: #3b99a6;
    z-index: 3;
}

.scrolldown .line {
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(to bottom, rgb(44, 44, 44) 50%, rgba(0, 0, 0, 0) 50%);
    background-position: 0 -60px;
    background-size: 100% 200%;
    animation: scrolldown 3.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
}

@keyframes scrolldown {
    0% {
        background-position: 0 -60px;
    }
    75% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 60px;
    }
}


.scroll-container {
    /*height: 100vh;*/
    width: 100vw;
    overflow-y: scroll;
    /*scroll-snap-type: y mandatory;*/
    scroll-snap-type: y proximity;
    padding: 0;

    /*scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  scroll-snap-destination: 50% 50%;*/
}

.scroll-container.slow {
    scroll-snap-type: none;
}

section {
    height: 100vh;
    scroll-snap-align: start;
}

/* Footer */

footer {
  font-family: 'Dosis';
  position: relative;
  z-index: 101;
}

/* Hide Cookies */

.app__CookieAlert {
  color: #ffffff;
  text-align: center;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -ms-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  opacity: 1;
  display: none;
}

.app__CookieAlert.hidden {
  opacity: 0;
  display: none;
}



/* Logo animation */

.logo--image {
	opacity: 0;
	animation: fadeInLogo 3s ease-in both;
}

.logo--image {
	animation-delay: 3s;
}

@keyframes fadeInLogo {
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}




/* Cursor */

#mouse-circle {
  position: absolute;
  width: 18px;
  height: 18px;
  margin: -9px 0px 0px -9px;
  border-radius: 50%;
  background: cyan;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0);
  transition: width 0.5s, height 0.5s, margin 0.5s;
  overflow: hidden;
  z-index: 14;
}


#mouse-circle span {
  display: none;
}

#mouse-circle.big {
  width: 90px;
  height: 90px;
  margin: -3rem 0px 0px -3rem;
  cursor: pointer !important;
  z-index: 100;
}

#mouse-circle.big span {
  display: block;
  text-align: center;
  transition: display 0.5s;
}

#mouse-circle.big span a {
  color: #1a2839;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 30px;
  float: left;
  text-decoration: none;
  font-size: 12px;
}

.is-hidden {
  display: none;
  transition: display 0.5s;
}

.hero-3 h1.cover-reveal-row-2 {
  margin-top: 70px;
  float: left;
}

.hero-3 .cover-reveal-row-2 span {
  font-style: italic;
  font-weight: 400;
  margin-left: 30px;
}

.hero-3 .cover-reveal-row-2 sup {
  font-size: 22px;
  font-weight: 400;
  margin-left: 5px;
}


@media only screen and (min-width: 1024px) {
    .wrapper-mobile {
        display: none;
    }

    .hero-3 .img-bg-deg {
        display: none;
    }
}


@media only screen and (max-width: 1024px) {
  .img-bg-deg {
      position: fixed;
      top: 0;
      width: 100%;
      height: 180px;
      z-index: 3;
  }

  #mouse-circle {
      display: none;
  }

  .scrolldown {
      z-index: 1;
  }

  #audio-player-container {
      right: 0;
      top: 75px;    
  }

  .img-bg-mobile {
    display: block;
    display: block;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  .hero-pc {
      display: none;
  }

  footer {
    position: relative;
    z-index: 10;
  }

  .logo--image {
    width: 60px;
    top: 80px;
    left: 20px;
  }
  
  .button-mobile {
    display: inline;
  }
  
  /* Home */
  .logo--image {
      animation-delay: 0s;
  }

  .copy h1,
  .copy-final h1 {
      margin: 0;
      line-height: unset;
  }
    
  .cyan-light {
      color: #45b4c1;
  }
  
  .cyan-strong {
      color: #3b99a6;
      font-weight: 300;
      font-size: 18px;
  }

  .white {
    font-weight: 300;
  }


  .paragraph-message {
    width: auto;
    position: relative;
    padding: 0 34px;
    z-index: 2;
  }

  .paragraph-message p {
    font-size: 14px;
    line-height: 1.3;
    margin-top: 0;
  }

  .button-mobile {
      display: inline;
      position: relative;
      z-index: 4;
  }


  /* Pagina temporada */
  .logo-season .logo--image {
    position: fixed;
    top: 80px;
    left: 20px;
  }

  .img-bg-pc {
      display: none;
  }

  .hero-3 .video-bg {
      display: none;
  }

  .hero-3 .img-bg-mobile {
      top: 120px;
  }

  #hero-3 .cover-first {
      width: auto;
  }

  .hero-3 .copy-cover-2.cover-first {
      margin-top: 280px;
      padding: 0 34px;
  }

  #hero-3 .paragraph-message {
      width: auto;
      margin-left: 0;
      padding: 0;
  }

  .hero-3 .p-button {
      text-align: center;
  }

  .hero-3 .third {
      font-size: 1.2rem;
  }

  .hero-3 .first {
      font-size: 2rem;
  }

  .hero-3 .second {
      font-size: 3rem;
  }

  .hero-3 .copy-cover-2 .cover-reveal-row-1:nth-child(1) {
      height: 35px; 
  }

  .hero-3 .copy-cover-2 .cover-reveal-row-1:nth-child(2) {
      height:35px;
  }
  .hero-3 .copy-cover-2 .cover-reveal-row-1:nth-child(3) {
      height: 80px;
  }

  .hero-3 .cover-reveal-row-2 span {
      margin-left: 0;
      font-size: 2.5rem;
      color: #45B4C1;
      opacity: 0.5;
  }

  .hero-3 .paragraph-message p {
      font-size: 16px;
      line-height: 1.4;
  }

  .hero-3 ol {
      float: left;
  }

  .hero-3 ol li {
    line-height: 1.4em;
    font-size: 16px;
  }


  .hero-3 .button-mobile {
    width: 220px;
    margin: auto;
    margin-bottom: 100px;
  }

  .hero-3 h1.cover-reveal-row-2 {
      margin-top: 20px;
  }
 
  .input-search, #menu-mobile-button {
    display: none;
  }

}

.pane-login .pane {
    right: -150%;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 10002;
    height: 100vh;
    width: 430px;
    background: #222222;
    -webkit-box-shadow: -58px 0px 66px 0px rgb(69 180 193 / 10%);
    -moz-box-shadow: -58px 0px 66px 0px rgba(69,180,193,0.1);
    box-shadow: -58px 0px 66px 0px rgb(69 180 193 / 10%); 
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
}

.pane-login.open .pane {
    right: 0vw;
}

.pane-login .pane a.icon.close {
    cursor: pointer;
    padding: 20px;
    float: left;
}

.pane-login.open .pane-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    opacity: 0.7;
    z-index: 100;
}

.button-login {
    border: 1px solid #1A2839;
    color: #1A2839;
    background-color: #45B4C1;
    padding: 12px 12px 12px 12px;
    border-radius: 25px;
    font-weight: 500;
    font-family: 'Inter';
    -webkit-text-decoration: none;
    text-decoration: none;
    float: left;
    width: 48%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

.button-login:hover {
    background-color: #56EBFD;
    color: #1A2839;
}


.pane-login  .pane-content {
    padding: 40px;
    float: left;
    font-family: Bitter;
    line-height: 1.4;
    margin-top: 29vh;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
}

.pane-login  .pane-content strong {
    font-size: 18px;
    font-weight: 600;
}

.logo-login-rtvc {
    width: 100px;
    float: left;
    clear: both;
}

.pane-login .col-2 {
    width: 100%;
    float: left;
    margin-top: 40px;
}

.pane-login .col-2 a {
    float: left;
    width: 41%;
    font-weight: 500;
}

.pane-login .col-2 a.button-quit {
    float: right;
    background: none;
    border: 1px solid #45b4c1;
    color: #45b4c1;
}

.pane-login .col-2 .button-login.button-quit:hover {
    background-color: #56EBFD;
    color: #1A2839;
}

#nav-login {
    position: fixed;
    top: 80px;
    right: 60px;
    font-weight: 500;
    z-index: 100;
    height: 60px;
    padding-top: 30px;
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

#audio-player-container.audio-season {
    top: 160px;
}


  @media (max-width: 1024px) {
    #nav-login {
        right: 30px;
        top: 50px;
    }

    #audio-player-container.audio-season {
        top: 120px;
    }


    .logo_india {
        width: 160px;
    }
    
  }



  @media (max-width: 1024px) and (orientation: landscape){
    .pane-login .pane {
        width: 420px;
    }
    .pane-login .pane-content {
        margin-top: 5vh;
    }

  }


  @media (max-width: 860px) {
    #hero-3 .credits,
    .credits-row .column-left, 
    .credits-row .column-right {
        margin-left: 0;
        width: 100%;
    }

    .back-to-season {
        position: absolute;
        top: 10px !important;
        padding-left: 0 !important;
    }

  }
  

  @media (max-width: 860px) and (orientation: portrait){
    .pane-login .pane {
        width: 420px;
    }
    .pane-login .pane-content {
        margin-top: 5vh;
    }
  }

  @media (max-width: 480px) and (orientation: portrait){
    .pane-login .pane {
        width: 80%;
    }
    .pane-login .col-2 a {
        width: 80%;
    }

    .pane-login .col-2 a.button-quit {
        float: left;
        margin-top: 10px;
    }

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
