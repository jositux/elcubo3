import React, { useState } from "react";
import PlayHome from 'components/Season2/Svg/PlayHome';
import dynamic from 'next/dynamic';
import ButtonModal from "../Shared/Button/ButtonModal";
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const YoutubeModal = ({ videoId }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      {/* <button className="btn-primary" onClick={() => setOpen(true)}><PlayHome /> Ver 360</button> */}
      <ButtonModal type="btn" text="ver video 360°" onClick={() => setOpen(true)}/>
    </div>
  );

};

export default YoutubeModal;
