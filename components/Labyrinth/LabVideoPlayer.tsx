import React, { useState } from 'react';
import NextNodes from 'components/Labyrinth/NextNodes';
import Links from 'constants/Links';

const LabVideoPlayer = ({ data, currentCharacter, isLoggedIn }) => {

  const nodeTitle = data.field_ec_video_title;
  const bgVideoImage = data.field_ec_episode_json[0].field_ec_video_preview;
  const bgVideoImage980 = data.field_ec_episode_json[0].field_ec_video_preview_980;
  const bgEndImage = data.field_ec_end_image;
  const triggerCommentsTime = data.field_ec_trigger_comments_time;
  const videoId = data.field_ec_episode_json[0].field_ec_asset_id;
  const nextNodes = data.field_ec_labyrinth_items_json;
  const videoForceEnd = data.field_ec_trigger_end_video;
  const opacity = data.field_ec_end_image_opaccity;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  React.useEffect(() => {
    const setWindowSize = !window.matchMedia('(min-width: 1024px)').matches;
    setIsSmallScreen(setWindowSize);
  }, []);

  return (
    <div className={`app-elcubo laberinto node_${data.nid}`}>
      <div className="pane open pane-bg">
        <h2 className="steal_title">{nodeTitle}</h2>
        <div className="steal">
          <img src={isSmallScreen ? bgVideoImage980 : bgVideoImage} />
        </div>
        <a className="close hide">
          <img src="/images/laberinto/pane-close.svg" />
        </a>
        <div
          className="pane-video"
          data-video={videoId}
          data-end={videoForceEnd}
          data-title={nodeTitle}
          data-comments={triggerCommentsTime}
        >
          <video className="hide" crossOrigin="true" playsInline />
        </div>
      </div>

      <NextNodes nextNodes={nextNodes} bgEndImage={bgEndImage} opacity={opacity} />

      {nextNodes && nextNodes.length === 1 ?
        <div className="cover-reward">
          <div className="cover-link">
            <a href={isLoggedIn && currentCharacter && currentCharacter.name ? `/el-cubo/temporada-1/laberinto/recompensa/${currentCharacter.name}` : Links.guest} className="button-cyan">
              <span>Ver recompensa</span>
              <img src="/images/icon-arrow-init.svg" />
            </a>
          </div>
        </div>
        : null}
    </div>
  );
};

export default LabVideoPlayer;
