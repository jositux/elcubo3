import React from 'react';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from './season3.audioModal.module.scss';
import SlideModal from '../SlideModal/SlideModal';

const AudioModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data
}) => {
  const {
    field_ec_title: title,
    field_ec_audio: urlAudio,
    field_ec_gallery
  } = data;

  const images = field_ec_gallery.split(',').map(img => {
    const imgA = img.split('|');
    if (imgA && imgA.length) {
      return {
        url: imgA[0],
        title: imgA[1] || ''
      }
    }
    return {};
  });

  return (
    <SlideModal
      isActive={isActive}
      handleOpenInteractive={handleOpenInteractive}
      handleCloseInteractive={handleCloseInteractive}
    >
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
          images.map(img => (
            <SwiperSlide><img src={img.url} /></SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.Content}>
        <h2>{title}</h2>
        <div className={styles.fullScreenVideo}>
          <AudioWave audio={urlAudio} />
        </div>
      </div>
    </SlideModal>
  );
};

export default AudioModal;