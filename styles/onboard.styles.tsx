import { createGlobalStyle } from 'styled-components';

export const OnboardStyles = createGlobalStyle`

body {
    font-family: Inter;
}

.hero {
    /* Create grid spanning viewport width & height */
    display: grid;
    grid-template-rows: 100vh;
    overflow: hidden;
}

.copy-cover {
    /* Span the full grid */
    grid-area: var(--fullGrid);
    /* Center Content */
    display: grid;
    justify-content: center;
    align-content: end;
    background: rgba(0, 0, 0, 0.6);
}

.copy {
    margin: 0;
    z-index: 100;
    width: 60vw;
    margin: auto;
    text-align: center;
    font-family: 'Inter';
}

.copy p {
    color: white;
    font-size: 26px;
    font-weight: light;
    font-family: 'Inter';
    letter-spacing: -1px;
    float: left;
    margin-bottom: 35px;
    width: 100%;
}

.copy .cover-link {
    width: 196px;
    margin: auto;
}

.cover-link a {
    padding: 3px 10px 3px 18px;
    border-radius: 30px;
    font-weight: 500;
    font-family: Inter;
    text-decoration: none;
    float: left;
    width: 160px;
}

.cover-link a span {
    font-size: 20px;
    line-height: 2.2em;
    float: left;
    letter-spacing: 0.3px;
}

.cover-link a img {
    margin-left: 10px;
    margin-top: 3px;
}

.onboard {
    background-size: cover;
    background-color: black;
}

.onboard .copy {
    margin-bottom: 140px;
    letter-spacing: -1px;
}

.copy-phrase {
    font-size: 38px;
    line-height: 1.2;
    float: left;
    font-weight: 400;
    width: 100%;
}

.copy button img {
    float: right;
    margin-left: 10px;
}

.hide {
    display: none;
}

.button-cyan {
    background-color: rgb(69, 180, 193);
    color: rgb(26, 40, 57);
}

.button-cyan:hover {
    background-color: rgb(83, 235, 253);
}


/* Winner */

.winner {
    width: 650px;
    margin: auto;
    /*display: none;*/
}

.winner .col-2 {
    width: 600px;
    margin: auto;
    clear: both;
}

.winner .col-2 .col-left,
.winner .col-2 .col-right {
    width: 50%;
    float: left;
}

.winner .col-left a {
    float: right;
    background: none;
    border: 1px solid #45b4c1;
    color: #45b4c1;
    padding: 12px 12px 12px 12px;
    border-radius: 30px;
    font-weight: 500;
    font-family: 'Inter';
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    width: 160px;
}

.winner .col-left a:hover {
    background-color: rgb(83, 235, 253);
    color: rgb(26, 40, 57);
}

.copy .winner .cover-link {
    float: left;
    margin-left: 20px;
}




@media only screen and (min-width: 1024px) {
    .onboarding-chrono .copy {
        width: 800px;
    }

    .onboarding-laberynth .copy {
        width: 800px;
    }

    .onboarding-laberynth .copy p {
        font-size: 36px;
    }

    .onboarding-reflexivo .copy {
        width: 650px;
    }

    .onboarding-laberynth .copy .p-winner {
        font-size: 22px;
    }

    .copy .winner .col-2 .col-left .cover-link {
        float: right;
    }

    .winner {
        width: 650px;
        margin: auto;
    }
}

@media screen and (max-width: 1200px) {
    .header-top .nav {
        left: 15px;
        top: 15px;
    }
   
}


@media (max-width: 540px) {

  #hero-onboarding {
      background-position: 54%;
  }

  .hero-onboarding .copy .cover-link {
      width: 186px;
      margin: auto;
      float: none;
  }

  .winner .col-2 .col-left, .winner .col-2 .col-right {
    width: 100%;
  }

  .winner .col-2 .col-left a {
      float: left;
      margin-bottom: 20px;
  }

}

@media (max-width: 768px) {

    .copy {
        width: unset;
        padding-left: 30px;
        padding-right: 30px;
    }

    .winner, .winner .col-2 {
        width: 100%;
    }


}

@media only screen and (max-width: 1024px) and (orientation: landscape) {
    /* Onboard */

    .copy {
        width: unset;
    }

    .onboard .copy p {
        font-size: 18px;
        width: auto;
        float: unset;
        margin-left: auto;
        margin-right: auto;
    }

    .copy-phrase {
        font-size: 22px;
        margin-bottom: 5px;
    }

    .onboard .copy {
        margin-bottom: 40px;
    }

    .p-winner .copy-phrase {
        margin-bottom: 20px;
    }

    .copy .winner .col-left .cover-link {
        float: right;
    }
}

@media only screen and (max-width: 1024px) and (orientation: portrait) {
    /* Onboard */

    .app-elcubo.onboard {
        background-position: center center;
        background-repeat: no-repeat;
    }
    
    .onboard .copy p {
        font-size: 18px;
    }

    .copy-phrase {
        font-size: 22px;
    }

}

.box{
  width:290px;
  height:200px;
  text-align: center;
  font-family: Inter;
}

.box img {
  width: 120px;
}

.rotate{
  width:100%;
  height: 100vh;
  background-color:black;
  display:flex;
  justify-content:center;
  align-items:center; 
}

.rotate p {
  color: white;
  font-size: 16px;
}

@media only screen and (min-width: 1023px){
    .rotate {
        display: none;
    }
}

@media only screen and (max-width: 1024px) and (orientation:landscape){
  .onboarding-laberynth { display:grid; }
  .rotate{ display:none; }
}


@media only screen and (max-width: 1024px) and (orientation:portrait){
  .onboarding-laberynth{ display:none; }
  .rotate{ display:flex; }
}

`;