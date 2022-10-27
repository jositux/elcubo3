import React from 'react';

const HeaderTop = ({ nav }) => {

  return (
    <div className="header-top">
      <div className="header-top-inner">
        <div className="logo-elcubo">
          <a href="/" className="logo--link no-link">
            <img className="logo--image" src="/images/logo2021.png" />
          </a>
        </div>
        {nav && nav}
      </div>
    </div>
  );
};

export default HeaderTop;
