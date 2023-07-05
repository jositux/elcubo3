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

import HtmlParser from 'html-react-parser';

import { useRouter } from 'next/router';

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const Timeline = () => {

  const router = useRouter();

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
  const [videoTitle, setVideoTitle] = useState('confesionario');

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

        <a href=
          {
            router.locale === 'en' ?
              '/en/el-cubo/temporada-3/personajes?ref=view' :
              '/el-cubo/temporada-3/personajes?ref=view'
          }
          className={styles.Back} >
          <Back />
          <span>
            {
              router.locale === 'en' ?
                'Back' :
                'Volver'
            }
          </span>
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
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/pueblo.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes1); setImagesZoom(imagenes1Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'photo gallery' :
                            'galería de fotos'
                        }
                      </p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.colombiaturismoweb.com/DEPARTAMENTOS/SANTANDER/MUNICIPIOS/JORDAN/JORDAN.htm
'  target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        Jordán -  {router.locale === 'en' ?
                          'Colombia Tourism Website' :
                          'Colombia Turismo Web'
                        }<br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              '(2022 - October 15)' :
                              '(15 de Octubre de 2022)'
                          }
                        </span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-sube-en-el-canon-del-chicamocha-se-convirtio-en-un-pueblo-fantasma-101032' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'The "ghost" town where only 56 souls live.' :
                            ' El pueblo "fantasma" colombiano donde solo viven 56 almas'
                        }
                        <br></br>
                        <span>Carolina Rincón Ramírez / El tiempo
                          {
                            router.locale === 'en' ?
                              ' (2021 - October 29)' :
                              ' (29 de octubre 2021)'
                          }
                        </span>
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
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'Town foundation' :
                        'Fundación del pueblo'
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        HtmlParser('On October 2, 1822. The peasants who lived in the paths that united "San Gil" and "Los Santos" prayed in a chapel located on the shores of the "Sube" river and built with sticks and straw, for the creation of a parish in advocation to Santa Rosa de Lima.<br /><br /> In 1830, Rafael Urdaneta, president of La Gran Colombia, ratified the law that founded  the town of Sube, to which the Assembly of Santader, more than a century later, put the Jordan name ahead.') :
                        HtmlParser('El 2 de octubre de 1822, los campesinos que habitaban los caminos que unían a San Gil con Los Santos pidieron la creación, en una capilla ubicada a orillas del río Sube y construida con palos y paja, de una parroquia en advocación a Santa Rosa de Lima.<br /><br />En 1830, Rafel Urdaneta, presidente de La Gran Colombia, sancionó la ley que erigió el municipio de Sube, al que la Asamblea de Santander, más de un siglo después, le antepuso el nombre de Jordán.')
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.Clows} src="/images/season3/timeline/nubes/1.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/puente.png" alt="imagen del lugar" />
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/puente.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>1864</h1>
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'Colombia’s first toll construction' :
                        HtmlParser('Construcción del primer<br />peaje de Colombia')
                    }

                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'The Lengerke bridge over the Chicamocha River was built in 1864 in Jordan Sube. This is an iconic bridge because it is one of the first in Colombia. It also was part of Bolivar’s route and the first toll in the country. For every horse that went through the toll a 5 cent fee was charged' :
                        'El puente Lengerke fue construido en 1864 sobre el río Chicamocha en Jordán Sube. Este es un puente emblemático por ser uno de los primeros en Colombia, y zona de paso del libertador Simón Bolívar, así como el primer peaje del país. Allí cobraban cinco centavos por cada caballo de carga que cruzaba el lugar.'
                    }
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
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/arrieros.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  {/*<div className={styles.LinkItem}>
                    <a onClick={
                      () => {
                        setVideo('482203');
                        setVideoTitle('');
                        handleOnPlayVideo();
                      }}
                      className={styles.Link} >
                      <p className={styles.LinkText}>video arrieros</p>
                      <div>
                        <PlayIconTimeline />
                      </div>
                    </a>
                    </div>*/}
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon' :
                            'Oculto en el Cañón'
                        }
                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Hidden in the Canyon. Multimedia Special by Nicole Acuña and Silvia Corredor. Journalistic and  Public opinion show PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Read: "A mula y alpargata"' :
                              'Oculto en el Cañón. Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: "A mula y alpargata"'
                          }
                        </span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/larutadeltabaco.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon' :
                            'Oculto en el Cañón'
                        }<br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Multimedia special by Nicole Acuña and Silvia Corredor. Program in Journalism and Public Opinion PO04. School of Human Sciences. Rosario University. 2019. Read section: "The tobacco route"' :
                              'Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: "La ruta del tabaco"'
                          }
                        </span>
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
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'Boom time' :
                        'Periodo de bonanza'
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'Jordan Sube benefited for a while from the muleteers and horses who crossed their domains. This human and commercial movement allowed the construction of houses and made chicherías, restaurants and hotels(inns) flourish.' :
                        'Jordán Sube se vio beneficiado durante un tiempo de los arrieros y caballos de carga que cruzaban sus dominios. Este movimiento humano y comercial permitió la construcción de casas e hizo florecer chicherías, restaurantes y posadas.'
                    }


                    {
                      router.locale === 'en' ?
                        'Furthermore, the fertile lands and the Chicamocha river made it an ideal spot for planting and growing of black tobacco. An example of the prosperity the town was living, was the establishment in the zone of the Colombian Tobacco Company. Thus, mules, muleteers and tobacco were constituted as the three pillars that allowed Jordan to enjoy a bonanza stage. Those were good times for the people.' :
                        'Además, las tierras fértiles y el río Chicamocha lo convirtieron en un espacio idóneo para la siembra y cultivo del tabaco negro. Un ejemplo de la prosperidad que se vivió en el pueblo durante esa época fue el establecimiento en la zona de la Compañía Colombiana de Tabaco. De este modo, mulas, arrieros y tabaco se constituyeron como los tres pilares que permitieron a Jordán disfrutar de una etapa de bonanza, una buena hora para el pueblo.'
                    }
                    <br /><br />

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.Clows} src="/images/season3/timeline/nubes/3.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/mapa.png" alt="imagen del lugar" />
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/mapa.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>1930 - 1940</h1>
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        HtmlParser('Construction of the Bogota<br />Bucaramanga road') :
                        HtmlParser('Construcción de la carretera<br />Bogotá – Bucaramanga')
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'The Bogota - Bucaramanga road stopped the commercial and demographic growth of Jordan. The road was built 33 kilometers west from the town and connected San Gil and Pescadero. Some say the gamonales were the ones that did not allowed the construction. Other assure that the ground conditions were not ideal for the obra. Even though, all agree this decision ended in the towns decadencia' :
                        'La construcción de la carretera Bogotá – Bucaramanga frenó el crecimiento comercial y demográfico de Jordán. La carretera fue construida 33 kilómetros al oriente del pueblo y conectó los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcción, y otros aseguran que las condiciones del terreno no eran las adecuadas para la obra. Aun así, todos coinciden en que esta decisión terminó en la decadencia del municipio.'
                    }

                  </p>
                </div>
              </div>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>

                  <div className={styles.LinkItem}>
                    <a href='https://es.wikipedia.org/wiki/Ruta_Nacional_45A_(Colombia)' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'National Route 45A (Colombia)' :
                            'Ruta Nacional 45A (Colombia)'
                        }


                        <br></br>
                        <span>Wikipedia</span>
                      </p>
                    </a>
                  </div>


                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>{
                        router.locale === 'en' ?
                          'Hidden in the Canyon.' :
                          'Oculto en el Cañón.'
                      }<br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Multimedia Special by Nicole Acuña and Silvia Corredor. Journalistic and  Public opinion show PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Read section: "Cuando las venas se cortaron"' :
                              'Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: "Cuando las venas se cortaron"'
                          }

                        </span>
                      </p>
                    </a>
                  </div>

                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('482203'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div>
                        <PlayIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon.' :
                            'Oculto en el Cañón.'
                        }</p>

                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-
sube-en-el-canon-del-chicamocha-se-convirtio-en-un-pueblo-fantasma-101032' target="_blank" className={styles.Link} >
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'The "ghost" town where only 56 souls live' :
                            ' El pueblo "fantasma" colombiano donde solo viven 56 almas'
                        }

                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              '"El Tiempo", newspaper (October 29, 2021)' :
                              'El Tiempo (29 de octubre de 2021)'
                          }</span>
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
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/camuro.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes2); setImagesZoom(imagenes2Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'photo gallery' :
                            'galería de fotos'
                        }

                      </p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://noticias.canal1.com.co/que-tal-esto/jordan-sube-pueblo-rico-sin-gente/' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Jordan Sube, rich town with no people' :
                            'Jordán Sube, pueblo rico sin gente.'
                        }

                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Chanel 1 (August 16, 2015)' :
                              'Canal 1 (16 de agosto del 2015)'
                          }
                        </span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>

                  <div className={styles.LinkItem}>
                    <a href='https://vimeo.com/315140794' target='_blank' className={styles.Link} >
                      <p className={styles.LinkText}>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Jaime Rodriguez, santanderean collector, talks about the weapons that were used during the bipartisan violence times in Jordan. When he was an employee in Caja Agraria, he visited the brothers of the town’s most powerful chieftain: Julio and Jose Angel Ferreira, who applied for a loan in 1978. Testimony taken from multimedia’s special “Hidden in the canyon”' :
                              'Jaime Rodríguez, coleccionista santandereano, habla sobre las armas que fueron usadas en tiempos de la violencia bipartidista en Jordán. Cuando Rodríguez era empleado de la Caja Agraria visitó a los hermanos del gamonal del pueblo: Julio y José Ángel Ferreira, quienes solicitaron un préstamo en 1978. Testimonio tomado del especial multimedia Oculto en el Cañón.'
                          }
                        </span>
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
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        HtmlParser('  Bipartisan violence<br />The bad times') :
                        HtmlParser(' Violencia bipartidista<br />La mala hora')
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'In 1949 many families from “Jordán Sube” abandoned the village that was under the conservative control. They put all their efforts into displacing the liberals.' :
                        'En 1949, muchas familias de Jordán Sube abandonaron el pueblo, controlado por los conservadores,quienes pusieron todos sus esfuerzos en desplazar a los liberales.'
                    }

                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.SitePicture} src="/images/season3/timeline/casa.png" alt="imagen del lugar" />
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/casa.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>1949 - 2016</h1>
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'The Ferreira Family' :
                        'La Familia Ferreira'
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'The power of the Ferreira family  in Jordán Sube starts with Isabel Sarmiento de Ferreira, the family’s matron. Some locals claim that in the bipartisan years,  it was they who forced the liberals to declare themselves as conservatives.' :
                        'El poderío de los Ferreira en Jordán Sube nace con Isabel Sarmiento de Ferreira, la ‘matrona’ de la familia. Algunos lugareños afirman que en los años del bipartidismo fueron ellos quienes obligaron a los liberales a declararse conservadores.'
                    }

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
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'illustration of the Ferreira Family' :
                            'versión ilustrada de La Familia Ferreira'
                        }

                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.las2orillas.co/jordan-sube-municipio-con-10-mil-millones-de-presupuesto-dueno-los-ferreira/
' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            "Jordán Sube, a town with a 10 thousand millions budget and one owner: The Ferreiras." :
                            'Jordan Sube, un municipio con 10 mil millones de presupuesto y un dueño: los Ferreira'
                        }

                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              "Las 2 orillas (September 6, 2015)" :
                              'Las 2 orillas (6 de septiembre de 2015)'
                          }
                        </span>
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
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            ' Jordan Sube says “NO” to the Ferreiras family, one more time' :
                            ' Jordán Sube le dice nuevamente "no" a la familia Ferreira'
                        }
                        <br></br>
                        <span>

                          {
                            router.locale === 'en' ?
                              'El Tiempo (2019 - October 28)' :
                              'El Tiempo (28 de octubre 2019)'
                          }
                        </span>
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
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon' :
                            'Oculto en el Cañón'
                        }
                        <br />
                        <span>
                          {
                            router.locale === 'en' ?
                              'Multimedia special by Nicole Acuña and Silvia Corredor. Program in Journalism and Public Opinion PO04. School of Human Sciences. Rosario University. 2019. Read subsection: "Time of exodus"' :
                              'Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer subapartado: "Tiempo de éxodo"'}
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
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon' :
                            'Oculto en el Cañón'
                        }<br />
                        <span>
                          {
                            router.locale === 'en' ?
                              'Multimedia special by Nicole Acuña and Silvia Corredor. Program in Journalism and Public Opinion PO04. School of Human Sciences. Rosario University. 2019. Read section: "Jordan exists!"' :
                              ' Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: "¡Jordán existe!"'}


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
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/muerte_ferreira.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen2); handleOnOpenImage(); }} className={styles.Link} >
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'illustration roque ferreira' :
                            'ilustración roque ferreira'
                        }<br></br>el gamonal</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/archivo/documento/MAM-624214' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Checkmate the Ferreira in Jordán Sube' :
                            'Jaque a los Ferreira en Jordán Sube.'
                        }
                        <br></br>
                        <span>El tiempo / Manuel Navarro {
                          router.locale === 'en' ?
                            '(july 6, 1997)' :
                            '(06 de julio 1997)'
                        }</span>
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
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'Roque Ferreira’s death' :
                        'Muerte de Roque Ferreira'
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'Roque Julio Ferreira is known as the conservative chieftain in Jordan Sube. A man that for over 20 years ruled and controlled everything that happened in the town through his bodyguards, gun and political investiture, because he was the mayor.' :
                        'Roque Julio Ferreira es reconocido como el gamonal conservador del municipio de Jordán Sube. Un hombre que por más de 20 años controló todo lo que sucedía en el pueblo con sus escoltas, revólver e investidura política, pues era el alcalde.'
                    }
                    <br /><br />
                    {
                      router.locale === 'en' ?
                        'When he turned 70, a malignant tumor weakened his strength and started losing his power. Ferreira ended up alone, weak and praying in the church that for many years did not have a priest because of the lack of believers. He died on July 8, 1991 and three days after his burial, the tomb where his body was exploded as it was a premonition about what would happen with political hegemony in the town. Others believe this was the beginning of a supposed curse over Jordan.' :
                        'Al cumplir 70 años, un tumor maligno le restó vigorosidad y fue perdiendo su poder. Ferreira terminó sólo, débil y rezando en la iglesia que durante muchos años estuvo sin sacerdote por falta de fieles. Falleció el 9 de julio de 1991, y tres días después de su sepelio, la bóveda en donde permanecía su cuerpo explotó como si se tratara de una premonición sobre lo que sucedería con la hegemonía política en el pueblo. Aunque para algunos el hecho es el inicio de una supuesta maldición que recae sobre Jordán.'
                    }
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.SitePicture} src="/images/season3/timeline/candado.png" alt="imagen del lugar" />
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/candado.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>2004</h1>
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        HtmlParser('Criminal Fire <br />in the Town Hall')
                        :
                        HtmlParser('Incendio provicado<br />en la Alcaldía')
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'One of the most critical moments in Ferreira’s successive administrations happened on August 23, 2004 when the mayor, Gonzalo Bautista received a call from the Santander governor to inform that a special commission would review the accounts and expenses of the municipality for the obvious irregularities in the management of the budget.' :
                        'Uno de los momentos más críticos de las sucesivas administraciones de los Ferreira fue el 23 de agosto de 2004 cuando el entonces alcalde, Gonzalo Bautista, recibió una llamada del gobernador de Santander para informarle que una comisión haría una revisión de las cuentas y gastos del municipio por las evidentes irregularidades en el manejo del presupuesto.'
                    }<br /><br />
                    {
                      router.locale === 'en' ?
                        'The next day, when the commission members arrived to Jordan, they found that the mayor´s office had been consumed by the flames the night before, as well as the documents that would be reviewed.' :
                        'Al día siguiente, cuando los miembros de la comisión llegaron a Jordán, encontraron que la sede de la Alcaldía había sido consumida por las llamas la noche anterior, además de los documentos que serían revisados.'
                    }
                  </p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen3); handleOnOpenImage(); }} className={styles.Link} >
                      <GalleryIconTimeline />
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'illustration of criminal Fire in the Town Hall' :
                            'ilustración destrucción alcaldía incendio'
                        }
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.semana.com/nacion/articulo/la-tierra-del-olvido/67981-3/' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            ' The forgotten land. The amazing story of Jordan Sube, a santanderean town consumed by abandonment, corruption and now a criminal fire.' :
                            ' La tierra del olvido. La increíble historia de Jordán Sube, un municipio santandereano devorado por el abandono, la corrupción y, ahora, un criminal incendio'
                        }
                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              'Semana (September 4, 2004)' :
                              'Semana (4 de septiembre de 2004)'
                          }
                        </span>
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
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            ' New Mayor Photo' :
                            ' Foto de la Alcaldía'
                        }

                      </p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'Hidden in the Canyon' :
                            'Oculto en el Cañón'
                        }
                        <br></br>
                        <span>
                          {router.locale === 'en' ?
                            'Multimedia special by Nicole Acuña and Silvia Corredor. Program in Journalism and Public Opinion PO04. School of Human Sciences. University of Rosario. 2019. Read subsection "The roads that lead to Jordan" within the section "A mule and alpargata".: "The roads that lead to Jordan"' :
                            'Especial multimedia por Nicole Acuña y Silvia Corredor. Programa en Periodismo y Opinión Pública PO04. Escuela de Ciencias Humanas. Universidad de Rosario. 2019. Leer subapartado "Los caminos que llevan a Jordán" dentro del apartado "A mula y alpargata".: "Los caminos que llevan a Jordán"'
                          }
                        </span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.jordan-santander.gov.co/' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            "Municipal Mayor's Office of Jordán in Santander - Government of Colombia" :
                            'Alcaldía Municipal de Jordán en Santander - Gobierno de Colombia'
                        }
                        <br></br>
                        <span>
                          {
                            router.locale === 'en' ?
                              '(June 25, 2018)' :
                              '(25 de junio de 2018)'
                          }
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
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'The "ghost" town where only 56 souls live' :
                            ' El pueblo "fantasma" colombiano donde solo viven 56 almas'
                        }
                        <br></br>
                        <span>
                          {router.locale === 'en' ?
                            'Interview with the mayor. Caracol (October 10, 2019).' :
                            'Entrevista con la alcaldesa. Caracol(10 de octubre de 2019).'
                          }</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/nueva-via-de-acceso-a-jordan-sube-en-santander-313488
' target="_blank" className={styles.Link} >
                      <p className={styles.LinkText}>
                        {
                          router.locale === 'en' ?
                            'The town hidden in the Chicamocha looking for its "exit"' :
                            'El pueblo escondido en el Chicamocha que busca su "salida"'
                        }
                        <br></br>

                        <span>
                          {
                            router.locale === 'en' ?
                              'El Tiempo (December 2, 2019).'
                              :
                              'El tiempo (2 de diciembre de 2019).'
                          }
                        </span>
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
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        'A new mayor' :
                        'Alcaldía nueva'
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'For many years, millionaire expenses were reported in works that were never done and with the public opinion behind them, the Ferreiras lost the elections in 2015. Gloria Isabel Ferreira Fajardo, who had been mayor two times before, faced the candidate Johanna Muñoz at the polls. Muñoz won by 22 votes to Ferreira, becoming the new mayor and over time, her work was praised and recognized by some people in the town. ' :
                        'Durante muchos años, en el municipio de Jordán se reportaron gastos millonarios en obras que nunca se hicieron, y con la opinión pública siguiéndoles la pista, la familia Ferreira perdió las elecciones del 2015. Gloria Isabel Ferreira Fajardo, quien en dos oportunidades ya había sido alcaldesa de Jordán, se enfrentó en las urnas a la candidata Johanna Muñoz. En unas ajustadas elecciones, Muñoz superó por 22 votos a Ferreira, convirtiéndose en la nueva alcaldesa del municipio y, con el paso del tiempo, siendo alabada y reconocida su labor por algunos habitantes del pueblo.'
                    }
                    <br /><br />
                    {
                      router.locale === 'en' ?
                        "This election ended Ferreira's control over Jordán for more than 60 years."
                        :
                        'Con esta elección terminó el control que ejerció sobre Jordán la familia Ferreira por más de 60 años'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ItemContent}>
            <img className={styles.SitePicture} src="/images/season3/timeline/colegio.png" alt="imagen del lugar" />
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/colegio.png" alt="imagen del lugar" />

            <div className={`${styles.ColumnsContainer} fade_test fadeOut_test`}>
              <div className={styles.columnText}>
                <div className={styles.TextContent}>
                  <h1 className={styles.Title}>2019</h1>
                  <h2 className={styles.Subtitle}>
                    {
                      router.locale === 'en' ?
                        HtmlParser('A school for Jordán')
                        :
                        HtmlParser('Un colegio para Jordán')
                    }
                  </h2>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'Students go to class in a small building which is actually a nursing home. Three different classes share a single classroom.'
                        :
                        'En el casco urbano de Jordán Sube, los estudiantes reciben clases en las instalaciones de un pequeño edificio que funcionaba como ancianato. En cada salón, comparten clases tres cursos diferentes.'
                    }
                    <br /><br />

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
                    <a onClick={() => {
                      setVideo('485849');
                      setVideoTitle('');
                      handleOnPlayVideo();
                    }} className={styles.Link} >
                      <div>
                        <PlayIconTimeline />
                      </div>

                      <p className={styles.LinkText}>
                        <span>
                          {
                            router.locale === 'en' ?
                              'The school reconstruction'
                              : 'Reconstrucción del colegio'
                          }

                        </span>
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
                  <h1 className={styles.Title}>
                    {
                      router.locale === 'en' ?
                        'Confessionals'
                        : 'Confesionarios'
                    }

                  </h1>
                  <p className={styles.Description}>
                    {
                      router.locale === 'en' ?
                        'Now that you know all the characters, would you like to go into their deepest thoughts?' :
                        'Ahora que ya conoces a todos los personajes, ¿quieres entrar en sus pensamientos más íntimos?'
                    }

                    <br /> <br /></p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a
                      onClick={
                        () => {
                          setVideo('497300');
                          setVideoTitle('confesionario-juan');
                          handleOnPlayVideo();
                        }}

                      className={styles.Link} >
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
                    <a onClick={

                      () => {
                        setVideo('497302');
                        setVideoTitle('confesionario-soledad');
                        handleOnPlayVideo();
                      }

                    } className={styles.Link} >
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
                    <a onClick=
                      {
                        () => {
                          setVideo('497294');
                          setVideoTitle('confesionario-diego');
                          handleOnPlayVideo();
                        }
                      }
                      className={styles.Link} >
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
                    <a onClick=
                      {
                        () => {
                          setVideo('497298');
                          setVideoTitle('confesionario-yenny');
                          handleOnPlayVideo();
                        }
                      }
                      className={styles.Link} >
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
                    <a onClick=
                      {
                        () => {
                          setVideo('497296');
                          setVideoTitle('confesionario-guillermo');
                          handleOnPlayVideo();
                        }
                      } className={styles.Link} >
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
            <img className={`${styles.SitePicture} ${styles.SitePictureMobile}`} src="/images/season3/timeline/960/pueblo_rio_abajo.png" alt="imagen del lugar" />


            <div>

              <img
                onClick={
                  () => {
                    setVideo('485851');
                    setVideoTitle('');
                    handleOnPlayVideo();
                  }
                }
                className={styles.VideoPicture}
                src="/images/season3/timeline/video.jpg"
                alt="imagen del lugar"
              />


              <div className={styles.Ver360Content}>
                {
                  router.locale === 'en' ?
                    HtmlParser('<h1>You made it to the end of the road!<br />You have walked the paths of El Jordan!</h1><p>As a reward, you can now access exclusive content and share this content in social media. Happy journey back!</p>')
                    :
                    HtmlParser('<h1>Llegaste al final del camino.<br /> ¡Has recorrido los caminos del Jordán!</h1><p>Como recompensa puedes acceder al contenido exclusivo final y compartir el proyecto en redes. ¡Feliz viaje de regreso!</p>')
                }


                <ButtonModal type="btn"
                  text={
                    router.locale === 'en' ?
                      'view  360° video' :
                      'ver video 360°'
                  }
                  onClick={() => setOpen360(true)} />


                <div className={styles.Compartir}>
                  <p>
                    {
                      router.locale === 'en' ?
                        'Share' :
                        'Compartir'
                    }
                  </p>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3&amp;text=Caminos de Jordán https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3/" target="_blank" rel="noopener noreferrer">
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
          videoTitle={videoTitle}
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

export default Timeline