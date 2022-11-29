import React, { Fragment, useState} from 'react';
import Head from 'next/head';
import Header from 'components/Season3/Header/Header';
import Footer from 'components/Footer/Footer';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import { Fade } from 'react-slideshow-image';

import styles from './player.module.scss'

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards"; 
import styled from 'styled-components';

const fadeImages = [
  {
  url: '/images/season3/steals/0-dashboard.jpg',
  caption: 'First Slide'
  },
  {
  url: '/images/season3/steals/0-dashboard.jpg',
  caption: 'Second Slide'
  },
  {
  url: '/images/season3/steals/0-dashboard.jpg',
  caption: 'Third Slide'
  },
];

const fadeOutProperties = {
  autoplay: true,
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
  canSwipe: true,
  pauseOnHover: false
};




const player = () => {

  const [open, setOpen] = React.useState(false);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);
 
  const [index, setIndex] = React.useState(0);


  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <Header />

     
 
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
            src: "/images/season3/hitos/2/test.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/2/test.jpg", width: 320, height: 213 },
            ]
          },
          {
            src: "/images/season3/hitos/2/1.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/images/season3/hitos/2/1.jpg", width: 320, height: 213 },
            ]
          },
          // ...
        ]}
      />
      <AudioWave audio="/audios/season3/hito2.mp3" />
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
          <button className={styles.OpenZoom} type="button" onClick={ () => { setIndex(0); setOpen(true);} }>
          Abrir 1
          </button>
          <img className={styled.ImagesSwiper} src="/images/season3/hitos/2/test.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <button className={styles.OpenZoom} type="button" onClick={ () => { setIndex(1); setOpen(true);} }>
          Abrir 2
          </button>
          <img className={styled.ImagesSwiper} src="/images/season3/hitos/2/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     

    <div className="slide-container">
      <Fade {...fadeOutProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
        </Fade>
      </div>

      <Footer />
    </Fragment>
  );
};

export default player;