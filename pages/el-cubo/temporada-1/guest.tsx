import React from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import { NoLoginStyles } from 'styles/noLogin.style';
import { NavRewardStyles } from 'styles/navReward.style';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import Links from 'constants/Links';

const ReflexiveReward = ({ character }) => {

  return (
    <AppLayout onlyContent>
      <Head>
        <title>El Cubo</title>
      </Head>
      <NoLoginStyles />
      <NavRewardStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />
      <img src="/images/recompensa/bg.jpg" className="bg-recompensa" />
      <div className="app-elcubo recompensa">
        <div>
          <h1 className="title-recompensa">¡Has llegado al final
            <br />de la experiencia!</h1>
          <p className="desc-recompensa">Solo los usuarios registrados pueden acceder a las recompensas.
            <a href={Links.registerCharacters}> Regístrate ya</a> y no te pierdas lo que hemos diseñado especialmente para ti.
          </p>
          <div className="cover-link">
            <a href={Links.registerCharacters} className="button-cyan toggle">
              <span>Registrarme</span>
              <img src="/images/icon-arrow-init.svg" />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ReflexiveReward;
