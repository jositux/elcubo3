import React from 'react';
import styles from './season3.userLogin.module.scss';
import Links from '../../../../constants/Links';
import { useSelector } from 'react-redux';

const UserLogin = () => {

  const { user } = useSelector(state => state);

  return (
    <div className={styles.LoginRegister}>
      {user
        ?
        <>
          Hola,<a href={Links.profile} > {user ? user.full_name.split(' ')[0] : null}</a> | <a href={Links.logout}>Salir</a>
        </>
        : <div className={styles.menuContainer}>
          <a className={styles.LoginRegister} href={Links.register_base}>
            Ingreso
          </a>
          <div className={styles.separadorLoginRegister}></div>
          <a className={styles.LoginRegister} href={Links.register_base}>
            Registro
          </a>
        </div>
      }
    </div>
  );
};

export default UserLogin;