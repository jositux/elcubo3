import React, { MutableRefObject, useEffect, useState } from 'react';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import styles from './season3.audioModal.module.scss';
import SlideModal from '../SlideModal/SlideModal';

import Slider from 'components/Season3/Slider/Slick/Slider';


const AudioModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data
}) => {
  const [openSlide, setOpenSlide] = useState(null)
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const {
    field_ec_title: title,
    field_ec_audio: urlAudio,
    field_ec_gallery
  } = data;


  const slides = field_ec_gallery.split(',').map(img => {
    const imgA = img.split('|');
    if (imgA && imgA.length) {
      return {
        title: imgA[1] || '',
        image: imgA[0],
        rel: true,
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

      <section className={styles.SlidesContainer}>
        <Slider slides={slides} />
      </section>

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