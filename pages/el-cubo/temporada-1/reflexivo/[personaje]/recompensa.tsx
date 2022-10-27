import React, { useState, useEffect } from 'react';
import AppLayout from 'layouts/AppLayout';
import Head from 'next/head';
import { RewardReflexiveStyles } from 'styles/rewardReflexive.style';
import { NavRewardStyles } from 'styles/navReward.style';
import BackToCharacters from 'components/Labyrinth/BackToCharacters';
import fetcher from 'libs/fetcher';
import UserService from 'services/User';
import AuthService from 'services/Auth';
import Characters from 'constants/Characters';
import { season1_id } from 'constants/Season';
import { useRouter } from 'next/router';

const ReflexiveReward = ({ character }) => {
  const isLoggedIn = AuthService.isLoggedIn();
  const [rewards, setRewards] = useState(null);
  const { query, isReady } = useRouter();

  const getUserRewards = async () => {
    try {
      const { data } = await UserService.getMe();
      const readNodesString = data.elcubo_reflexivo;
      const readNodesJSON = JSON.parse(readNodesString);
      const nodes = await Promise.all(
        readNodesJSON[character].viewedNodes.map((node) => fetcher(`/api/v1/elcubo/season/${season1_id}/reflexive/${node}`)),
      );
      const userRewards = nodes
        .filter((node) => Array.isArray(node))
        .map((reward) => reward[0].field_ec_reward_text);
      setRewards(userRewards);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isLoggedIn && isReady) {
      getUserRewards();
    }
  }, [isReady]);

  return (
    <AppLayout onlyContent>
      <Head>
        <title>Reflexivo - El Cubo</title>
      </Head>
      <RewardReflexiveStyles />
      <NavRewardStyles />
      <BackToCharacters text={'Volver a elegir personajes'} />
      <img src="/images/recompensa/bg.jpg" className="bg-recompensa" />
      <div className="app-elcubo recompensa">
        <div>
          <h1 className="title-recompensa">¡Lo Lograste!</h1>
          <p className="desc-recompensa">
            Como premio, te obsequiamos este informe personalizado.
            <br /> ¿Te suena?
          </p>
          <div className="p-informe">
            {rewards
              ? rewards.map((reward, index) => <p key={`reward_${index}`}>{reward}</p>)
              : null}

            {!rewards ?
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img className="reward-loading" style={{}} src="/images/recompensa/cube-loading.gif" />
              </div>
              :
              null
            }
          </div>
          <div className="cover-link">
            <a href={`/el-cubo/temporada-1/personajes`} className="button-cyan">
              <img src="/images/recompensa/icon-arrow-back-blue.svg" />
              <span>Volver a iniciar la experiencia</span>
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: Characters.map((personaje) => ({ params: { personaje } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: {
      character: context.params.personaje,
    }
  };
};

export default ReflexiveReward;
