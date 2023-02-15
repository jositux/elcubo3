import React, { Fragment, useEffect } from 'react';
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

import FadeModal from '../FadeModal/FadeModal';
import GalleryInteractive from 'components/Season3/Svg/GalleryInteractive';
import Ripple from 'components/Season3/Shared/Ripple/Ripple';

const GalleryModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  onCloseGalleryModal,
  data,
  duration
}) => {
  const {
    field_ec_title,
    field_ec_description,
    field_ec_gallery,
    field_ec_gallery_thumbs
  } = data;


  const position = (data.field_ec_time_action * 100 / duration).toFixed(2);

  // Images Thumbs
  const images = field_ec_gallery_thumbs.split('%%').map(i => {
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
  const imagesFull = field_ec_gallery.split('%%').map(i => {
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
        onCloseGalleryModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseGalleryModal
      }
    });
  });

  const openHandler = () => {
    setOpen(true);
    handleOpenInteractive();
  }

  function decodeHTML(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div className={styles.interactiveCover}>
      <div className={styles.interactiveContent}>
        <div className={styles.trigger} onClick={openHandler}>
          <div className={styles.buttonTrigger} style={{
            left: `${position}%`,
          }}>
            <h2 className={styles.InteractiveTitle}>
              {HtmlParser(field_ec_title)}
            </h2>
            <Ripple />
            <GalleryInteractive />
            <span className={styles.marker}
            >
            </span>
          </div>
        </div>

        <span className={styles.Line}>
        </span>

        <FadeModal
          showModal={open}
          onOpenModal={handleOpenInteractive}
          onCloseModal={handleCloseInteractive}
          setShowModal={open}
        >
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
            slides={imagesFull}
          />
          <div className={styles.ContainerContent}>
            <div className={styles.Content}>
              <div className={styles.Column}>
                <h2>{HtmlParser(field_ec_title)}</h2>
                <p>
                  {HtmlParser(decodeHTML(field_ec_description))}
                </p>
              </div>
              <div className={styles.Column}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  loop={true}
                  zoom={true}
                  autoplay={{
                    delay: 8500,
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
                      {
                        img.alt === '' ? '' :
                          <p className={styles.Description}>{HtmlParser(img.alt)}</p>
                      }
                    </SwiperSlide>
                      :
                      null
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </FadeModal>
      </div>
    </div>
  );
};

export default GalleryModal;