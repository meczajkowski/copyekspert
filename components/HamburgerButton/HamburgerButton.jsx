import styles from './HamburgerButton.module.css';

export default function HamburgerButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${
        props.isOpen ? `${styles.open}` : 'md:hidden'
      }`}
    >
      <div className={styles.line}></div>
    </button>
  );
}
