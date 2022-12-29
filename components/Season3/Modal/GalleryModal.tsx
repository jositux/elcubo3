import React, { Fragment, useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import IconZoom from 'components/Season3/Svg/Zoom';

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards"; 
import styles from './season3.galleryModal.module.scss';

const GalleryModal = ({ showGalleryModal, onCloseGalleryModal }) => {

  const [open, setOpen] = React.useState(false);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);
 
  const [index, setIndex] = React.useState(0);


  React.useEffect(() => {

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
    <div id="container" className={`${styles.containerCover} ${showGalleryModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.t_close} onClick={onCloseGalleryModal}>
          
          </div>
          <img className={styles.imgGallery} src="/images/season3/slider/galeria_background.jpg" />
          {showGalleryModal &&
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
          buttonPrev:  () => null,
          buttonNext:  () => null
        }}
        slides={[
          {
            src: "/images/season3/hitos/0b.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/0b.jpg", width: 960, height: 480 },
            ]
          },
          {
            src: "/images/season3/hitos/1b.jpg",
            alt: "image 2",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/1b.jpg", width: 960, height: 480 },
            ]
          },
          {
            src: "/images/season3/hitos/2b.jpg",
            alt: "image 3",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/2b.jpg", width: 960, height: 480 },
            ]
          },
          {
            src: "/images/season3/hitos/3b.jpg",
            alt: "image 4",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/3b.jpg", width: 960, height: 480 },
            ]
          },
          {
            src: "/images/season3/hitos/4b.jpg",
            alt: "image 4",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/4b.jpg", width: 960, height: 480 },
            ]
          },
          // ...
        ]}
      />}
    <div className={styles.ContainerContent}>
      <div className={styles.Content}>
    <div className={styles.Column}>
      <h2>Título de
        la Galería</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur fermentum neque in luctus. Sed iaculis ultrices sem.</p>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.OpenZoom}  onClick={ () => { setIndex(0); setOpen(true);} }>
          <IconZoom />
          </div>
          <img className={styles.ImagesSwiper} src="/images/season3/hitos/0b.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.OpenZoom}  onClick={ () => { setIndex(1); setOpen(true);} }>
          <IconZoom />
          </div>
          <img className={styles.ImagesSwiper} src="/images/season3/hitos/1b.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.OpenZoom}  onClick={ () => { setIndex(2); setOpen(true);} }>
          <IconZoom />
          </div>
          <img className={styles.ImagesSwiper} src="/images/season3/hitos/2b.jpg" />
     
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.OpenZoom}  onClick={ () => { setIndex(3); setOpen(true);} }>
          <IconZoom />
          </div>
          <img className={styles.ImagesSwiper} src="/images/season3/hitos/3b.jpg" />
     
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.OpenZoom} onClick={ () => { setIndex(4); setOpen(true);} }>
          <IconZoom />
          </div>
          <img className={styles.ImagesSwiper} src="/images/season3/hitos/4b.jpg" />
     
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
</div>
    </div>
     
     
        </div>
      </div>
    </div>
 
      
   
  );
};

export default GalleryModal;