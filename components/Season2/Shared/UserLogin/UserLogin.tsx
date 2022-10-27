import React from 'react';
import styles from './season2.userLogin.module.scss';
import Links from '../../../../constants/Links';
import { useSelector } from 'react-redux';

const UserLogin = () => {

  const { user } = useSelector(state => state);

  return (
    <p className={styles.Login}>
      {user ?
        <>
          Hola,<a href={Links.profile} > {user ? user.full_name.split(' ')[0] : null}</a> | <a href={Links.logoutTemp2}>Salir</a>
        </>
        :
        <a className={styles.Login} href={Links.registerTemp2}>
          Ingresar
        </a>
      }
    </p>
  );
};

export default UserLogin;