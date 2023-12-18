import styles from './styles.module.css';

export default function SpinnerBigSun() {
  return (
    <div className="w-full min-h-screen bg-primary flex flex-coll justify-center items-center">
      <div className={styles.container}>
        <div className={`${styles.cloud} ${styles.front}`}>
          <span className={styles.leftFront}></span>
          <span className={styles.rightFront}></span>
        </div>
        <span className={`${styles.sun} ${styles.sunshine}`}></span>
        <span className={styles.sun}></span>
        <div className={`${styles.cloud} ${styles.back}`}>
          <span className={styles.leftBack}></span>
          <span className={styles.rightBack}></span>
        </div>
      </div>
    </div>
  );
}
