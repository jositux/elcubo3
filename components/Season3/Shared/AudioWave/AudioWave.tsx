import { useEffect, useRef, useState } from "react";
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
  partialRender: true
});


const AudioWave = ({audio = "default.mp3"}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(true);

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
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
    
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className={styles.WaveContainer}>
      <div className={styles.Content}>
        <div className="controls">
          <div className={styles.Play} onClick={handlePlayPause}>{!playing ? "paus" : "play"}</div>
        </div>
        <div id="waveform" ref={waveformRef} />
      </div>
    </div>
  );
}

export default AudioWave;
