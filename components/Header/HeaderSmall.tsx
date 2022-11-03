import React from 'react';

const HeaderSmall = ({ nav }) => {

  return (
    <header>
        <div className="logo-elcubo">
          <a href="/" className="logo--link no-link">
            <img className="logo--image" src="/images/logo2021.png" />
          </a>
        </div>
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    
  );
};

export default HeaderSmall;
