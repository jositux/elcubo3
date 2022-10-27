import { createGlobalStyle } from 'styled-components';

export const RTVCGlobalStyles = createGlobalStyle`
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

body.stopScrolling {
  max-height: 100vh;
  overflow: hidden;
  visibility: hidden;
}

body.stopScrolling #mainMenu {
  visibility: hidden;
}

* {
  font-size: 16px;
}

/* sc-component-id: Fonts__shareButton-sc-1duggyd-26 */

.fJOLCb {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-size: 1em;
  font-weight: 600;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 3px;
}

/* sc-component-id: Icons__SvgIcon-sc-10bknwo-0 */

.iomDSz {
  fill: none;
}

.YAwZO {
  fill: #009bdb;
}

.gEhKEr {
  fill: #fff;
}

.gIkEiP {
  fill: #ffffff;
}

/* sc-component-id: Wrappers__Container-nk8zgh-2 */

.ioOVYe {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: AtRating__Container-ia8bgm-0 */

.eeHwyn {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  width: initial;
}

/* sc-component-id: AtRating__RatingPart1-ia8bgm-1 */

.iYKwGC {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  display: block;
  background-color: #4c86c1;
  height: 1.9375em;
  line-height: 1.9375em;
  font-size: 1em;
  border-radius: 50%;
  text-align: center;
}

/* sc-component-id: AtRating__RatingPart2-ia8bgm-2 */

.cjSsnM {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-left: 0.375em;
  font-size: 1em;
}

/* sc-component-id: MolTrailerPlayerstyles__VideoContainer-sc-1euinmx-0 */

.lheSFZ {
  width: 100%;
  margin: auto;
  text-align: left;
}

.lheSFZ iframe {
  border: 0;
  overflow: hidden;
}

.lheSFZ .thumbnailVideoPlayer {
  cursor: pointer;
  z-index: 9996;
  position: absolute;
  width: 100%;
  height: 100%;
}

.lheSFZ .thumbnailVideoPlayer img {
  position: absolute;
  width: 100%;
}

.lheSFZ .thumbnailVideoPlayer .containerButtonPlay {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}

.lheSFZ .thumbnailVideoPlayer .containerButtonPlay .backgroundShadow {
  position: absolute;
  top: 36%;
  left: 47%;
  width: 10px;
  height: 10px;
  box-shadow: 0px 0px 100px 40px #000;
}

.lheSFZ .thumbnailVideoPlayer .containerButtonPlay .play-icon {
  position: relative;
}

.lheSFZ .thumbnailVideoPlayer .containerButtonPlay .textCTA {
  position: relative;
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-shadow: 0px 0px 5px #000;
}

@media screen and (max-width: 768px) {
  .lheSFZ {
    width: initial;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}

/* sc-component-id: AtImg__Img-sc-31cwo7-0 */

.gYLCMU {
  border: 0;
}

/* sc-component-id: MolBrandContainer__Container-y67jlw-0 */

.coPrnR {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

/* sc-component-id: MolBrandContainer__Column-y67jlw-1 */

.lhgvFU {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: inline-block;
  font-size: 10px;
  padding-right: 10px;
}

@media (min-width: 768px) {
  .lhgvFU {
    font-size: 13px;
  }
}

@media (min-width: 1024px) {
  .lhgvFU {
    font-size: initial;
  }
}

.lhgvFU:first-child {
  border-right: 1px solid #ffffff;
  padding-right: 1.25em;
}

.lhgvFU:last-child {
  padding-left: 1.25em;
}

/* sc-component-id: MolBrandContainer__Img-y67jlw-2 */

.fzvSAL {
  width: auto;
  max-height: 50px;
  float: right;
}

/* sc-component-id: MolHorizontalListView__Slide-sc-1n344h2-0 */

.gMhSYS {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.gMhSYS.vertical-list,
.gMhSYS.swiper-slide {
  width: 198.75px;
  height: 111.75px;
}

.gMhSYS.vertical-list .info-footer-container,
.gMhSYS.swiper-slide .info-footer-container {
  height: 42px;
  bottom: 4px;
}

.gMhSYS.vertical-list .content-type-icon,
.gMhSYS.swiper-slide .content-type-icon {
  right: 0.5em;
  bottom: calc(42px + 0.5em);
}

.gMhSYS.vertical-list .content-type-icon-prod,
.gMhSYS.swiper-slide .content-type-icon-prod {
  right: 0.5em;
  bottom: calc(56px + -2.5em);
}

@media (min-width: 768px) {
  .gMhSYS.vertical-list,
  .gMhSYS.swiper-slide {
    width: 265px;
    height: 149px;
  }
  .gMhSYS.vertical-list .info-footer-container,
  .gMhSYS.swiper-slide .info-footer-container {
    height: 56px;
  }
  .gMhSYS.vertical-list .content-type-icon,
  .gMhSYS.swiper-slide .content-type-icon {
    right: 0.5em;
    bottom: calc(56px + 0.5em);
  }
  .gMhSYS.vertical-list .content-type-icon-prod,
  .gMhSYS.swiper-slide .content-type-icon-prod {
    right: 0.5em;
    bottom: calc(56px + -2.85em);
  }
}

.gMhSYS.isActive:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background: #4c86c1;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.gMhSYS > .link > span {
  width: 100% !important;
  height: 100% !important;
}

.hXUrXc {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.hXUrXc.vertical-list,
.hXUrXc.swiper-slide {
  width: 247.99999999999997px;
  height: 145.2px;
}

.hXUrXc.vertical-list .info-footer-container,
.hXUrXc.swiper-slide .info-footer-container {
  height: 0px;
  bottom: 4px;
}

.hXUrXc.vertical-list .content-type-icon,
.hXUrXc.swiper-slide .content-type-icon {
  right: 0.5em;
  bottom: calc(0px + 0.5em);
}

.hXUrXc.vertical-list .content-type-icon-prod,
.hXUrXc.swiper-slide .content-type-icon-prod {
  right: 0.5em;
  bottom: calc(0px + -2.5em);
}

@media (min-width: 768px) {
  .hXUrXc.vertical-list,
  .hXUrXc.swiper-slide {
    width: 413.3333333333333px;
    height: 242px;
  }
  .hXUrXc.vertical-list .info-footer-container,
  .hXUrXc.swiper-slide .info-footer-container {
    height: 0px;
  }
  .hXUrXc.vertical-list .content-type-icon,
  .hXUrXc.swiper-slide .content-type-icon {
    right: 0.5em;
    bottom: calc(0px + 0.5em);
  }
  .hXUrXc.vertical-list .content-type-icon-prod,
  .hXUrXc.swiper-slide .content-type-icon-prod {
    right: 0.5em;
    bottom: calc(0px + -2.85em);
  }
}

.hXUrXc.isActive:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background: #4c86c1;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.hXUrXc > .link > span {
  width: 100% !important;
  height: 100% !important;
}

.bHOexk {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.bHOexk.vertical-list,
.bHOexk.swiper-slide {
  width: 198.75px;
  height: 299.25px;
}

.bHOexk.vertical-list .info-footer-container,
.bHOexk.swiper-slide .info-footer-container {
  height: 0px;
  bottom: 4px;
}

.bHOexk.vertical-list .content-type-icon,
.bHOexk.swiper-slide .content-type-icon {
  right: 0.5em;
  bottom: calc(0px + 0.5em);
}

.bHOexk.vertical-list .content-type-icon-prod,
.bHOexk.swiper-slide .content-type-icon-prod {
  right: 0.5em;
  bottom: calc(0px + -2.5em);
}

@media (min-width: 768px) {
  .bHOexk.vertical-list,
  .bHOexk.swiper-slide {
    width: 265px;
    height: 399px;
  }
  .bHOexk.vertical-list .info-footer-container,
  .bHOexk.swiper-slide .info-footer-container {
    height: 0px;
  }
  .bHOexk.vertical-list .content-type-icon,
  .bHOexk.swiper-slide .content-type-icon {
    right: 0.5em;
    bottom: calc(0px + 0.5em);
  }
  .bHOexk.vertical-list .content-type-icon-prod,
  .bHOexk.swiper-slide .content-type-icon-prod {
    right: 0.5em;
    bottom: calc(0px + -2.85em);
  }
}

.bHOexk.isActive:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background: #4c86c1;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.bHOexk > .link > span {
  width: 100% !important;
  height: 100% !important;
}

.cEQdAK {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.cEQdAK.vertical-list,
.cEQdAK.swiper-slide {
  width: 198.75px;
  height: 299.25px;
}

.cEQdAK.vertical-list .info-footer-container,
.cEQdAK.swiper-slide .info-footer-container {
  height: 0px;
  bottom: 4px;
}

.cEQdAK.vertical-list .content-type-icon,
.cEQdAK.swiper-slide .content-type-icon {
  right: 0.5em;
  bottom: calc(0px + 0.5em);
}

.cEQdAK.vertical-list .content-type-icon-prod,
.cEQdAK.swiper-slide .content-type-icon-prod {
  right: 0.5em;
  bottom: calc(0px + -2.5em);
}

@media (min-width: 768px) {
  .cEQdAK.vertical-list,
  .cEQdAK.swiper-slide {
    width: 709px;
    height: 399px;
  }
  .cEQdAK.vertical-list .info-footer-container,
  .cEQdAK.swiper-slide .info-footer-container {
    height: 0px;
  }
  .cEQdAK.vertical-list .content-type-icon,
  .cEQdAK.swiper-slide .content-type-icon {
    right: 0.5em;
    bottom: calc(0px + 0.5em);
  }
  .cEQdAK.vertical-list .content-type-icon-prod,
  .cEQdAK.swiper-slide .content-type-icon-prod {
    right: 0.5em;
    bottom: calc(0px + -2.85em);
  }
}

.cEQdAK.isActive:after {
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background: #4c86c1;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.cEQdAK > .link > span {
  width: 100% !important;
  height: 100% !important;
}

/* sc-component-id: MolHorizontalListView__Img-sc-1n344h2-1 */

.dMenXv {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.dMenXv img {
  width: 100%;
}

/* sc-component-id: MolHorizontalListView__InfoHoverContainer-sc-1n344h2-2 */

.fUSwjr {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  opacity: 0;
  -webkit-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  border: 1px solid #ffffff;
  background: radial-gradient(
    circle at center 43%,
    rgba(76, 134, 193, 0.85) 0%,
    rgba(0, 0, 0, 0.9) 60%,
    rgba(0, 0, 0, 1) 100%
  );
}

@media (min-width: 1024px) {
  .fUSwjr:hover {
    opacity: 1;
  }
}

.fUSwjr .play-button {
  top: 15%;
}

/* sc-component-id: MolHorizontalListView__InfoHoverBody-sc-1n344h2-3 */

.jzVTsr {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 8em;
  width: calc(100% - 2em);
  height: calc(100% - 12em);
  overflow: hidden;
  -webkit-text-decoration: none;
  text-decoration: none;
}

@media (min-width: 768px) {
  .jzVTsr {
    bottom: 3em;
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
  }
}

/* sc-component-id: MolHorizontalListView__InfoHoverActions-sc-1n344h2-4 */

.imAVLD {
  position: absolute;
  left: 0.5em;
  bottom: 0;
  width: calc(100% - 1em);
  height: 3em;
  border-top: 1px solid #b4b4b4;
  padding: 0 0.5em;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* sc-component-id: MolHorizontalListView__InfoHoverCategory-sc-1n344h2-5 */

.kTuYaP {
  font-family: 'BebasNeue Regular', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25rem;
  margin: 0;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1em;
  font-weight: 300;
  margin: 0;
}

/* sc-component-id: MolHorizontalListView__InfoHoverTitle-sc-1n344h2-6 */

.lacCJA {
  font-family: 'BebasNeue Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1.375em;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(4, 0, 6, 0.35);
  margin: 0;
}

/* sc-component-id: MolHorizontalListView__InfoHoverSynopsis-sc-1n344h2-7 */

.iUMKcy {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1em;
  font-weight: 400;
  margin: 1em 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* sc-component-id: MolHorizontalListView__InfoHoverChapters-sc-1n344h2-8 */

.ccBgwx {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 1em;
}

/* sc-component-id: MolHorizontalListView__InfoFooterContainer-sc-1n344h2-9 */

.jjNNIC {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
}

@media (min-width: 768px) {
  .jjNNIC {
    font-size: 16px;
  }
}

/* sc-component-id: MolHorizontalListView__InfoFooterTitle-sc-1n344h2-10 */

.fjVPlx {
  font-family: 'BebasNeue Regular', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 1em;
  font-weight: 700;
  display: block;
  line-height: initial;
  width: 100%;
  margin-top: 0.3em;
}

.fjVPlx .link {
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #ffffff;
  font-size: inherit;
  font-weight: inherit;
  -webkit-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
}

.fjVPlx .link:active,
.fjVPlx .link:visited {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #ffffff;
}

.fjVPlx .link:hover {
  opacity: 0.8;
  -webkit-text-decoration: none;
  text-decoration: none;
}

/* sc-component-id: MolHorizontalListView__BrandContainer-sc-1n344h2-14 */

.hrDfQt {
  position: absolute;
  width: 30%;
  max-width: 100px;
  top: 0.6em;
  right: 0.5em;
}

.hrDfQt .brand {
  width: 100%;
  opacity: 0.8;
}

/* sc-component-id: MolHorizontalListView__PlayIcon-sc-1n344h2-17 */

.fIaNWk {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  pointer-events: none;
}

/* sc-component-id: MolHorizontalListView__ContentTypeIcon-sc-1n344h2-21 */

.gTgUsX {
  position: absolute;
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  pointer-events: none;
  opacity: 0.5;
}

/* sc-component-id: TplTitleBlock__Container-ojkn83-0 */

.hlchQe {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: TplTitleBlock__InnerContainer-ojkn83-1 */

.gPKtWj {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

/* sc-component-id: TplTitleBlock__BlockTitle-ojkn83-2 */

.lxMnO {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* sc-component-id: TplTitleBlock__BlockBody-ojkn83-3 */

.JSpgj {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: TplTitleBlock__Title-ojkn83-4 */

.cvaMGh {
  font-family: 'BebasNeue Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
  font-size: 1.375rem;
  color: #fffefe;
  position: relative;
  z-index: 0;
}

@media screen and (max-width: 767px) {
}

/* sc-component-id: TplTitleBlock__IconLeft-ojkn83-5 */

.elPGrP {
  margin-right: 4px;
  margin-bottom: -3px;
  pointer-events: none;
}

.elPGrP.animate {
  -webkit-animation: RabCa 80ms 700ms linear 3;
  animation: RabCa 80ms 700ms linear 3;
}

.elPGrP .icon {
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/* sc-component-id: TplTitleBlock__HaloLight-ojkn83-6 */

.ghOMIZ {
  display: block;
  position: absolute;
  width: 138px;
  height: 31px;
  right: -1.5rem;
  bottom: -0.2rem;
  z-index: -1;
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0;
}

.ghOMIZ.animate {
  opacity: 1;
  -webkit-animation: dOgGcg 600ms ease-in-out 1;
  animation: dOgGcg 600ms ease-in-out 1;
}

.ghOMIZ:after {
  content: '';
  position: absolute;
  width: 70px;
  height: 10px;
  top: calc(50% - 5px);
  right: 5px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 30px 10px rgba(0, 155, 219, 0.5);
}

.ghOMIZ:after.animate {
  -webkit-animation: RabCa 2s ease-in-out infinite;
  animation: RabCa 2s ease-in-out infinite;
}

/* sc-component-id: TplSwiper__Container-sc-74hyzq-0 */

.hHOFJM {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding-top: 0;
  width: 100%;
  height: initial;
  overflow: initial;
}

.hHOFJM .swiper-container {
  position: relative;
  top: 0;
  left: 0;
  width: initial;
  height: initial;
}

.hHOFJM .swiper-container .swiper-button-next,
.hHOFJM .swiper-container .swiper-button-prev {
  background: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  -webkit-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
}

.hHOFJM .swiper-container .swiper-button-next.swiper-button-disabled,
.hHOFJM .swiper-container .swiper-button-prev.swiper-button-disabled {
  opacity: 0;
}

.hHOFJM .swiper-container .swiper-pagination .swiper-pagination-bullet {
  background: #ffffff;
}

.fqiqOX {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding-top: 108.33333333333333%;
  width: 100%;
  height: 0px;
  overflow: hidden;
}

.fqiqOX .swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fqiqOX .swiper-container .swiper-button-next,
.fqiqOX .swiper-container .swiper-button-prev {
  background: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  -webkit-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
}

.fqiqOX .swiper-container .swiper-button-next.swiper-button-disabled,
.fqiqOX .swiper-container .swiper-button-prev.swiper-button-disabled {
  opacity: 0;
}

.fqiqOX .swiper-container .swiper-pagination .swiper-pagination-bullet {
  background: #ffffff;
}

/* sc-component-id: TplSwiper__IconButton-sc-74hyzq-1 */

.bpwrVb {
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.bpwrVb .icon {
  border: 2px solid #ffffff;
  border-radius: 50%;
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
}

/* sc-component-id: OrHorizontalList__TitleBlock-gnyrxh-0 */

.gixHfD {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin-top: -30px !important;
}

.gixHfD .block-body {
  padding-top: 1em;
}

.kjHINZ {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  padding-top: 40px;
}

.kjHINZ .block-body {
  padding-top: 1em;
}

.bsfUOK {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  padding-bottom: 30px;
}

.bsfUOK .block-body {
  padding-top: 1em;
}

.kLPgbo {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #fff428;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #fff428;
  background: #000;
  padding: 40px 0;
}

.kLPgbo .block-body {
  padding-top: 1em;
}

.cegzSz {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
}

.cegzSz .block-body {
  padding-top: 1em;
}

.hTCHaY {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  border-top: 1px solid #1e90ff;
  margin-top: 20px;
}

.hTCHaY .block-body {
  padding-top: 1em;
}

.kwlVOf {
  background-color: #212121;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  border-top: 1px solid #9e8200;
  padding-top: 20px;
}

.kwlVOf .block-body {
  padding-top: 1em;
}

/* sc-component-id: OrHorizontalList__Swiper-gnyrxh-1 */

.XMroH .swiper-wrapper {
  -webkit-transform: translate3d(1px, 0, 0);
  -ms-transform: translate3d(1px, 0, 0);
  transform: translate3d(1px, 0, 0);
}

.XMroH .swiper-button-prev:before,
.XMroH .swiper-button-next:before {
  content: '';
  position: absolute;
  display: block;
  width: 2.5em;
  height: 30em;
}

.XMroH .swiper-button-prev svg,
.XMroH .swiper-button-next svg {
  display: none;
}

.XMroH .swiper-button-prev:before {
  top: calc(15px - 15em);
  left: -12px;
  background: linear-gradient(to left, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%);
}

.XMroH .swiper-button-next:before {
  top: calc(15px - 15em);
  right: -12px;
  background: linear-gradient(to right, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%);
}

@media (min-width: 835px) {
  .XMroH .swiper-button-prev svg,
  .XMroH .swiper-button-next svg {
    display: inline-block;
  }
}

/* sc-component-id: Banner__Container-sc-1ldf0wd-0 */

.hQhsYY {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: Banner__PageWrapper-sc-1ldf0wd-1 */

.fJjUbC {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* sc-component-id: Banner__IconButton-sc-1ldf0wd-2 */

.cIxATt {
  background: none !important;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 29px;
  width: 29px;
  top: calc(50% - 14px);
}

.cIxATt .icon {
  border: 2px solid #ffffff;
  border-radius: 50%;
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
}

/* sc-component-id: Banner__ContentBanner-sc-1ldf0wd-3 */

.lBDzD {
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 25px 0 25px 0;
}

.lBDzD a {
  display: inline-block;
  width: auto;
  margin: auto;
}

.lBDzD a.noLink {
  cursor: auto;
}

.lBDzD a img {
  width: auto;
  margin: auto;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .lBDzD a img {
    max-width: 100%;
  }
}

.lBDzD .swiper-wrapper {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.lBDzD .swiper-button-disabled {
  display: none !important;
}

/* sc-component-id: AtIconButton__Button-kz6x7x-0 */

.IVHCz {
  border: none;
  background: rgba(0, 0, 0, 0);
  outline: none;
  padding: 8px;
  margin: 0;
  cursor: pointer;
}

/* sc-component-id: OrMainSlider__TitleBlock-sc-1sw560a-0 */

.eqbnri {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
}

.eqbnri .block-body {
  padding-top: 1em;
}

/* sc-component-id: OrMainSlider__Swiper-sc-1sw560a-1 */

.fNqDmr {
  background: #212121;
}

.fNqDmr .swiper-container .swiper-button-next,
.fNqDmr .swiper-container .swiper-button-prev {
  display: none;
}

@media (max-width: 835px) and (orientation: landscape) {
  .fNqDmr {
    padding-top: 42.857142857142854%;
  }
}

@media (min-width: 835px) {
  .fNqDmr {
    padding-top: 42.857142857142854%;
  }
  .fNqDmr .swiper-container .swiper-button-next,
  .fNqDmr .swiper-container .swiper-button-prev {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.fNqDmr.swipersliderkids {
  margin: auto;
}

.fNqDmr.swipersliderkids .swiper-container .swiper-button-next,
.fNqDmr.swipersliderkids .swiper-container .swiper-button-prev {
  display: block;
  opacity: unset;
  bottom: 220px;
  top: unset;
}

@media (max-width: 1300px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-next,
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-prev {
    bottom: 181px;
  }
}

@media (max-width: 1300px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-next {
    right: 41%;
  }
}

@media (max-width: 1024px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-next {
    right: 50%;
  }
}

@media (max-width: 835px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-next {
    display: none;
  }
}

@media (max-width: 1300px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-prev {
    left: 50%;
  }
}

@media (max-width: 1024px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-prev {
    left: 39%;
  }
}

@media (max-width: 835px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-button-prev {
    display: none;
  }
}

.fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
  top: 67%;
  text-align: right;
  width: 83.5%;
  height: 25px;
  z-index: 1;
}

@media (min-width: 1950px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
    display: none;
  }
}

@media (max-width: 1440px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
    top: 55%;
    width: 94.5%;
  }
}

@media (max-width: 1300px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
    top: 58%;
    width: 98.5%;
  }
}

@media (max-width: 1024px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
    top: 47%;
  }
}

@media (max-width: 768px) {
  .fNqDmr.swipersliderkids .swiper-container .swiper-pagination {
    top: unset;
    width: 100%;
    bottom: 5px;
    text-align: center;
  }
}

/* sc-component-id: OrMainSlider__Rating-sc-1sw560a-3 */

.jIQQYQ {
  position: absolute;
  top: 70px;
  right: 47px;
}

@media (min-width: 768px) {
  .jIQQYQ {
    top: 120px;
  }
}

/* sc-component-id: OrMainSlider__TextContainer-sc-1sw560a-4 */

.ezdGwV {
  max-width: 500px;
  font-size: 10px;
}

@media (min-width: 768px) {
  .ezdGwV {
    font-size: 13px;
  }
}

@media (min-width: 1024px) {
  .ezdGwV {
    font-size: initial;
  }
}

/* sc-component-id: OrMainSlider__Title-sc-1sw560a-5 */

.fTLCes {
  font-family: 'BebasNeue Regular', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
  color: #ffffff;
  color: #ffffff;
  font-size: 2.475em;
  line-height: 1em;
  margin: 0.3em 0 0 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  white-space: normal;
  text-shadow: none;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* sc-component-id: OrMainSlider__Summary-sc-1sw560a-6 */

.kSXrvW {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  color: #ffffff;
  font-size: 1.25em;
  line-height: 1em;
  color: #ffffff;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
  font-weight: normal;
}

@media (min-width: 768px) {
  .kSXrvW {
    white-space: normal;
    overflow: initial;
    display: block;
  }
}

@media (max-width: 1024px) {
  .kSXrvW.sumarysliderkids {
    width: 63%;
  }
}

/* sc-component-id: OrMainSlider__Slide-sc-1sw560a-7 */

.iEuiaK {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: OrMainSlider__GradientBg-sc-1sw560a-8 */

.lljWhc {
  display: block;
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  bottom: -5px;
  background: linear-gradient(to bottom, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%);
}

/* sc-component-id: OrMainSlider__BrandContainer-sc-1sw560a-9 */

.dHJEXh {
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 8%;
}

@media (min-width: 768px) {
  .dHJEXh {
    width: 100%;
    left: 0;
    right: 0;
  }
}

.dHJEXh .brand,
.dHJEXh .content {
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-width: 50%;
}

@media (min-width: 768px) {
  .dHJEXh .brand,
  .dHJEXh .content {
    -webkit-flex-basis: initial;
    -ms-flex-preferred-size: initial;
    flex-basis: initial;
    max-width: initial;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .dHJEXh .brand,
  .dHJEXh .content {
    -webkit-flex-basis: initial;
    -ms-flex-preferred-size: initial;
    flex-basis: initial;
    max-width: initial;
  }
}

.dHJEXh .brand img {
  height: auto;
  width: 100%;
  object-fit: contain;
  object-position: right;
}

.dHJEXh .title {
  font-size: 2.5em;
  overflow: visible !important;
}

@media (min-width: 375px) {
  .dHJEXh .title {
    font-size: 2.875em;
  }
}

.dHJEXh.brandslider {
  left: 2%;
}

.dHJEXh.brandslider .brand {
  border-right: none;
}

.dHJEXh.brandslider .brand img {
  margin-bottom: 15px;
  object-position: left;
}

@media (max-width: 835px) {
  .dHJEXh.brandslider .brand img {
    margin-bottom: 0px;
  }
}

@media (max-width: 425px) {
  .dHJEXh.brandslider .titlesliderkids {
    font-size: 1.475em;
  }
}

/* sc-component-id: OrMainSlider__ImgContainer-sc-1sw560a-10 */

.elKXgD {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

.elKXgD img,
.elKXgD picture {
  width: 100%;
  max-width: 100%;
}

/* sc-component-id: OrMainSlider__LabelContainer-sc-1sw560a-11 */

.jtPbrP {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 15px;
  width: auto;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: #ffffff;
}

.jtPbrP a {
  color: #ffffff;
}

.jtPbrP span {
  margin-left: 5px;
  font-size: 20px;
}

@media (max-width: 835px) {
  .jtPbrP.play-icon-sliderkids {
    margin-top: 0px;
  }
  @media (max-width: 320px) {
    .jtPbrP.play-icon-sliderkids span {
      font-size: 14px;
      padding-top: 7px;
    }
  }
}

/* sc-component-id: OrMainSlider__LinkContainer-sc-1sw560a-12 */

.XPYod {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  -webkit-text-decoration: none;
  text-decoration: none;
}

.XPYod:hover .play-icon {
  opacity: 1;
  -webkit-animation: fadein 1s;
  -moz-animation: fadein 1s;
  -ms-animation: fadein 1s;
  -o-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  animation: fadein 1s;
}

@media (max-width: 1300px) {
  .XPYod:hover .play-icon {
    width: 6%;
  }
}

@media (max-width: 768px) {
  .XPYod:hover .play-icon {
    width: 18%;
    height: auto;
    position: absolute;
    top: 25%;
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  .XPYod from {
    opacity: 0;
  }
  .XPYod to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  .XPYod from {
    opacity: 0;
  }
  .XPYod to {
    opacity: 1;
  }
}

@-ms-keyframes fadein {
  .XPYod from {
    opacity: 0;
  }
  .XPYod to {
    opacity: 1;
  }
}

@-o-keyframes fadein {
  .XPYod from {
    opacity: 0;
  }
  .XPYod to {
    opacity: 1;
  }
}

/* sc-component-id: OrMainSlider__Icon-sc-1sw560a-13 */

.LnQAW {
  opacity: 0;
  -webkit-transition: opacity 100ms ease-out;
  transition: opacity 100ms ease-out;
  -webkit-filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.4));
}

.LnQAW.playiconsliderkids {
  display: none;
}

/* sc-component-id: OrMainSlider__LitlePlayIcon-sc-1sw560a-14 */

.cHDjNu {
  opacity: 1;
}

/* sc-component-id: OrMainSlider__ToolbarButtons-sc-1sw560a-15 */

.bLkLaD {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

/* sc-component-id: OrMainSlider__SocialBtns-sc-1sw560a-16 */

.bBLNmX {
  margin-top: 15px;
  margin-left: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 9999;
}

/* sc-component-id: OrMainSlider__MyListcontainer-sc-1sw560a-17 */

.dvLPtz {
  margin-top: 15px;
  margin-left: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 9999;
}

/* sc-component-id: OutStandingTwoCover__TitleBlock-sc-1ct38ye-0 */

.bjVHoX {
  padding-top: 0.75em;
}

.bjVHoX .block-body {
  padding-top: 1em;
}

/* sc-component-id: PodcastWidget__IconButton-fwy4wi-4 */

.XXBeR {
  background: none !important;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 29px;
  width: 29px;
  top: calc(50% - 14px);
}

.XXBeR .icon {
  border: 2px solid #ffffff;
  border-radius: 50%;
  -webkit-filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
}

/* sc-component-id: PodcastMainItem__LitlePlayIcon-sc-73ukwa-10 */

.eEPhke {
  opacity: 1;
}

/* sc-component-id: OrCineWidget__Wrapper-l063o1-0 */

.hpbDHw {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

.hpbDHw .swiper-button-prev::before {
  content: '';
  top: calc(15px - 18em);
  left: -12px;
  position: absolute;
  width: 40px;
  height: 37em;
  background: linear-gradient(to left, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%);
}

@media screen and (max-width: 767px) {
  .hpbDHw .swiper-button-prev {
    left: 0px;
  }
}

@media screen and (min-width: 768px) {
  .hpbDHw .swiper-button-prev {
    display: none;
  }
}

.hpbDHw .swiper-button-next::before {
  content: '';
  top: calc(15px - 18em);
  right: -12px;
  position: absolute;
  width: 40px;
  height: 37em;
  background: linear-gradient(to right, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%);
}

@media screen and (max-width: 767px) {
  .hpbDHw .swiper-button-next {
    right: 3px;
  }
}

@media screen and (min-width: 768px) {
  .hpbDHw .swiper-button-next {
    display: none;
  }
}

/* sc-component-id: OrCineWidget__InnerWrapper-l063o1-1 */

.jGgkkT {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  overflow: hidden;
}

/* sc-component-id: OrCineWidget__CinemaList-l063o1-2 */

.ifuyqb {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .ifuyqb {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding: 0;
  }
  .ifuyqb > div > div:first-child {
    margin-right: 50px;
  }
}

/* sc-component-id: OrCineWidget__TitleBlock-l063o1-3 */

.ffFeHZ {
  padding-top: 0.75em;
  padding-bottom: 1em;
}

.ffFeHZ .inner-container {
  padding: 0;
}

/* sc-component-id: CineItem__Wrapper-sc-17fhyl7-0 */

.ccRAJn {
  position: relative;
  width: 100%;
  background-color: black;
}

@media screen and (min-width: 768px) {
  .ccRAJn {
    background-color: transparent;
    width: 610px;
    min-width: 610px;
    min-height: 343px;
  }
  .ccRAJn:hover .containerHover {
    left: 0;
  }
}

.etHTQa {
  position: relative;
  width: 100%;
  background-color: black;
}

@media screen and (min-width: 768px) {
  .etHTQa {
    background-color: transparent;
    width: 610px;
    min-width: 610px;
    min-height: 343px;
  }
  .etHTQa:hover .containerHover {
    right: 0;
  }
}

/* sc-component-id: CineItem__Image-sc-17fhyl7-1 */

.gfKjFg {
  max-width: 610px;
}

@media screen and (max-width: 767px) {
  .gfKjFg {
    display: none;
  }
}

/* sc-component-id: CineItem__Link-sc-17fhyl7-2 */

.fdWvZp {
  position: relative;
  display: inline-block;
  -webkit-text-decoration: none;
  text-decoration: none;
}

/* sc-component-id: CineItem__Label-sc-17fhyl7-3 */

.kfFUYQ {
  position: absolute;
  left: 20px;
  top: 20px;
}

@media screen and (max-width: 767px) {
  .kfFUYQ {
    display: none !important;
  }
}

/* sc-component-id: CineItem__HoverLayer-sc-17fhyl7-4 */

.dGcDol {
  width: 100%;
  top: 0px;
  height: 99%;
  background: black;
  z-index: 9999;
}

@media screen and (min-width: 768px) {
  .dGcDol {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 954px;
    -webkit-transition: left 1s ease-in-out;
    transition: left 1s ease-in-out;
    left: -200%;
    box-shadow: 20px 22px 30px -10px black;
  }
}

.dGcDol h3 {
  font-size: 25px;
  font-family: bebas-neue, sans-serif;
  color: white;
  line-height: 1.2;
  text-align: left;
  font-weight: 400;
  margin: 0;
  padding: 0;
  max-height: 86px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media screen and (min-width: 768px) {
  .dGcDol h3 {
    font-size: 35.99px;
    margin-bottom: 5px;
  }
}

.fggSkh {
  width: 100%;
  top: 0px;
  height: 99%;
  background: black;
  z-index: 9999;
}

@media screen and (min-width: 768px) {
  .fggSkh {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 954px;
    -webkit-transition: right 1s ease-in-out;
    transition: right 1s ease-in-out;
    right: -200%;
    box-shadow: -20px 22px 30px -10px black;
  }
}

.fggSkh h3 {
  font-size: 25px;
  font-family: bebas-neue, sans-serif;
  color: white;
  line-height: 1.2;
  text-align: left;
  font-weight: 400;
  margin: 0;
  padding: 0;
  max-height: 86px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media screen and (min-width: 768px) {
  .fggSkh h3 {
    font-size: 35.99px;
    margin-bottom: 5px;
  }
}

/* sc-component-id: CineItem__TrailerContainer-sc-17fhyl7-5 */

.iqHDvi {
  position: relative;
  width: 100%;
  z-index: 0;
}

@media screen and (min-width: 768px) {
  .iqHDvi {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin: 0 auto 10px;
    width: 64%;
  }
}

/* sc-component-id: CineItem__Trailer-sc-17fhyl7-6 */

.fwBGGK {
  width: 100%;
}

.fwBGGK > div {
  border: 0;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .fwBGGK {
    max-width: 768px;
    margin-top: 0;
    margin-left: 0;
  }
}

/* sc-component-id: CineItem__MetadataContainer-sc-17fhyl7-7 */

.djtSGB {
  position: relative;
  width: 85%;
  z-index: 1;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .djtSGB {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 35%;
    margin: 0 auto;
  }
}

/* sc-component-id: CineItem__MetadataInnerContainer-sc-17fhyl7-8 */

.jJoQZA {
  max-height: 295px;
  max-width: 410px;
  width: 100%;
  height: 100%;
  margin: 0 25px;
}

@media screen and (max-width: 767px) {
  .jJoQZA {
    margin: 10px 34px;
  }
}

/* sc-component-id: CineItem__ButtonsContainer-sc-17fhyl7-9 */

.ihVHCE {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

/* sc-component-id: CineItem__Duration-sc-17fhyl7-10 */

.kMQEaD {
  color: #b4b4b4;
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  line-height: 1.9375em;
}

/* sc-component-id: CineItem__ListenNow-sc-17fhyl7-11 */

.fJfWKR {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  width: auto;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: #ffffff;
  margin-right: 20px;
  margin-bottom: 21px;
  margin-top: 0;
}

.fJfWKR a {
  color: #ffffff;
}

.fJfWKR span {
  margin-left: 5px;
  font-size: 1em;
  font-weight: 600;
  margin-top: 5px;
}

/* sc-component-id: CineItem__DescriptionWrapper-sc-17fhyl7-12 */

.kYAvzD {
  font-size: 18px;
  font-weight: 500;
  color: #fffefe;
  line-height: 1.2;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 35px;
  height: 106px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 1024px) {
  .kYAvzD {
    max-width: 97%;
    margin: 5px auto 20px auto;
  }
}

@media screen and (max-width: 767px) {
  .kYAvzD {
    display: none;
  }
}

.kYAvzD strong,
.kYAvzD em {
  font-size: 18px;
  line-height: 1.2;
}

@media screen and (max-width: 767px) {
  .kYAvzD {
    display: inline-block;
  }
}

/* sc-component-id: AtImgLink__ImgLink-sc-1ji04qf-0 */

.fegtQU {
  display: block;
  opacity: 0.8;
}

.fegtQU img {
  width: 100%;
  max-width: 100%;
}

.bzWmGU {
  display: block;
  opacity: 1;
}

.bzWmGU img {
  width: 100%;
  max-width: 100%;
}

/* sc-component-id: section__Container-sc-190tfq4-0 */

.jglJjI {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: AtLogo__LogoLink-si2gse-0 */

.eFdoju {
  display: block;
  margin-left: -8px;
}

@media (min-width: 1024px) {
  .eFdoju {
    margin-left: -17px;
  }
}

@media (min-width: 1440px) {
  .eFdoju {
    margin-left: -8px;
  }
}

.eFdoju .logo {
  width: auto !important;
  max-width: initial !important;
  height: 40px;
  -webkit-transition: height 0.5s ease;
  transition: height 0.5s ease;
}

@media (min-width: 960px) {
  .eFdoju .logo {
    height: 50px;
  }
}

/* sc-component-id: AtTextLink__Link-sc-1mrxibb-0 */

.iMBqoc {
  font-family: 'Dosis', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.iMBqoc:active {
  -webkit-text-decoration: none;
  text-decoration: none;
}

.iMBqoc:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

.jalbS {
  font-family: 'Dosis', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  text-transform: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.jalbS:active {
  -webkit-text-decoration: none;
  text-decoration: none;
}

.jalbS:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

/* sc-component-id: AtTextLink__IconLeft-sc-1mrxibb-1 */

.IHUBP {
  display: inline-block;
  margin-right: 10px;
  pointer-events: none;
}

/* sc-component-id: MolNavbar__Navbar-sc-1ovhdmy-0 */

.kHHSCX {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin: 0px 20px;
}

/* sc-component-id: MolNavbar__NavbarButton-sc-1ovhdmy-1 */

.gkLvNN {
  display: block;
  box-sizing: border-box;
  padding: 0px 20px;
  line-height: 80px;
  -webkit-transition: line-height 0.5s ease;
  transition: line-height 0.5s ease;
  border-right: 1px solid #545454;
}

.gkLvNN:hover {
  background-color: #009bdb;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.gkLvNN:hover:not([href]) {
  cursor: default;
}

/* sc-component-id: MolInputSearch__Container-sc-1ph5lrp-0 */

.gKTUqY {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.gKTUqY form {
  display: inherit;
  -webkit-box-pack: inherit;
  -webkit-justify-content: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  -webkit-align-items: inherit;
  -webkit-box-align: inherit;
  -ms-flex-align: inherit;
  align-items: inherit;
}

/* sc-component-id: MolMenuCOD__Container-sc-16jdr3r-0 */

.yznpj {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: MolMenuCOD__MenuBlock-sc-16jdr3r-1 */

.bHhcgp {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;
  width: auto;
  left: -10px;
}

/* sc-component-id: MolMenuCOD__Menu-sc-16jdr3r-2 */

.gIdhsh {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: MolMenuCOD__MenuItem-sc-16jdr3r-3 */

.dSsyKF {
  font-weight: normal;
  margin-bottom: 5px;
}

/* sc-component-id: MolMenuCOD__ContentBlock-sc-16jdr3r-4 */

.hABRnM {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  max-height: 86%;
  margin-top: 20px;
  border-left: 1px solid #009bdb;
}

/* sc-component-id: MolMenuLS__Container-sc-1mj2srx-0 */

.eTRRwO {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/* sc-component-id: MolMenuLS__ImgLink-sc-1mj2srx-1 */

.dwhsWo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 270px;
  height: 124px;
  background-color: #131313;
  margin: 10px;
}

.dwhsWo:hover {
  -webkit-animation: 1s bpYDhl ease infinite;
  animation: 1s bpYDhl ease infinite;
}

.dwhsWo img {
  width: 60%;
}

/* sc-component-id: MolMenuMobile__MenuMobile-v2sopo-1 */

.gNWxDq {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: fixed;
  width: 320px;
  height: 100vh;
  top: 0;
  left: -320px;
  -webkit-transition: left 400ms ease;
  transition: left 400ms ease;
  z-index: 9999;
  background: #212121;
}

.gNWxDq .mobile-menu {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: none;
}

.gNWxDq .mobile-menu .mobile-menu-container {
  padding: 0.5em 0;
  box-shadow: initial;
  background: none;
}

.gNWxDq .mobile-menu .mobile-menu-container .mobile-menu-link {
  height: 2.1em !important;
  display: block;
}

.gNWxDq .mobile-menu .mobile-menu-container .mobile-menu-link.imgStyleMobile {
  height: 42px !important;
}

.gNWxDq .mobile-menu .mobile-menu-container .mobile-menu-link.imgStyleMobile img {
  height: 100%;
  width: auto;
  max-width: auto;
}

.gNWxDq .mobile-menu.metismenu:after {
  box-shadow: initial;
}

/* sc-component-id: MolMenuMobile__TopBar-v2sopo-6 */

.kaZGFx {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
}

.kaZGFx .close-button {
  margin-left: 0.5em;
}

.kaZGFx .input-search {
  margin: 0.5em 1em 0.5em 0;
}

/* sc-component-id: MolMenuMobile__ScrollView-v2sopo-7 */

.cxeyMg {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

/* sc-component-id: OrHeader__Header-sc-1x6b4le-0 */

.flrEJC {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.7);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0px 20px;
  width: calc(100% - 40px);
}

@media (min-width: 960px) {
  .flrEJC {
    width: calc(100% - 60px);
    padding: 0px 30px;
  }
}

/* sc-component-id: OrHeader__Border-sc-1x6b4le-1 */

.kNxLpA {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  width: calc(100% + 60px);
  height: 1px;
  background-color: #009bdb;
}

/* sc-component-id: OrHeader__Menu-sc-1x6b4le-2 */

.gJJULp {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 56px;
  -webkit-transition: height 0.5s ease;
  transition: height 0.5s ease;
  padding: 0;
}

@media (min-width: 1025px) {
  .gJJULp {
    height: 80px;
  }
}

.gJJULp .logo img {
  width: 100%;
  max-width: 100%;
}

@media (min-width: 960px) {
  .gJJULp .logo {
    -webkit-flex-basis: initial;
    -ms-flex-preferred-size: initial;
    flex-basis: initial;
  }
  .gJJULp .logo img {
    width: auto;
    max-width: 100%;
  }
}

/* sc-component-id: OrHeader__Navbar-sc-1x6b4le-3 */

.kAVABN {
  -webkit-flex: 1 1 50%;
  -ms-flex: 1 1 50%;
  flex: 1 1 50%;
  display: none;
  margin: 0;
}

@media (min-width: 1025px) {
  .kAVABN {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 0 20px;
  }
}

/* sc-component-id: OrHeader__ButtonIconGroup-sc-1x6b4le-5 */

.gUbmjw {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.gUbmjw .kids-button-wrapper {
  margin: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  -webkit-flex-basis: 132px;
  -ms-flex-preferred-size: 132px;
  flex-basis: 132px;
}

.gUbmjw .user-icon,
.gUbmjw .input-search {
  margin-right: 20px;
  -webkit-flex-basis: 40px;
  -ms-flex-preferred-size: 40px;
  flex-basis: 40px;
}

.gUbmjw .bars-icon {
  display: block;
}

@media (min-width: 1024px) {
  .gUbmjw .bars-icon {
    display: none;
  }
  .gUbmjw .user-icon,
  .gUbmjw .input-search {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

/* sc-component-id: OrHeader__SubMenu-sc-1x6b4le-6 */

.jgKeYC {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: block;
  width: 100%;
  padding: 0;
  height: 0px;
  max-width: initial;
}

/* sc-component-id: OrHeader__MenuCOD-sc-1x6b4le-7 */

.bQHbPU {
  display: none;
  width: auto;
  padding-bottom: 20px;
}

/* sc-component-id: OrHeader__MenuLS-sc-1x6b4le-8 */

.hyLmch {
  margin-top: 30px;
  margin-bottom: 30px;
  display: none;
}

/* sc-component-id: OrHeader__BarsIconButton-sc-1x6b4le-9 */

.bceAaI {
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 8px 8px 6px 8px;
}

/* sc-component-id: OrHeader__ComingSoonCover-sc-1x6b4le-11 */

.dblDjl {
  display: none;
}

@media (min-width: 1024px) {
  .dblDjl {
    display: block;
  }
}

/* sc-component-id: OrHeader__MobileComingSoonCover-sc-1x6b4le-12 */

.ceqVbP {
  margin-bottom: 3em;
}

/* sc-component-id: OrHeader__ContainerMenuMobile-sc-1x6b4le-13 */

.cHOMMK {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: none;
}

.cHOMMK .dummy-link {
  display: block;
  position: inherit;
  width: inherit;
  height: inherit;
}

/* sc-component-id: MolBrands__Container-sc-1wtrau-0 */

.bNFSQK {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/* sc-component-id: MolBrands__ImgLink-sc-1wtrau-1 */

.gBHnMO {
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 375px) {
  .gBHnMO {
    margin-right: 18px;
    margin-left: 18px;
  }
}

@media (min-width: 768px) {
  .gBHnMO {
    margin-right: 0px;
    margin-left: 0px;
  }
}

.gBHnMO img {
  width: initial;
  max-width: initial;
  height: 100%;
}

@media (min-width: 768px) {
  .gBHnMO:first-child {
    margin-left: 0px;
  }
  .gBHnMO:first-child:after {
    content: '';
    width: 1px;
    height: 38px;
    background-color: rgba(180, 180, 180, 0.5);
    margin-right: 10px;
    margin-left: 8px;
  }
}

@media (min-width: 768px) {
  .gBHnMO:last-child {
    margin-right: 0px;
  }
}

/* sc-component-id: MolSecondaryNavbar__Navbar-sc-1ly2f5p-0 */

.fUzcQc {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .fUzcQc {
    height: 55px;
  }
}

/* sc-component-id: MolSecondaryNavbar__TextLink-sc-1ly2f5p-1 */

.eFkyjT {
  -webkit-flex-basis: calc(50% - 20px);
  -ms-flex-preferred-size: calc(50% - 20px);
  flex-basis: calc(50% - 20px);
  margin: 0px;
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #b4b4b4;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
}

@media (min-width: 768px) {
  .eFkyjT {
    -webkit-flex-basis: calc(25% - 20px);
    -ms-flex-preferred-size: calc(25% - 20px);
    flex-basis: calc(25% - 20px);
  }
}

@media (min-width: 1024px) {
  .eFkyjT {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    background-color: rgba(0, 0, 0, 0);
    margin: 0px 10px;
    padding: 0px;
  }
  .eFkyjT:first-child {
    margin-left: 0px;
  }
  .eFkyjT:last-child {
    margin-right: 0px;
  }
}

/* sc-component-id: OrFooter__Footer-wp3gjy-0 */

.gncvRj {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #2b2a2a;
  box-sizing: border-box;
  padding: 30px 0px;
}

@media (min-width: 768px) {
  .gncvRj {
    padding: 40px 30px;
  }
}

/* sc-component-id: OrFooter__Row-wp3gjy-1 */

.kqJAMD {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

/* sc-component-id: OrFooter__Brands-wp3gjy-2 */

.dKXkTD {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 720px;
  margin-bottom: 15px;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

@media (min-width: 1024px) {
  .dKXkTD {
    -webkit-flex-basis: 70%;
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
  }
}

/* sc-component-id: OrFooter__SocialButtons-wp3gjy-3 */

.bgPYDJ {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 240px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  -webkit-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
}

@media (min-width: 960px) {
  .bgPYDJ {
    -webkit-flex-basis: 40%;
    -ms-flex-preferred-size: 40%;
    flex-basis: 40%;
  }
}

@media (min-width: 1024px) {
  .bgPYDJ {
    -webkit-flex-basis: 30%;
    -ms-flex-preferred-size: 30%;
    flex-basis: 30%;
    margin-left: 0px;
    margin-right: 0px;
  }
}

.bgPYDJ p {
  margin: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.bgPYDJ .MolSocialButtons__Label-ciyoGd {
  font-family: 'Dosis', sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: #b4b4b4;
}

.bgPYDJ .MolSocialButtons__IconButton-dleVzK {
  border-radius: 50%;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIwLjQ3IDEwMjAuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojOGU4ZjkwO30uY2xzLTJ7ZmlsbDojZmZmO29wYWNpdHk6MC4yO308L3N0eWxlPjwvZGVmcz48dGl0bGU+YnV0dG9uYmc8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJDYXBhXzEiIGRhdGEtbmFtZT0iQ2FwYSAxIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjUxMC4yNCIgY3k9IjUxMC4yNCIgcj0iNTEwLjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjExLjM1IDUxMC4yNCkgcm90YXRlKC00NSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0wLDUxMC4yNEMwLDc5MiwyMjguNDQsMTAyMC40OCw1MTAuMjQsMTAyMC40OFYwQzIyOC40NCwwLDAsMjI4LjQ0LDAsNTEwLjI0WiIvPjwvZz48L2c+PC9zdmc+);
  background-repeat: no-repeat;
  background-size: cover;
  width: 36px;
  height: 36px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* sc-component-id: OrFooter__SecondaryNavbar-wp3gjy-4 */

.fGqKIh {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  box-sizing: border-box;
}

@media (min-width: 1024px) {
  .fGqKIh {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    margin-top: 40px;
  }
}

/* sc-component-id: OrFooter__ContactInfo-wp3gjy-5 */

.dcJEzD {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0px;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

@media (min-width: 1024px) {
  .dcJEzD {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }
}

.dcJEzD .OrFooter__ContactInfoLine-cHnXyG {
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.5rem;
  color: #b4b4b4;
}

@media (min-width: 768px) {
  .dcJEzD .OrFooter__ContactInfoLine-cHnXyG {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .dcJEzD .OrFooter__ContactInfoLine-cHnXyG {
    text-align: right;
  }
}

/* sc-component-id: AtCookieAlert__Container-sc-5vjnka-0 */

.cwEQLm {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: #434343;
  z-index: 2147483646;
  width: 100vw;
  height: auto;
  padding: 20px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 768px) {
  .cwEQLm {
    height: 146px;
    padding: 0px;
  }
}

/* sc-component-id: AtCookieAlert__Body-sc-5vjnka-1 */

.bxecrI {
  display: block;
  position: relative;
  box-sizing: content-box;
  max-width: 1270px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 1024px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (min-width: 768px) {
  .bxecrI {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

/* sc-component-id: AtCookieAlert__Text-sc-5vjnka-2 */

.iGSySS {
  font-family: 'Dosis', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
  font-size: 1.125em;
  font-family: 'Dosis';
  line-height: 1.056;
  color: #c8c8c8;
  margin: 0em 0em 1.125em 0em;
  text-align: center;
}

@media (min-width: 768px) {
  .iGSySS {
    margin: 1em 2em 1em 0em;
    text-align: left;
  }
}

.iGSySS a {
  color: #c8c8c8;
  -webkit-text-decoration: none;
  text-decoration: none;
}

/* sc-component-id: AtCookieAlert__Button-sc-5vjnka-3 */

.evVftG {
  background: #009bdb;
  color: #ffffff;
  border: none;
  font-size: 1.375em;
  font-family: 'Dosis', sans-serif;
  line-height: 0.864;
  padding: 0;
  margin: 0;
  width: 224px;
  height: 59px;
  outline: none;
}

/* sc-component-id: app__Container-sc-18l6pk9-0 */

.hAFKlk {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}

/* sc-component-id: AtIcon__StyledIcon-boprg-0 */

.iswYYK {
  color: #009bdb;
}

.gLoOCx {
  display: inline-block;
  vertical-align: -0.125em;
  overflow: hidden;
  color: #ffffff;
}

.iUXCFf {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  color: #ffffff;
}

.eSRcoQ {
  color: #fff;
}

.gDvSIs {
  color: #ffffff;
}

/* sc-component-id: MolMenuMobile__MenuLink-v2sopo-8 */

.cGUpzm.metismenu-link {
  text-shadow: initial;
  color: #ffffff !important;
}

.cGUpzm.metismenu-link:hover {
  background: none;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.cARSoy {
  font-weight: normal;
}

.cARSoy.metismenu-link {
  text-shadow: initial;
  color: #009bdb;
}

.cARSoy.metismenu-link:hover {
  background: none;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.fWAvXX {
  font-weight: normal;
  padding-left: 0px !important;
  line-height: initial !important;
  margin: 1em;
}

.fWAvXX.metismenu-link {
  text-shadow: initial;
  color: #ffffff;
}

.fWAvXX.metismenu-link:hover {
  background: none;
  -webkit-text-decoration: none;
  text-decoration: none;
}

/* sc-component-id: MolPortada__Information-qu73t8-0 */

.ihUbpZ {
  font-family: 'Dosis', sans-serif;
  font-size: 10px;
  z-index: 1;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  width: 100%;
}

@media (min-width: 320px) {
  .ihUbpZ {
    margin-top: -300px;
  }
}

@media (min-width: 768px) {
  .ihUbpZ {
    margin-top: -400px;
  }
}

@media (min-width: 1024px) {
  .ihUbpZ {
    margin-top: -400px;
  }
}

/* sc-component-id: MolPortada__Etiqueta-qu73t8-1 */

.dyohsL {
  background: #ff0303;
  font-family: 'Dosis', sans-serif;
  font-size: 24px;
  color: #fff;
  padding-left: 15px;
  padding-right: 15px;
}

@media (min-width: 768px) {
  .dyohsL {
    margin-top: 30px;
  }
}

@media (min-width: 320px) {
  .dyohsL {
    font-size: 24px;
  }
}

/* sc-component-id: MolPortada__Titular-qu73t8-2 */

.ckaMcq {
  font-size: 82.6 px;
  color: #fff;
  font-weight: 600;
  font-family: 'BebasNeue Book', sans-serif;
  text-shadow: 2px 3px 5px #000;
  text-align: center;
}

@media (min-width: 320px) {
  .ckaMcq {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .ckaMcq {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .ckaMcq {
    font-size: 6rem;
  }
}

/* sc-component-id: MolPortada__Subtitulo-qu73t8-3 */

.cnraTu {
  font-size: 22px;
  color: #fff;
  text-shadow: 2px 3px 5px #000;
  text-align: center;
  font-family: 'Dosis', sans-serif;
}

@media (min-width: 320px) {
  .cnraTu {
    font-size: 22px;
  }
}

@media (min-width: 1024px) {
  .cnraTu {
    font-size: 22px;
  }
}

/* sc-component-id: MolPortada__Button-qu73t8-4 */

.ceQMya {
  border: 1px solid #ffffff;
  background: rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.ceQMya:hover {
  background-color: #009bdb;
}

@media (min-width: 768px) {
  .ceQMya {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}

@media (min-width: 1024px) {
  .ceQMya {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

/* sc-component-id: MolPortada__GradientBgVideo-qu73t8-6 */

.cmruew {
  position: relative;
  bottom: 0px;
  display: block;
  width: 100%;
  height: 150px;
  margin-bottom: 100px;
  margin-top: -135px;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.01) 1%,
    rgba(0, 0, 0, 0.98) 72%,
    rgba(0, 0, 0, 0.98) 99%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.01) 1%,
    rgba(0, 0, 0, 0.98) 72%,
    rgba(0, 0, 0, 0.98) 99%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.01) 1%,
    rgba(0, 0, 0, 0.98) 72%,
    rgba(0, 0, 0, 0.98) 99%
  );
  -webkit-filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#fa000000', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#fa000000', GradientType=0);
}

/* sc-component-id: MolTrailer__Wrapper-oqejlv-0 */

.cYBDyy {
  max-width: 1270px;
  width: 100%;
}

/* sc-component-id: MolTrailer__Container-oqejlv-1 */

.RxCIQ {
  color: #ffffff;
  z-index: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  margin-top: -100px;
  background-color: #000;
}

/* sc-component-id: MolTrailer__Superior-oqejlv-2 */

.rsIue {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 3;
}

@media (min-width: 320px) {
  .rsIue {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .rsIue {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
  .rsIue {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
}

/* sc-component-id: MolTrailer__Trailer-oqejlv-3 */

.uWSQs {
  display: inline-block;
}

@media (min-width: 320px) {
  .uWSQs {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .uWSQs {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .uWSQs {
    width: 45%;
  }
}

/* sc-component-id: MolTrailer__Acercade-oqejlv-4 */

.glxKzN {
  display: 'flex';
  -webkit-flex-direction: 'column';
  -ms-flex-direction: 'column';
  flex-direction: 'column';
  font-size: '3rem';
  z-index: 4;
}

@media (min-width: 320px) {
  .glxKzN {
    margin-top: 10px;
    width: 90%;
  }
}

@media (min-width: 768px) {
  .glxKzN {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .glxKzN {
    width: 45%;
  }
}

/* sc-component-id: AtBadge__Badge-sc-1bo9nbc-0 */

.innlqd {
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Dosis', sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  padding: 0.25em 0.5em;
  margin: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #00a99e;
}

.innlqd.brand-rtvc {
  background-color: #222222;
}

.innlqd.brand-ci {
  background-color: #cc9c3c;
}

.innlqd.brand-sc {
  background-color: #490db6;
}

.innlqd.brand-rn {
  background-color: #ca721b;
}

.innlqd.brand-rk {
  background-color: #c04e90;
}

.innlqd.brand-sm {
  background-color: #85bb52;
}

.innlqd.brand-rtvcplay {
  background-color: #68bcc9;
}

.cxKiCV {
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Dosis', sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  padding: 0.25em 0.5em;
  margin: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #fd0402;
}

.cxKiCV.brand-rtvc {
  background-color: #222222;
}

.cxKiCV.brand-ci {
  background-color: #cc9c3c;
}

.cxKiCV.brand-sc {
  background-color: #490db6;
}

.cxKiCV.brand-rn {
  background-color: #ca721b;
}

.cxKiCV.brand-rk {
  background-color: #c04e90;
}

.cxKiCV.brand-sm {
  background-color: #85bb52;
}

.cxKiCV.brand-rtvcplay {
  background-color: #68bcc9;
}

.cuLDTt {
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Dosis', sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  padding: 0.25em 0.5em;
  margin: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #ff0033;
}

.cuLDTt.brand-rtvc {
  background-color: #222222;
}

.cuLDTt.brand-ci {
  background-color: #cc9c3c;
}

.cuLDTt.brand-sc {
  background-color: #490db6;
}

.cuLDTt.brand-rn {
  background-color: #ca721b;
}

.cuLDTt.brand-rk {
  background-color: #c04e90;
}

.cuLDTt.brand-sm {
  background-color: #85bb52;
}

.cuLDTt.brand-rtvcplay {
  background-color: #68bcc9;
}

/* sc-component-id: MolProdInfoTrailer__Wrapper-sc-1oqx0zw-0 */

.eqvVdy .inner-container {
  padding-left: 0;
}

@media (min-width: 1024px) {
  .eqvVdy {
    max-width: 1270px;
    margin-left: -635px;
  }
}

/* sc-component-id: MolProdInfoTrailer__Container-sc-1oqx0zw-1 */

.gzVurX {
  color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 30px;
}

@media (min-width: 320px) {
  .gzVurX {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
  }
}

@media (min-width: 768px) {
  .gzVurX {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
  }
}

@media (min-width: 1024px) {
  .gzVurX {
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

/* sc-component-id: MolProdInfoTrailer__Trailer-sc-1oqx0zw-2 */

.jEhyUr {
  display: inline-block;
}

@media (min-width: 320px) {
  .jEhyUr {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .jEhyUr {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .jEhyUr {
    width: 50%;
  }
}

/* sc-component-id: MolProdInfoTrailer__Information-sc-1oqx0zw-3 */

.ikEWUI {
  display: 'flex';
  -webkit-flex-direction: 'column';
  -ms-flex-direction: 'column';
  flex-direction: 'column';
  font-size: '3rem';
}

@media (min-width: 320px) {
  .ikEWUI {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .ikEWUI {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .ikEWUI {
    width: 50%;
  }
}

/* sc-component-id: MolProdInfoTrailer__TitleBlock-sc-1oqx0zw-4 */

.iNJfmU {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
}

.iNJfmU .block-body {
  padding-top: 1em;
}

/* sc-component-id: MolProdInfoTrailer__Frase-sc-1oqx0zw-5 */

.ekNeZr {
  font-style: oblique;
  font-family: 'Dosis', sans-serif;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 60px;
  text-align: justify;
}

@media (min-width: 320px) {
  .ekNeZr {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .ekNeZr {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .ekNeZr {
    width: 90%;
  }
}

/* sc-component-id: MolProdInfoTrailer__Etiqueta-sc-1oqx0zw-6 */

.gmjJmk {
  background: #3fbfb2;
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  color: #fff;
  padding-left: 13px;
  padding-right: 13px;
  text-align: center;
}

@media (min-width: 320px) {
  .gmjJmk {
    width: 20%;
  }
}

@media (min-width: 768px) {
  .gmjJmk {
    width: 15%;
  }
}

@media (min-width: 1024px) {
  .gmjJmk {
    width: 13%;
  }
}

/* sc-component-id: MolProdInfoTrailer__Titular-sc-1oqx0zw-7 */

.fNxeUn {
  font-family: 'BebasNeue Book', sans-serif;
  text-transform: uppercase;
  font-size: 42px;
  color: #fff;
  text-align: left;
  margin-top: 10px;
}

@media (min-width: 320px) {
  .fNxeUn {
    font-size: 42px;
  }
}

@media (min-width: 1024px) {
  .fNxeUn {
    font-size: 42px;
  }
}

/* sc-component-id: MolProdInfoTrailer__Descripcion-sc-1oqx0zw-8 */

.fJEhsF {
  color: #fff;
  margin-top: 18px;
  text-align: justify;
  width: 90%;
}

@media (min-width: 320px) {
  .fJEhsF {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .fJEhsF {
    font-size: 18px;
  }
}

/* sc-component-id: MolProdInfoTrailer__NowButton-sc-1oqx0zw-9 */

.hEkdFO {
  background: rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 20px;
}

/* sc-component-id: MolProdInfoTrailer__ButtonContainer-sc-1oqx0zw-11 */

.krjBdB {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-top: 25px;
  padding-bottom: 20px;
}

/* sc-component-id: sc-keyframes-bpYDhl */

@-webkit-keyframes bpYDhl {
  0% {
    background-color: #131313;
  }
  50% {
    background-color: #2d2d2d;
  }
  100% {
    background-color: #131313;
  }
}

@keyframes bpYDhl {
  0% {
    background-color: #131313;
  }
  50% {
    background-color: #2d2d2d;
  }
  100% {
    background-color: #131313;
  }
}

/* sc-component-id: sc-keyframes-RabCa */

@-webkit-keyframes RabCa {
  50% {
    opacity: 0;
  }
}

@keyframes RabCa {
  50% {
    opacity: 0;
  }
}

/* sc-component-id: sc-keyframes-dOgGcg */

@-webkit-keyframes dOgGcg {
  from {
    opacity: 0;
    -webkit-transform: translatex(-300px);
    -ms-transform: translatex(-300px);
    transform: translatex(-300px);
  }
  to {
    opacity: 1;
    -webkit-transform: translatex(0);
    -ms-transform: translatex(0);
    transform: translatex(0);
  }
}

@keyframes dOgGcg {
  from {
    opacity: 0;
    -webkit-transform: translatex(-300px);
    -ms-transform: translatex(-300px);
    transform: translatex(-300px);
  }
  to {
    opacity: 1;
    -webkit-transform: translatex(0);
    -ms-transform: translatex(0);
    transform: translatex(0);
  }
}


/* Header mobile */
@media (max-width: 1024px) {
  .input-search,
  #menu-mobile-button {
    display: none;
  }
}

/* Footer */
@media (min-width: 1024px) {
  .dMRiTC {
    width: 49%;
    position: relative;
  }

  .dMRiTC::after {
    content: " ";
    height: 54px;
    border-right: 1px solid rgba(180, 180, 180, 0.5);
    right: 0px;
    position: absolute;
    top: 33%;
  }

  .lmsxaq {
      margin: 0px 0px 10px;
  }
  
  .gwLyLi {
    margin: 0px !important;
  }
}

.lmsxaq {
    line-height: 1.25rem;
    color: rgb(255, 255, 255);
    font-family: Dosis, sans-serif;
    font-size: 1.25em;
    font-weight: 300;
    width: 100%;
    margin: 0px 0px 10px;
}

.gwLyLi {
  margin: 0px 15px;
  padding: 0px;
  height: 40px;
  list-style: none;
  display: flex;
  width: 100%;
}

.hntsVm {
  max-width: 131px;
  margin: 0px 20px 0px 0px;
}

.hntsVm img {
  width: 100%;
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

/* Submenues */

.isdpbH {
  position: relative;
  box-sizing: border-box;
  width: initial;
  display: inline-block;
  padding-right: 28px;
  border-right: 1px solid rgb(0, 155, 219);
}

.gbxBWV:not([href]) {
  cursor: default !important;
  text-decoration: unset !important;
}
.gbxBWV {
  font-weight: normal;
  margin-bottom: 5px;
  color: rgb(243, 211, 51) !important;
  display: block;
}

.gbxBWV::after {
  content: "";
  position: absolute;
  top: 11px;
  width: 0px;
  height: 0px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid rgb(255, 255, 255);
  clear: both;
  margin-left: 5px;
}

.hwXhsz {
  font-weight: normal;
  margin-bottom: 5px;
  display: block;
}

.lishib {
  font-family: Dosis, sans-serif;
  font-size: 1.25rem;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(255, 255, 255);
}

.lishib:hover {
  text-decoration: underline;
}

.isdpbH:last-child {
  padding-right: 0px;
  border-right: none;
}

.isdpbH:nth-child(n+2) {
  margin-left: 37px;
}
.isdpbH {
  position: relative;
  box-sizing: border-box;
  width: initial;
  display: inline-block;
  padding-right: 28px;
  border-right: 1px solid rgb(0, 155, 219);
}
/* End Submenues */

footer {
  font-family: 'Dosis';
}

/* Footer mincit */
.OrFooter__ContactInfoFutureIsOurs-wp3gjy-6 {
  flex-basis: 59%;
}

.dNaHdC .textFooterLine {
  text-align: left;
  font-size: 15px;
  line-height: 1.5rem;
  color: rgb(180, 180, 180);
  display: flex;
  gap: 20px;
}

.dNaHdC .textFooterLine img {
  max-width: 240px;
  height: 51px;
}

@media screen and (max-width: 767px) {
  .dNaHdC.dNaHdC.dNaHdC {
    flex-basis: 100%;
  }
  .dNaHdC .textFooterLine {
      display: block;
      text-align: center;
      margin: 20px 0px 30px;
  }
  .dNaHdC .textFooterLine span {
    display: block;
    margin: 0px 20px 10px;
  }
}

`;
