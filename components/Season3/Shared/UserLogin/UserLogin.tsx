import React from 'react';
import styles from './season3.userLogin.module.scss';
import Links from '../../../../constants/Links';
import { useSelector } from 'react-redux';

const UserLogin = () => {

  const { user } = useSelector(state => state);

  return (
    <p className={styles.LoginRegister}>
      {user 
        ?
          <>
            Hola,<a href={Links.profile} > {user ? user.full_name.split(' ')[0] : null}</a> | <a href={Links.logoutTemp2}>Salir</a>
          </>
        : <div className={styles.menuContainer}>
            <a className={styles.LoginRegister} href={Links.registerCharacters}>
              Ingreso
            </a>
            <div className={styles.separadorLoginRegister}></div>
            <a className={styles.LoginRegister} href={Links.registerCharacters}>
              Registro
            </a>
          </div>
      }
    </p>
  );
};

export default UserLogin;