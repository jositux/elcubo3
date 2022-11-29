import React from "react";
import Dashboard from 'components/Season2/Dashboard/Dashboard';
import styles from './season3.dashboardModal.module.scss';

const DashboardModal = ({ showModal, onCloseDashboard }) => {

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseDashboard;
      }
    }
    window.onclick = function (e) {
      if (e.target.id === 'container') {
        onCloseDashboard;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <div id="container" className={`${styles.containerCover} ${showModal ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.child}>
          <p className={styles.t_close} onClick={onCloseDashboard}>
          </p>
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;