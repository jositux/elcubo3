import { createGlobalStyle } from 'styled-components';

export const RewardReflexiveStyles = createGlobalStyle`

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
        width: 295px;
    }
    .cover-link a span {
        font-size: 16px;
    }

    .cover-link a img {
        width: 25px;
    }

}

@media (max-width: 480px) {
    .reward-loading {
        width: 100%;
    }
}

.reward-loading {
    opacity: .5;
}

`;
