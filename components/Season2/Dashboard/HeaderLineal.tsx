import React from 'react';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import styles from './season2.headerLineal.module.scss';


const HeaderLineal = () => {
  return (
    <div className={styles.HeaderLinear}>
      <section>
        <div>

          <p>Interactúa y sé parte de la narrativa. Involúcrate en la trama y deduce el 100% de la historia.</p>

          <ButtonBig url="/el-cubo/temporada-2" text="Probar modo interactivo" />
        </div>
      </section>
    </div >
  );
};

export default HeaderLineal;
