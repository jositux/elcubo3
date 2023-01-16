import React, { MutableRefObject, useEffect, useState } from 'react';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import styles from './season3.audioModal.module.scss';
import FadeModal from '../FadeModal/FadeModal';

import Slider from 'components/Season3/Slider/Slick/Slider';


const AudioModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data
}) => {
  const [open, setOpen] = useState(null)
  const [audioPlayer, setAudioPlayer] = useState(null);
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
      if (open) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      audioPlayer.on('finish', () => {
        setOpen(false);
        handleCloseInteractive();
        setOpen(null);
      })
    }
  }, [audioPlayer, open]);


  const openHandler = () => {
    setOpen(true);
    handleOpenInteractive();
  }

  return (
    <div className={styles.interactiveCover}>
      <div className={styles.trigger} onClick={openHandler}>{data.field_ec_title}</div>

      <FadeModal
        showModal={open}
        onOpenModal={handleOpenInteractive}
        onCloseModal={handleCloseInteractive}
        setShowModal={open}
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
      </FadeModal>
    </div>

  );
};

export default AudioModal;