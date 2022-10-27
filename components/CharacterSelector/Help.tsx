import React from 'react';
import { HelpGlobalStyle } from 'styles/help.style';

const Help = () => {
    return (
        <>
            <HelpGlobalStyle />
            <div className="modal step-1">
                <div className="modal__content">
                    <div className="help">
                        <div id="help-step" className="help-step">
                            <img className="peak" src="/images/peak.svg" />
                            <ul className="progress-bar">
                                <li className="progress-bar__dot full" />
                                <li className="progress-bar__connector" />
                                <li className="progress-bar__dot" />
                                <li className="progress-bar__connector" />
                                <li className="progress-bar__dot" />
                            </ul>
                            <div className="step step1">
                                <h2>Ayuda</h2>
                                <p>
                                    Para conocer esta historia de diferentes maneras deberás seleccionar uno
                          de seis personajes y elegir uno de los tres modos narrativos para navegar.{' '}
                                </p>
                            </div>
                            <div className="step step2 hidden">
                                <h2>
                                    <span className="step-number">1</span>
                                    Escoge uno de los personajes
                            </h2>
                                <p>
                                    Dependiendo del personaje que elijas, el énfasis de la historia y sus
                                    matices serán diferentes. ¡Escoge al azar o por intuición, vamos!
                            </p>
                            </div>
                            <div className="step step3 hidden">
                                <h2>
                                    <span className="step-number">2</span>
                                    Escoge el modo de navegación
                            </h2>
                                <p>
                                    Dependiendo del modo que elijas, los hechos serán narrados con un orden y
                                    una intención diferentes.
                            </p>
                            </div>
                            <div className="button-group">
                                <button id="previous" className="disabled button">
                                    Anterior
                            </button>
                                <button id="next" className="button">
                                    Siguiente
                            </button>
                                <button id="validate" className="hidden button close-modal">
                                    Empieza tu experiencia
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="selector-help">
                    <div className="selector-help-cover">
                        <div className="selector-help-pc">
                            <div className="selector-column">
                                <h2>Modo Cronológico</h2>
                                <p>
                                    Explora esta historia en la línea de tiempo en que sucedieron los hechos.
                            </p>
                            </div>
                            <div className="selector-column">
                                <h2>Modo Laberinto</h2>
                                <p>Escoge ruta de entrada y recorre el cubo a tu manera.</p>
                            </div>
                            <div className="selector-column">
                                <h2>Modo Reflexivo</h2>
                                <p>
                                    ¿Tú qué opinas? Descubre cómo encaja tu forma de pensar en el universo de
                                    opiniones de la sociedad.
                            </p>
                            </div>
                            <div className="selector-column-cubo cubo-pc">
                                <img className="cubo-help" src="/images/selector-cubo.svg" />
                            </div>
                        </div>
                        <div className="selector-help-mobile">
                            <div className="selector-column-cubo cubo-mobile">
                                <img className="cubo-help" src="/images/selector-cubo.svg" />
                            </div>
                            <div className="selector-column">
                                <span>
                                    Modo
                            <br />
                                    Cronológico
                            </span>
                            </div>
                            <div className="selector-column">
                                <span>
                                    Modo
                            <br />
                                    Laberinto
                            </span>
                            </div>
                            <div className="selector-column">
                                <span>
                                    Modo
                            <br />
                                    Reflexivo
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;