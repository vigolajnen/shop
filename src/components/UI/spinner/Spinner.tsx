import styles from './styles.module.css';

export default function Spinner() {
  return (
    <div className={styles.dotSpinner}>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
    </div>
  );
}
