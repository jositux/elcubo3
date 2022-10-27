import React from 'react';

const VideoItem = ({ order, data }) => {
  const { field_ec_episode_json, field_ec_image_bw, field_ec_image_color, field_ec_video_title } = data;
  const { field_ec_asset_id } = JSON.parse(field_ec_episode_json)[0];

  const formatText = (str) => {
    if ((str === null) || (str === '')) return false;
    str = str.replace(/&#(\d+);/g, function (m, n) { return String.fromCharCode(n); })
    str = str.replace(/&quot;/g, '"');
    return str;
  };

  return (
    <div className="column">
      <div className="parent">
        <div
          className={`child bg-${order} toggle`}
          data-video={field_ec_asset_id}
          data-poster=""
          data-title={formatText(field_ec_video_title)}
          data-relation={`bg-${order}`}
        >
          <img className="icon-selected" src="/images/is-selected.svg" />
          <div className="actions">
            <img className="icon-selected" src="/images/is-selected.svg" />
            <div className="icon-cover icon-play">
              <img src="/images/play-reflexivo.svg" />
            </div>
            <div className="icon-cover icon-replay">
              <img src="/images/replay-reflexivo.svg" />
            </div>
            <h2>{formatText(field_ec_video_title)}</h2>
          </div>
          <img className="img-bn" src={field_ec_image_bw} />
          <img className="img-color" src={field_ec_image_color} />
        </div>
      </div>
      {order == 0 ? (
        <div className="center progress-0 progress-direct">
          <div className="progress-bar">
            <div className="progress" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoItem;
