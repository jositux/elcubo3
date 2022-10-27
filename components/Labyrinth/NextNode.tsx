import React from 'react';

const NextNode = ({ data }) => {
  const {
    field_ec_x_point,
    field_ec_y_point,
    field_ec_text_point,
    field_ec_destination,
    field_ec_destination_json,
  } = data;

  const parsedDestination = JSON.parse(field_ec_destination_json);
  const character = parsedDestination[0].field_ec_character_name
    .split(' ')
    .slice(-1)
    .join(' ')
    .trim()
    .toLowerCase();
  const nextNodeLink = `/el-cubo/temporada-1/laberinto/${character}/${field_ec_destination}`;

  return (
    <div
      className="cover-selector"
      style={{ left: `${field_ec_x_point}vw`, bottom: `${field_ec_y_point}vh` }}
    >
      <div className="cover-pulse">
        <a className="pulse" href={nextNodeLink} data-rel={nextNodeLink} />
      </div>
      <span className="pulse-text">{field_ec_text_point}</span>
    </div>
  );
};

export default NextNode;
