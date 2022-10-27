import { createGlobalStyle } from 'styled-components';

export const HelpGlobalStyle = createGlobalStyle`

body {
  font-family: Inter;
}

/* Header */

.help-wrapper .header-top {
  width: 100%;
}

.help-wrapper .nav {
  position: absolute;
  left: 65px;
  top: 120px;
  z-index: 12;
}

.help-wrapper .nav a.back-to-season {
  display: none;
}

.help-wrapper .nav.hide a.back-to-season {
  display: inline;
}

.help-wrapper .nav.hide {
  left: 20px;
}


.help-wrapper .nav.hide a.back-to-season img,
.help-wrapper .nav.hide a.back-to-season span {
  float: left;
}

.help-wrapper .nav.hide a.back-to-season span {
  color: white;
  margin-left: 5px;
  margin-top: 5px;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  will-change: opacity;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
}

.help-wrapper .nav.hide a.back-to-season:hover span {
  opacity: 1;
}

.nav.hide ul {
  display: none;
}

.logo-elcubo.hide {
  display: none;
}

.logo--image {
  top: 120px;
}

.help-wrapper .nav ul {
  width: 150px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.help-wrapper .nav ul li {
  float: left;
}

.help-wrapper .nav ul li a {
  color: white;
  font-family: 'Inter';
}

.help-wrapper .nav ul li a span {
  line-height: 2;
  margin-left: 5px;
}

.help-wrapper nav ul span {
  float: left;
}

.help-wrapper .icon-help {
  display: inline;
}

.help-wrapper .icon-help img {
  float: left;
}

.help-wrapper .icon-help .icon-help-close {
  display: none;
}

.help-wrapper .is-active .icon-help .icon-help-open {
  display: none;
}

.help-wrapper .is-active .icon-help .icon-help-close {
  display: inline;
}

.help-wrapper nav ul li:last-child {
  float: right;
}

.help-wrapper .peak {    
  position: absolute;
  left: 40px;
  top: -20px;
}

/* Modal */

.help-wrapper .trigger_modal {
  display: block;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  padding: 1rem 2rem;
  color: white;
  background: #2c3344;
}

.help-wrapper .trigger_modal:hover {
  cursor: pointer;
}

/** Modal Styles **/

.help-wrapper .modal {
  display: none;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 0px;
}

.help-wrapper .modal__content {
  background: #192538;
  max-width: 455px;
  border-radius: 10px;
  position: absolute;
  z-index: 100;
  animation: 0.3s slideDown;
}

.help-wrapper .step-1 .modal__content {
  margin-left: 130px;
  margin-top: 195px;
}

/** custom animation **/

@keyframes slideDown {
  from {
    top: 0px;
    opacity: 0;
  }
  to {
    top: 165;
    opacity: 1;
  }
}

.help-wrapper .open {
  display: block;
}

.help-wrapper .modal__title {
  text-align: center;
  font-family: sans-serif;
  color: white;
}

.help-wrapper .close_modal {
  position: absolute;
  color: #ddd7ce;
  top: 0px;
  left: 10px;
  font-size: 4rem;
  background: transparent;
  border: 0;
  outline: 0;
}

.help-wrapper .close_modal:hover {
  cursor: pointer;
}

.help-wrapper .modal__body {
  padding: 2rem;
  text-align: center;
  font-family: sans-serif;
  color: #ddd7ce;
  line-height: 2rem;
}

/* Wizard */

.help-wrapper .hidden {
  display: none;
}

.help-wrapper .button {
  cursor: pointer;
  padding: 8px 8px;
  border-radius: 30px;
  border: 1px solid #45b4c1;
  color: #45b4c1;
  font-size: 13px;
  font-weight: 500;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background: transparent;
  outline: none;
  width: 90px;
  letter-spacing: 0.22px;
}

.help-wrapper .button:hover {
  background: #56EBFD;
  color: #192538;
}

.help-wrapper .help-step {
  margin: auto;
  float: left;
  padding: 20px 30px;
  background-color: #192538;
  font-family: 'Inter';
  color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
}

.help-wrapper .help-step .progress-bar {
  width: 100%;
  list-style-type: none;
  display: flex;
  padding: 0;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 0;
  display: none;
}

.help-wrapper .help-step .progress-bar li.progress-bar__dot {
  display: block;
  width: 0.6em;
  border-radius: 1000em;
  height: 0.6em;
  border: 0.2em solid #45b4c1;
  background-color: #45b4c1;
  cursor: pointer;
  transition: all 0.5s ease;
}

.help-wrapper .help-step .progress-bar li.progress-bar__dot.full {
  background-color: white;
  border: 0.2em solid white;
}

.help-wrapper .help-step .progress-bar li.progress-bar__connector {
  display: block;
  width: 5em;
  border-radius: 1000em;
  height: 0.1em;
  background-color: #45b4c1;
  margin-top: 0.45em;
}

.help-wrapper .help-step h2 {
  font-size: 18px;
}

.help-wrapper .step-number {
  border-radius: 50%;
  background: #090c15;
  width: 30px;
  height: 30px;
  float: left;
  text-align: center;
  margin-top: -4px;
  line-height: 1.7;
  margin-right: 10px;
}

.help-wrapper .button-group {
  width: 100%;
  display: block;
  float: left;
  justify-content: space-between;
  margin-top: 0px;
}

.help-wrapper button#validate {
  margin: auto;
  background-color: #45b4c1;
  color: black;
  width: 180px;
  float: left;
  position: relative;
}

.help-wrapper button#validate:hover {
  background-color: #56EBFD;
  color: black;
}

.help-wrapper .help-step #previous {
  display: none;
  float: left;
  margin-right: 10px;
}

.help-wrapper .help-step #next {
  float: left;
  position: relative;
}

.help-wrapper .step-2 .help-step #previous,
.help-wrapper .step-l #previous {
  display: inline;
}

.help-wrapper .step-2 .modal__content {
  left: 0;
}

.help-wrapper .step-l #next {
  display: none;
}


.help-wrapper .modal.step-2 .modal__content {
  top: 60%;
}

.help-wrapper .modal.step-2 .modal__content .peak {
  left: 44%;
  top: -20px;
  bottom: auto;
}

.help-wrapper .modal.step-l .modal__content .peak {
  left: 43%;
  bottom: -20px;
  top: auto;
}

.help-wrapper .modal.step-2 .modal__content,
.help-wrapper .modal.step-l .modal__content {
  max-width: 455px;
  border-radius: 10px;
  position: relative;
  margin: auto;
  transition: all 0.5s ease;
}



.help-wrapper .modal.step-l .modal__content {
  left: 0;
  top: 35vh;
}


/* Selector help */

.help-wrapper .selector-help {
  width: 100%;
  position: absolute;
  bottom: 40px;
}

.help-wrapper .selector-help-cover {
  width: 900px;
  margin: auto;
  transition: all 0.5s ease;
  opacity: 0;
}

.help-wrapper .selector-help-mobile {
  display: none;
}

.help-wrapper .modal.step-l .selector-help-cover {
  opacity: 1;
}

.help-wrapper .selector-column {
  width: 33.33%;
  color: white;
  float: left;
  text-align: center;
  font-family: 'Inter';
}

.help-wrapper .selector-column h2 {
  font-size: 22px;
}

.help-wrapper .selector-column h2 img {
  margin-right: 10px;
}

.help-wrapper .selector-column p {
  font-size: 16px;
}

.help-wrapper .selector-column-cubo {
  width: 100%;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  .help-wrapper .nav {
    left: 20px;
    top: 80px;
  }

  .help-wrapper .help-step h2 {
    font-size: 14px;
  }

  .help-wrapper .help-step p {
    font-size: 12px;
  }

  .help-wrapper .button {
    font-size: 13px;
  }

  .help-wrapper .step-l #previous {
    display: none;
  }

  .help-wrapper .button-group {
    text-align: center;
  }

  .help-wrapper button#validate {
    float: none;
  }

  .help-wrapper .logo--image {
    top: 80px;
    left: 20px;
    width: 40px;
  }
  .help-wrapper .selector-help {
    bottom: 30px;
  }
  .help-wrapper .selector-column-cubo.cubo-pc {
    display: none;
  }
  .help-wrapper .selector-help-mobile {
    display: block;
  }
  .help-wrapper .selector-help-cover {
    width: auto;
  }
  .help-wrapper .selector-help-pc {
    margin-bottom: 30px;
    float: left;
  }
  .help-wrapper .selector-help-pc .selector-column {
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
  }
  .help-wrapper .selector-help-pc .selector-column p {
    padding: 0;
  }
  .help-wrapper .selector-column h2 {
    font-size: 16px;
    margin: 0;
  }
  .help-wrapper .selector-column h2 img {
    margin-right: 12px;
  }
  .help-wrapper .selector-column p {
    font-size: 12px;
  }
  .help-wrapper .selector-help-pc .selector-column {
    width: auto;
  }

  .help-wrapper .selector-help-pc {
    margin-bottom: 10px;
  }
  .help-wrapper .selector-column span {
    color: #45b4c1;
  }
  .help-wrapper .modal__content {
    top: 140px;
    left: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background: transparent;
    z-index: 100;
  }

  .help-wrapper .step-1 .modal__content {
    margin-left: 0;
    margin-top: 0;
  }

  .help-wrapper .modal.step-2 .modal__content {
    top: 30%;
  }

  .help-wrapper .modal.step-l .modal__content {
    top: 80px;
  }


  .help-wrapper button#validate {
    width: 200px;
  }

  .characters .selector-cover {
    width: 100%;
  }

  .help-wrapper .cubo-help {
    width: 70px;
  }
}



@media screen and ( max-height: 700px ){
  .help-wrapper .modal.step-l .modal__content {
    left: 0px;
    top: 15vh;
  }

}


`;
