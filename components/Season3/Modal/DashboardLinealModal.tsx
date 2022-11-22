import React from "react";
import DashboardLineal from 'components/Season3/Dashboard/DashboardLineal';
import styles from './season3.dashboardLinealModal.module.scss';

const DashboardLinealModal = ({ showModal, onCloseDashboard }) => {

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
          </p>
          <DashboardLineal />
        </div>
      </div>
    </div>
  );
};

export default DashboardLinealModal;