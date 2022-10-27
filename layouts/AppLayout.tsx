import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { RTVCGlobalStyles } from 'styles/rtvc.style';

const AppLayout = ({ onlyContent = false, children }) => {
  return (
    <>
      {onlyContent ? (
        <div className="app-elcubo">{children}</div>
      ) : (
          <>
            <Header />
            <div className="app-elcubo">{children}</div>
            <Footer />
            <RTVCGlobalStyles />
          </>
        )}
    </>
  );
};

export default AppLayout;
