import React, { Fragment, useState} from 'react';
import ArrowDown from 'components/Season3/Svg/ArrowDown';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


import styles from './season3.audioModal.module.scss';

const AudioModal = ({ title, urlAudio, images, showAudioModal, onCloseAudioModal }) => {

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseAudioModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseAudioModal
      }
    });

  });


  return (
    <div id="container" className={`${styles.containerCover} ${showAudioModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <div className={styles.t_close} onClick={onCloseAudioModal}>
          <ArrowDown width={30} height  ={30} />
          </div>
          <img className={styles.imgGallery} src="/images/season3/slider/audio_background.jpg" />
          
          
          
          {showAudioModal &&
          <div>
          <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.audioSwiper}
      >

        {
        images.map( (c, index) => (
        //addMarker('marker', 'marker-'+index, c.time, c.url, c.text)
        <SwiperSlide><img src={c.url} /></SwiperSlide>
        ))}

        </Swiper>
        <div className={styles.Content}>
            <h2>{title}</h2>
              <div className={styles.fullScreenVideo}>
                <AudioWave audio={urlAudio} />
              </div>

        </div>
      </div>
            }
          

          </div>
        
      </div>
    </div>
     
     

 
      
   
  );
};

export default AudioModal;