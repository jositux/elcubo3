import React, { useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import IconZoom from 'components/Season3/Svg/Zoom';
import HtmlParser from 'html-react-parser';

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from './season3.galleryModal.module.scss';

import SlideModal from '../SlideModal/SlideModal';

const GalleryModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  onCloseGalleryModal,
  data
}) => {
  const {
    field_ec_title,
    field_ec_description,
    field_ec_gallery,
    field_ec_gallery_thumbs
  } = data;

  console.log(field_ec_gallery_thumbs);


  // Images Thumbs
  const images = field_ec_gallery_thumbs.split(',').map(i => {
    let key = i;
    const imgA = i.split('|');
    return {
      src: imgA[0],
      alt: imgA[1] || '',
      width: 3840,
      height: 2560,
      srcSet: [
        { src: imgA[0], width: 960, height: 480 },
      ]
    }
  });

  // Images Full
  const imagesFull = field_ec_gallery.split(',').map(i => {
    const imgA = i.split('|');
    return {
      src: imgA[0],
      alt: imgA[1] || '',
      width: 3840,
      height: 2560,
      srcSet: [
        { src: imgA[0], width: 960, height: 480 },
      ]
    }
  });


  const [open, setOpen] = React.useState(false);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseGalleryModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseGalleryModal
      }
    });
  });

  return (
    <SlideModal
      isActive={isActive}
      handleOpenInteractive={handleOpenInteractive}
      handleCloseInteractive={handleCloseInteractive}
    >
      <Lightbox
        open={open}
        close={() => setOpen(false)}
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
        slides={imagesFull}
      />
      <div className={styles.ContainerContent}>
        <div className={styles.Content}>
          <div className={styles.Column}>
            <h2>{HtmlParser(field_ec_title)}</h2>
            <p>{HtmlParser(field_ec_description)}</p>
          </div>
          <div className={styles.Column}>
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
                  <div className={styles.OpenZoom} onClick={() => { setIndex(index); setOpen(true); }}>
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
    </SlideModal>
  );
};

export default GalleryModal;