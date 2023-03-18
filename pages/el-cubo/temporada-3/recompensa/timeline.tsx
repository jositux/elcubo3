import React, { Fragment, useEffect, useState } from 'react';
import styles from './timeline.module.scss';
import GalleryIconTimeline from 'components/Season3/Svg/GalleryIconTimeline';
import PlayIconTimeline from 'components/Season3/Svg/PlayIconTimeline';
import RedirectionIconTimeline from 'components/Season3/Svg/RedirectionIconTimeline';
import Twitter from 'components/Season3/Svg/Twitter';
import Facebook from 'components/Season3/Svg/Facebook';
import LinkedIn from 'components/Season3/Svg/LinkedIn';
import Play from 'components/Season3/Svg/PlayConfesionario';

import VideoFadeModal from 'components/Season3/Modal/VideoFadeModal';
import GalleryFadeModal from 'components/Season3/Modal/GalleryFadeModal';
import ImageFadeModal from 'components/Season3/Modal/ImageFadeModal';
import ButtonModal from "components/Season3/Shared/Button/ButtonModal";
import dynamic from 'next/dynamic';
import disableScroll from 'disable-scroll';
import Back from 'components/Season3/Svg/Back';

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const timeline = () => {


  const [juanPercent, setJuanPercent] = useState(0);
  const [guillermoPercent, setGuillermoPercent] = useState(0);
  const [yennyPercent, setYennyPercent] = useState(0);
  const [soledadPercent, setSoledadPercent] = useState(0);
  const [diegoPercent, setDiegoPercent] = useState(0);
  const characters = [
    {
      name: 'soledad'
    },
    {
      name: 'diego'

    },
    {
      name: 'juan'

    },
    {
      name: 'yenny'

    },
    {
      name: 'guillermo'
    },
  ];

  useEffect(() => {
    characters.forEach(c => {
      let data = JSON.parse(localStorage.getItem(`'${c.name}'`));

      if (data) {
        switch (c.name) {
          case 'juan':
            setJuanPercent(data.percent);
            break;
          case 'guillermo':
            setGuillermoPercent(data.percent);
            break;
          case 'yenny':
            setYennyPercent(data.percent);
            break;
          case 'diego':
            setDiegoPercent(data.percent);
            break;
          case 'soledad':
            setSoledadPercent(data.percent);
            break;
          default:
            break;
        }
      }
    });

  }, [])

  const imagenes1 = [
    '/images/season3/timeline/gallery/1/1-960.jpg',
    '/images/season3/timeline/gallery/1/2-960.jpg',
    '/images/season3/timeline/gallery/1/3-960.jpg',
    '/images/season3/timeline/gallery/1/4-960.jpg',
    '/images/season3/timeline/gallery/1/5-960.jpg',
    '/images/season3/timeline/gallery/1/6-960.jpg',
    '/images/season3/timeline/gallery/1/7-960.jpg',
  ];

  const imagenes1Zoom = [
    '/images/season3/timeline/gallery/1/1.jpg',
    '/images/season3/timeline/gallery/1/2.jpg',
    '/images/season3/timeline/gallery/1/3.jpg',
    '/images/season3/timeline/gallery/1/4.jpg',
    '/images/season3/timeline/gallery/1/5.jpg',
    '/images/season3/timeline/gallery/1/6.jpg',
    '/images/season3/timeline/gallery/1/7.jpg',
  ];

  const imagenes2 = [
    '/images/season3/timeline/gallery/2/1-960.jpg',
    '/images/season3/timeline/gallery/2/2-960.jpg',
    '/images/season3/timeline/gallery/2/3-960.jpg',
    '/images/season3/timeline/gallery/2/4-960.jpg',
    '/images/season3/timeline/gallery/2/5-960.jpg',
    '/images/season3/timeline/gallery/2/6-960.jpg',
    '/images/season3/timeline/gallery/2/7-960.jpg',
  ];

  const imagenes2Zoom = [
    '/images/season3/timeline/gallery/2/1.jpg',
    '/images/season3/timeline/gallery/2/2.jpg',
    '/images/season3/timeline/gallery/2/3.jpg',
    '/images/season3/timeline/gallery/2/4.jpg',
    '/images/season3/timeline/gallery/2/5.jpg',
    '/images/season3/timeline/gallery/2/6.jpg',
    '/images/season3/timeline/gallery/2/7.jpg',
  ];

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
          //entry.target.classList.replace('fadeIn_test', 'fadeOut_test');
        }
      });
    }

    const fadeElms = document.querySelectorAll('.fade_test');

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    fadeElms.forEach(el => observer.observe(el));

  }, [])


  /* Gallery */
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [images, setImages] = useState(imagenes1);
  const [imagesZoom, setImagesZoom] = useState(imagenes1Zoom);

  const handleOnOpenGallery = () => {
    setIsOpenGallery(true);
  };

  const handleOnCloseGallery = () => {
    setIsOpenGallery(false);
    setImages([]);
    setImagesZoom([]);
  };


  /* Image */
  const [isOpenImage, setIsOpenImage] = useState(false);

  const imagen1 = '/images/season3/timeline/gallery/ilustracion/0.jpg';
  const imagen2 = '/images/season3/timeline/gallery/ilustracion/1.jpg';
  const imagen3 = '/images/season3/timeline/gallery/ilustracion/2.jpg';
  const imagen4 = '/images/season3/timeline/gallery/ilustracion/3.jpg';
  const imagen5 = '/images/season3/timeline/gallery/ilustracion/4.jpg';

  const [image, setImage] = useState(imagen1);

  const handleOnOpenImage = () => {
    setIsOpenImage(true);
  };

  const handleOnCloseImage = () => {
    setIsOpenImage(false);
    setImage(null);
  };


  /* video */
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState('482203');

  const handleOnPlayVideo = () => {
    disableScroll.on();
    setIsOpen(true);
  };

  const handleOnCloseVideo = () => {
    disableScroll.off();
  };


  /* Video 360 */
  const [isOpen360, setOpen360] = useState(false);
  const [isOpen360b, setOpen360b] = useState(false);


  return (

    <Fragment>

      <div className={styles.TimelineContainer}>

        <a href="/el-cubo/temporada-3/personajes?ref=view" className={styles.Back} >
          <Back /> <span>Volver</span>
          {

            /* (juanPercent === 100 && guillermoPercent === 100 && yennyPercent === 100 && soledadPercent === 100 && diegoPercent === 100 && timeline) ?
               <h2>finalisima</h2> :
               ''
 */
          }
        </a>

        <div className={styles.Timeline}>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.SitePicture} src="/images/season3/timeline/pueblo.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes1); setImagesZoom(imagenes1Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>galería de fotos</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.colombiaturismoweb.com/DEPARTAMENTOS/SANTANDER/MUNICIPIOS/JORDAN/JORDAN.htm
'  target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Jordán - Colombia Turismo Web<br></br>
                        <span>(15 de Octubre de 2022)</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-sube-en-el-canon-del-chicamocha-se-convirtio-en-un-pueblo-fantasma-101032' target="_blank" className={styles.Link}>
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
                    El 2 de octubre de 1822, los campesinos que habitaban los caminos que unían a San Gil con
                    Los Santos pidieron la creación de una parroquia en advocación a Santa Rosa de Lima, en
                    una capilla de palos y paja que estaba a orillas del río Sube.<br /><br />
                    En 1830, Rafel Urdaneta, presidente de La Gran Colombia, sancionó la ley que erigió el
                    municipio de sube, al que la Asamblea de Santander, más de un siglo después, le antepuso
                    el nombre de Jordán.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.Clows} src="/images/season3/timeline/nubes/1.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/puente.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>1864</h1>
                  <h2 className={styles.Subtitle}>Construcción del primer<br />peaje de Colombia</h2>
                  <p className={styles.Description}>
                    El puente Lengerke se construyó en 1864 sobre el río Chicamocha en Jordán Sube. Este es
                    un puente emblemático porque no sólo fue uno de los primeros construidos en Colombia, y
                    zona de paso del Libertador Simón Bolívar, sino que además fue el primer peaje del país
                    donde se cobraban cinco centavos por cada caballo de carga que cruzaba el lugar.
                  </p>
                </div>
              </div>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setOpen360b(true) }} className={styles.Link} >
                      <div>
                        <PlayIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Puente de Lengerke - Destino Chicamocha. Encanto majestuoso</p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.Clows} src="/images/season3/timeline/nubes/2.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/arrieros.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('482203'); handleOnPlayVideo(); }} className={styles.Link} >
                      <p className={styles.LinkText}>video arrieros</p>
                      <div>
                        <PlayIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Oculto en el Cañón<br></br>
                        <span>Oculto en el Cañón. Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: 'A mula y alpargata</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/larutadeltabaco.html' target="_blank" className={styles.Link}>
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
                  <h2 className={styles.Subtitle}>Periodo de bonanza</h2>
                  <p className={styles.Description}>
                    Jordán Sube se vio beneficiado durante un tiempo de los arrieros y caballos de carga que cruzaban sus dominios. Este movimiento humano y comercial permitió la construcción de casas e hizo florecer chicherías, restaurantes y posadas.<br /><br />

                    Además, las tierras fértiles y el río Chicamocha lo convirtieron en un espacio idóneo para la siembra y cultivo del tabaco negro. Un ejemplo de la prosperidad que se vivió en el pueblo durante esa época fue el establecimiento en la zona de la Compañía Colombiana de Tabaco. De este modo, mulas, arrieros y tabaco se constituyeron como los tres pilares que permitieron a Jordán disfrutar de una época de bonanza, una buena hora para el pueblo.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.Clows} src="/images/season3/timeline/nubes/3.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/mapa.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>1930 - 1940</h1>
                  <h2 className={styles.Subtitle}>Construcción de la carretera<br></br>Bogotá – Bucaramanga</h2>
                  <p className={styles.Description}>
                    La construcción de la carretera Bogotá – Bucaramanga fue vital para que Jordán descendiera a nivel comercial y demográfico. La carretera se construyó a 33 kilómetros al oriente de Jordán y conectó los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcción, y otros aseguran que las condiciones del terreno no eran las adecuadas para la obra. Aun así, todos coinciden en que esta decisión desencadenó la decadencia de Jordán.
                  </p>
                </div>
              </div>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link} >
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Mapa vial de la ubicación de el Pescadero</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://es.wikipedia.org/wiki/Ruta_Nacional_45A_(Colombia)' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Ruta Nacional 45A (Colombia)<br></br>
                        <span>Wikipedia</span>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
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
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-
sube-en-el-canon-del-chicamocha-se-convirtio-en-un-pueblo-fantasma-101032' target="_blank" className={styles.Link} >
                      <div>
                        <RedirectionIconTimeline />
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
            <img className={styles.Clows} src="/images/season3/timeline/nubes/4.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/camuro.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes2); setImagesZoom(imagenes2Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>galería de fotos</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://noticias.canal1.com.co/que-tal-esto/jordan-sube-pueblo-rico-sin-gente/' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Jordán Sube, pueblo rico sin gente.<br></br>
                        <span>Canal 1 (16 de agosto del 2015)</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>

                  <div className={styles.LinkItem}>
                    <a href='https://vimeo.com/315140794' target='_blank' className={styles.Link} >
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
                  <h2 className={styles.Subtitle}>Violencia bipartidista<br />La mala hora</h2>
                  <p className={styles.Description}>
                    En 1949, muchas familias de Jordán Sube abandonaron el pueblo porque el partido
                    mayoritario era el Conservador, y sus militantes se encargaron de sacar a todos los
                    Liberales.
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
                    Isabel Sarmiento de Ferreira era la ‘matrona’ de la familia Ferreira. A partir de ella nace el
                    poderío de esta familia en Jordán Sube. Algunos lugareños afirman que para los años del
                    bipartidismo, los Ferreira obligaban a los liberales a declararse conservadores.
                  </p>
                </div>
              </div>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen1); handleOnOpenImage(); }} className={styles.Link} >
                      <div>
                        <GalleryIconTimeline />
                      </div>
                      <p className={styles.LinkText}>versión ilustrada familia pereira</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.las2orillas.co/jordan-sube-municipio-con-10-mil-millones-de-presupuesto-dueno-los-ferreira/
' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Jordan Sube, un municipio con 10 mil millones de presupuesto y un dueño: los Ferreira<br></br>
                        <span>Las 2 orillas (6 de septiembre de 2015)</span>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a
                      href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-sube-le-dice-nuevamente-no-a-la-familia-ferreira-427978'
                      target="_blank"
                      className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Jordán Sube le dice nuevamente 'no' a la familia Ferreira<br></br>
                        <span>El Tiempo (28 de octubre 2019)</span>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a
                      href='http://conlupa.co/oculto-canon/tiempodeexodo.html'
                      target="_blank"
                      className={styles.Link} >
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
                    <a href='http://conlupa.co/oculto-canon/jordanexiste.html'
                      target="_blank"
                      className={styles.Link} >
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
            <img className={styles.Clows} src="/images/season3/timeline/nubes/5.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/muerte_ferreira.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen2); handleOnOpenImage(); }} className={styles.Link} >
                      <p className={styles.LinkText}>ilustración roque ferreira<br></br>el gamonal</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/archivo/documento/MAM-624214' target="_blank" className={styles.Link}>
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
                    A Roque Julio Ferreira se le reconoce como el gamonal conservador del municipio de
                    Jordán, quién por más de 20 años controló al pueblo no sólo imponiéndose desde la
                    alcaldía, sino que con su grupo de escoltas y su revólver, decidía absolutamente todo lo que
                    pasaba en el pueblo.<br /><br />

                    Al hacerse un sexagenario, un tumor maligno le quitó vigorosidad y fue perdiendo su
                    poder, dejándolo sólo y débil rezando en la iglesia, a la que los jerarcas eclesiásticos no
                    quisieron mandar sacerdote durante muchas décadas por falta de fieles. Roque Julio
                    Ferreira falleció el 9 de julio de 1991, y a los tres días de su sepelio, la bóveda explotó
                    como premonición de lo que sucedería con la hegemonía política de los Ferreira y además,
                    generando la creencia de una posible maldición que recae sobre Jordán.
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
                  <h2 className={styles.Subtitle}>Incendio provocado<br /> en la Alcaldía</h2>
                  <p className={styles.Description}>
                    Uno de los momentos más críticos de las sucesivas administraciones de los Ferreira fue el 23 de agosto de 2004 cuando el entonces alcalde, Gonzalo Bautista, fue convocado por el gobernador de Santander para informarle que al día siguiente una comisión haría una revisión de las cuentas y gastos del municipio debido a las evidentes irregularidades en el manejo del presupuesto.
                    <br /><br />
                    Al día siguiente, cuando los miembros de la comisión llegaron a Jordán, encontraron que la sede de la alcaldía se había consumido en llamas la noche anterior, así como todos los documentos que iban a ser revisados.
                  </p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen3); handleOnOpenImage(); }} className={styles.Link} >
                      <GalleryIconTimeline />
                      <p className={styles.LinkText}>ilustración destrucción alcaldía incendio</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.semana.com/nacion/articulo/la-tierra-del-olvido/67981-3/' target="_blank" className={styles.Link}>
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
            <img className={styles.Clows} src="/images/season3/timeline/nubes/6.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/alcaldia.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen4); handleOnOpenImage(); }} target="_blank" className={styles.Link} >
                      <p className={styles.LinkText}>Foto de la Alcaldía</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Oculto en el Cañón<br></br>
                        <span>Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad de Rosario. 2019. Leer subapartado (dentro del apartado: 'A mula y alpargata'): 'Los caminos que llevan a Jordán'</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.jordan-santander.gov.co/' target="_blank" className={styles.Link}>
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
                    <a href='https://caracol.com.co/emisora/2019/10/01/bucaramanga/1569933810_686960.html
' target="_blank" className={styles.Link} >
                      <p className={styles.LinkText}>El pueblo que ya no es "fantasma"<br></br>
                        <span>Entrevista con la alcaldesa. Caracol(10 de octubre de 2019).</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/nueva-via-de-acceso-a-jordan-sube-en-santander-313488
' target="_blank" className={styles.Link} >
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
                    Durante muchos años, en el municipio de Jordán se reportaron gastos millonarios en obras que nunca se hicieron, y con la opinión pública siguiéndoles la pista, la familia Ferreira perdió las elecciones del 2015. Gloria Isabel Ferreira Fajardo, quien en dos oportunidades ya había sido alcaldesa de Jordán, se enfrentó en las urnas a la candidata Johanna Muñoz. En unas ajustadas elecciones, Muñoz superó por 22 votos a Ferreira, convirtiéndose en la nueva alcaldesa del municipio y, con el paso del tiempo, siendo alabada y reconocida su labor por algunos habitantes del pueblo.
                    <br /><br />
                    Con esta elección terminó el control que ejerció sobre Jordán la familia Ferreira por más de 60 años.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ItemContent}>
            <img className={styles.SitePicture} src="/images/season3/timeline/colegio.png" alt="imagen del lugar" />

            <div className={`${styles.ColumnsContainer} fade_test fadeOut_test`}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>2019</h1>
                  <h2 className={styles.Subtitle}>Un colegio<br></br>para Jordán</h2>
                  <p className={styles.Description}>
                    En el casco urbano de Jordán, los estudiantes reciben clases en las instalaciones de un
                    pequeño edificio que antes funcionó como ancianato. En cada salón, comparten clases tres
                    cursos diferentes.<br /><br />
                    En el año 2022, se inició la construcción de un nuevo colegio para Jordán.
                  </p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  {/*<div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen5); handleOnOpenImage(); }} className={styles.Link} >
                      <div>
                        <GalleryIconTimeline />
                      </div>
                      <p className={styles.LinkText}>galería de fotos</p>
                    </a>


  </div>*/}

                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('485849'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div>
                        <PlayIconTimeline />
                      </div>



                      <p className={styles.LinkText}>
                        <span>Reconstrucción del colegio</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ItemContent}>
            <div className={`${styles.ColumnsContainer} fade_test fadeOut_test`}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>Confesionarios</h1>
                  <p className={styles.Description}>
                    Ahora que ya conoces a todos los personajes…<br />¿quieres conocer
                    sus pensamientos más íntimos? <br /> <br /></p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('497300'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div className={styles.Avatar}>
                        <img className={styles.ConfesionarioPicture} src="/images/season3/timeline/confesionarios/juan.png" alt="Juan" />
                        <Play />
                      </div>
                      <p className={styles.LinkText}>
                        <h2 className={styles.Subtitle}>Juan de Jesús Estévez</h2>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('497302'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div className={styles.Avatar}>
                        <img className={styles.ConfesionarioPicture} src="/images/season3/timeline/confesionarios/soledad.png" alt="Soledad" />
                        <Play />
                      </div>
                      <p className={styles.LinkText}>
                        <h2 className={styles.Subtitle}>Soledad Silva </h2>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('497294'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div className={styles.Avatar}>
                        <img className={styles.ConfesionarioPicture} src="/images/season3/timeline/confesionarios/diego.png" alt="Diego" />
                        <Play />
                      </div>
                      <p className={styles.LinkText}>
                        <h2 className={styles.Subtitle}>Diego Sarmiento</h2>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('497298'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div className={styles.Avatar}>
                        <img className={styles.ConfesionarioPicture} src="/images/season3/timeline/confesionarios/yenny.png" alt="Yenny" />
                        <Play />
                      </div>
                      <p className={styles.LinkText}>
                        <h2 className={styles.Subtitle}>Yenny Delgado</h2>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('497296'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div className={styles.Avatar}>
                        <img className={styles.ConfesionarioPicture} src="/images/season3/timeline/confesionarios/guillermo.png" alt="Guillermo" />
                        <Play />
                      </div>
                      <p className={styles.LinkText}>
                        <h2 className={styles.Subtitle}>Guillermo Prada</h2>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.EndContent} ${styles.NoHeight}`}>
            <img
              className={styles.SitePicture} src="/images/season3/timeline/pueblo_rio_abajo.png"
              alt="imagen del lugar"
            />

            <div>

              <img
                onClick={() => { setVideo('485851'); handleOnPlayVideo(); }}
                className={styles.VideoPicture}
                src="/images/season3/timeline/video.jpg"
                alt="imagen del lugar"
              />


              <div className={styles.Ver360Content}>
                <h1>Llegaste al final del camino.<br></br>¡Has recorrido los caminos del Jordán!</h1>
                <p>Como recompensa puedes acceder al contenido exclusivo final y compartir el proyecto en redes ¡Feliz viaje de regreso!</p>

                <ButtonModal type="btn" text="ver video 360°" onClick={() => setOpen360(true)} />


                <div className={styles.Compartir}>
                  <p>Compartir</p>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3&amp;text=Caminos de Jordán https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://elcubo3.vercel.app/el-cubo/temporada-3/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >

      <div className={styles.fullScreenVideo}>
        <VideoFadeModal
          videoId={video}
          showModal={isOpen}
          closeVideo={handleOnCloseVideo}
          setShowModal={setIsOpen}
          autoPlay={true}
        />
      </div>

      <div className={styles.fullScreenGallery}>
        <GalleryFadeModal
          imagenes={images}
          imagenesZoom={imagesZoom}
          showModal={isOpenGallery}
          onCloseModal={handleOnCloseGallery}
          setShowModal={setIsOpenGallery}
        />
      </div>

      <div className={styles.fullScreenImage}>
        <ImageFadeModal
          imagen={image}
          showModal={isOpenImage}
          onCloseModal={handleOnCloseImage}
          setShowModal={setIsOpenImage}
        />
      </div>


      <ModalVideo channel='youtube' autoplay isOpen={isOpen360} videoId={'R7YZtj03b1s'} onClose={() => setOpen360(false)} />
      <ModalVideo channel='youtube' autoplay isOpen={isOpen360b} videoId={'6p3u1MW-DAc'} onClose={() => setOpen360b(false)} />

    </Fragment >
  )
}

export default timeline