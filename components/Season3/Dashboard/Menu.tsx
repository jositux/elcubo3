import React, { useState, useEffect } from 'react'
import styles from './season2.menu.module.scss';


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <img className={styles.LogoSeason2} src="/images/season2/logo-season2.png" />

      {(toggleMenu || screenWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}>Logros</li>
          <li className={styles.items}>Confesionarios</li>
          <li className={styles.items}>Dossier de Personajes</li>
          <li className={styles.items}>Detrás de cámaras</li>
        </ul>
      )}

      <button onClick={toggleNav} className={styles.btn}>BTN</button>
    </nav>
  )
}
