import React, { useEffect, useState } from 'react';
import { RTVCGlobalStyles } from 'styles/rtvc.style';

const Header = () => {

  useEffect(() => {
    const searchButton = document.getElementById('search_button');
    const searchInput = document.getElementById('inputsearch');
    const handleClickSearch = (e) => {
      e.preventDefault();
      const text = searchInput.value;
      window.location.href = `https://www.rtvcplay.co/buscar/${text}`;
    };
    searchButton.addEventListener('click', handleClickSearch);
    return () => {
      searchButton.removeEventListener('click', handleClickSearch);
    }
  }, []);

  return (
    <>
      <RTVCGlobalStyles />
      <header id="mainMenu" className="OrHeader__Header-sc-1x6b4le-0 flrEJC">
        <div className="resizecontainer OrHeader__Menu-sc-1x6b4le-2 gJJULp">
          <a className="logo AtLogo__LogoLink-si2gse-0 eFdoju" href="https://www.rtvcplay.co/">
            <img
              className="logo AtImg__Img-sc-31cwo7-0 gYLCMU"
              src="/images/logo-RTVCPlay-Header.png"
              alt="RTVCPlay"
            />
          </a>
          <nav className="OrHeader__Navbar-sc-1x6b4le-3 kAVABN MolNavbar__Navbar-sc-1ovhdmy-0 kHHSCX">
            <div>
              <a
                title="Películas"
                data-submenu="sub-ficcion"
                className="has-submenu MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                Películas
              </a>
            </div>
            <div>
              <a
                title="Series"
                data-submenu="sub-documental"
                className="has-submenu MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                Series
              </a>
            </div>
            <div>
              <a
                title="Pódcast"
                data-submenu="sub-podcast"
                className="has-submenu MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                Pódcast
              </a>
            </div>
            <div>
              <a
                title="Especiales"
                data-submenu="sub-especial"
                className="has-submenu MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                Especiales
              </a>
            </div>
            <div>
              <a
                title="En vivo"
                data-submenu="sub-vivo"
                className="has-submenu MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                <span className="AtTextLink__IconLeft-sc-1mrxibb-1 IHUBP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 17"
                    width="18"
                    height="18"
                    focusable="false"
                    aria-hidden="true"
                    className="AtIcon__StyledIcon-boprg-0 iswYYK Icons__SvgIcon-sc-10bknwo-0 iomDSz"
                    fill="none"
                  >
                    <image
                      id="image0"
                      width="17"
                      height="17"
                      x="0"
                      y="0"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEX/////AAD/////////
      ////////////////////////ycn/Pz//Bwj/AAD/////kJD/AQH/////////////x8f/AQH/////
      Pj7/////Bwj/////////Pz//////////AAD///89u+5uAAAAH3RSTlMAAAY5YHeALXRAj8vw/C6k
      +XYINpD4Xcxz8X1ezC9hzK6H9QAAAAFiS0dEAIgFHUgAAAAHdElNRQfkBw4ELhgMnGGxAAAAiklE
      QVQY022QWRKDIBBEB9B2YZHEFTXh/rcUQoJlxfc11TVL9xAFuChKlIXg9KWqkairJDQ4aVjsCEUr
      lVayDZUJO8JIZ33EdsDjST0wjD5hB6CnCZj9DwlMtAAuKwpYaAV0VjSw3vRc9szA9rllL7f+/ZCJ
      nnen3R49v25zETM5u2Espefiff7nAB5MD5vv+AofAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA3
      LTE0VDA0OjQ2OjI0KzAzOjAwzJSPrgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNy0xNFQwNDo0
      NjoyNCswMzowML3JNxIAAAAASUVORK5CYII="
                    />
                  </svg>
                </span>
                En vivo
              </a>
            </div>
            <div>
              <a
                id="link-ninos"
                href="https://www.rtvcplay.co/ninos"
                title="INFANTIL"
                className="MolNavbar__NavbarButton-sc-1ovhdmy-1 gkLvNN AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
              >
                <span className="AtTextLink__IconLeft-sc-1mrxibb-1 IHUBP">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 82 40"
                    width="40"
                    height="18"
                    focusable="false"
                    aria-hidden="true"
                    color="#009bdb"
                    className="AtIcon__StyledIcon-boprg-0 iswYYK Icons__SvgIcon-sc-10bknwo-0 YAwZO"
                  >
                    <image href="data:image/png;base64,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"></image>
                  </svg>
                </span>
                INFANTIL
              </a>
            </div>
          </nav>
          <div className="OrHeader__ButtonIconGroup-sc-1x6b4le-5 gUbmjw">
            <div className="input-search MolInputSearch__Container-sc-1ph5lrp-0 gKTUqY">
              <button
                color="rgba(0,0,0,0)"
                className="iconsearch AtIconButton__Button-kz6x7x-0 IVHCz"
              >
                <svg
                  viewBox="0 0 512 512"
                  height="22"
                  width="22"
                  aria-hidden="true"
                  focusable="false"
                  fill="currentColor"
                  id="Iconsearch"
                  color="#ffffff"
                  className="AtIcon__StyledIcon-boprg-0 gLoOCx"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
              <div className="AtSearchFocus__ContentSearch-sc-1yudiy5-1 cgABmB">
                <div>
                  <div
                    id="cover-search"
                    className="hidden"
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 10000,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '5px',
                        boxSizing: 'border-box',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px',
                        transform: 'translate3d(0px, 0px, 0px)',
                        transition:
                          'transform 500ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 500ms cubic-bezier(0, 0, 0.25, 1) 0s',
                        zIndex: 10002,
                      }}
                    >
                      <div className="AtSearchFocus__ContentCloseModal AtSearchFocus__ContentCloseModal-sc-1yudiy5-5 iiukhQ">
                        Cerrar
                        <button
                          color="rgba(0,0,0,0)"
                          className="AtSearchFocus__AtIconButtonCloseModal AtSearchFocus__AtIconButtonCloseModal-sc-1yudiy5-4 kLQqdk AtIconButton__Button-kz6x7x-0 IVHCz"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="52"
                            height="52"
                            aria-hidden="true"
                            color="#ffffff"
                            className="AtIcon__StyledIcon-boprg-0 gDvSIs Icons__SvgIcon-sc-10bknwo-0 gIkEiP"
                          >
                            <path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"></path>
                            <path d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"></path>
                            <path d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"></path>
                          </svg>
                        </button>
                      </div>

                      <button
                        color="rgba(0,0,0,0)"
                        className="AtSearchFocus__AtIconButtonSearchclose AtSearchFocus__AtIconButtonSearchclose-sc-1yudiy5-3 bBWseP AtIconButton__Button-kz6x7x-0 IVHCz"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 35 35"
                          width="32"
                          height="32"
                          aria-hidden="true"
                          color="#121212"
                          className="AtIcon__StyledIcon-boprg-0 gDvSIs Icons__SvgIcon-sc-10bknwo-0 jaEYJn"
                        >
                          <path
                            transform="translate(-1122 -458)"
                            className="cls-1"
                            d="M1139.5,493a17.444,17.444,0,0,1-6.4-1.2,1.166,1.166,0,1,1,.85-2.171,15.176,15.176,0,0,0,16.48-24.649,1.166,1.166,0,1,1,1.68-1.617A17.506,17.506,0,0,1,1139.5,493Zm-8.84-2.592a1.136,1.136,0,0,1-.63-0.186c-0.21-.134-0.41-0.272-0.61-0.414a1.164,1.164,0,0,1,1.34-1.9c0.18,0.124.36,0.243,0.53,0.359A1.164,1.164,0,0,1,1130.66,490.409Zm-3.11-2.6a1.161,1.161,0,0,1-.85-0.371,17.506,17.506,0,0,1,12.8-29.452,1.166,1.166,0,0,1,0,2.332,15.176,15.176,0,0,0-11.1,25.529A1.163,1.163,0,0,1,1127.55,487.811Zm20.33-25.176a1.177,1.177,0,0,1-.6-0.165,15.183,15.183,0,0,0-2.81-1.318,16.419,16.419,0,0,0-1.7-.478,1.164,1.164,0,0,1-.89-1.388,1.179,1.179,0,0,1,1.39-.889,17.332,17.332,0,0,1,5.21,2.073,1.159,1.159,0,0,1,.4,1.6A1.147,1.147,0,0,1,1147.88,462.635Zm-6.47,13.436-1.34,1.335,6.24,6.237a0.945,0.945,0,1,0,1.34-1.333Zm6.24-8.725a0.951,0.951,0,0,0-1.34,0l-6.81,6.816-6.82-6.816a0.942,0.942,0,1,0-1.33,1.335l6.81,6.814-6.81,6.815a0.939,0.939,0,0,0,0,1.333,0.934,0.934,0,0,0,1.33,0l14.97-14.962A0.96,0.96,0,0,0,1147.65,467.346Z"
                          ></path>
                        </svg>
                      </button>
                      <input
                        id="inputsearch"
                        type="text"
                        name="buscar"
                        placeholder=" Escribe tu búsqueda"
                        className="AtSearchFocus__Input-sc-1yudiy5-0 dkdikb"
                        defaultValue=""
                      />
                      <button
                        id="search_button"
                        color="rgba(0,0,0,0)"
                        className="AtSearchFocus__AtIconButtonSearch AtSearchFocus__AtIconButtonSearch-sc-1yudiy5-2 gUfhCd AtIconButton__Button-kz6x7x-0 IVHCz"
                      >
                        <svg
                          viewBox="0 0 512 512"
                          height="32"
                          width="32"
                          aria-hidden="true"
                          focusable="false"
                          fill="currentColor"
                          id="Iconsearch"
                          color="#ffffff"
                          className="AtIcon__StyledIcon-boprg-0 gLoOCx"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        zIndex: 10001,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="menu-mobile-button"
              color="rgba(0,0,0,0)"
              className="bars-icon OrHeader__BarsIconButton-sc-1x6b4le-9 bceAaI AtIconButton__Button-kz6x7x-0 IVHCz"
              type="button"
            >
              <svg
                viewBox="0 0 448 512"
                height="22"
                width="22"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                id="IconBars"
                color="#ffffff"
                className="AtIcon__StyledIcon-boprg-0 gLoOCx"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="OrHeader__Border-sc-1x6b4le-1 kNxLpA"></div>
        <div className="submenu-container OrHeader__SubMenu-sc-1x6b4le-6 jgKeYC">
          <div
            id="sub-ficcion"
            className="submenu OrHeader__MenuCOD-sc-1x6b4le-7 bQHbPU MolMenuCOD__Container-sc-16jdr3r-0 yznpj"
          >
            <div className="submenu-items MolMenuCOD__MenuBlock-sc-16jdr3r-1 kFvGBO">
              
            <div className="MolMenuCOD__Menu-sc-16jdr3r-2 isdpbH"><a title="Documentales" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 gbxBWV AtTextLink__Link-sc-1mrxibb-0 lishib">Documentales</a><a href="https://www.rtvcplay.co/peliculas-documentales" title="Largometrajes" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 hwXhsz AtTextLink__Link-sc-1mrxibb-0 lishib">Largometrajes</a><a href="https://www.rtvcplay.co/cortometrajes-documentales" title="Cortometrajes" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 hwXhsz AtTextLink__Link-sc-1mrxibb-0 lishib">Cortometrajes</a></div>
            <div className="MolMenuCOD__Menu-sc-16jdr3r-2 isdpbH"><a title="Ficción" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 gbxBWV AtTextLink__Link-sc-1mrxibb-0 lishib">Ficción</a><a href="https://www.rtvcplay.co/peliculas-ficcion" title="Largometrajes" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 hwXhsz AtTextLink__Link-sc-1mrxibb-0 lishib">Largometrajes</a><a href="https://www.rtvcplay.co/cortometrajes-ficcion" title="Cortometrajes" className="MolMenuCOD__MenuItem-sc-16jdr3r-3 hwXhsz AtTextLink__Link-sc-1mrxibb-0 lishib">Cortometrajes</a></div>
              
            </div>
            <div className="MolMenuCOD__ContentBlock-sc-16jdr3r-4 hABRnM"></div>
          </div>
          <div
            id="sub-documental"
            className="submenu OrHeader__MenuCOD-sc-1x6b4le-7 bQHbPU MolMenuCOD__Container-sc-16jdr3r-0 yznpj"
          >
            <div className="submenu-items MolMenuCOD__MenuBlock-sc-16jdr3r-1 kFvGBO">
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/series-documentales"
                  title="Documentales"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Documentales
                </a>
              </div>
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/series-ficcion"
                  title="Ficción"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Ficción
                </a>
              </div>
              
            </div>
            <div className="MolMenuCOD__ContentBlock-sc-16jdr3r-4 hABRnM"></div>
          </div>
          <div
            id="sub-podcast"
            className="submenu OrHeader__MenuCOD-sc-1x6b4le-7 bQHbPU MolMenuCOD__Container-sc-16jdr3r-0 yznpj"
          >
            <div className="submenu-items MolMenuCOD__MenuBlock-sc-16jdr3r-1 kFvGBO">
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/series-podcasts"
                  title="Series"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Series
                </a>
              </div>

              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/radioteatros-podcasts"
                  title="Radioteatros"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Radioteatros
                </a>
              </div>

              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/radionovelas-podcasts"
                  title="Radionovelas"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Radionovelas
                </a>
              </div>
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/entrevistas-podcasts"
                  title="Entrevistas"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Entrevistas
                </a>
              </div>
            </div>
            <div className="MolMenuCOD__ContentBlock-sc-16jdr3r-4 hABRnM"></div>
          </div>
          <div
            id="sub-especial"
            className="submenu OrHeader__MenuCOD-sc-1x6b4le-7 bQHbPU MolMenuCOD__Container-sc-16jdr3r-0 yznpj"
          >
            <div className="submenu-items MolMenuCOD__MenuBlock-sc-16jdr3r-1 kFvGBO">
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/educacion"
                  title="Educación"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Educación
                </a>
              </div>
              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/innovadores"
                  title="Inovadores"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Innovadores
                </a>
              </div>

              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/musica"
                  title="Música"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Música
                </a>
              </div>

              <div className="MolMenuCOD__Menu-sc-16jdr3r-2 gIdhsh">
                <a
                  href="https://www.rtvcplay.co/franja-memoria"
                  title="Franja Memoria"
                  className="MolMenuCOD__MenuItem-sc-16jdr3r-3 dSsyKF AtTextLink__Link-sc-1mrxibb-0 jalbS"
                >
                  Franja Memoria
                </a>
              </div>

            </div>
            <div className="MolMenuCOD__ContentBlock-sc-16jdr3r-4 hABRnM"></div>
          </div>
          <div
            id="sub-vivo"
            className="submenu OrHeader__MenuLS-sc-1x6b4le-8 hyLmch MolMenuLS__Container-sc-1mj2srx-0 eTRRwO"
          >
            <a
              href="https://www.rtvcplay.co/en-vivo/canal-institucional"
              target=""
              className="MolMenuLS__ImgLink-sc-1mj2srx-1 dwhsWo AtImgLink__ImgLink-sc-1ji04qf-0 fegtQU"
            >
              <img
                className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                src="/images/logo-canal-institucional_0.png"
                alt="Canal Institucional"
              />
            </a>
            <a
              href="https://www.rtvcplay.co/en-vivo/radio-nacional"
              target=""
              className="MolMenuLS__ImgLink-sc-1mj2srx-1 dwhsWo AtImgLink__ImgLink-sc-1ji04qf-0 fegtQU"
            >
              <img
                className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                src="/images/logo-radio-nacional.png"
                alt="Radio Nacional"
              />
            </a>
            <a
              href="https://www.rtvcplay.co/en-vivo/radionica"
              target=""
              className="MolMenuLS__ImgLink-sc-1mj2srx-1 dwhsWo AtImgLink__ImgLink-sc-1ji04qf-0 fegtQU"
            >
              <img
                className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                src="/images/logo-radionica.png"
                alt="Radiónica"
              />
            </a>
            <a
              href="https://www.rtvcplay.co/en-vivo/senal-colombia"
              target=""
              className="MolMenuLS__ImgLink-sc-1mj2srx-1 dwhsWo AtImgLink__ImgLink-sc-1ji04qf-0 fegtQU"
            >
              <img
                className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                src="/images/logo-senal-colombia.png"
                alt="Señal Colombia"
              />
            </a>

            <a href="https://www.rtvcplay.co/en-vivo/informativo"
              target=""
              className="MolMenuLS__ImgLink-sc-1mj2srx-1 dwhsWo AtImgLink__ImgLink-sc-1ji04qf-0 fegtQU" opacity="0.8"
            >
              <img className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                src="/images/rtvc/RTVC-NOTICIAS_LOGO_A-1.png"
                alt="Informativo"
              />
            </a>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile-container"
        className="OrHeader__ContainerMenuMobile-sc-1x6b4le-13 cHOMMK"
      >
        <div
          id="menu-mobile"
          className="OrHeader__MenuMobile-sc-1x6b4le-14 pQwVM MolMenuMobile__MenuMobile-v2sopo-1 gNWxDq"
        >
          <div className="MolMenuMobile__TopBar-v2sopo-6 kaZGFx">
            <button
              id="menu-mobile-close"
              color="rgba(0,0,0,0)"
              className="close-button AtIconButton__Button-kz6x7x-0 IVHCz"
              type="button"
            >
              <svg
                viewBox="0 0 24 24"
                height="32"
                width="32"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                id="IconArrowBack"
                color="#ffffff"
                className="AtIcon__StyledIcon-boprg-0 iUXCFf"
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </button>
          </div>
          <a
            className="MolMenuMobile__LiveDisplay-v2sopo-0 krMztd AtLiveDisplay__Container-sc-129czm5-0 gYZXrR"
            href="#"
          >
            <div className="AtLiveDisplay__Display-sc-129czm5-1 hgCave">
              <marquee>
                <span className="AtLiveDisplay__DisplayText-sc-129czm5-4 iXlDQC">
                  RTVC Sistema de Medios Públicos
                </span>
              </marquee>
            </div>
            <div className="AtLiveDisplay__LiveDisplay-sc-129czm5-2 fDRKxi">
              <div className="AtLiveDisplay__LiveDisplayInner-sc-129czm5-3 gypvI">
                <span className="AtLiveDisplay__RedLightDown-sc-129czm5-6 fnsUvw">
                  <span className="AtLiveDisplay__RedLightUp-sc-129czm5-7 cDyIMX"></span>
                </span>
                <span className="AtLiveDisplay__LiveText-sc-129czm5-5 UGRSu">Evento en vivo</span>
              </div>
            </div>
          </a>
          <div className="MolMenuMobile__ScrollView-v2sopo-7 cxeyMg">
            <div className="metismenu mobile-menu">
              <ul className="metismenu-container mobile-menu-container">
                <li className="metismenu-item">
                  <a
                    href="#"
                    title="Ficción"
                    className="root-0 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    Ficción
                  </a>
                  <ul className="metismenu-container mobile-menu-container">
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/series-ficcion"
                        title="Series"
                        className="submenu-0-0 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Series
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/peliculas-ficcion"
                        title="Películas"
                        className="submenu-0-1 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Películas
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/cortometrajes-ficcion"
                        title="Cortometrajes"
                        className="submenu-0-2 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Cortometrajes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="metismenu-item">
                  <a
                    href="#"
                    title="Documentales"
                    className="root-1 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    Documentales
                  </a>
                  <ul className="metismenu-container mobile-menu-container">
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/series-documentales"
                        title="Series"
                        className="submenu-1-0 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Series
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/peliculas-documentales"
                        title="Películas"
                        className="submenu-1-1 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Películas
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/cortometrajes-documentales"
                        title="Cortometrajes"
                        className="submenu-1-2 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Cortometrajes
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="metismenu-item">
                  <a
                    href="#"
                    title="Podcasts"
                    className="root-2 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    Podcasts
                  </a>
                  <ul className="metismenu-container mobile-menu-container">
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/series-podcasts"
                        title="Series"
                        className="submenu-2-0 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Series
                      </a>
                    </li>


                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/radionovelas-podcasts"
                        title="Radionovelas"
                        className="submenu-2-1 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Radionovelas
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/entrevistas-podcasts"
                        title="Entrevistas"
                        className="submenu-2-2 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Entrevistas
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="metismenu-item">
                  <a
                    href="#"
                    title="Especiales"
                    className="root-3 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    Especiales
                  </a>
                  <ul className="metismenu-container mobile-menu-container">
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/educacion"
                        title="Educación"
                        className="submenu-3-0 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Educación
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/inventos"
                        title="Inventos"
                        className="submenu-3-1 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cARSoy AtTextLink__Link-sc-1mrxibb-0 jalbS"
                      >
                        Inventos
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="metismenu-item">
                  <a
                    href="#"
                    title="En vivo"
                    className="root-4 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    En vivo
                  </a>
                  <ul className="metismenu-container mobile-menu-container">
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/en-vivo/canal-institucional"
                        target=""
                        className="smlive-4-0 metismenu-link mobile-menu-link imgStyleMobile MolMenuMobile__MenuLink-v2sopo-8 fWAvXX AtImgLink__ImgLink-sc-1ji04qf-0 bzWmGU"
                      >
                        <img
                          className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                          src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/logo/streaming/logo-canal-institucional_0.png"
                          alt="Canal Institucional"
                        />
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/en-vivo/radio-nacional"
                        target=""
                        className="smlive-4-1 metismenu-link mobile-menu-link imgStyleMobile MolMenuMobile__MenuLink-v2sopo-8 fWAvXX AtImgLink__ImgLink-sc-1ji04qf-0 bzWmGU"
                      >
                        <img
                          className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                          src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/logo/streaming/logo-radio-nacional.png"
                          alt="Radio Nacional"
                        />
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/en-vivo/radionica"
                        target=""
                        className="smlive-4-2 metismenu-link mobile-menu-link imgStyleMobile MolMenuMobile__MenuLink-v2sopo-8 fWAvXX AtImgLink__ImgLink-sc-1ji04qf-0 bzWmGU"
                      >
                        <img
                          className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                          src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/logo/streaming/logo-radionica.png"
                          alt="Radiónica"
                        />
                      </a>
                    </li>
                    <li className="metismenu-item">
                      <a
                        href="https://www.rtvcplay.co/en-vivo/senal-colombia"
                        target=""
                        className="smlive-4-3 metismenu-link mobile-menu-link imgStyleMobile MolMenuMobile__MenuLink-v2sopo-8 fWAvXX AtImgLink__ImgLink-sc-1ji04qf-0 bzWmGU"
                      >
                        <img
                          className="AtImg__Img-sc-31cwo7-0 gYLCMU"
                          src="https://rtvcplay-v2.s3.amazonaws.com/s3fs-public/field/logo/streaming/logo-senal-colombia.png"
                          alt="Señal Colombia"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="metismenu-item">
                  <a
                    href="https://www.rtvcplay.co/ninos"
                    title="INFANTIL"
                    className="root-5 metismenu-link mobile-menu-link  MolMenuMobile__MenuLink-v2sopo-8 cGUpzm AtTextLink__Link-sc-1mrxibb-0 iMBqoc"
                  >
                    INFANTIL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a className="dummy-link" href="#toggleMenuMobile">
          <span></span>
        </a>
      </div>
    </>
  );
};

export default Header;
