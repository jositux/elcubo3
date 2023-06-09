import { useEffect, useRef, useState } from "react";
import PlayAudio from 'components/Season3/Svg/PlayAudio';
import PauseAudio from 'components/Season3/Svg/PauseAudio';

import styles from './season3.audiowave.module.scss';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#FFFFFF",
  progressColor: "#4F3C17",
  cursorColor: "#4F3C17",
  barWidth: 1,
  barGap: 2,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
  transitionDuration: 2000
});

const AudioWave = ({
  audio = "default.mp3",
  setAudioPlayer
}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  //const [playing, setPlaying] = useState(true);
  const [playing, setPlaying] = useState(false);
  const url = audio;

  useEffect(() => {
    create();
    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default;
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer?.create(options);
    wavesurfer.current.load(url);
    setAudioPlayer && setAudioPlayer(wavesurfer.current);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className={styles.WaveContainer}>
      <div className={styles.Content}>
        <div className={styles.Controls}>
          <div className={styles.Play} onClick={handlePlayPause}>
            {!playing ? <PlayAudio /> : <PauseAudio />}
          </div>
        </div>
        <div className={styles.Wave}>
          <div id="waveform" ref={waveformRef} />
        </div>
      </div>
    </div>
  );
}

export default AudioWave;
