import React, { MutableRefObject, useEffect, useState } from 'react';
import AudioWave from 'components/Season3/Shared/AudioWave/AudioWave';
import styles from './season3.audioModal.module.scss';
import FadeModal from '../FadeModal/FadeModal';

import Slider from 'components/Season3/Slider/Slick/Slider';
import AudioInteractive from 'components/Season3/Svg/AudioInteractive';
import Ripple from 'components/Season3/Shared/Ripple/Ripple';


const AudioModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  data,
  duration
}) => {
  const [open, setOpen] = useState(null)
  const [audioPlayer, setAudioPlayer] = useState(null);
  const {
    field_ec_title: title,
    field_ec_audio: urlAudio,
    field_ec_gallery
  } = data;


  const position = (data.field_ec_time_action * 100 / duration).toFixed(2);

  const slides = field_ec_gallery.split('%%').map(img => {
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
        //audioPlayer.play();
      } else {
        //audioPlayer.pause();
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
      <div className={styles.interactiveContent}>
        <div className={styles.trigger} onClick={openHandler}>
          <div className={styles.buttonTrigger} style={{
            left: `${position}%`,
          }}>
            <h2 className={styles.InteractiveTitle}>
              {title}
            </h2>
            <Ripple />
            <AudioInteractive />
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
    </div>

  );
};

export default AudioModal;