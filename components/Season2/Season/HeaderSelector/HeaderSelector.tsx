import React from 'react';
import UserLogin from 'components/Season2/Shared/UserLogin/UserLogin';
import styles from './season2.headerSelector.module.scss';

const HeaderSelector = () => {
  return (
    <header className={styles.homePageHeader}>
      <div>
        <a href="/el-cubo/temporada-2" className={styles.backToSeason}>
          <img src="/images/icon-arrow-back.svg" />
          <span>Volver</span>
        </a>
      </div>
      <div>
        <UserLogin />
      </div>
    </header>
  );
};

export default HeaderSelector;
