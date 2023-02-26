import React, { Fragment } from 'react';
import styles from './season3.credits.module.scss';

const Credits = () => {

  return (
    <Fragment>
      <div className={styles.CreditsContainer}>
        <div className={styles.CreditsMintic}>
          <h2 >Este contenido fue financiado con recursos del Fondo Único de Tecnologías
            de la Información y las Comunicaciones de MinTic
          </h2>
          <img className={styles.LogoMintic} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/mintic.jpg" />
        </div>
        <div className={styles.Credits}>


          <div className={styles.CreditsContent}>

            <div className={styles.Column1}>
              <h2>PROYECTO DOCUMENTAL INTERACTIVO
                CON LA<br />PARTICIPACIÓN DE
                :</h2>
              <ul>
                <li>Diego Sarmiento</li>
                <li>Guillermo Prada Monsalve</li>
                <li>Juan De Jesús Estévez</li>
                <li>Soledad Silva Rico</li>
                <li>Yenny Delgado</li><br /><br />
                <li>ADRIANA VASQUEZ SÁNCHEZ
                  <br /><em>
                    Gerente (E) RTVC
                  </em></li>
                <li>JUAN CARLOS BAQUERO
                  <br /><em>Director RTVCPlay
                  </em></li>
                <li>PILAR CUBILLOS CRUZ
                  <br /><em>Productora general RTVCPlay </em></li>
                <li>LUISA MAYORGA MAYORGA
                  <br /><em>Productora Ejecutiva RTVCPlay
                  </em></li>
                <li>CAMILO GALVIS GUERRA
                  <br /><em>Productor Creativo RTVCPlay
                  </em></li>
                <li>MARGARITA HERRERA SABOGAL <br /><em>Productora Delegada de Contenidos Originales de RTVCPlay
                </em></li>
                <li>PAULA ANDREA ARIAS GÓMEZ <br /><em>Productora Ejecutiva de Contenidos Originales de RTVCPlay</em></li>

              </ul>
              <br />

            </div>

            <div className={styles.Column2}>
              <h2>Una producción por encargo<br />de
                DIECISEIS NUEVE SAS
              </h2>
              <ul>
                <li>
                  <img className={styles.LogoProduction} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/169.jpg" /></li>
                <li><br /><br />Para
                  RTVCPlay
                </li>
                <li><img className={styles.LogoRTVC} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/rtvcplay.png" /></li>

              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>DIRECCIÓN
              </h2>
              <ul>
                <li>JUAN CARLOS BAQUERO<br /><em>Dirección general
                </em></li>
                <li>ARNAU GIFREU - CAMILO GALVIS <br /><em>Dirección de interactividad
                </em></li>
                <li>MARGARITA HERRERA SABOGAL <br /><em>Director y Show Runner</em></li>
                <li>CAROLINA VASQUEZ TRIANA <br /><em> Investigación

                </em></li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>GUIÓN
              </h2>
              <ul>
                <li>CAROLINA VASQUEZ TRIANA  <br /><em>Guión documental
                </em></li>
                <li>JOSE FELIPE VARON GARCIA <br /><em>Guión documental
                </em></li>
                <li>JUAN ANTONIO UNGAR <br /><em>Redacción textos narrativa web
                </em></li>
                <li>MARIA ALEJANDRA ROA <br /><em>Redacción textos narrativa web</em></li>
              </ul>

            </div>

            <div className={styles.Column1}>
              <h2>PRODUCCIÓN GENERAL
              </h2>
              <ul>
                <li>DIANA PAOLA OLARTE PACHÓN <br /><em>Jefe de producción
                </em></li>
                <li>LUIS ALBERTO GARAVITO BELTRAN <br /><em>Productor general
                </em></li>
                <li>LAURA TATIANA PRIETO MUÑETON <br /><em>Producción general</em></li>
                <li>JUAN RODRIGO BASTIDAS HERRERA <br /><em> Producción  web
                </em></li>
                <li>GIOVANNELA TORRES YATE <br /><em>Producción de campo
                </em></li>
                <li>DANIELA CORREA ARÉVALO <br /><em>Producción de campo
                </em></li>
                <li>YENNIFER CAMACHO <br /><em>Producción de campo segunda unidad

                </em></li>
              </ul>

            </div>

            <div className={styles.Column3}>
              <h2>REALIZACIÓN DOCUMENTAL</h2>
              <ul>
                <li>JOSE FELIPE VARON GARCIA <br /><em>Dirección y realización documental </em></li>
                <li>MATEO SANTAMARIA ESTRADA - <em>Asistencia de dirección
                </em></li>
                <li>JAVIER RODRIGUEZ ACOSTA <br /><em>Realización
                </em></li>
                <li>JOSE LUIS OSORIO SANCHEZ - <em>Realización
                </em></li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>FOTOGRAFÍA
              </h2>
              <ul>
                <li>JOSE LUIS OSORIO SÁNCHEZ <br /><em>Director de Fotografía</em></li>
                <li>JAVIER RODRIGUEZ ACOSTA  <br /><em>Camarografía
                </em></li>
                <li>JOSE FELIPE VARON GARCIA <br /><em>Camarografía
                </em></li>
                <li>JOSE LUIS OSORIO SÁNCHEZ <br /><em>Camarografía
                </em></li>
                <li>JULIAN GUILLERMO HERNANDEZ PEÑA <br /><em>Asistencia de fotografía</em></li>
                <li>JUAN FELIPE CORREDOR QUIROGA  <br /><em>Asistencia de fotografía</em></li>

                <li>JULIÁN BARAYA CEBALLOS <br /><em>Asistencia de fotografía</em></li>
                <li>ARIEL FERNANDO HINCAPIE OSSA <br /><em>Datamanager
                </em></li>
                <li>MILAGROS DE JESÚS CASTRO POLO <br /><em>Foto fija</em></li>



                <li>LUIS ALBERTO GARAVITO BELTRAN <br /><em>Foto Fija</em></li>

              </ul>
            </div>

            <div className={styles.Column2}>
              <h2>SONIDO  Y MÚSICA
              </h2>
              <ul>
                <li>WILLIAM ALFREDO TRIANA MEDINA <br /><em>Sonido directo
                </em></li>
                <li>LUIS FERNANDO TRIANA MEDINA <br /><em>Sonido directo
                </em></li>
                <li>OSCAR MAURICIO PULIDO  <br /><em>Sonido directo
                </em></li>
                <li>LEONARDO SANCHEZ GIL <br /><em>Sonido directo
                </em></li>
                <li>SERGIO MALALMA <br /><em> Música Original</em></li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>POSTPRODUCCIÓN IMAGEN
              </h2>
              <ul>
                <li>MATEO SANTAMARIA ESTRADA  <br /><em>Editor conceptual
                </em></li>
                <li>JONATHAN BELTRÁN - <em> Colorista
                </em></li>
                <li>JAIME BARBOSA GÓMEZ <br /><em>Montajista
                </em></li>
                <li>ESTEBAN JOSE CORZO FAJARDO <br /><em>Montajista
                </em></li>
                <li>JOSE LUIS OSORIO SANCHEZ <br /><em>Montajista
                </em></li>

                <li>GUSTAVO ORDOÑEZ <br /><em>Montajista
                </em></li>

              </ul>
            </div>

            <div className={styles.Column2}>
              <h2>INTERFAZ - ESTUDIO MULTIMEDIA
              </h2>
              <ul>
                <li>JUAN MARÍN <br /><em>Director Creativo
                </em></li>
                <li>ANDRÉS CANO <br /><em>Diseño e Ilustración
                </em></li>
                <li>ING. JOSÉ MARÍA GUAIMAS <br /><em>IT Director
                </em></li>
                <li>ING. GUILLERMO COLOTTI <br /><em>Javascript Developer
                </em></li>
                <li>ING. MARCOS HENNING <br /><em> Drupal API
                </em></li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>Agradecimientos
              </h2>
              <ul>
                <li>ALONSO RODRIGUEZ ORTIZ <br /><em>Alimentación, Producción de campo local
                </em></li>
                <li>RICARDO PEREZ <br /><em>Producción de campo local

                </em></li>
                <li>NUBIA ORTIZ ORTIZ <br /><em>Alimentación

                </em></li>
                <li>SOFIA ORTIZ ORTIZ  <br /><em> Alimentación

                </em></li>
                <li>PATRICIA ORTIZ ORTIZ  <br /><em>Alimentación

                </em></li>
                <li>SALVEIRO CASTRO  <br /><em> Transporte

                </em></li>
                <li>BRYAN CASTRO  <br /><em> Transporte

                </em></li>
                <li>ISABEL APARICIO  <br /><em> Alojamiento

                </em></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default Credits;