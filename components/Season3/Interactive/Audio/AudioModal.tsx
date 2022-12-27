import React, { MutableRefObject, useEffect, useState } from 'react';
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
  const [openSlide, setOpenSlide] = useState(null)
  const [audioPlayer, setAudioPlayer] = useState();
  const [isSlideOpen, setIsSlideOpen] = useState(false);
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

  useEffect(() => {
    if (audioPlayer) {
      if (isSlideOpen) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      audioPlayer.on('finish', () => {
        setOpenSlide(false);
        handleCloseInteractive();
        setOpenSlide(null);
      })
    }
  }, [audioPlayer, isSlideOpen]);

  return (
    <SlideModal
      isActive={isActive}
      handleOpenInteractive={handleOpenInteractive}
      handleCloseInteractive={handleCloseInteractive}
      onOpenCallback={() => setIsSlideOpen(true)}
      onCloseCallback={() => setIsSlideOpen(false)}
      setOpenSlide={openSlide}
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
        <div className={styles.AudioContent}>
          <h2>{title}</h2>
          <div>
            <AudioWave setAudioPlayer={setAudioPlayer} audio={urlAudio} />
          </div>
        </div>
      </div>
    </SlideModal>
  );
};

export default AudioModal;