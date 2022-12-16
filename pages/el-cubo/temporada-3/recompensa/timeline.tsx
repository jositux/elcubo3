import React, { useEffect, useState } from 'react';
import styles from './timeline.module.scss';
import UrlUtils from 'utils/Url';
import VideoPlayer from 'components/Season3/VideoPlayer/VideoPlayer';
import Video2Level from 'components/Season3/Shared/Video2Level/VideoPlayer';
import GalleryIconTimeline from 'components/Season3/Svg/GalleryIconTimeline';
import PlayIconTimeline from 'components/Season3/Svg/PlayIconTimeline';
import RedirectionIconTimeline from 'components/Season3/Svg/RedirectionIconTimeline';
import Twitter from 'components/Season3/Svg/Twitter';
import Facebook from 'components/Season3/Svg/Facebook';
import LinkedIn from 'components/Season3/Svg/LinkedIn';
import ButtonHome from 'components/Season3/Shared/Button/ButtonHome';


const timeline = () => {

  const [player, setPlayer] = useState(null);
  let srcVideo = UrlUtils.getVideoUrl('a02328');

  useEffect(() => {
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    function observerCallback(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('fadeOut_test', 'fadeIn_test');
        }
        else {
          entry.target.classList.replace('fadeIn_test', 'fadeOut_test');
        }
      });
    }

    const fadeElms = document.querySelectorAll('.fade_test');

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElms.forEach(el => observer.observe(el));

  }, [])
  

  return (

    <div className={styles.TimelineContainer}>
      <div className={styles.Timeline}>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.SitePicture} src="/images/season3/timeline/pueblo.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>galería de fotos</p>
                    <div>
                      <GalleryIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Jordán - Colombia Turismo Web<br></br>
                      <span>(15 de Octubre de 2022)</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>
                      El pueblo 'fantasma' colombia donde solo viven 56 almas<br></br>
                      <span>Carolina Rincón Ramírez / El tiempo (29 de octubre 2021)</span>
                    </p>
                    <div>
                       <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1822</h1>
                <h2 className={styles.Subtitle}>Fundación del pueblo</h2>
                <p className={styles.Description}>
                  El 2 de octubre de 1822, los campesinos que habitaban los caminos que unían a San Gil con Los Santos, pidieron la creación de una parroquia en advocación a Santa Rosa de Lima, en una capilla de palos y paja que estaba a orillas del río Sube.<br></br><br></br> 
                  En 1830, Rafel Urdaneta, presidente de La Gran Colombia, sancionó la ley que erigió el municipio de sube, al que la Asamblea de Santander, mas de un siglo después, le antepuso el nombre de Jordán.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/1.png"/>
          <img className={styles.SitePicture} src="/images/season3/timeline/puente.png" alt="imagen del lugar" />
          
          <div className={styles.ColumnsContainer}>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1864</h1>
                <h2 className={styles.Subtitle}>Construcción del primer peaje de Colombia</h2>
                <p className={styles.Description}>
                  La construcción de la carretera Bogotá – Bucaramanga, fue vital para que Jordán descendiera a nivel comercial y demográfico. La carretera se construyó a 33 kilómetros al oriente de Jordán y conectó los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcción, y otros aseguran, que las condiciones del terreno no eran las adecuadas para la obra. Aun así, todos coinciden en que esta decisión, desencadenó la decadencia de Jordán.
                </p>
              </div>
            </div>

            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                     <PlayIconTimeline />
                    <p className={styles.LinkText}>Puente de Lengerke - Destino Chicamocha. Encanto majestuoso</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/2.png"/>
          <img className={styles.SitePicture} src="/images/season3/timeline/arrieros.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>video arrieros</p>
                    <PlayIconTimeline />
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Oculto en el Cañón<br></br>
                      <span>Oculto en el Cañón. Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: 'A mula y alpargata</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Oculto en el Cañón.<br></br>
                      <span>Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: 'La ruta del tabaco’</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1900 -1940</h1>
                <h2 className={styles.Subtitle}>Periodo de bonanza<br></br>La buena hora</h2>
                <p className={styles.Description}>
                  Jordán Sube tuvo una época de bonanza porque recibía diariamente a decenas de arrieros y caballos de carga que seguían su camino. Este flujo de personas hizo que se construyeran posadas, chicherías, casas y restaurantes, en donde se les brindaba a los viajeros abundantes comidas con cabros, gallinas y cerdos.<br></br><br></br> 
                  Las tierras, el clima y las aguas de Jordán, lo convirtieron en un lugar ideal para la siembra de tabaco negro, por esta razón, la Compañía Colombiana de Tabaco abrió una de sus primeras oficinas allí.<br></br><br></br>
                  El constante tránsito de mulas y arrieros por el puente colgante, y los prósperos cultivos de tabaco, dejaron muy buenas ganancias para Jordán, por eso estuvo en la cima del comercio de la región.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/3.png"/>
          <img className={styles.SitePicture} src="/images/season3/timeline/mapa.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1930 -1940</h1>
                <h2 className={styles.Subtitle}>Construcción de la carretera<br></br>Bogotá – Bucaramanga</h2>
                <p className={styles.Description}>
                  La construcción de la carretera Bogotá – Bucaramanga, fue vital para que Jordán descendiera a nivel comercial y demográfico. La carretera se construyó a 33 kilómetros al oriente de Jordán y conectó los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcción, y otros aseguran, que las condiciones del terreno no eran las adecuadas para la obra. Aun así, todos coinciden en que esta decisión, desencadenó la decadencia de Jordán.
                </p>
              </div>
            </div>  
          
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <PlayIconTimeline />
                    </div>
                    <p className={styles.LinkText}>Mapa vial de la ubicación de el Pescadero</p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>Ruta Nacional 45A (Colombia)<br></br>
                      <span>Wikipedia</span>
                    </p>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>Oculto en el Cañón.<br></br>
                      <span>
                        Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario 2019.<br></br>
                        Leer subapartado: 'Cuando las venas se cortaron'
                      </span>
                    </p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <PlayIconTimeline />
                    </div>
                    <p className={styles.LinkText}>
                      El pueblo 'fantasma' colombiano donde solo viven 56 almas<br></br>
                      <span>El Tiempo (29 de octubre de 2021)</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/4.png"/>
          <img className={styles.SitePicture} src="/images/season3/timeline/camuro.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>

            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>galería de fotos</p>
                    <div>
                      <PlayIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Jordán Sube, pueblo rico sin gente.<br></br>
                      <span>Canal 1 (16 de agosto del 2015)</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Las Armas (Jaime Rodriguez) - Oculto en el Cañón.<br></br>
                      <span>
                        Especial multimedia por Nicole Acuña y Silvia Corredor.
                      </span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>
                      <span>Jaime Rodriguez, coleccionista santandereano, nos habla sobre las armas que se usaron en los tiempos de la violencia bipartidista en Jordán. Trabajó algunos años como supervisor en la Caja Agraria. Era el encargado de hacer un balance a quienes solicitaban créditos. En el 78, visitó a Roque Julio Ferreira y su hermano José Ángel, ambos solicitantes de un préstamo.</span>
                    </p>
                    <div>
                      <PlayIconTimeline />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1949</h1>
                <h2 className={styles.Subtitle}>Violencia bipartidista<br></br>La mala hora</h2>
                <p className={styles.Description}>
                  En 1949, muchas familias de Jordán Sube abandonaron el pueblo porque el partido mayoritario era el Conservador, y sus militantes se encargaron de sacar a todos los Liberales.
                </p>
              </div>
            </div>
          
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.SitePicture} src="/images/season3/timeline/casa.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1949 - 2016</h1>
                <h2 className={styles.Subtitle}>La Familia Ferreira</h2>
                <p className={styles.Description}>
                  Isabel Sarmiento de Ferreira era la ‘matrona’ de la familia Ferreira. A partir de ella nace el poderío de esta familia en Jordán Sube, algunos lugareños afirman, que para los años del bipartidismo, los Ferreira obligaban a los liberales a declararse conservadores.
                </p>
              </div>
            </div>

            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <GalleryIconTimeline />
                    </div>
                    <p className={styles.LinkText}>versión ilustrada familia pereira</p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>Jordan Sube, un municipio con 10 mil millones de presupuesto y un dueño: los Ferreira<br></br>
                      <span>Las 2 orillas (6 de septiembre de 2015)</span>
                    </p>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>Jordán Sube le dice nuevamente 'no' a la familia Ferreira<br></br>
                      <span>El Tiempo (28 de octubre 2019)</span>
                    </p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>
                      Oculto en el Cañón<br></br>
                      <span>
                        Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019.<br></br>
                        Leer subapartado: 'Tiempo de éxodo’
                      </span>
                    </p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>
                      Oculto en el Cañón<br></br>
                      <span>
                        Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019.<br></br>
                        Leer apartado: ¡Jordán existe!
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/5.png"/>
          <img className={styles.SitePicture} src="/images/season3/timeline/muerte_ferreira.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>

            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>ilustración roque ferreira<br></br>el gamonal</p>
                    <div>
                      <GalleryIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Jaque a los Ferreira en Jordán Sube.<br></br>
                      <span>El tiempo / Manuel Navarro (06 de julio 1997)</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>  
              </div>
            </div>

            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>1991</h1>
                <h2 className={styles.Subtitle}>Muerte de Roque Ferreira</h2>
                <p className={styles.Description}>
                  A Roque Julio Ferreira se le reconoce como el gamonal conservador del municipio de Jordán, quién por más de 20 años controló al pueblo no sólo imponiéndose desde la alcaldía, sino que con su grupo de escoltas y su revólver, decidía absolutamente todo lo que pasaba en el pueblo.<br></br>
                  Al hacerse un sexagenario, un tumor maligno le quitó vigorosidad y fue perdiendo su poder, dejándolo sólo y débil rezando en la iglesia, a la que los jerarcas eclesiásticos no quisieron mandar sacerdote durante muchas décadas por falta de fieles. Roque Julio Ferreira fallece el 9 de julio, y a los tres días de su sepelio, la bóveda explotó como premonición de lo que sucedería con la hegemonía política de los Ferreira y además, generando la creencia de una posible maldición que recae sobre Jordán.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.SitePicture} src="/images/season3/timeline/candado.png" alt="imagen del lugar" />

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>2004</h1>
                <h2 className={styles.Subtitle}>Incendio provocado en la Alcaldía</h2>
                <p className={styles.Description}>
                  El punto más álgido de las sucesivas administraciones de los Ferreira, fue el 23 de agosto de 2004, cuando el entonces alcalde, Gonzalo Bautista, fue citado al despacho del gobernador de Santander, para informarle que al día siguiente, una comisión haría una revisión de las cuentas y gastos del municipio, debido a las evidentes irregularidades en el manejo del presupuesto.<br></br><br></br>
                  Al día siguiente, cuando los miembros de la comisión llegaron a Jordán, encontraron que la sede de la alcaldía se había consumido en llamas la noche anterior, eliminando en el hecho, todos los documentos que iban a ser revisados.
                </p>
              </div>
            </div>
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <GalleryIconTimeline />
                    <p className={styles.LinkText}>ilustración destrucción alcaldía incendio</p>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                    <p className={styles.LinkText}>La tierra del olvido. La increíble historia de Jordán Sube, un municipio santandereano devorado por el abandono, la corrupción y, ahora, un criminal incendio<br></br>
                      <span>Semana (4 de septiembre de 2004)</span>
                    </p>
                  </a>
                </div>  
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
          <img className={styles.Clows} src="/images/season3/timeline/nubes/6.png"/>

          <div className={styles.ColumnsContainer}>
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>galería de fotos</p>
                    <div>
                      <PlayIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Oculto en el Cañón<br></br>
                      <span>Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad de Rosario. 2019. Leer subapartado (dentro del apartado: 'A mula y alpargata'): 'Los caminos que llevan a Jordán'</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>  
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link}>
                    <p className={styles.LinkText}>Alcaldía Municipal de Jordán en Santander - Gobierno de Colombia<br></br>
                      <span>
                        (25 de junio de 2018)
                      </span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>El pueblo que ya no es "fantasma"<br></br>
                      <span>Entrevista con la alcaldesa. Caracol(10 de octubre de 2019).</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <p className={styles.LinkText}>El pueblo escondido en el Chicamocha que busca su 'salida'<br></br>
                      <span>El tiempo (2 de diciembre de 2019).</span>
                    </p>
                    <div>
                      <RedirectionIconTimeline />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>2016</h1>
                <h2 className={styles.Subtitle}>Alcaldía nueva</h2>
                <p className={styles.Description}>
                  Durante muchos años en el municipio de Jordán se reportaron gastos millonarios en obras que nunca se hicieron, y con la opinión pública siguiéndoles la pista, la familia Ferreira perdió las elecciones del 2015. Gloria Isabel Ferreira Fajardo, quien en dos oportunidades ya había sido alcaldesa de Jordán, se enfrentó en las urnas a la candidata Johanna Muñoz. Con una diferencia de 22 votos, Muñoz fue electa como alcaldesa y desde entonces la gente dice haber notado la diferencia. Con esta elección terminó el control que ejerció sobre Jordán la familia Ferreira por más de 60 años.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ItemContent}>
          <div className={`${styles.ColumnsContainer} fade_test fadeOut_test`}>
            <div className={styles.columnText}>
              <div className={styles.TextContent}>
                <h1 className={styles.Title}>2004</h1>
                <h2 className={styles.Subtitle}>Un colegio<br></br>para Jordán</h2>
                <p className={styles.Description}>
                  En el casco urbano de Jordán, los estudiantes reciben clases en las instalaciones de un pequeño edificio que antes funcionó como ancianato, en cada salón, comparten clases tres cursos diferentes.<br></br><br></br>
                  En el año 2022, se inició la construcción de un nuevo colegio para Jordán.
                </p>
              </div>
            </div>
            <div className={styles.columnLink}>
              <div className={styles.LinksContent}>
                <div className={styles.LinkItem}>
                  <a href='#' className={styles.Link} >
                    <div>
                      <GalleryIconTimeline />
                    </div>
                    <p className={styles.LinkText}>galería de fotos</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.ItemContent} ${styles.NoHeight}`}>
          <img className={styles.SitePicture} src="/images/season3/timeline/pueblo_rio_abajo.png" alt="imagen del lugar" />
        
          <div className={styles.ColumnsContainer}>
            <div className={styles.VideoContainer}>
                <Video2Level
                  showBackButton
                  autoPlay={false}
                  title={""}
                  source={srcVideo}
                  showPrevButton={false}
                  showNextButton={false}
                  setPlayer={setPlayer}
                  fullscreen={false}
                  seekControls
                />
            </div>

            <div className={styles.Ver360Content}>
              <h1>Llegaste al final del camino.<br></br>¡Has recorrido los caminos del Jordán!</h1>
              <p>Como recompensa puedes acceder al contenido exclusivo final y compartir el proyecto en redes ¡Feliz viaje de regreso!</p>
            
              <div >
                <ButtonHome /* url={Links.registerTemp2} */ text="Ver video 360°" />
              </div>
              
              <div className={styles.Compartir}>
                <p>Compartir</p>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3&amp;text=Caminos de Jordán https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> 

  )
}

export default timeline