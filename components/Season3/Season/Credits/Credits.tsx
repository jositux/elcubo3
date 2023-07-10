import React, { Fragment } from 'react';
import styles from './season3.credits.module.scss';
import { useRouter } from 'next/router';
import HtmlParser from 'html-react-parser';

const Credits = () => {

  const router = useRouter();

  return (
    <Fragment>
      <div className={styles.CreditsContainer}>
        <div className={styles.CreditsMintic}>
          <h2 >
            {
              router.locale === "en" ?
                "This content was financed with resources from the 'Fondo Único de Tecnologías de la Información y las Comunicaciones de MinTic'" :
                "Este contenido fue financiado con recursos del Fondo Único de Tecnologías de la Información y las Comunicaciones de MinTic"
            }

          </h2>
          <img className={styles.LogoMintic} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/mintic.png" />
          <br /><br /><br />
          <section className={styles.columnsCredits}>
            <div>
              <h2 >
                {
                  router.locale === "en" ?
                    HtmlParser("A commissioned production <br />from Dieciséis9 Films SAS") :
                    HtmlParser("Una producción por encargo<br />de Dieciséis9 Films SAS")
                }


              </h2>
              <img className={styles.LogoProduction} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/169.jpg" />
            </div>
            <div>
              <br /><br />
              <h2 >
                {
                  router.locale === "en" ?
                    "for RTVCPlay" :
                    "para RTVCPlay"
                }
              </h2>
              <img className={styles.LogoRTVC} alt="El futuro digitial es de todos" title="El futuro digitial es de todos" src="/images/season3/credits/rtvcplay.png" />
            </div>
          </section>
        </div>
        <div className={styles.Credits}>


          <div className={styles.CreditsContent}>

            <div className={styles.Column1}>
              <h2>
                {
                  router.locale === "en" ?
                    "Direction and Development" :
                    "DIRECCIÓN Y DESARROLLO"
                }
              </h2>
              <ul>
                <li>JUAN CARLOS BAQUERO<br />
                  <em>
                    {
                      router.locale === "en" ?
                        "General direction" :
                        "Dirección general"
                    }
                  </em>

                </li>
                <li>ARNAU GIFREU<br />
                  CAMILO GALVIS <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Interactivity direction" :
                        "Dirección de interactividad"
                    }
                  </em></li>
                <li>JOSE FELIPE VARON GARCIA <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Documentary direction" :
                        "Dirección documental"
                    }
                  </em>
                </li>
                <li>MARGARITA HERRERA SABOGAL <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Research coordination" :
                        "Coordinación de investigación"
                    }
                  </em></li>

                <li>PAULA ANDREA ARIAS
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Production design" :
                        "Diseño de Producción"
                    }
                  </em></li>

                <li>CAROLINA VASQUEZ TRIANA <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Research" :
                        "Investigación"
                    }
                  </em></li>

                <li> ARNAU GIFREU CASTELLS<br />
                  CAMILO ERNESTO GALVIS<br />
                  CAROLINA VASQUEZ TRIANA<br />
                  JUAN CARLOS BAQUERO <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Interactivity script" :
                        "Guión de interactividad"
                    }
                  </em></li>

                <li>ARNAU GIFREU CASTELLS<br />
                  CAROLINA VASQUEZ TRIANA<br />
                  JOSE FELIPE VARON GARCIA<br />
                  JUAN CARLOS BAQUERO<br />
                  MARGARITA HERRERA SABOGAL<br /><em>
                    {
                      router.locale === "en" ?
                        "Documentary script" :
                        "Guión documental"
                    }
                  </em></li>

                <li> CAROLINA VASQUEZ TRIANA <br />
                  JUAN ANTONIO UNGAR <br />
                  MARIA ALEJANDRA ROA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Web Narrative Copywriting" :
                        "Redacción textos narrativa web"
                    }
                  </em></li>


              </ul>

            </div>

            <div className={styles.Column2}>
              <h2> Dieciséis9 Films SAS<br /><br />

                {
                  router.locale === "en" ?
                    "Production" :
                    "Producción"
                }

              </h2>
              <ul>
                <li> DIANA PAOLA OLARTE PACHÓN <br /><em>
                  {
                    router.locale === "en" ?
                      "Production manager" :
                      "Jefatura de producción"
                  }

                </em></li>
                <li>LAURA TATIANA PRIETO MUÑETON <br />
                  LUIS ALBERTO GARAVITO BELTRAN  <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "General production" :
                        "Producción general"
                    }

                  </em></li>
                <li>JUAN RODRIGO BASTIDAS HERRERA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Web production" :
                        "Producción  web"
                    }
                  </em></li>
                <li>DANIELA CORREA ARÉVALO<br />
                  GIOVANNELA TORRES YATE
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "On-set production" :
                        "Producción de campo"
                    }
                  </em></li>

                <li>YENNIFER CAMACHO
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "On-set production second unit" :
                        "Producción de campo segunda unidad"
                    }
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column3}>
              <h2>
                {
                  router.locale === "en" ?
                    "Documentary realization" :
                    "REALIZACIÓN DOCUMENTAL"
                }
              </h2>
              <ul>
                <li>JOSE FELIPE VARON GARCIA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Direction and documentary realization" :
                        "Dirección y realización documental"
                    }
                  </em></li>
                <li>MATEO SANTAMARIA ESTRADA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Director's assistant" :
                        "Asistencia de dirección"
                    }
                  </em></li>
                <li>JAVIER RODRIGUEZ ACOSTA<br />
                  JOSE LUIS OSORIO SANCHEZ
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Realization" :
                        "Realización"
                    }
                  </em></li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>
                {
                  router.locale === "en" ?
                    "Photography" :
                    "FOTOGRAFÍA"
                }
              </h2>
              <ul>
                <li>JOSE LUIS OSORIO SÁNCHEZ
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Photography director" :
                        "Dirección de fotografía"
                    }
                  </em></li>
                <li>JAVIER RODRIGUEZ ACOSTA<br />
                  JOSE FELIPE VARON GARCIA <br />
                  JOSE LUIS OSORIO SÁNCHEZ
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Cameragraphy" :
                        "Camarografía"
                    }
                  </em></li>
                <li>JULIAN GUILLERMO HERNANDEZ PEÑA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Photography assistance" :
                        "Asistencia de fotografía"
                    }
                  </em></li>
                <li>JUAN FELIPE CORREDOR QUIROGA<br />
                  JULIÁN BARAYA CEBALLOS
                  <br /><em>{
                    router.locale === "en" ?
                      "Photography assistance" :
                      "Asistencia de fotografía"
                  }</em></li>

                <li>ARIEL FERNANDO HINCAPIE OSSA

                  <br /><em>Datamanager</em></li>

                <li>LUIS ALBERTO GARAVITO BELTRAN<br />
                  MILAGROS DE JESÚS CASTRO POLO
                  <br /><em>

                    {
                      router.locale === "en" ?
                        "Still Phographer" :
                        "Foto fija"
                    }
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column1}>
              <h2>
                {
                  router.locale === "en" ?
                    "SOUND AND MUSIC" :
                    "SONIDO Y MÚSICA"
                }
              </h2>
              <ul>
                <li>LEONARDO SANCHEZ GIL <br />
                  LUIS FERNANDO TRIANA MEDINA<br />
                  OSCAR MAURICIO PULIDO<br />
                  WILLIAM ALFREDO TRIANA MEDINA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Direct sound" :
                        "Sonido directo"
                    }
                  </em></li>
                <li>SERGIO MALALMA
                  <br /><em>

                    {
                      router.locale === "en" ?
                        "Original Music" :
                        "Música original"
                    }
                  </em></li>
                <li>ALEJANDRO GÓMEZ
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Sound post-production" :
                        "Postproducción de sonido"
                    }

                  </em></li>
              </ul>
            </div>

            <div className={styles.Column2}>
              <h2>

                {
                  router.locale === "en" ?
                    "Image post-production" :
                    "POSTPRODUCCIÓN IMAGEN"
                }
              </h2>
              <ul>
                <li>MATEO SANTAMARIA ESTRADA
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Concept editing" :
                        "Edición conceptual"
                    }
                  </em></li>
                <li>ESTEBAN JOSE CORZO FAJARDO<br />
                  GUSTAVO ORDOÑEZ <br />
                  JAIME BARBOSA GÓMEZ  <br />
                  JOSE LUIS OSORIO SANCHEZ <br />
                  <em>

                    {
                      router.locale === "en" ?
                        "Postproduction" :
                        "Montaje"
                    }
                  </em></li>
                <li>JONATHAN BELTRÁN<br />
                  <em>Color
                  </em></li>
              </ul>

            </div>

            <div className={styles.Column3}>

              <h2>

                {
                  router.locale === "en" ?
                    "LOGISTICS AND PRODUCTION" :
                    "LOGÍSTICA Y PRODUCCIÓN"
                }
              </h2>
              <ul>
                <li>ALONSO RODRIGUEZ ORTIZ
                  <br />
                  <em>

                    {
                      router.locale === "en" ?
                        "Food, on-set local production" :
                        "Alimentación, producción de campo local"
                    }
                  </em></li>
                <li>RICARDO PEREZ
                  <br /><em>

                    {
                      router.locale === "en" ?
                        "On-set local production" :
                        "Producción de campo local"
                    }
                  </em></li>
                <li>NUBIA ORTIZ ORTIZ
                  <br />
                  SOFIA ORTIZ ORTIZ<br />
                  PATRICIA ORTIZ ORTIZ<br />
                  <em>

                    {
                      router.locale === "en" ?
                        "Food Suply" :
                        "Alimentación"
                    }
                  </em></li>
                <li>ALVEIRO CASTRO<br />
                  BRYAN CASTRO<br />
                  <em>

                    {
                      router.locale === "en" ?
                        "Transport" :
                        "Transporte"
                    }
                  </em></li>
                <li>ISABEL APARICIO<br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Accommodation" :
                        "Alojamiento"
                    }
                  </em></li>

              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>INTERFAZ - ESTUDIO MULTIMEDIA
              </h2>
              <ul>
                <li>JUAN MARÍN <br /><em>

                  {
                    router.locale === "en" ?
                      "Creative Director" :
                      "Director Creativo"
                  }
                </em></li>
                <li>ANDRÉS CANO <br /><em>
                  {
                    router.locale === "en" ?
                      "Design and drawing" :
                      "Diseño e Ilustración"
                  }

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
              <h2>
                {
                  router.locale === "en" ?
                    "Thanks" :
                    "AGRADECIMIENTOS"
                }
              </h2>
              {
                router.locale === "en" ?
                  "A special thanks to people and families who participated in Caminos de Jordán" :
                  "Un agradecimiento especial a las personas y familias que participaron en Caminos de Jordán"
              }

              <ul>
                <li>Diego Sarmiento
                </li>
                <li>Guillermo Prada Monsalve

                </li>
                <li>Juan de Jesús Estévez
                </li>
                <li>Soledad Silva Rico
                </li>
                <li>Yenny Delgado Delgado</li>

              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>

                {
                  router.locale === "en" ?
                    "The community" :
                    "LA COMUNIDAD"
                }
              </h2>
              <ul>

                {
                  router.locale === "en" ?
                    HtmlParser("<li>Jordán Sube Municipality, Santander</li><li>Jordán Sube Municipal Mayor's Office</li><li>Jordán Sube Municipal Council</li>")
                    :
                    HtmlParser('<li>Municipio Jordán Sube, Santander</li><li>Alcaldía Municipal de Jordán Sube</li><li>Concejo Municipal de Jordán Sube</li>')
                }

              </ul>
            </div>

            <div className={styles.Column1}>
              <ul>
                {
                  router.locale === "en" ?
                    "Thanks to the Bacardí band for the interpretation of music" :
                    "Agradecimientos a la agrupación Bacardí por la Interpretación de las obras"
                }


                <li>Bella y Bonita -
                  <em> Luis Arturo Cardenas
                  </em></li>
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
                {
                  router.locale === "en" ?
                    "Thanks to Diego Alexander Sarmiento González for the interpretation of music" :
                    "Agradecimientos a Diego Alexander Sarmiento González por la Interpretación de las obras"
                }


                <li>Rumbo a mi -
                  <em> Vereda Tocayo Vargas </em></li>
                <li>Falsa Enfermedad -
                  <em>Diego Alexander Sarmiento González</em></li>
              </ul>
              <br />
              <ul>
                {
                  router.locale === "en" ?
                    "Thanks to the authors" :
                    " Agradecimiento a los autores de las obras"
                }

                <li>La Prima -
                  <em> Willy Quintero
                  </em></li>
                <li>La Ley -
                  <em> Heredero Carranga</em></li>
              </ul>
              <br />
              <ul>
                {
                  router.locale === "en" ?
                    "Author and composer " :
                    "Autor y compositor "
                }

                Carlos OLID Rodríguez

                <li>El sinverguenza</li>
                <li>El marranito </li>
                <li>La de estrato 8</li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>
                {
                  router.locale === "en" ?
                    "Collaboration of" :
                    "LA COLABORACIÓN DE"
                }
              </h2>

              <ul>
                <li>María Cenovia Martinez Gómez

                </li>
                <li>Rosa Ribeiro Arciniegas

                </li>

              </ul>
              <br />
              <ul>
                <em>
                  {
                    router.locale === "en" ?
                      "Family " :
                      "Familia "
                  } Delgado Daza
                </em>
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
                <em>
                  {
                    router.locale === "en" ?
                      "Family " :
                      "Familia "
                  } Sarmiento Forero</em>

                <li>Alba liliana Forero Ferreira
                </li>
                <li>Juan Manuel Sarmiento Forero
                </li>
                <li>Jose Miguel Sarmiento Forero
                </li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>

                {
                  router.locale === "en" ?
                    "INFOGRAPHIC RESEARCH QUOTES" :
                    "CITAS DE INVESTIGACIÓN INFOGRAFÍA"
                }
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
                <li>
                  {
                    router.locale === "en" ?
                      "Oculto en el Cañón. Multimedia special by Nicole Acuña and Silvia Corredor. Program in Journalism and Public Opinion PO04. School of Human Sciences. Universidad del Rosario.  2019 Semana" :
                      "Oculto en el Cañón. Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019 Semana"
                  }
                </li>

              </ul>

            </div>

            <div className={styles.Column2}>

              <h2>

                {
                  router.locale === "en" ?
                    "THIS IS ORIGINAL CONTENT FROM " :
                    "ESTE ES UN CONTENIDO ORIGINAL DE "
                }
                RTVCPlay<br />

              </h2>
              <h2>
                RTVCPlay
              </h2>
              <ul>
                <li>ADRIANA VASQUEZ SÁNCHEZ
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "RTVC Manager (E) " :
                        "Gerente (E) "
                    }

                    RTVC</em></li>
                <li>JUAN CARLOS BAQUERO

                  <br /><em>
                    {
                      router.locale === "en" ?
                        " RTVCPlay Director" :
                        "Director RTVCPlay"
                    }


                  </em></li>
                <li>PILAR CUBILLOS CRUZ

                  <br /><em>
                    {
                      router.locale === "en" ?
                        "RTVCPlay General Producer" :
                        "Productora general RTVCPlay"
                    }
                  </em></li>
                <li>LUISA MAYORGA MAYORGA<br />
                  <em>
                    {
                      router.locale === "en" ?
                        "RTVCPlay Executive Producer " :
                        "Productora Ejecutiva RTVCPlay"
                    }

                  </em></li>
                <li>CAMILO GALVIS GUERRA<br />

                  <em>
                    {
                      router.locale === "en" ?
                        "RTVCPlay Creative Producer of audiovisual projects" :
                        "Productor Creativo proyectos audiovisuales RTVCPlay"
                    }

                  </em></li>

                <li>ARNAU GIFREU<br />

                  <em>
                    {
                      router.locale === "en" ?
                        "Creative Producer of interactive projects " :
                        "Productor Creativo proyectos interactivos  "
                    }
                    RTVCPlay

                  </em></li>

                <li>MARGARITA HERRERA SABOGAL<br />

                  <em>

                    {
                      router.locale === "en" ?
                        "RTVCPlay Delegate Producer of Original Contents" :
                        "Productora Delegada de Contenidos Originales de RTVCPlay"
                    }


                  </em></li>

                <li>PAULA ANDREA ARIAS GÓMEZ
                  <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "RTVCPlay Executive Producer of Original Contents" :
                        "Productora Ejecutiva de Contenidos Originales de  RTVCPlay"
                    }


                  </em></li>

              </ul>
            </div>

            <div className={styles.Column3}>

              <h2>
                {
                  router.locale === "en" ?
                    "CONVERGENT TECHNOLOGIES DIRECTION OF " :
                    "DIRECCIÓN DE TECNOLOGÍAS CONVERGENTES  "
                }
                RTVC
              </h2>
              <ul>
                <li>LUIS ALFONSO VARGAS AMADO

                  <br /><em>

                    {
                      router.locale === "en" ?
                        "Technology director (E)." :
                        "Director de tecnologías (E)."
                    }
                    <br />
                    {
                      router.locale === "en" ?
                        "Management Coordinator • Convergent Technologies Department - Network Engineering Coordination" :
                        "Coordinador de Gestión • Dirección Tecnologías Convergentes - Coordinación Ingeniería de Red"
                    }
                  </em></li>
                <li>GERARDO ANDRÉS PENAGOS
                  <br /><em>
                    {
                      router.locale === "en" ?
                        "Product Owner. RTVC IT Coordination" :
                        "Dueño de producto. Coordinación de TI RTVC"
                    }
                  </em></li>
                <li>JUAN JORGE HERNÁNDEZ
                  <br />
                  <em>
                    {
                      router.locale === "en" ?
                        "Website developer. RTVC IT Coordination" :
                        "Desarrollador de sitios web. Coordinación de TI RTVC"
                    }
                  </em></li>
                <li>IVÁN DARÍO ROLDÁN<br />

                  <em>
                    {
                      router.locale === "en" ?
                        "Cloud infrastructure administrator. RTVC IT Coordination" :
                        "Administrador infraestructura nube. Coordinación de TI RTVC"
                    }

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