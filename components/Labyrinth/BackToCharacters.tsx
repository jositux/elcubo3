import React from 'react';

const BackToCharacters = ({text}) => {
  return (
    <div className="header-top">
      <div className="header-top-inner">
        <nav className="nav">
          <a href="/el-cubo/temporada-1/personajes" className="back-to-season">
            <img src="/images/icon-arrow-back.svg" />
            <span>{text}</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BackToCharacters;
