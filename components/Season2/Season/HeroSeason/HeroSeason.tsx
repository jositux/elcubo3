import React, { useState } from 'react';
import HeaderSeason from 'components/Season2/Season/HeaderSeason/HeaderSeason';
import styles from './season2.heroSeason.module.scss';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import SeasonTeaserModal from 'components/Season2/Shared/Modal/SeasonTeaserModal';
import AuthService from 'services/Auth';

const HeroSeason = ({ onGuest }) => {

  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = AuthService.isLoggedIn();

  return (
    <section id="hero-section" className={styles.Hero}>
      <HeaderSeason />

      <img className={styles.CharactersImg} src="/images/season2/personajes.png" />

      <footer className={styles.HeroFooter}>
        <ul>
          <li>
            <img className={styles.ButtonArrow} src="/images/season2/arrow-here.svg" />
            {isLoggedIn ?
              <ButtonBig url="/el-cubo/temporada-2/selector" text="Iniciar experiencia" />
              :
              <ButtonBig
                type="button"
                onClick={onGuest} text="Iniciar experiencia" />
            }
          </li>
          <li>
            <SeasonTeaserModal />
          </li>
        </ul>
      </footer>


    </section>
  );
};

export default HeroSeason;
