import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from './season3.videoIntro.module.scss';
import SoundActive from "components/Season2/Svg/SoundActive";
import SoundInactive from 'components/Season2/Svg/SoundInactive';

const VideoIntro = ({url}) => {
  const [soundActive, setSoundState] = useState(false);
  const [audios, setAudios] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    setAudios({
      click: new Audio('/audios/actions/click_1.mp3'),
    });
  }, []);

  const handleToggleSound = () => {
    setSoundState(prev => !prev);
  };

 useEffect(() => {
  
 }, []);


  return (
    <div className={`${styles.containerCover}`}>
      <div id="container_intro" className={styles.Container}>
        <div className={`${styles.intro} ${styles.fadeIn}`}>
          
          <video ref={videoRef} controls={false} className={styles.Video} muted={!soundActive} autoPlay playsInline loop>
            <source src={url} type="video/mp4" />
          </video>

          <div className={styles.Footer}>
            <div className={styles.FooterContent}>
              <button id="boton" type="button" onClick={() => handleToggleSound()} className={`${soundActive ? "Active" : ""}`}>
                {soundActive ? <SoundActive /> : <SoundInactive />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
