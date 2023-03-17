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
          <br /><br /><br />
          <section className={styles.columnsCredits}>
            <div>
              <h2 >Una producción por encargo<br />de
                DIECISEIS NUEVE SAS

              </h2>
              <img className={styles.LogoProduction} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/169.jpg" />
            </div>
            <div>
              <br /><br />
              <h2 >Para RTVCPlay
              </h2>
              <img className={styles.LogoRTVC} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/rtvcplay.png" />
            </div>
          </section>
        </div>
        <div className={styles.Credits}>


          <div className={styles.CreditsContent}>

            <div className={styles.Column1}>
              <h2>DIRECCIÓN Y DESARROLLO
              </h2>
              <ul>
                <li>JUAN CARLOS BAQUERO<br /><em>Dirección general
                </em></li>
                <li>ARNAU GIFREU - CAMILO GALVIS <br /><em>Dirección de interactividad
                </em></li>
                <li>JOSE FELIPE VARON GARCIA <br /><em>Dirección documental
                </em></li>
                <li>MARGARITA HERRERA SABOGAL <br /><em>Director y Show Runner</em></li>

                <li>PAULA ANDREA ARIAS
                  <br /><em>Diseño de Producción
                  </em></li>

                <li>CAROLINA VASQUEZ TRIANA <br /><em> Investigación
                </em></li>

                <li> ARNAU GIFREU CASTELLS<br />
                  CAMILO ERNESTO GALVIS<br />
                  CAROLINA VASQUEZ TRIANA<br />
                  JUAN CARLOS BAQUERO <br /><em> Guión interactividad
                  </em></li>

                <li>CAROLINA VASQUEZ TRIANA<br />
                  JOSE FELIPE VARON GARCIA<br />
                  JUAN CARLOS BAQUERO<br />
                  MARGARITA HERRERA SABOGAL<br /><em> Guión interactividad
                  </em></li>

                <li> CAROLINA VASQUEZ TRIANA
                  JUAN ANTONIO UNGAR
                  MARIA ALEJANDRA ROA
                  <br /><em> Redacción textos narrativa web
                  </em></li>

                <li> DIECISEIS NUEVE FILMS
                  <em> <br />
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column2}>
              <h2>Producción
              </h2>
              <ul>
                <li> DIANA PAOLA OLARTE PACHÓN <br /><em> Jefatura de producción
                </em></li>
                <li>LAURA TATIANA PRIETO MUÑETON <br />
                  LUIS ALBERTO GARAVITO BELTRAN  <br /><em> Producción general
                  </em></li>
                <li>JUAN RODRIGO BASTIDAS HERRERA
                  <br /><em> Producción  web
                  </em></li>
                <li>DANIELA CORREA ARÉVALO<br />
                  GIOVANNELA TORRES YATE
                  <br /><em> Producción de campo
                  </em></li>

                <li>YENNIFER CAMACHO
                  <br /><em> Producción de campo segunda unidad
                  </em></li>

                <li>YENNIFER CAMACHO
                  <br /><em> Producción de campo segunda unidad
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column3}>
              <h2> REALIZACIÓN DOCUMENTAL
              </h2>
              <ul>
                <li>JOSE FELIPE VARON GARCIA
                  <br /><em>Dirección y realización documental
                  </em></li>
                <li>MATEO SANTAMARIA ESTRADA
                  <br /><em>Asistencia de dirección
                  </em></li>
                <li>JAVIER RODRIGUEZ ACOSTA<br />
                  JOSE LUIS OSORIO SANCHEZ
                  <br /><em>Realización
                  </em></li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>FOTOGRAFÍA
              </h2>
              <ul>
                <li>JOSE LUIS OSORIO SÁNCHEZ
                  <br /><em>Dirección de fotografía
                  </em></li>
                <li>JAVIER RODRIGUEZ ACOSTA<br />
                  JOSE FELIPE VARON GARCIA <br />
                  JOSE LUIS OSORIO SÁNCHEZ
                  <br /><em>Camarografía
                  </em></li>
                <li>JULIAN GUILLERMO HERNANDEZ PEÑA
                  <br /><em>Asistencia de fotografía
                  </em></li>
                <li>JUAN FELIPE CORREDOR QUIROGA
                  JULIÁN BARAYA CEBALLOS
                  <br /><em>Asistencia de fotografía</em></li>

                <li>ARIEL FERNANDO HINCAPIE OSSA

                  <br /><em>Datamanager</em></li>

                <li>LUIS ALBERTO GARAVITO BELTRAN<br />
                  MILAGROS DE JESÚS CASTRO POLO
                  <br /><em>Foto fija</em></li>
              </ul>

            </div>

            <div className={styles.Column1}>
              <h2> SONIDO  Y MÚSICA
              </h2>
              <ul>
                <li>LEONARDO SANCHEZ GIL <br />
                  LUIS FERNANDO TRIANA MEDINA<br />
                  OSCAR MAURICIO PULIDO<br />
                  WILLIAM ALFREDO TRIANA MEDINA <br />
                  <br /><em>Sonido directo
                  </em></li>
                <li>SERGIO MALALMA
                  <br /><em>Música original
                  </em></li>
                <li>ALEJANDRO GÓMEZ
                  <br /><em>Postproducción de sonido</em></li>
              </ul>
            </div>

            <div className={styles.Column2}>
              <h2>POSTPRODUCCIÓN IMAGEN</h2>
              <ul>
                <li>MATEO SANTAMARIA ESTRADA
                  <br /><em>Edición conceptual</em></li>
                <li>ESTEBAN JOSE CORZO FAJARDO<br />
                  GUSTAVO ORDOÑEZ <br />
                  JAIME BARBOSA GÓMEZ  <br />
                  JOSE LUIS OSORIO SANCHEZ <br />
                  <em>Montaje
                  </em></li>
                <li>JONATHAN BELTRÁN<br />
                  <em>Color
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column3}>

              <h2> LOGÍSTICA Y PRODUCCIÓN
              </h2>
              <ul>
                <li>ALONSO RODRIGUEZ ORTIZ
                  <br /><em>Alimentación, producción de campo local</em></li>
                <li>RICARDO PEREZ
                  <br /><em>Producción de campo local
                  </em></li>
                <li>ALVEIRO CASTRO<br />
                  BRYAN CASTRO<br />
                  Transporte<br /><em>Transporte
                  </em></li>
                <li>ISABEL APARICIO
                  <em>Alojamiento
                  </em></li>

              </ul>
            </div>

            <div className={styles.Column1}>
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



            <div className={styles.Column2}>
              <h2>AGRADECIMIENTOS
              </h2>
              Un agradecimiento especial a las personas y familias que participaron en Caminos de Jordán

              <ul>
                <li>Diego Sarmiento
                  <br /><em>Editor conceptual
                  </em></li>
                <li>Guillermo Prada Monsalve

                </li>
                <li>Juan de Jesús Estévez
                  <br /></li>
                <li>Soledad Silva Rico
                </li>
                <li>Yenny Delgado Delgado</li>

              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>LA COMUNIDAD
              </h2>
              <ul>
                <li>Municipio Jordán Sube, Santander
                </li>
                <li>Alcaldía Municipal de Jordán Sube
                </li>
                <li>Concejo Municipal de Jordán Sube</li>

              </ul>
            </div>

            <div className={styles.Column1}>
              <ul>
                Agradecimientos a la agrupación Bacardí por la Interpretación de las obras

                <li>Bella y Bonita -
                  <em> Jorge Veloza </em></li>
                <li>El Marranito -
                  <em> Los Doctores de la Carranga</em></li>
                <li>La de Estrato 8 -
                  <em> Los Doctores de la Carranga </em></li>
                <li>El Cuartetazo -
                  <em> Mario A. Castillón Campos </em></li>
                <li>El sinvergüenza -
                  <em> Los Doctores de la Carranga </em></li>
                <li>Doña Pepa -
                  <em> D.R.A. </em></li>

              </ul>
            </div>

            <div className={styles.Column2}>
              <ul>
                Agradecimientos a Diego Alexander Sarmiento González por la Interpretación de las obras

                <li>Rumbo a mi -
                  <em> Vereda Tocayo Vargas </em></li>
                <li>Falsa Enfermedad -
                  <em>Diego Alexander Sarmiento González</em></li>
                <li>La de Estrato 8 -
                  <em> Los Doctores de la Carranga </em></li>
                <li>El Cuartetazo -
                  <em> Mario A. Castillón Campos </em></li>
                <li>El sinvergüenza -
                  <em> Los Doctores de la Carranga </em></li>
                <li>Doña Pepa -
                  <em> D.R.A. </em></li>

              </ul>
              <br />
              <ul>
                Agradecimiento a los autores de las obras

                <li>La Prima -
                  <em> La Prima </em></li>
                <li>La Ley -
                  <em> Heredero Carranga</em></li>
              </ul>
              <br />
              <ul>
                Autor y compositor Carlos OLID Rodríguez

                <li>El sinverguenza</li>
                <li>El marranito </li>
                <li>La de estrato 8</li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>LA COLABORACIÓN DE
              </h2>

              <ul>
                <li>María Cenovia Martinez Gómez

                </li>
                <li>Rosa Ribeiro Arciniegas

                </li>

              </ul>
              <br />
              <ul>
                <em>Familia Delgado Daza</em>
                <li>Anyelo Ferney
                </li>
                <li>Herminda Delgado Daza
                </li>
                <li>Lucila Delgado Daza
                </li>
                <li>Luz Yenny Delgado Daza
                </li>
                <li>María Antonia Delgado Daza
                </li>
                <li>Paulina Delgado Daza
                </li>
              </ul>
              <br />
              <ul>
                <em>Familia Sarmiento Forero</em>

                <li>Alba liliana Forero Ferreira
                </li>
                <li>Juan Manuel sarmiento forero
                </li>
                <li>Jose Miguel sarmiento forero
                </li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>CITAS DE INVESTIGACIÓN INFOGRAFÍA
              </h2>

              <ul>
                <li>Las 2 orillas

                </li>
                <li>Canal 1

                </li>
                <li>Caracol Radio

                </li>
                <li>Colombia Turismo Web


                </li>
                <li>El tiempo


                </li>
                <li>Gobierno de Colombia


                </li>
                <li>Oculto en el Cañón. Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019
                  Semana

                </li>

              </ul>

            </div>

            <div className={styles.Column2}>

              <h2> ESTE ES UN CONTENIDO ORIGINAL DE RTVCPlay<br />

              </h2>
              <h2>
                RTVC
              </h2>
              <ul>
                <li>ADRIANA VASQUEZ SÁNCHEZ
                  <br /><em>Gerente (E) RTVC</em></li>
                <li>JUAN CARLOS BAQUERO

                  <br /><em>Director RTVCPlay

                  </em></li>
                <li>LUISA MAYORGA MAYORGA<br />
                  <em>Productora Ejecutiva RTVCPlay
                  </em></li>
                <li>CAMILO GALVIS GUERRA

                  <em>Productor Creativo proyectos audiovisuales RTVCPlay

                  </em></li>

                <li>ARNAU GIFREU

                  <em>Productor Creativo proyectos interactivos RTVCPlay

                  </em></li>

                <li>MARGARITA HERRERA SABOGAL

                  <em>Productora Delegada de Contenidos Originales de RTVCPlay

                  </em></li>

                <li>PAULA ANDREA ARIAS GÓMEZ

                  <em>Productora Ejecutiva de Contenidos Originales de RTVCPlay

                  </em></li>

              </ul>
            </div>

            <div className={styles.Column3}>

              <h2> DIRECCIÓN DE TECNOLOGÍAS CONVERGENTES RTVC

              </h2>
              <ul>
                <li>LUIS ALFONSO VARGAS AMADO

                  <br /><em>Director de tecnologías (E).<br />
                    Coordinador de Gestión • Dirección Tecnologías Convergentes - Coordinación Ingeniería de Red
                  </em></li>
                <li>GERARDO ANDRÉS PENAGOS
                  <br /><em>Dueño de producto Coordinación de TI RTVC.
                  </em></li>
                <li>JUAN JORGE HERNÁNDEZ
                  <br />
                  <em>Desarrollador de sitios web Coordinación de TI RTVC.
                  </em></li>
                <li>IVÁN DARÍO ROLDÁN

                  <em>Administrador infraestructura nube Coordinación de TI RTVC.


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