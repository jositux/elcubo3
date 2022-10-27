import React from 'react';

const CharacterOnboarding = ({ character, hasReward, bgImage }) => {
  const nextPageLink = `/el-cubo/temporada-1/reflexivo/${character}`;
  const rewardLink = `/el-cubo/temporada-1/reflexivo/${character}/recompensa`;

  return (
    <div
      className="app-elcubo onboard"
      style={{ backgroundImage: `url("${bgImage}")`, backgroundSize: 'cover' }}
    >
      <div className="hero hero-onboarding onboarding-reflexive">
        <div className="copy-cover">
          <div className="copy">
            {hasReward ? (
              <div className="winner">
                <p className="p-winner">
                  <span className="copy-phrase">Ya lograste la recompensa asociada a este personaje.</span>
                </p>
                <div className="col-2">
                  <div className="col-left">
                    <div className="cover-link">
                      <a className="button-login cyan-dark button-quit" href={rewardLink}>
                        Ver recompensa
                      </a>
                    </div>
                  </div>
                  <div className="col-right">
                    <div className="cover-link">
                      <a href={nextPageLink} className="button-cyan">
                        <span>Continuar</span>
                        <img src="/images/icon-arrow-init.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) :
              <div>
                <p>
                  <span className="copy-phrase">¿Cuánto Poder tiene para ti la verdad?</span>
                  <br /> Navega este personaje y contesta las preguntas para recibir tu concepto
                </p>
                <div className="cover-link">
                  <a href={nextPageLink} className="button-cyan">
                    <span>Continuar</span>
                    <img src="/images/icon-arrow-init.svg" />
                  </a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterOnboarding;
