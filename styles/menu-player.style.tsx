import { createGlobalStyle } from 'styled-components';

export const MenuPlayerStyle = createGlobalStyle`

body {
  font-family: Inter;
}

.nav {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 11;
  display: block !important;
}

.logo--image {
  width: 60px;
  height: auto;
  position: absolute;
  top: 160px;
  left: 40px;
  z-index: 11;
}

.icon-bell {
  width: 16px;
  height: 16px;
  background: #45B4C1;
  border-radius: 50%;
  padding: 2px;
  position: absolute;
  right: -5px;
  display: none;
}

/* Pane Slide */

.pane {
  position: fixed;
  top: 0;
  z-index: 100;
  right: -50%;
  padding: 1rem 2rem;
  height: 100vh;
  width: 30%;
  background: black;
  -webkit-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
  -moz-box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
  box-shadow: -58px 0px 66px 0px rgba(69, 180, 193, 0.1);
  transition: 0.5s all ease;
  overflow: hidden;
  color: white;
  font-family: 'Inter';
}

.pane h2,
.pane ul {
  font-size: 20px;
  font-weight: 400;
}

.pane h2 {
  margin-left: 10px;
  width: 250px;
}

.pane ul {
  margin-top: 10px;
  list-style-type: none;
  padding: 0px 20px;
  line-height: 2em;
  width: 250px;
}

.pane a:hover {
  cursor: pointer;
}

.pane ul a {
  color: #45B4C1;
  font-weight: 400;
  text-decoration: none;
}

.pane ul a:hover,
.pane ul a.active {
  color: white;
}

.pane ul a img {
  display: none;
  margin-left: 5px;
}

.pane ul a.active img {
  display: inline;
}

.pane-cover {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  background: black;
  opacity: 0.7;
  z-index: 20;
}

.pane-cover.visible {
  display: flex;
}

.pane.open {
  right: 0vw;
}

.menu-elcubo .icon-change {
  width: 34px;
  height: auto;
}

`;
