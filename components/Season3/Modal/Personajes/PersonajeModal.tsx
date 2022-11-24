import React from "react";
import styles from './season3.personajesModal.module.scss';

const PersonajesModal = ({ showModal, onCloseDashboard }) => {

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseDashboard
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseDashboard
      }
    });

  });

  return (
    <div id="container" className={`${styles.containerCover} ${showModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={onCloseDashboard}>
          Volver
          </p>

          imagenes
          <img className={styles.imgCover} src="/images/season3/steals/0-dashboard.jpg" />
        </div>
      </div>
    </div>
  );
};

export default PersonajesModal;