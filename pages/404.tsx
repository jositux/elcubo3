import React from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import { Error404Styles } from 'styles/404.style';
import { NavRewardStyles } from 'styles/navReward.style';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Links from 'constants/Links';

const Error404Page = () => {

  return (
    <AppLayout onlyContent>
      <Head>
        <title>El Cubo</title>
      </Head>
      <Error404Styles />
      <NavRewardStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />
      <img src="/images/recompensa/bg.jpg" className="bg-error" />
      <div className="app-elcubo error error-404">
        <div>
          <h1 className="number-error">404</h1>
          <h1 className="title-error">¡página no encontrada!</h1>
          <p className="desc-error"> No hay problema, intenta retomar la experiencia haciendo clic en el siguiente enlace:
            </p>
          <div className="cover-link">
            <a href={Links.characters} className="button-cyan toggle">
              <span>Volver a la experiencia</span>
              <img src="/images/icon-arrow-init.svg" />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Error404Page;
