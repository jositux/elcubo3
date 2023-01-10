import React from "react";
import Dashboard from 'components/Season3/Dashboard/Dashboard';
import styles from './season3.dashboardSlideModal.module.scss';

const DashboardSlideModal = ({ char, percentParam, showModal, onCloseDashboard }) => {

  React.useEffect(() => {

    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseDashboard();
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseDashboard();
      }
    });

  });

  return (

    <div id="container" className={`${styles.containerCover} ${showModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={onCloseDashboard}>
          </p>
          <p className={styles.barClose} onClick={onCloseDashboard}>
          </p>
          {showModal &&
            <Dashboard char={char} percentParam={percentParam} />
          }
        </div>
      </div>
    </div>
  );
};

export default DashboardSlideModal;