
import styles from './season3.ripple.module.scss';

function Ripple({ }) {

  return (
    <div className={styles.Ripple}>
      <span className={styles.coverRipple}>
        <span className={`${styles.ripple} ${styles.yellow}`}></span>
        <span className={`${styles.ripple} ${styles.yellow}`}></span>
        <span className={`${styles.ripple} ${styles.yellow}`}></span>
      </span>
    </div>
  );
}

export default Ripple;


