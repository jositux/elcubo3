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

.hero-cover-1 {
    background: url(/images/home/gradient.png) no-repeat 0 0;
    background-size: 100% 200px;
    padding-top: 200px;
    position: relative;
    z-index: 15;
}

.hero-1:hover {
    cursor: pointer !important;
}

.hero-1 {
    /* Create grid spanning viewport width & height */
    display: grid;
    grid-template-rows: 100vh;
    overflow: hidden;
    background: black;
}

.hero-1 .video-overlay {
    justify-content: top;
    align-content: top;
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
    z-index: 0;
}

.video-bg-mobile {
    grid-area: var(--fullGrid);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: 0;
    position: absolute;
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

.hero-0 {
    position: static;
    top: 0;
    width: 100%;
    grid-template-rows: none;
}

.hero-0 .video-bg,
.hero-0 .img-bg-pc {
    position: fixed;
}

/* Hero 1 */

.hero-1 {
    position: relative;
    z-index: 12;
    background: black;
}

#hero-0 #hero-1 h1 span.first {
    margin-top: 0;
}

.hero-0 .hero-1 .video-bg,
.hero-0 .hero-1 .img-bg-pc,
.hero-0 .hero-2 .video-bg,
.hero-0 .hero-2 .img-bg-pc {
    position: absolute;
}

.paragraph-message {
    width: 500px;
}

.hero-1 .paragraph-message {
    margin: auto;
    /*margin-top: 100px;*/
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

.hero-1 .copy-cover {
    width: 810px;
    margin: auto;
    padding-top: 10%;
}

.hero-1 .copy-cover .first {
    float: left;
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero-1 .copy-cover .second {
    font-size: 3.5rem;
    margin-left: 100px;
}

.arrow-down-2 {
    z-index: 100;
    position: absolute;
    bottom: auto;
    top: 190vh;
}

.arrow-down-2 img {
    z-index: 20;
}

/* Hero 2 */

.hero-2 {
    position: relative;
    z-index: 15;
    background: black;
}

.hero-2 h1 {
    margin: 0;
}

.hero-2 .copy-cover {
    width: 810px;
}

.hero-2 .second {
    font-size: 3.5rem;
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

#hero-0 video.hide {
    -webkit-animation: 15s ease 0s normal forwards 1 hideVideo;
    animation: 15s ease 0s normal forwards 1 hideVideo;
}

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

#hero-1 video.hide {
    -webkit-animation: 10s ease 0s normal forwards 1 hideVideo;
    animation: 10s ease 0s normal forwards 1 hideVideo;
}

#hero-2 video.hide {
    -webkit-animation: 6s ease 0s normal forwards 1 hideVideo;
    animation: 6s ease 0s normal forwards 1 hideVideo;
}


/* Animation Hero 1 */

#hero-1 .paragraph-message p {
    margin: 0;
}

#hero-1 .paragraph-message p span {
  font-size: 1.8rem;
}

.section-1 {
    height: 118vh;
}

.section-1 video {
    height: 100%;
    width: auto;
}


.hero-1 .paragraph-message {
    width: 810px;
}


@keyframes fadeInParagraph {
    from {
        opacity: 0;
        transform: translate3d(0, -20%, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

/* Animation Hero 2 */

#hero-2 .copy-cover {
    opacity: 1;
    margin-left: 0;
}

.paragraph-message a {
    text-decoration: none;
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

.paragraph-message strong {
    font-weight: 600;
}


@keyframes fade-in {
    100% {
        opacity: 1;
        filter: blur(0);
    }
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
    z-index: -1;
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

#hero-0 h1 span.first {
    margin-top: 0vh;
}

#hero-0 section:nth-child(2) .cover-scroll,
#hero-0 section:nth-child(3) .cover-scroll,
#hero-0 section:nth-child(4) .cover-scroll,
#hero-0 section:nth-child(6) .cover-scroll {
    margin-top: 40vh;
    float: left;
    margin-left: 40px;
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
  
  #hero-0-mobile .copy,
  #hero-0-mobile .copy-final {
      font-weight: 400;
      text-align: left;
      line-height: 0.8;
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

  #hero-0-mobile .copy .white {
      margin-top: 5px;
      font-size: 33px;
      line-height: 2rem;
      float: left;
      margin-left: 50px;
  }
  
  #hero-0-mobile,
  #hero-1-mobile,
  #hero-2-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      position: relative;
  }
  
  #hero-0-mobile .copy {
      margin: 0;
      position: absolute;
      opacity: 0;
      -webkit-animation: rotateWord 15s linear 0s;
      -ms-animation: rotateWord 15s linear 0s;
      animation: rotateWord 15s linear 0s;
      animation: rotateWord 15s linear 0s;
      animation-delay: 0s;
      z-index:1;
  }
  
  #hero-0-mobile .copy.copy-1 {
      -webkit-animation-delay: 2s;
      -ms-animation-delay: 2s;
      animation-delay: 2s;
  }
  
  #hero-0-mobile .copy.copy-2 {
      -webkit-animation-delay: 7s;
      -ms-animation-delay: 7s;
      animation-delay: 7s;
  }
  
  #hero-0-mobile .copy.copy-3 {
      -webkit-animation-delay: 12s;
      -ms-animation-delay: 12s;
      animation-delay: 12s;
  }
  
  .copy-final {
      margin: 0;
      position: absolute;
      opacity: 0;
      animation: rotateWordFinal 20s normal forwards;
      animation-delay: 17s;
  }
  
  @-webkit-keyframes rotateWord {
    0% {
      opacity: 0;
    }
    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
    }
    5% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }
    17% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }
    22% {
      opacity: 0;
      -webkit-transform: translateY(30px);
    }
    
    100% {
      opacity: 0;
    }
    
  }
  
  @-webkit-keyframes rotateWordFinal {
    0% {
      opacity: 0;
    }
    2% {
      opacity: 0;
      -webkit-transform: translateY(-30px);
    }
    5% {
      opacity: 0;
      -webkit-transform: translateY(0px);
    }
    17% {
      opacity: 1;
      -webkit-transform: translateY(0px);
    }
    24% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  /* Hero 1 Mobile */

  #hero-1-mobile .copy {
    padding: 0 34px;
    margin-top: 120px;
  }

  #hero-1-mobile .img-bg-mobile {
      z-index: 1;
  }

  #hero-1-mobile h1 {
    position: relative; 
    z-index: 1;
  }

  #hero-1-mobile h1 span {
    margin: 0;
  }

  #hero-1-mobile h1:nth-child(1) span {
      font-size: 22px;
  }

  #hero-1-mobile h1:nth-child(2) span {
      margin-left: 50px;
      font-size: 22px;
  }

  #hero-1-mobile h1:nth-child(2) {
      margin-bottom: 120px;
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

  /* Hero 2 mobile */
  #hero-2-mobile .copy {
    padding: 0 34px;
  }

  #hero-2-mobile h1 {
      width: 100%;
      float: left;
      margin-bottom: 5px;
      z-index: 2;
  }

  #hero-2-mobile .img-bg-mobile {
    z-index: 1;
  }

  #hero-2-mobile h1:nth-child(1) span {
    font-size: 24px;
  }

  #hero-2-mobile h1:nth-child(2) {
      margin-bottom: 100px;
  }
  
  #hero-2-mobile h1:nth-child(2) span {
    font-size: 24px;
  }
  
  .button-mobile {
      display: inline;
      position: relative;
      z-index: 4;
  }

  #hero-2-mobile h1 {
      position: relative;
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
