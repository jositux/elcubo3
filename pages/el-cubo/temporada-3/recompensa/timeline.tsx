import React, { Fragment, useEffect, useState } from 'react';
import styles from './timeline.module.scss';
import GalleryIconTimeline from 'components/Season3/Svg/GalleryIconTimeline';
import PlayIconTimeline from 'components/Season3/Svg/PlayIconTimeline';
import RedirectionIconTimeline from 'components/Season3/Svg/RedirectionIconTimeline';
import Twitter from 'components/Season3/Svg/Twitter';
import Facebook from 'components/Season3/Svg/Facebook';
import LinkedIn from 'components/Season3/Svg/LinkedIn';
import VideoFadeModal from 'components/Season3/Modal/VideoFadeModal';
import GalleryFadeModal from 'components/Season3/Modal/GalleryFadeModal';
import ImageFadeModal from 'components/Season3/Modal/ImageFadeModal';
import ButtonModal from "components/Season3/Shared/Button/ButtonModal";
import dynamic from 'next/dynamic';
import disableScroll from 'disable-scroll';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const timeline = () => {

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
    //alert('kion/da');
    disableScroll.off();
  };


  /* Video 360 */
  const [isOpen360, setOpen360] = useState(false);
  const [isOpen360b, setOpen360b] = useState(false);


  return (

    <Fragment>

      <div className={styles.TimelineContainer}>

        <div className={styles.Timeline}>

          <div className={`${styles.ItemContent} fade_test fadeOut_test`}>
            <img className={styles.SitePicture} src="/images/season3/timeline/pueblo.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes1); setImagesZoom(imagenes1Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>galer??a de fotos</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.colombiaturismoweb.com/DEPARTAMENTOS/SANTANDER/MUNICIPIOS/JORDAN/JORDAN.htm
'  target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Jord??n - Colombia Turismo Web<br></br>
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
                        <span>Carolina Rinc??n Ram??rez / El tiempo (29 de octubre 2021)</span>
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
                  <h2 className={styles.Subtitle}>Fundaci??n del pueblo</h2>
                  <p className={styles.Description}>
                    El 2 de octubre de 1822, los campesinos que habitaban los caminos que un??an a San Gil con Los Santos, pidieron la creaci??n de una parroquia en advocaci??n a Santa Rosa de Lima, en una capilla de palos y paja que estaba a orillas del r??o Sube.<br></br><br></br>
                    En 1830, Rafel Urdaneta, presidente de La Gran Colombia, sancion?? la ley que erigi?? el municipio de sube, al que la Asamblea de Santander, mas de un siglo despu??s, le antepuso el nombre de Jord??n.
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
                  <h2 className={styles.Subtitle}>Construcci??n del primer<br />peaje de Colombia</h2>
                  <p className={styles.Description}>
                    La construcci??n de la carretera Bogot?? ??? Bucaramanga, fue vital para que Jord??n descendiera a nivel comercial y demogr??fico. La carretera se construy?? a 33 kil??metros al oriente de Jord??n y conect?? los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcci??n, y otros aseguran, que las condiciones del terreno no eran las adecuadas para la obra. Aun as??, todos coinciden en que esta decisi??n, desencaden?? la decadencia de Jord??n.
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
                      <p className={styles.LinkText}>Oculto en el Ca????n<br></br>
                        <span>Oculto en el Ca????n. Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: 'A mula y alpargata</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/larutadeltabaco.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Oculto en el Ca????n.<br></br>
                        <span>Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019. Leer apartado: 'La ruta del tabaco???</span>
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
                    Jord??n Sube tuvo una ??poca de bonanza porque recib??a diariamente a decenas de arrieros y caballos de carga que segu??an su camino. Este flujo de personas hizo que se construyeran posadas, chicher??as, casas y restaurantes, en donde se les brindaba a los viajeros abundantes comidas con cabros, gallinas y cerdos.<br></br><br></br>
                    Las tierras, el clima y las aguas de Jord??n, lo convirtieron en un lugar ideal para la siembra de tabaco negro, por esta raz??n, la Compa????a Colombiana de Tabaco abri?? una de sus primeras oficinas all??.<br></br><br></br>
                    El constante tr??nsito de mulas y arrieros por el puente colgante, y los pr??speros cultivos de tabaco, dejaron muy buenas ganancias para Jord??n, por eso estuvo en la cima del comercio de la regi??n.
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
                  <h1 className={styles.Title}>1930 -1940</h1>
                  <h2 className={styles.Subtitle}>Construcci??n de la carretera<br></br>Bogot?? ??? Bucaramanga</h2>
                  <p className={styles.Description}>
                    La construcci??n de la carretera Bogot?? ??? Bucaramanga, fue vital para que Jord??n descendiera a nivel comercial y demogr??fico. La carretera se construy?? a 33 kil??metros al oriente de Jord??n y conect?? los tramos de San Gil y Pescadero. Algunos dicen que fueron los gamonales quienes no permitieron la construcci??n, y otros aseguran, que las condiciones del terreno no eran las adecuadas para la obra. Aun as??, todos coinciden en que esta decisi??n, desencaden?? la decadencia de Jord??n.
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
                      <p className={styles.LinkText}>Mapa vial de la ubicaci??n de el Pescadero</p>
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
                    <a href='https://www.eltiempo.com/colombia/otras-ciudades/jordan-sube-en-el-canon-del-chicamocha-se-convirtio-en-un-pueblo-fantasma-101032' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Oculto en el Ca????n.<br></br>
                        <span>
                          Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad del Rosario 2019.<br></br>
                          Leer subapartado: 'Cuando las venas se cortaron'
                        </span>
                      </p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('485853'); handleOnPlayVideo(); }} className={styles.Link} >
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
            <img className={styles.Clows} src="/images/season3/timeline/nubes/4.png" />
            <img className={styles.SitePicture} src="/images/season3/timeline/camuro.png" alt="imagen del lugar" />

            <div className={styles.ColumnsContainer}>

              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImages(imagenes2); setImagesZoom(imagenes2Zoom); handleOnOpenGallery(); }} className={styles.Link} >
                      <p className={styles.LinkText}>galer??a de fotos</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://noticias.canal1.com.co/que-tal-esto/jordan-sube-pueblo-rico-sin-gente/' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Jord??n Sube, pueblo rico sin gente.<br></br>
                        <span>Canal 1 (16 de agosto del 2015)</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='#' className={styles.Link}>
                      <p className={styles.LinkText}>Las Armas (Jaime Rodriguez) - Oculto en el Ca????n.<br></br>
                        <span>
                          Especial multimedia por Nicole Acu??a y Silvia Corredor.
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
                        <span>Jaime Rodriguez, coleccionista santandereano, nos habla sobre las armas que se usaron en los tiempos de la violencia bipartidista en Jord??n. Trabaj?? algunos a??os como supervisor en la Caja Agraria. Era el encargado de hacer un balance a quienes solicitaban cr??ditos. En el 78, visit?? a Roque Julio Ferreira y su hermano Jos?? ??ngel, ambos solicitantes de un pr??stamo.</span>
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
                    En 1949, muchas familias de Jord??n Sube abandonaron el pueblo porque el partido mayoritario era el Conservador, y sus militantes se encargaron de sacar a todos los Liberales.
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
                    Isabel Sarmiento de Ferreira era la ???matrona??? de la familia Ferreira. A partir de ella nace el poder??o de esta familia en Jord??n Sube, algunos lugare??os afirman, que para los a??os del bipartidismo, los Ferreira obligaban a los liberales a declararse conservadores.
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
                      <p className={styles.LinkText}>versi??n ilustrada familia pereira</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.las2orillas.co/jordan-sube-municipio-con-10-mil-millones-de-presupuesto-dueno-los-ferreira/
' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>Jordan Sube, un municipio con 10 mil millones de presupuesto y un due??o: los Ferreira<br></br>
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
                      <p className={styles.LinkText}>Jord??n Sube le dice nuevamente 'no' a la familia Ferreira<br></br>
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
                        Oculto en el Ca????n<br></br>
                        <span>
                          Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019.<br></br>
                          Leer subapartado: 'Tiempo de ??xodo???
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
                        Oculto en el Ca????n<br></br>
                        <span>
                          Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad del Rosario. 2019.<br></br>
                          Leer apartado: ??Jord??n existe!
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
                      <p className={styles.LinkText}>ilustraci??n roque ferreira<br></br>el gamonal</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.eltiempo.com/archivo/documento/MAM-624214' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Jaque a los Ferreira en Jord??n Sube.<br></br>
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
                    A Roque Julio Ferreira se le reconoce como el gamonal conservador del municipio de Jord??n, qui??n por m??s de 20 a??os control?? al pueblo no s??lo imponi??ndose desde la alcald??a, sino que con su grupo de escoltas y su rev??lver, decid??a absolutamente todo lo que pasaba en el pueblo.<br></br>
                    Al hacerse un sexagenario, un tumor maligno le quit?? vigorosidad y fue perdiendo su poder, dej??ndolo s??lo y d??bil rezando en la iglesia, a la que los jerarcas eclesi??sticos no quisieron mandar sacerdote durante muchas d??cadas por falta de fieles. Roque Julio Ferreira fallece el 9 de julio, y a los tres d??as de su sepelio, la b??veda explot?? como premonici??n de lo que suceder??a con la hegemon??a pol??tica de los Ferreira y adem??s, generando la creencia de una posible maldici??n que recae sobre Jord??n.
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
                  <h2 className={styles.Subtitle}>Incendio provocado<br /> en la Alcald??a</h2>
                  <p className={styles.Description}>
                    El punto m??s ??lgido de las sucesivas administraciones de los Ferreira, fue el 23 de agosto de 2004, cuando el entonces alcalde, Gonzalo Bautista, fue citado al despacho del gobernador de Santander, para informarle que al d??a siguiente, una comisi??n har??a una revisi??n de las cuentas y gastos del municipio, debido a las evidentes irregularidades en el manejo del presupuesto.<br></br><br></br>
                    Al d??a siguiente, cuando los miembros de la comisi??n llegaron a Jord??n, encontraron que la sede de la alcald??a se hab??a consumido en llamas la noche anterior, eliminando en el hecho, todos los documentos que iban a ser revisados.
                  </p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen3); handleOnOpenImage(); }} className={styles.Link} >
                      <GalleryIconTimeline />
                      <p className={styles.LinkText}>ilustraci??n destrucci??n alcald??a incendio</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='https://www.semana.com/nacion/articulo/la-tierra-del-olvido/67981-3/' target="_blank" className={styles.Link}>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                      <p className={styles.LinkText}>La tierra del olvido. La incre??ble historia de Jord??n Sube, un municipio santandereano devorado por el abandono, la corrupci??n y, ahora, un criminal incendio<br></br>
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

            <div className={styles.ColumnsContainer}>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen4); handleOnOpenImage(); }} target="_blank" className={styles.Link} >
                      <p className={styles.LinkText}>Foto de la Alcald??a</p>
                      <div>
                        <GalleryIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://conlupa.co/oculto-canon/amula.html' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Oculto en el Ca????n<br></br>
                        <span>Especial multimedia por Nicole Acu??a y Silvia Corredor. Programa en Periodismo y Opini??n P??blica PO04. Escuela de Ciencias Humanas. Universidad de Rosario. 2019. Leer subapartado (dentro del apartado: 'A mula y alpargata'): 'Los caminos que llevan a Jord??n'</span>
                      </p>
                      <div>
                        <RedirectionIconTimeline />
                      </div>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a href='http://www.jordan-santander.gov.co/' target="_blank" className={styles.Link}>
                      <p className={styles.LinkText}>Alcald??a Municipal de Jord??n en Santander - Gobierno de Colombia<br></br>
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
                  <h2 className={styles.Subtitle}>Alcald??a nueva</h2>
                  <p className={styles.Description}>
                    Durante muchos a??os en el municipio de Jord??n se reportaron gastos millonarios en obras que nunca se hicieron, y con la opini??n p??blica sigui??ndoles la pista, la familia Ferreira perdi?? las elecciones del 2015. Gloria Isabel Ferreira Fajardo, quien en dos oportunidades ya hab??a sido alcaldesa de Jord??n, se enfrent?? en las urnas a la candidata Johanna Mu??oz. Con una diferencia de 22 votos, Mu??oz fue electa como alcaldesa y desde entonces la gente dice haber notado la diferencia. Con esta elecci??n termin?? el control que ejerci?? sobre Jord??n la familia Ferreira por m??s de 60 a??os.
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
                  <h2 className={styles.Subtitle}>Un colegio<br></br>para Jord??n</h2>
                  <p className={styles.Description}>
                    En el casco urbano de Jord??n, los estudiantes reciben clases en las instalaciones de un peque??o edificio que antes funcion?? como ancianato, en cada sal??n, comparten clases tres cursos diferentes.<br></br><br></br>
                    En el a??o 2022, se inici?? la construcci??n de un nuevo colegio para Jord??n.
                  </p>
                </div>
              </div>
              <div className={styles.columnLink}>
                <div className={styles.LinksContent}>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setImage(imagen5); handleOnOpenImage(); }} className={styles.Link} >
                      <div>
                        <GalleryIconTimeline />
                      </div>
                      <p className={styles.LinkText}>galer??a de fotos</p>
                    </a>
                  </div>
                  <div className={styles.LinkItem}>
                    <a onClick={() => { setVideo('485849'); handleOnPlayVideo(); }} className={styles.Link} >
                      <div>
                        <PlayIconTimeline />
                      </div>
                      <p className={styles.LinkText}>
                        <span>Reconstrucci??n del colegio</span>
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
                <h1>Llegaste al final del camino.<br></br>??Has recorrido los caminos del Jord??n!</h1>
                <p>Como recompensa puedes acceder al contenido exclusivo final y compartir el proyecto en redes ??Feliz viaje de regreso!</p>

                <ButtonModal type="btn" text="ver video 360??" onClick={() => setOpen360(true)} />


                <div className={styles.Compartir}>
                  <p>Compartir</p>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href="https://twitter.com/intent/tweet?source=https://www.elcubo.rtvcplay.co/el-cubo/temporada-3&amp;text=Caminos de Jord??n https://www.elcubo.rtvcplay.co/el-cubo/temporada-3" target="_blank" rel="noopener noreferrer">
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

    </Fragment>
  )
}

export default timeline