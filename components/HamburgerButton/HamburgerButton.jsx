import styles from './HamburgerButton.module.css';

export default function HamburgerButton() {
  return (
    // <div className={`${styles.button} ${styles.open}`}>
    <button className={styles.button}>
      <div className={styles.line}></div>
    </button>
  );
}
