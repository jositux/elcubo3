import React, { useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import IconZoom from 'components/Season3/Svg/Zoom';

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from './season3.galleryFadeModal.module.scss';

const GalleryFadeModal = ({ imagenes, imagenesZoom, showModal, setShowModal }) => {

  const imagesZoom = imagenesZoom.map(i => {
    const imgA = i.split('|');
    return {
      src: imgA[0],
      alt: imgA[1] || '',
      width: 3840,
      height: 2560,
      srcSet: [
        { src: imgA[0], width: 960, height: 640 },
      ]
    }
  });

  const images = imagenes.map(i => {
    const imgA = i.split('|');
    return {
      src: imgA[0],
      alt: imgA[1] || '',
      srcSet: [
        { src: imgA[0], width: 960, height: 640 },
      ]
    }
  });


  const [openZoom, setOpenZoom] = React.useState(false);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    window.onclick = function (e) {
      if (e.target.id == 'container') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    });


  });

  const handleClose = () => {
    setShowModal(false);
  }

  return (
    <div className={`${styles.containerCover} ${styles.containerVideoModal} ${showModal ? styles.open : ""}`}>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={() => handleClose()}>
          </p>
          <Lightbox
            open={openZoom}
            close={() => setOpenZoom(false)}
            plugins={[Zoom]}
            index={index}
            on={{
              view: (index) => console.log("View", index),
              entering: () => console.log("Entering"),
              entered: () => console.log("Entered"),
              exiting: () => console.log("Exiting"),
              exited: () => console.log("Exited")
            }}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null
            }}
            slides={imagesZoom}
          />
          <div className={styles.ContainerContent}>
            <div className={styles.Content}>


              <Swiper
                effect={"cards"}
                grabCursor={true}
                loop={true}
                zoom={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, EffectCards, Navigation]}
                className={styles.gallerySwiper}
              >
                {images && images.length && images.map((img, index) => {
                  return img.src ? <SwiperSlide>
                    <div className={styles.OpenZoom} onClick={() => { setIndex(index); setOpenZoom(true); }}>
                      <IconZoom />
                    </div>
                    <img className={styles.ImagesSwiper} src={img.src} />
                  </SwiperSlide>
                    :
                    null
                })}
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFadeModal;