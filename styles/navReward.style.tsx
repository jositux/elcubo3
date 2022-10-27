import { createGlobalStyle } from 'styled-components';

export const NavRewardStyles = createGlobalStyle`

body {
    font-family: Inter;
}

.nav {
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 11;
}

.nav a.back-to-season span {
    color: white;
    margin-left: 5px;
    margin-top: 12px;
    opacity: 0;
    transition: opacity 0.5s ease 0s;
    will-change: opacity;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    float: left;
}

.nav a.back-to-season img {
    float: left;
}

.nav a.back-to-season:hover span {
    opacity: 1;
}
`;
